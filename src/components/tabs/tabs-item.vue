<template>
  <div
    class="wlin-tabs-item"
    @click="switchTab"
    :class="{ 'active': active }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "wlinTabsItem",
  // 依赖注入tab注册的事件中心eventBus
  inject: ["eventBus"],
  props: {
    // 接收一个name参数用于改变当前tab
    name: {
      type: [Number, String],
      required: true
    },
    // 用于禁用当前导航栏
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // 记录当前tab是否选中
      active: false
    };
  },
  methods: {
    switchTab() {
      // 点击后，通知中心改变当前选中的tab名
      this.eventBus.$emit("input", this.name, this);
      this.eventBus.$emit("change", this.name);
    }
  },
  created() {
    this.eventBus.$on("input", value => {
      this.active = value === this.name;
    });
  }
};
</script>

<style scoped lang="scss">
.wlin-tabs-item {
  flex-shrink: 0;
  padding: 0 1em;
  display: inline-flex;
  justify-content: center;
  box-sizing: border-box;
  min-width: 50px;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  &.active {
    color: #39f;
    font-weight: bold;
  }
  &.disabled {
    color: grey;
    cursor: not-allowed;
  }
}
</style>