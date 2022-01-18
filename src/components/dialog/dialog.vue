
<template>
<!-- 避免css层级上下文影响，导致dialog所处环境层级较低， 所以使用Teleport组件 将dialog插入至body -->
  <div v-if="value">
      <div class="wlin-dialog-overlay" @click="handleCloseInNeed"></div>
      <div class="wlin-dialog-wrapper">
        <div class="wlin-dialog">
          <header>
            <slot name="title"/>
            <span class="wlin-dialog-close" @click="handleClose"></span>
          </header>
          <main>
            <slot name="content"/>
          </main>
          <footer>
            <wlin-button @click="handleConfirm" level="main">OK</wlin-button>
            <wlin-button @click="handleCancel">Cancel</wlin-button>
          </footer>
        </div>
      </div>
  </div>
</template>
<script>
  import Button from "../button/button";
  export default {
    components: {
      'wlin-button': Button,
    },
    props: {
      value: {
        type: Boolean,
        default: false
      },
      closeOnClickOverlay: { // 是否需要点击遮罩层关闭
        type: Boolean,
        default: true
      },
      onConfirm: {
        type: Function
      },
      onCancel: {
        type: Function
      }
    },
    methods: {
      async handleConfirm() {
        const result = this.onConfirm && this.onConfirm()
        if (result !== false) { // 若外部回调返回false，则终止关闭
          this.handleClose()
        }
      },

      async handleCancel() {
        const result = this.onCancel && this.onCancel()
        if (result !== false) {
          this.handleClose()
        }
      },

      handleClose() {
        this.$emit('input', false)
      },

      handleCloseInNeed() {
        if (this.closeOnClickOverlay) {
          this.handleClose()
        }
      }

    },
  }
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.wlin-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }
  >header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }
  >main {
    padding: 12px 16px;
  }
  >footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>