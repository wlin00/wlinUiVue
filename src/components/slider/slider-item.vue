<template>
  <transition name="slider">
    <div class="slider-item" v-if="visible" :class="{reverse}">
        <slot></slot>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "wlinSliderItem",
    props: {
      name: {
        type: String,
        default: ''
      },
    },
    data() {
      return {
        selected: undefined,
        reverse: false, // 轮播图是否逆序播放
      }
    },
    computed: {
      visible() {
        return this.selected === this.name
      }
    },
    
  }
</script>

<style lang="scss" scoped>
  .slider-item {
    border-radius: 5px;
    display: inline-flex;
    width: 100%;
    height: 100%;
    // border: 1px solid red;
    box-sizing: border-box;
    // position: absolute;
  }

  // 只当图片在离开时设置绝对定位， 为保证容器高度不塌陷
  .slider-leave-active {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .slider-enter-active, .slider-leave-active {
    transition: all .5s
  }

  .slider-enter {
    // opacity: 0;
    &:not(.reverse) {
      transform: translateX(100%);
    }
    &.reverse {
      transform: translateX(-100%);
    }
  }
  .slider-leave-to {
    opacity: 0;
    &:not(.reverse) {
      transform: translateX(-100%) scale(0.9);
      border-radius: 10px;
    }
    &.reverse {
      transform: translateX(100%) scale(0.9);
      border-radius: 10px;
    }
  }
</style>