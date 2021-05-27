// toast 插件，向外暴露一个install， 提供给使用者。使用者通过vue.use来安装插件
import Toast from "./toast";
let currentToast;
export default {
  install(Vue, options) {
    // message参数可以拿到用户创建toast实例时的传参
    Vue.prototype.$toast = function(message, toastOptions = {}) {
      // 执行toast的构造函数， 创建一个toast实例（单例模式），并判断若之前存在toast实例则销毁之前的。
      if (currentToast) currentToast.close();
      currentToast = createToast({
        Vue,
        message,
        callback: () => {
          // toast关闭的回调，置标志符为null
          currentToast = null;
        }
      });

      // 工具函数，用于新建一个toast实例,params:1-Vue实例；2-toast消息文本；3-toast相关options）
      function createToast({ Vue, message, callback }) {
        // 获取Toast组件的一个构造器
        let toastConstructor = Vue.extend(Toast);
        // 获取一个toast实例
        let toast = new toastConstructor({
          propsData: {
            closeBtnOptions: toastOptions.closeBtnOptions,
            showCloseBtn: toastOptions.showCloseBtn,
            enableHtml: toastOptions.enableHtml,
            position: toastOptions.position
          }
        });
        // 给实例的：未包含在具名插槽中的节点属性赋值（文本赋值）
        toast.$slots.default = [message];
        // 手动挂载一个未挂载的实例
        toast.$mount();
        // 监听toast关闭的回调
        toast.$on("close", callback);
        // toast 实例的根dom元素插入body
        document.body.appendChild(toast.$el);
        return toast;
      }
    };
  }
};
