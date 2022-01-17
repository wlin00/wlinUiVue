<template>
  <div class="wlin-tabs">
    <div class="wlin-tabs__titleWrap" ref="container">
      <div 
        class="wlin-tabs__title" 
        :class="{'selected': title === value}" 
        @click="handleTabClick(title)" 
        v-for="(title, index) in titles"
        :ref="title === value && 'currentSelectNav'"
        :key="index"
      >{{title}}</div>
      <div ref="indicator" class="wlin-tabs__indicator"></div>
    </div>
    <div class="wlin-tabs__contentWrap">
      <component class="wlin-tabs__content" :class="{'selected': target && target.data && target.data.attrs && target.data.attrs.title === value}" v-for="(target, index) in defaults" :key="index" :is="target"></component>
    </div>
  </div>
</template>
<script lang="ts">
import Tab from "./Tab.vue";
export default {
  components: { Tab },
  props: 
  {
    value: String,
  },
  data() {
    return {
      titles: [],
    }
  },
  watch: {
    value: {
      deep: true,
  // 　　immediate: true,
      handler () {
       this.init()
      }
    },
  },
  methods: {
    judgeSlot() {
      console.log('slot', this.$slots)
      return
      // this.$slots.default?.length && this.$slots.default.forEach((item) => {
      //   if (item.tag !== 'Tab') {
      //     throw new Error('请使用正确标签Tab')
      //   }
      // })
    },
    initTitle() {
      this.titles = this.$slots && this.$slots && this.$slots.default ? this.$slots.default.map((tag) => tag && tag.data && tag.data.attrs && tag.data.attrs.title ? tag.data.attrs.title : null).filter((item) => item) : null
    },
    handleTabClick (title) {
      console.log('tt', title)
      if (title === this.value) {
        return
      }
      this.$emit('input', title)
    },
    async init () {
      await this.$nextTick()
      // 初始化nav下划线宽度， 需获取到当前选中的nav元素
      console.log('ref', this.$refs)
      const navItemProperty = this.$refs.currentSelectNav && this.$refs.currentSelectNav[0] && this.$refs.currentSelectNav[0].getBoundingClientRect()
      // 获取currentSelectNav.left - container.left 差值，将其设置为下划线的left坐标
      const containerProperty = this.$refs.container && this.$refs.container.getBoundingClientRect()
      if (!navItemProperty || !containerProperty) { return }
      
      const width = navItemProperty.width
      const currentSelectNavLeft = navItemProperty.left
      const containerLeft = containerProperty.left
      console.log('left', currentSelectNavLeft)
      
      this.$refs.indicator.style.width = `${width}px`
      const computeLeft = currentSelectNavLeft - containerLeft
      this.$refs.indicator.style.left = `${computeLeft}px`
    }
  },
  computed: {
    currentComponent() {
      return this.$slots && this.$slots.default ? this.$slots.default.filter((tag) => tag && tag.data && tag.data.attrs && tag.data.attrs.title && tag.data.attrs.title === this.value )[0] : null
    },
    defaults() {
      // return this.$slots && this.$slots.default() ? this.$slots.default() : []
      return this.$slots && this.$slots.default ? this.$slots.default.filter((tag) => tag && tag.data && tag.data.attrs && tag.data.attrs.title) : []
    }
  },
  async mounted () {
    await this.judgeSlot()
    this.initTitle()
    this.init()
  },
};
</script>
<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.wlin-tabs {
  &__titleWrap {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
  
  }
  &__title {
    padding: 8px 0;
    margin: 0 16px;
    cursor: pointer;
    &:first-child {
      margin-left: 0;
    }
    &.selected {
      color: $blue;
    }
  }
  &__contentWrap {
    padding: 8px 0;
  }
  &__content {
    display: block;
    &.selected {
      display: block;
    }
  }
  &__indicator {
    position: absolute;
    height: 3px;
    background: $blue;
    left: 0;
    bottom: -1px;
    width: 100px;
    transition: left .2s linear;
  }
}
  
</style>
