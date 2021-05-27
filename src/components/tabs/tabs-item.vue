<template>
  <div
    class="wlin-tabs-item"
    @click="switchTab"
    :class="{ 'wlin-tabs-item__active': active }"
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
      this.eventBus.$emit("input", this.name);
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

<style lang="scss" scoped>
.wlin-tabs-item {
  position: relative;
  // 自动延伸，但是选项少不会影响其他的tab
  // flex: 1 1 0;
  // flex-grow: 1;
  // flex-shrink: 0;
  padding: 0 1em;
  cursor: pointer;
  margin-right: 8px;
  border: 1px solid #333;
  min-width: 80px;
  text-align: center;
  border-radius: 4px;

  @media screen and (max-width: 500px) {
    min-width: 30px;
  }

  &__active {
    background: lightskyblue;
  }
}
</style>
