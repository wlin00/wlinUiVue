<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "WlinLayout",
  data() {
    return {
      layoutClass: {
        hasSider: false
      }
      //vue的class绑定语法，若：class绑定了一个对象，
      //对象内部key-value形如class1:true,则：class绑定一个class1样式
    };
  },
  mounted() {
    console.log(this.$children);
    this.$children.forEach(e => {
      console.log(e.$options.name);
      if (e.$options.name === "WlinSider") {
        this.layoutClass.hasSider = true;
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  border: 1px solid #ddd;
  flex-direction: column;
  flex-grow: 1;
}
.hasSider {
  flex-direction: row;
}
</style>
