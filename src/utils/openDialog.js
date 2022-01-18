import Dialog from '../components/dialog/dialog'
import { createApp, h } from '@vue/composition-api'
export const openDialog = (options) => {
  const { title, content, onConfirm, onCancel } = options
  // 构造一个div标签插入body用于承载dialog
  const div = document.createElement('div')
  document.body.appendChild(div)

  const app = createApp({
    // render返回h函数来构造dialog组件，参数一、二、三分别是：1)渲染的组件，2）传入的参数，3）插槽
    render() {
      return h(Dialog, 
      // 参数二可传入绑定值参数visible ， 以及对绑定值变化的监听onUpdate：visible方法
      { 
        visible: true,
        'onUpdate:visible': (newVal) => {
          if (newVal === false) {
            //@ts-ignore
            app.unmount(div)
          }
        },
        onConfirm,
        onCancel,
      }, 
      { 
        title, 
        content
      })
    }
  })
  app.mount(div)

}