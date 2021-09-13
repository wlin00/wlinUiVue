<template>
  <div @click="handleClick" class="wlin-nav-item" :class="{'wlin-nav-item--active': active}"> 
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'WlinNavItem',
    inject: ['root'],
    props: {
      name: {
        type: String,
        require: true
      },
    },
    data() {
      return {
        active: false
      }
    },
    methods: {
      async handleClick() {
        this.root.namePath = [] // 每次点击后，先清空暂存path链路数组
        this.$parent.syncParent && this.$parent.syncParent()
        await this.$nextTick()
        this.$emit('input', this.name)
        this.root.emitChange(this.value)
        await this.$nextTick()
        // 通知父级关闭面板
        this.syncClose()
        // this.root.closePanel()
      },
      syncClose() {
        this.$parent.syncClose && this.$parent.syncClose()
      }
    },
    created () {
      this.root.addItem(this)
    },
  }
</script>

<style lang="scss" scoped>
.wlin-nav-item {
  transition: all .15s linear;
  color: #666;
  padding: 10px 20px;
  cursor: pointer;
  position: relative;
  font-size: 16px;
  // display: inline-block;
  // vertical-align: middle;
  &:not(.wlin-nav-item--active):hover {
    opacity: .7;
  }
  &--active {
    // background: red;
    // color: #fff;
    color: #555;
    &::after {
      content: '';
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 0;
      border-bottom: 2px solid rgb(55, 55, 240);
    }
  }
}

.wlin-nav-sub .wlin-nav-item {
  &--active {
    background: rgb(243, 243, 243);
    color: #555;
    &::after {
     display: none;
    }
  }
}

</style>