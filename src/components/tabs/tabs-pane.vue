<template>
  <div class="wlin-tabs-pane" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "wlinTabsPane",
  // 依赖注入tab注册的事件中心eventBus
  inject: ["eventBus"],
  props: {
    // 接收一个name参数用于改变当前tab
    name: {
      type: [Number, String],
      required: true
    }
  },
  data() {
    return {
      // 记录当前tab是否选中
      active: false
    };
  },
  methods: {},
  created() {
    this.eventBus.$on("input", value => {
      this.active = value === this.name;
    });
    // console.log(this.eventBus)
  }
};
</script>

<style lang="scss" scoped>
.wlin-tabs-pane {
}
</style>
