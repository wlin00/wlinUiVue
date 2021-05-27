<template>
  <div class="wlin-button-group"><slot /></div>
</template>

<script>
export default {
  name: "wlinButtonGroup",
  mounted() {
    for (let item of this.$el.children) {
      // if()
      if (item.nodeName.toLowerCase() !== "button") {
        console.warn(
          `buttonGroup组件内部需全部是button标签构成，当前您使用了错误的${item.nodeName.toLowerCase()}标签，请修改！`
        );
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.wlin-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .wlin-button {
    border-radius: 0;
    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    &:not(:first-child) {
      //选择所有非第一个孩子的节点，进行左移动1px
      margin-left: -2px;
    }
    &:hover {
      //hover某一个buttonGroup内部的button时，增加其显示层级、border颜色调整。
      z-index: 1;
      border-color: #666;
      position: relative;
    }
  }
}
</style>
