<template>
  <div class="wlin-nav">
    <slot/>

  </div>
</template>

<script>
  export default {
    name: 'WlinNav',
    props: {
      value: {
        type: Array,
        default: () => []
      },
      multiple: Boolean,
    },
    methods: {
      initStatus() {
        this.items.map((vm) => {
          vm.active = this.value.indexOf(vm.name) >= 0 ? true : false
        })
      },
      addLisener() {
        // 给每个子代nav-itme，添加点击监听
        this.items.forEach((vm) => {
          vm.$on('input', (name) => {
            console.log('vvvv', this.value, 'name', name)
            if (this.value.indexOf(name) < 0) {
              if (this.multiple) {
                const copy = JSON.parse(JSON.stringify(this.value))
                copy.push(name)
                this.$emit('input', copy)
              } else {
                this.$emit('input', [name])
              }
            }
          })
        })
      }
    },
    mounted () {
      this.initStatus() // 初始化内部nav-item状态
      this.addLisener()
    },
    updated () {
      this.initStatus() // 初始化内部nav-item状态
    },
    computed: {
      items() {
        return this.$children.filter((vm) => vm.$options.name === 'WlinNavItem')
      }
    },
  }
</script>

<style lang="scss" scoped>
.wlin-nav {
  display: flex;
  box-sizing: border-box;
  border: 1px solid red;
}

</style>