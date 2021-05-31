<template>
  <div class="cascader" v-clickoutside="handleClickoutside">
    <div class="cascader__trigger" @click="handleSwitch">
      <span class="cascader__span">{{ this.showValue }}</span>
      <template v-if="!showValue">
        <span>请选择</span>
      </template>
      <wlin-icon name="right" class="cascader__icon"></wlin-icon>
    </div>
    <cascader-items 
      class="cascader__wrap"
      v-if="visible"
      :level="level"
      :selected="value"
      :height="height"
      :items='source'
      :showValue="showValue"
      @selectedChange="handleInput"
      @dataChange="handleDataInput"
      @nameChange="handleNameInput"
    ></cascader-items>
  </div>
</template>

<script>
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

  import CascaderItems from './cascader-items'
  import Icon from '../icon/icon'
  export default {
    name: "wlinCascader",
    components: {
      CascaderItems,
      'wlin-icon': Icon
    },
    directives: {
      clickoutside
    },
    data() {
      return {
        visible: false,
        level: 0,
        dt: [],
        showValue: ''
      }
    },
    methods: {
      handleInput(e){
        this.$emit('input', e)
      },

      handleSwitch() {
        this.visible = !this.visible
        this.$nextTick(() => {
          if (this.visible) {
            // init value
            this.$emit('input', this.saveValue)
          }
        })
      },

      handleDataInput(e) {
        // user select
        this.visible = false
        this.$nextTick(() => {
          this.$emit('change', e)
          this.saveValue = this.value
        })
      },

      handleNameInput(e) {
        this.$nextTick(() => {
          this.showValue = e.join('/')
        })
      },

      handleClickoutside() {
        setTimeout(() => {
          this.$nextTick(() => {
            this.visible = false
          })
        })
      }
    },
    props: {
      value: {
        type: Array,
        default: () => []
      },
      source: {
        type: Array,
        default: []
      },
      height: {
        type: String,
        default: '100px'
      },
    },
    mounted () {
      console.log('data-source', this.source)
    },
  }
</script>

<style lang="scss" scoped>
.cascader {
  position: relative;
  user-select: none;

  &__trigger {
    width: 230px;
    height: 40px;
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;
    border:1px solid rgb(220, 223, 230);
    border-radius: 5px;
    display: flex;
    cursor: pointer;
    padding: 0 20px;
    justify-content: flex-start;
    color: rgb(96, 98, 102);
    &:hover {
      border: 1px solid rgb(192, 196, 204)
    }
  }

  &__icon {
    display: inline-flex;
    margin-left: auto;
    font-size: 20px;
    width: 15px;
    height: 15px;
  }

  &__box {
    position: relative;
  }

  &__span {
    display: inline-block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  &__wrap {
    box-shadow: 0 0 5px rgba(0, 0, 0, .35);
    background: #fff;
    position: absolute;
    top: 115%;
    left: 0;
    box-sizing: border-box;
    border-radius: 5px;
  }
}

</style>