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
      handleClick() {
        this.$emit('input', this.name)
      }
    },
    created () {
      this.root.addItem(this)
    },
  }
</script>

<style lang="scss" scoped>
.wlin-nav-item {
  padding: 10px 20px;
  cursor: pointer;
  &:not(.wlin-nav-item--active):hover {
    opacity: .7;
  }
  &--active {
    background: red;
    color: #fff;

  }
}

</style>