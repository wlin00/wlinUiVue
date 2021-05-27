<template>
  <div class="wlin-tabs-body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "wlinTabs",
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
.wlin-tabs-body {
}
</style>
