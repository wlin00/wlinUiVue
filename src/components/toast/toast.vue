<template>
  <!-- 外层控制x轴方向，内层添加动画 -->
  <div class="wlin-wrap" :class="computePosition">
    <div class="wlin-toast" ref="parent">
      <!-- 若支持文本传入html， 需开启enableHtml，结合v-html实现 -->
      <div class="wlin-toast__msgbox">
        <slot v-if="!enableHtml"></slot>
        <div class="test" v-else v-html="$slots.default[0]"></div>
      </div>
      <!-- toast关闭按钮, 点击后销毁组件，并触发用户回调（如果有的话) -->
      <span
        class="wlin-toast__close"
        ref="child"
        v-if="showCloseBtn"
        @click="handleClickClose"
        >{{ closeBtnOptions.text }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "wlinToast",
  props: {
    // toast是否自动关闭， 默认3秒自动关闭
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 3000
    },

    // 是否展示关闭按钮
    showCloseBtn: {
      type: Boolean,
      default: true
    },

    // 是否支持html形式的文本
    enableHtml: {
      type: Boolean,
      default: false
    },

    // 决定toast出现位置的属性，可接受left、right、top、bottom、center五个位置
    position: {
      type: String,
      default: "middle",
      validator(value) {
        return ["top", "bottom", "middle"].indexOf(value) >= 0;
      }
    },

    // 关闭按钮相关属性：接收一个对象， 里面包含关闭按钮的文字内容、 关闭后的回调
    closeBtnOptions: {
      type: Object,
      // 接收对象时， defalut写成函数来返回一个对象， 避免同一片内存的对象互相修改（避免浅拷贝问题）
      default() {
        return {
          text: "关闭", // 关闭按钮文字
          handleClose: undefined // 关闭按钮的回调函数
        };
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    // 组件销毁函数
    close() {
      this.$el.remove(); // 将组件从dom中移除
      this.$emit("close"); // 通知插件，toast已经关闭，可将插件中toast标志符置为null
      this.$destroy(); // 取消组件相关事件绑定
    },

    // 点击关闭按钮
    handleClickClose() {
      // 销毁组件
      this.close();

      // 执行可能的回调
      this.closeBtnOptions.handleClose &&
        typeof this.closeBtnOptions.handleClose === "function" &&
        this.closeBtnOptions.handleClose();
    },

    // 调整开启min-height、flex的父盒子内部子盒子的高（子盒子height:100%失效)
    adjustHeight() {
      // 等待dom的挂载完成
      if (!this.showCloseBtn) return;
      this.$nextTick(() => {
        this.$refs.child.style.height = `${
          this.$refs.parent.getBoundingClientRect().height
        }px`;
      });
    },

    // 当autoClose存在时，定时器到点关闭toast实例
    execAutoClose() {
      let { autoClose, autoCloseDelay } = this;
      if (autoClose) {
        setTimeout(() => {
          this.close();
        }, autoCloseDelay);
      }
    }
  },
  mounted() {
    this.adjustHeight();
    this.execAutoClose();
  },
  computed: {
    computePosition() {
      // 根据接收或默认的position属性决定toast出现的位置
      return { [`wlin-toast--${this.position}`]: true };
    }
  }
};
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 48px;
$toast-line-height: 1.8;
$toast-bg: rgba(0, 0, 0, 0.75);

// 中间的toast淡出
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100%;
  }
}

// 下方的toast向上淡出
@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 100%;
    transform: translateY(0);
  }
}

// 上方的toast向下淡出
@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 100%;
    transform: translateY(0%);
  }
}

.wlin-wrap {
  // 外层wrap控制位置（水平居中，竖直方向则有三种情况)
  // 内层div控制动画，由外层wrap条件找到内层div， 给内层toast加上对应动画

  position: fixed;
  left: 50%;
  transform: translateX(-50%);

  // toast位置在上方的情况
  &.wlin-toast--top {
    top: 60px;
    .wlin-toast {
      animation: slide-down 0.3s linear;
    }
  }
  // toast位置在下方的情况
  &.wlin-toast--bottom {
    bottom: 0;
    .wlin-toast {
      animation: slide-up 0.3s linear;
    }
  }
  // toast位置在中间的情况
  &.wlin-toast--middle {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .wlin-toast {
      animation: fade-in 0.3s linear;
    }
  }
}

.wlin-toast {
  border: none;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  line-height: $toast-line-height;
  min-height: $toast-min-height;
  font-size: $font-size;
  background: $toast-bg;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  color: white;
  padding: 0 15px;
  transition: all 0.5s linear;
  max-width: 800px;

  &__close {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding-left: 15px;
    margin-left: 15px;
    border-left: 1px solid aliceblue;
    // flex盒子的子盒子， 不受父盒子的挤压影响
    flex-shrink: 0;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }

  &__msgbox {
    width: 100%;
    padding: 7px 0;
  }
}

.wlin-fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s linear;
}

.wlin-fade-enter,
.fade-leaver-to {
  opacity: 0;
}
</style>
