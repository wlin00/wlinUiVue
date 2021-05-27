<template>
  <div class="wlin-tabs-head">
    <slot></slot>

    <!-- 插槽：名为action的插槽用于接收tab顶部相关操作按钮 -->
    <div class="wlin-tabs-head__wrapper">
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
  mounted() {}
};
</script>

<style lang="scss" scoped>
.wlin-tabs-head {
  display: flex;
  height: 40px;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid gray;
  box-sizing: border-box;
  padding: 0 15px;
  &__wrapper {
    // flex 布局的父盒子中， 如果一个子元素开启margin-left:auto，则会靠在布局最右侧
    margin-left: auto;
  }
}
</style>
