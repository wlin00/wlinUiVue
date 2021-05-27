<template>
  <div class="wlin-popover" ref="popover">
    <div
      class="wlin-popover__content"
      :class="{ [`wlin-popover__content--${position}`]: true }"
      ref="contentWrapper"
      v-if="visible"
    >
      <slot></slot>
    </div>
    <span ref="triggerWrapper" style="display:inline-block;">
      <slot name="reference"></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "wlinPopover",
  components: {},
  mounted() {
    if (this.trigger === "click") {
      // 判断当前触发事件， 并给popover增加相应的事件监听
      this.$refs.popover.addEventListener("click", this.handleClick);
    } else if (this.trigger === "hover") {
      this.$refs.popover.addEventListener("mouseover", this.open);
      this.$refs.popover.addEventListener("mouseleave", this.delayClose); // 移出时，添加定时器：200ms后再进行popover的关闭，若检测到鼠标进入popover弹框，则消除定时器
    }
  },
  props: {
    trigger: {
      type: String,
      default: "click",
      validator(value) {
        return ["click", "hover"].indexOf(value) >= 0;
      }
    },
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "left", "right"].indexOf(value) >= 0;
      }
    }
  },
  data() {
    return {
      visible: false,
      timers: null
    };
  },
  methods: {
    handleClick(e) {
      // 若当前点击是在trigger-dom内
      if (this.$refs.triggerWrapper.contains(e.target)) {
        console.log("click");
        if (this.visible) {
          this.close();
        } else {
          this.open();
        }
      }
    },
    open() {
      // 打开popover - 之后改变组件dom位置于document后，开启Dom内对于二次触发关闭的监听
      this.visible = true;
      this.$nextTick(() => {
        this.locatePop();
        document.addEventListener("click", this.eventHandler);
      });
    },
    close() {
      // 关闭popover
      this.visible = false;
      document.removeEventListener("click", this.eventHandler);
    },
    locatePop() {
      const { triggerWrapper, contentWrapper } = this.$refs;
      // 将popover弹窗部位放置于document.body后面， 防止组件外层Dom加上overFlow:hidden后导致的样式遮盖
      document.body.appendChild(contentWrapper);
      // 获取当前的trigger-dom的位置
      const {
        width,
        height,
        top,
        left
      } = triggerWrapper.getBoundingClientRect();
      const {
        width: widthContent,
        height: heightContent
      } = contentWrapper.getBoundingClientRect();
      const positions = {
        // 表格驱动编程
        top: {
          top: top + window.scrollY,
          left: left + window.scrollX
        },
        bottom: {
          top: top + height + scrollY,
          left: left + scrollX
        },
        left: {
          top: top + scrollY + (height - heightContent) / 2,
          left: left + scrollX
        },
        right: {
          top: top + scrollY + (height - heightContent) / 2,
          left: left + scrollX + width
        }
      };
      contentWrapper.style.top = positions[this.position].top + "px";
      contentWrapper.style.left = positions[this.position].left + "px";
    },
    eventHandler(e) {
      // 事件处理器 - 用于监听页面中其他位置再次触发后的popover关闭
      if (
        this.$refs.popover &&
        (this.$refs.popover.contains(e.target) ||
          this.$refs.popover === e.target)
      ) {
        return;
      }
      if (
        this.$refs.contentWrapper.contains(e.target) ||
        this.$refs.contentWrapper === e.target
      ) {
        // 防止popover-content区域内事件触发造成的取消
        return;
      }
      this.close();
    },
    delayClose(e) {
      let timer;
      this.$refs.contentWrapper.addEventListener("mouseover", () => {
        clearTimeout(timer);
        timer = null;
        this.$refs.contentWrapper.addEventListener("mouseleave", () => {
          this.close();
        });
      });
      timer = setTimeout(() => {
        this.close();
      }, 200);
    }
  }
};
</script>

<style lang="scss" scoped>
.wlin-popover {
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  &__content {
    position: absolute;
    box-sizing: border-box;
    padding: 0.5em 1em;
    max-width: 20em;
    word-break: break-all;
    border: 1px solid #000;
    border-radius: 3px;
    z-index: 10;
    // box-shadow: 0 0 2px black;

    filter: drop-shadow(0 0 2px #000);
    background: #fff;
    &::before,
    &::after {
      // 三角形统一样式
      content: "";
      display: block;
      position: absolute;
      border: 10px solid transparent; // 四个角统一先透明
      width: 0;
      height: 0;
    }
    &--top {
      margin-top: -11px;
      transform: translateY(-100%); // 将popover弹层放置在trigger触发器上方
      &::before,
      &::after {
        left: 10px; // 三角形统一偏移量
      }
      &::before {
        // 构建遮盖小三角形， 和底色一致，用于抬高1px遮盖
        border-top-color: #000;
        border-bottom: none;
        top: 100%;
        border-radius: 5px;
      }
      &::after {
        // 构建着色小三角形
        border-top-color: white;
        border-bottom: none;
        top: calc(100% - 1px);
        border-radius: 5px;
      }
    }
    &--bottom {
      margin-top: 11px;
      // transform: translateY(100%); // 将popover弹层放置在trigger触发器上方
      &::before,
      &::after {
        left: 10px; // 三角形统一偏移量
      }
      &::before {
        // 构建着色小三角形
        border-bottom-color: #000;
        border-top: none;
        bottom: 100%;
      }
      &::after {
        // 构建遮盖小三角形， 和底色一致，用于抬高1px遮盖
        border-bottom-color: white;
        border-top: none;
        bottom: calc(100% - 1px);
      }
    }
    &--left {
      transform: translateX(-100%); // 将popover弹层放置在trigger触发器上方
      margin-left: -9px;
      &::before,
      &::after {
        // 三角形统一偏移量
        top: 50%;
        transform: translateY(-50%);
      }
      &::before {
        // 构建着色小三角形
        border-left-color: #000;
        border-right: none;
        left: 100%;
      }
      &::after {
        // 构建遮盖小三角形， 和底色一致，用于左移1px遮盖
        border-left-color: white;
        border-right: none;
        left: calc(100% - 1px);
      }
    }
    &--right {
      margin-left: 10px;
      &::before,
      &::after {
        // 三角形统一偏移量
        top: 50%;
        transform: translateY(-50%);
      }
      &::before {
        // 构建着色小三角形
        border-right-color: #000;
        border-left: none;
        right: 100%;
      }
      &::after {
        // 构建遮盖小三角形， 和底色一致，用于左移1px遮盖
        border-right-color: white;
        border-left: none;
        right: calc(100% - 1px);
      }
    }
  }
}
</style>
