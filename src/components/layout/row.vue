<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "wlinRow",
  props: {
    gutter: {
      type: [Number, String]
    },
    align: {
      type: String,
      default: "center",
      validator(value) {
        return ["center", "left", "right"].includes(value);
      }
    }
  },
  mounted(e) {
    console.log(this.$children);
    this.$children.forEach(e => {
      e.gutter = this.gutter;
    });
  },
  computed: {
    rowStyle() {
      let { gutter } = this;
      return {
        marginLeft: gutter ? -gutter / 2 + "px" : 0,
        marginRight: gutter ? -gutter / 2 + "px" : 0
      };
    },
    rowClass() {
      let { align } = this;
      return [align && `align-${align}`];
    }
  }
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  &.align-left {
    justify-content: flex-start;
  }
  &.align-right {
    justify-content: flex-end;
  }
  &.align-center {
    justify-content: center;
  }
}
</style>
