<template>
  <button
    class="wlin-button"
    :class="{ [`icon-${iconPosition}`]: true }"
    @click="$emit('click')"
  >
    <!-- button 点击后，注册一个click事件，被父级订阅 -->
    <!-- <wlin-icon v-if='loading'  class="icon spinner" name='spinner'></wlin-icon>   -->
    <!-- <wlin-icon v-if="icon && !loading " :name='icon'></wlin-icon> -->
    <div class="content"><slot /></div>
  </button>
</template>

<script>
// import Icon from '../icon/icon'
export default {
  name: "wlinButton",
  components: {
    // 'wlin-icon':Icon,
  },
  props: {
    icon: {
      type: String,
      default: ""
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        // 进行接受父组件传来的iconPosition值，并进行校验其合法性
        return value === "left" || value === "right"; //只可传入这两个字符串作参数
      }
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
//声明按钮加载时的loading旋转动画
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
