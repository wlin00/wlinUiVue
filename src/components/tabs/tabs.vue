<template>
  <div class="wlin-tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
// 注册的事件中心
export default {
  name: "wlinTabs",
  props: {
    // v-model 默认接收名为value的props、并监听名为input的方法
    value: {
      type: String | Number,
      required: true
    },
    // selected: {
    //     type: String,
    //     required: true
    // },
    direction: {
      type: String,
      default: "horizontal",
      validator(value) {
        return ["horizontal", "vertical"].indexOf(value) >= 0;
      }
    }
  },
  data() {
    return {
      // 注册一个事件中心， 由provide提供给子代所有组件
      eventBus: new Vue()
    };
  },
  mounted() {
    // 初始状态时， 将默认的tabs选中值发布给消息中心eventBus
    // this.eventBus.$emit('update:selected', this.selected)
    this.eventBus.$on("change", this.handleChange); // 监听tab改变的事件回调
    this.eventBus.$on("input", this.handleValueChange); // v-model：监听tab-value的改变
    this.eventBus.$emit("input", this.value); // 初始状态，将默认的tabs选中值发布给消息中心eventBus
  },
  // 向子代组件提供依赖，tabs根组件注册事件中心
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
  methods: {
    handleChange(val) {
      this.$emit("change", val); // 监听tab事件的改变
    },
    handleValueChange(val) {
      this.$emit("input", val); // v-model 默认接收名为value的props、并监听名为input的方法
    }
  }
};
</script>

<style lang="scss" scoped>
.wlin-tabs {
}
</style>
