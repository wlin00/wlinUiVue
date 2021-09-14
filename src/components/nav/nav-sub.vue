<template>
  <div class="wlin-nav-sub" v-clickoutside="handleClickoutside" :class="{'wlin-nav-sub--active': active, 'wlin-nav-sub--vertical': vertical}">
    <span class="wlin-nav-sub__title" @click="switchOpenFlag">
      <slot name="title" />
      <div class="wlin-nav-sub__flexWrap">
        <wlin-icon name='right' class="wlin-nav-sub__icon" :class="{'wlin-nav-sub__icon--rotate': open, 'vertical': vertical }"></wlin-icon>
      </div>
    </span>
    <template v-if="vertical">
      <transition @enter="enter" @leave="leave" @after-enter="afterEnter" @after-leave="afterLeave">
        <div class="wlin-nav-sub__popover" :class="{'wlin-nav-sub__popover--vertical': vertical}" v-show="open">
          <slot/>
        </div>
      </transition>
    </template>
    <template v-else>
      <div class="wlin-nav-sub__popover" :class="{'wlin-nav-sub__popover--vertical': vertical}" v-show="open">
        <slot/>
      </div>
    </template>


  </div>
</template>

<script>
import Icon from "../icon/icon.vue";

  const clickoutside = {
    // 初始化指令
    bind(el, binding, vnode) {
      function documentHandler(e) {
        // 这里判断点击的元素是否是本身，是本身，则返回
        if (el.contains(e.target)) {
            return false;
        }
        // 判断指令中是否绑定了函数
        if (binding.expression) {
            // 如果绑定了函数 则调用那个函数，此处binding.value()的就是指令绑定函数的执行
            binding.value(e);
        }
      }
      // 给当前元素绑定个私有变量，方便在unbind中可以解除事件监听
      el.__vueClickOutside__ = documentHandler;
      document.addEventListener('click', documentHandler);
    },
    update() {},
    unbind(el, binding) {
      // 解除事件监听
      document.removeEventListener('click', el.__vueClickOutside__);
      delete el.__vueClickOutside__;
    },
  };
  export default {
    name: 'WlinNavSub',
    inject: ['root', 'vertical'],
    props: {
      name: {
        type: String,
        require: true
      },
    },
    components: {
      "wlin-icon": Icon
    },
    directives: {
      clickoutside
    },
    data() {
      return {
        open: false,
        // active: false,
      }
    },
    computed: {
      active() {
        return this.root.namePath && this.root.namePath.includes(this.name) ? true : false
      }
    },
    methods: {
      // nav滑动动画钩子
      enter(el, done) {
        // 进入时，做高度变化的滑动动画
        let { height } = el.getBoundingClientRect() // 获取auto高度
        el.style.height = 0 // 高度置0， 后通过计算强制触发dom生效此行（不进行事件合成）
        el.getBoundingClientRect()
        el.style.height = `${height}px`
        // 只要调用done会立刻display：none， 导致动画丢失， 所以done应该延时调用
        // el.addEventListener('transitionend', () => {
        setTimeout(() => {
          done()
        }, 200)
      },
      leave(el, done) {
        let { height } = el.getBoundingClientRect() // 获取auto高度
        el.style.height = `${height}px` // 高度置0， 后通过计算强制触发dom生效此行（不进行事件合成）
        el.getBoundingClientRect()
        el.style.height = 0
        // 只要调用done会立刻display：none， 导致动画丢失， 所以done应该延时调用
        setTimeout(() => {
          done()
        }, 200)
      },
      afterLeave(el) {
        // 动画淡出结束后， 恢复高度
        el.style.height = 'auto'
      },
      
      afterEnter(el) {
        // 动画淡入结束后， 解除boundClientRect限制
        el.style.height = 'auto'
      },

      switchOpenFlag() {
        this.open = !this.open
      },
      
      handleClickoutside() {
        setTimeout(() => {
          this.$nextTick(() => {
            this.open = false
          })
        })
      },
      
      syncParent() { // 子组件同步通知父级改变
        console.log('parent.name', this.name)
        // 当子组件通知父级后，需同步父级高亮状态
        // this.active = true

        // 被子组件通知后， 调用可能存在的父级组件的同步函数，进行递归通知
        this.$parent.syncParent && this.$parent.syncParent()

        // 更新当前被记录的链路关系
        if (!this.root.namePath.includes(this.name)) {
          this.root.namePath.push(this.name)
        }
      },
      syncClose() {
        this.handleClickoutside()
        this.$parent.syncClose && this.$parent.syncClose()
      }
    },
  }
</script>

<style lang="scss" scoped>
.wlin-nav-sub {
  position: relative;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  // justify-content: center;
  &--vertical {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  &__flexWrap {
    display: inline-flex;
    align-items: center;
  }
  &__icon {
    display: inline-flex;
    font-size: 12px;
    transform: scale(.85);
    margin-left: 3px;
    align-items: center;
    transition: all .15s linear;
    position: relative;
    top: 1px;
    &--rotate {
      transform: rotate(180deg);
      &.vertical {
        transform: rotate(90deg); // vertical时，icon激活时朝下
      }
    }
  }
  &--active {
    // background: red;
    // color: #fff;
    color: #3399ff;
    &::after {
      content: '';
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 0;
      border-bottom: 2px solid rgb(55, 55, 240);
    }
  }
  &--vertical {
    &::after {
      content: '';
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 0;
      border-bottom: 2px solid transparent;
    }
  }
  >span {
    font-size: 16px;
    display: inline-flex;
    padding: 10px 20px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  &__popover {
    position: absolute;
    top: 100%;
    left: 0;
    white-space: nowrap;
    background: #fff;
    margin-top: 6px;
    box-shadow: 0 2px 10px 0 #999;
    border-radius: 5px;
    min-width: 6em;
    transition: height .2s linear;
    &--vertical {
      position: static;
      border-radius: 0;
      border: none;
      box-shadow: unset;
      padding-left: 15px;
      overflow-y: hidden;
    }
  }
}
.wlin-nav-sub .wlin-nav-sub {
  &.wlin-nav-sub--active {
    &::after {
      display: none;
    }  
  }
}
.wlin-nav-sub .wlin-nav-sub .wlin-nav-sub__popover {
  // 对子代nav-sub设置
  // background: yellow;
  top: 0;
  left: 100%;
  margin-left: 5px;
  .wlin-nav-item {
    &--active {
      // background: #fff;
      color: #3399ff;
      &::after {
      display: none;
      }
    }
  }
}
// popover 淡入淡出动画
.sub-enter-active, .sub-leave-active {
  transition: opacity .5s
}
.sub-enter, .sub-leave-to {
  opacity: 0;
}

</style>