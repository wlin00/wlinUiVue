<template>
  <div class="wlin-carousel"
    @mouseover="handleMouseEnter"
    @mouseleave="handleMouseOut"
  

  >
    <div 
      class="wlin-carousel__window"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd" ref="window">
      <slot></slot>
    </div>
    <div class="wlin-carousel__dots">
      <!-- 为获取slot传入的子代数量，在mount中更新data中数值，触发视图渲染，v-for-range遍历出子代个数的dots -->
      <span class="wlin-carousel__dot"  @click.prevent.stop="handleClickPageChange('left')">
        <!-- <wlin-icon name="left" class="wlin-carousel__icon"></wlin-icon> -->
        <
      </span>
      <span class="overflow-box">
        <span class="wlin-carousel__dot" @click="handleSelectedChange(n-1)" v-for="n in currentChildrenLength" :key="n" :class="{'wlin-carousel__dot--active': selectedIndex === n - 1 }">{{n}}</span>
      </span>
      <span class="wlin-carousel__dot"  @click.prevent.stop="handleClickPageChange('right')">
        >
        <!-- <wlin-icon name="right" class="wlin-carousel__icon"></wlin-icon> -->
      </span>
    </div>

  </div>
</template>

<script>
  import Icon from "../icon/icon";
  export default {
    name: "wlinCarousel",
    components: {
      "wlin-icon": Icon,
    },
    data() {
      return {
        timer: null,
        currentChildrenLength: 0,
        selectedIndex: 0,
        lastSelectedIndex: undefined,
        touchStartClientX: null, // 记录移动端设备时，用户第一根手指触摸时的坐标信息
        directionFlag: 'right'
      }
    },
    props: {
      value: {
        type: String,
        default: ''
      },
      autoPlay: {
        type: Boolean,
        default: true
      },
      reversePlay: {
        type: Boolean,
        default: false, // 是否逆序播放轮播图
      }
    },
    computed: {
      names() {
        return this.$children.map((vm) => vm.name)
      }
    },
    mounted () {
      this.updateChildren()
      this.autoPlay && this.playAutomatically()
      this.syncChildrenLength()
      this.syncSelected()
    },
    updated () {
      this.updateChildren()
      this.syncChildrenLength()
      this.syncSelected()
    },
    beforeDestroy () {
      this.timer = null
    },
    methods: {
      handleMouseEnter() { // 鼠标进入后，清除轮播定时器
        if (!this.autoPlay) { return }
        clearTimeout(this.timer)
        this.timer = null
      },
      handleMouseOut() {
        if (!this.autoPlay) { return }
        this.playAutomatically()
      },
      handleTouchStart(e) {
        // 移动端触摸开始事件
        console.log('start')
        this.handleMouseEnter()
        this.startTouch = e.touches[0]
      },
      handleTouchMove() {
        // 移动端触摸过程事件
        console.log('move')
      },
      getRatio(start, end) { // comput angle
        const x = end.X - start.X
        const y = end.Y - start.Y
        return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) / Math.abs(y)
      },
      handleClickPageChange(direction='right') { // 点击切换轮播图
        let index
        if (direction === 'right') { // 注意无缝轮播边界处理 - 右滑
          index = this.selectedIndex === this.names.length - 1 ? 0 : this.selectedIndex + 1
          this.directionFlag = 'right'
        } else { // 左滑
          index = this.selectedIndex === 0 ? this.names.length - 1 : this.selectedIndex - 1
          this.directionFlag = 'left'
        }
        console.log('click - index', index)
        this.handleSelectedChange(index)
      },
      handleTouchEnd(e) {
        // 移动端触摸结束事件
        console.log('end')
        this.handleMouseOut()
        // get move ratio - 从初始和结束点获取滑动角度
        const { clientX: x1, clientY: y1 } = this.startTouch
        const { clientX: x2, clientY: y2 } = e.changedTouches[0]
        const ratio = this.getRatio({ X: x1, Y: y1 }, { X: x2, Y: y2 })

        if (ratio < 2) { return } // 斜率小于2，视为用户的上下滑操作， 不进行翻页
        let index
        if (x1 > x2) { // 注意无缝轮播边界处理
          index = this.selectedIndex === this.names.length - 1 ? 0 : this.selectedIndex + 1 // 右滑
          this.directionFlag = 'right'
        } else {
          index = this.selectedIndex === 0 ? this.names.length - 1 : this.selectedIndex - 1 // 左滑
          this.directionFlag = 'left'
        }
        console.log('move - index', index)
        this.handleSelectedChange(index)
      },
      handleSelectedChange(index) {
        // console.log('111')
        this.lastSelectedIndex = this.selectedIndex // 每次变更value后，记录上次选中的Index
        const currentName = this.names[index]
        this.$emit('input', currentName)
      },
      syncChildrenLength() {
        this.currentChildrenLength = this.$children.length
      },
      syncSelected() {
        this.selectedIndex = this.names.indexOf(this.value) || 0
      },
      playAutomatically() { // 自动播放轮播图
        if (this.timer) { return }
        // 循环播放
        let run = () => {
          let index = this.names.indexOf(this.getCurrentName())
          let newIndex = this.reversePlay ? index - 1 : index + 1
          if (newIndex === this.names.length) { newIndex = 0 }
          if (newIndex === -1) { newIndex = this.names.length - 1 }
          console.log('auto - index', index)
          this.handleSelectedChange(newIndex)
          this.timer = setTimeout(run, 3000) // setTimeOut模拟setInterval
        }
        this.timer = setTimeout(run, 3000)
      },
      getCurrentName() {
        return this.value || this.$children[0].name // 获取当前图片主键name，若当前未传入绑定值 或绑定value为空，则默认先展示第一张
      },
      updateChildren() {
        if (this.selectedIndex === this.lastSelectedIndex) return
        // 若用户未穿selected属性，默认选中第一张轮播图, 将选中信息同步给子代组件
        const currentSelected = this.getCurrentName()
        this.$children.forEach((vm) => {
          vm.reverse = this.directionFlag === 'right' ? false : true
          this.$nextTick(() => {// 解决reverse没有更新的问题
            vm.selected = currentSelected // 控制当前选中图片显示
          })
        })
      }
    },
  }
</script>

<style lang="scss" scoped>
.wlin-carousel {
  display: flex;
  flex-direction: column;
  position: relative;
  user-select: none;
  .overflow-box {
    align-items: center;
    max-width: 82%;
    overflow-x: overlay;
    display: inline-flex;
    @-moz-document url-prefix() {#firefox {
      overflow-x: auto;
    }}
    >span {
      flex-shrink: 0;
    }
  }
  &__window {
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    display: inline-flex;
    // border: 1px solid black;
    flex-direction: column;
  }
  &__dots {
    width: 100%;
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__icon {
    display: inline-flex;
    font-size: 1em;
    height: .8em;
    width: .8em;
    font-weight: bold;
  }

  &__pager {
    position: absolute;
    display: inline-flex;
    font-size: 20px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    font-weight: bold;
    &:hover {
      opacity: .8;
    }
    &.left {
      left: 10px;
    }
    &.right {
      right: 10px;
    }
  }

  &__dot {
    cursor: pointer;
    &:hover {
      opacity: .75;
    }
    width: 1.2em;
    height: 1.2em;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-radius: 50%;
    color: #666;
    margin: 0 5px;
    &--active {
      background: red;
      color: #fff;
      &:hover {
        opacity: 1;
        cursor: default;
      }
    }
    

  }
  
}

</style>