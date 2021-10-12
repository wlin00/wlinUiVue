<template>
  <div class="wlin-sticky" ref="wrapper" :style="{ height: isSticky ? height: undefined }">
    <!-- 当sticky发生时，需要给wrapper手动设置高度 -->
    <div class="wlin-sticky__inner" :style="{ width: isSticky ? width: undefined, left: isSticky ? left: undefined, top: isSticky && distance ? `${distance}px`: 0}" :class="{'wlin-sticky--isSticky':isSticky}">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: "wlinSticky",
  components: {},
  mounted() {
  },
  props: {
    distance: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      isSticky: false,
      timer: null,
      // sticky元素的设置属性
      left: undefined,
      height: undefined,
      width: undefined,
      scrollHandler: null,
      
    };
  },
  mounted () {
    this.init()
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.scrollHandler)
  },
  methods: {
    debounceFn(fn) {
      let self = this // 100ms防抖
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        fn && fn()
      }, 300)
    },
    init () {
      const top = this.getScrollTop()
      this.scrollHandler = () => {
        let run = async () => {
          console.log('log', top)
          if (window.scrollY + this.distance > top) {
            const { height, width, left } = this.$refs.wrapper.getBoundingClientRect()
            this.height = `${height}px`
            this.width = `${width}px`
            this.left = `${left}px`
            await this.$nextTick()
            this.isSticky = true // 当滚动条大于sticky-wrapper高度
          } else {
            this.isSticky = false
          }  
        }
        // let self = this // 100ms防抖
        // clearTimeout(this.timer)
        // this.timer = setTimeout(() => {
        //   run()
        // }, 300)
        run()
      }
      window.addEventListener('scroll', this.scrollHandler)
    },
    getScrollTop() {
      const { top } = this.$refs.wrapper.getBoundingClientRect() // sticky-warp 距离视窗口的高度
      return top + window.scrollY // 当元素在视窗上面， 则getBoundingClientRect方法会返回负数，故可利用这点判断：当前视窗是否超过元素顶部
    }
  },
};
</script>

<style lang="scss" scoped>
.wlin-sticky {
  box-sizing: border-box;
  position: relative;
  &__inner {
    box-sizing: border-box;
    position: relative;
  }
  &--isSticky {
    // background: red;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
  }
}
</style>
