<template>
  <transition name="hide">
    <div class="sider" v-if="visibal">
      <slot></slot>
      <button @click="hide">关闭</button>
    </div>
  </transition>
</template>

<script>
export default {
  name: "WlinSider",
  methods: {
    hide() {
      this.visibal = !this.visibal;
    }
  },
  data() {
    return {
      visibal: true
    };
  }
};
</script>

<style lang="scss" scoped>
.sider {
  position: relative;
  > button {
    position: absolute;
    top: 0;
    right: 0;
  }
}

//vue动画 - 左滑动关闭

.hide-enter-active,
.hide-leave-active {
  transition: all 0.8s linear;
}
.hide-enter,
.hide-leave-to {
  margin-left: -200px;
}
</style>
