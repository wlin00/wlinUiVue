<template>
  <div class="wlin-collapse">
    <slot> </slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "wlinCollapse",
  props: {
    value: {
      type: Array,
      require: true
    },
    accordion: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      eventBus: new Vue()
    };
  },
  methods: {},
  mounted() {
    // 初始状态时， 将默认的选中值给消息中心eventBus -> init
    this.eventBus.$emit("input", this.value);

    // listen to add event
    this.eventBus.$on("add", title => {
      let valueCopy = JSON.parse(JSON.stringify(this.value));
      if (this.accordion) {
        valueCopy = [title]; // case single mode
      } else {
        valueCopy.push(title); // case multiple mode
      }
      this.eventBus.$emit("input", valueCopy); // change visible of child component
      this.$emit("input", valueCopy); // v-model update
      this.$emit("change", valueCopy); // @change update
    });

    // listen to remove event
    this.eventBus.$on("remove", title => {
      let valueCopy = JSON.parse(JSON.stringify(this.value));
      const index = valueCopy.indexOf(title);
      // delete target
      valueCopy.splice(index, 1);
      this.eventBus.$emit("input", valueCopy); // change visible of child component
      this.$emit("input", valueCopy); // v-model update
      this.$emit("change", valueCopy); // @change update
    });
  },
  provide() {
    return {
      eventBus: this.eventBus // 注入eventBus依赖
    };
  }
};
</script>

<style lang="scss" scoped>
.wlin-collapse {
  width: 100%;
  user-select: none;
  border: 1px solid #ddd;
  border-radius: 4px;
  border-bottom: none;
  box-sizing: border-box;
}
</style>
