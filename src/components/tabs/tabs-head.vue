<template>
  <div class="wlin-tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>

    <!-- 插槽：名为action的插槽用于接收tab顶部相关操作按钮 -->
    <div class="actions-wrapper">
      <slot name="action"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "wlinTabsHead",
  // 依赖注入tab注册的事件中心eventBus
  inject: ["eventBus"],
  data() {
    return {};
  },
  methods: {},
  mounted() {
    this.eventBus.$on('input', (item, vm) => {
      const { width, left, top, height } = vm.$el.getBoundingClientRect()
      this.$refs.line.style.width = `${width}px`
      this.$refs.line.style.left = `${vm.$el.offsetLeft}px`
    })
  }
};
</script>

<style lang="scss" scoped>
.wlin-tabs-head {
  display: flex;
  height: 40px;
  justify-content: flex-start;
  position: relative;
  border-bottom: solid 1px #ddd;
  > .line{
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid #39f;
    transition: all 250ms;
  }
  > .actions-wrapper{
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1em;
  }
}
</style>
