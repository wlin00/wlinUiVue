<template>
  <div class="wlin-collapse-item">
    <div class="wlin-collapse-item__title" @click="handleClick">
      {{ title }}
    </div>
    <div style="width:100%;overflow:hidden;">
      <transition name="slide">
        <div class="wlin-collapse-item__content" v-if="visible">
          <slot></slot>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "wlinCollapseItem",
  inject: ["eventBus"],
  props: {
    title: {
      type: String,
      require: true
    }
  },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    handleClick() {
      // collapse-item逻辑：点击时，将当前flag的true/false通知父组件
      if (this.visible) {
        this.eventBus && this.eventBus.$emit("remove", this.title); // close current item
      } else {
        this.eventBus && this.eventBus.$emit("add", this.title); // open current item
      }
    }
  },
  mounted() {
    this.eventBus &&
      this.eventBus.$on("input", titles => {
        this.visible = titles.indexOf(this.title) >= 0; // judge visible of child component
      });
  }
};
</script>

<style lang="scss" scoped>
.wlin-collapse-item {
  width: 100%;
  user-select: none;
  box-sizing: border-box;
  &__title {
    border: 1px solid #ddd;
    background: #fafafa;
    cursor: pointer;
    margin-top: -1px;
    margin-left: -1px;
    margin-right: -1px;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 8px;
    &:first-child {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      margin-top: -2px;
    }
    &:last-child {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
  &__content {
    padding: 8px;
    border: 1px solid #ddd;
    margin-top: -1px;
    margin-left: -1px;
    margin-right: -1px;
    cursor: default;
    &:last-child {
      border-top: none;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }

  .slide-enter-active,
  .slide-leave-active {
    transition: transform 0.3s linear;
  }
  .slide-enter {
    // top: -100%;
    transform: translate3d(0, -100%, 0);
  }
  .slide-leave-to {
    display: none;
  }
}
</style>
