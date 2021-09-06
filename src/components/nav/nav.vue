<template>
  <div class="wlin-nav">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: 'WlinNav',
    provide() {
      // 向后代nav-item组件提供依赖注入，暴露钩子函数，允许其修改nav组件
      return {
        root: this
      }
    },
    data() {
      return {
        items: []
      }
    },
    props: {
      value: {
        type: Array,
        default: () => []
      },
      multiple: Boolean,
    },
    methods: {
      addItem(vm) {
        this.items.push(vm)
      },
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
            } else {
              if (this.multiple) {
                const copy = JSON.parse(JSON.stringify(this.value))
                const index = copy.findIndex((item) => item === name)
                console.log('idx', index, copy)
                copy.splice(index, 1)
                this.$emit('input', copy)
              }
            }
          })
        })
      }
    },
    mounted () {
      // console.log('get - items', this.items)
      this.initStatus() // 初始化内部nav-item状态
      this.addLisener()
    },
    updated () {
      this.initStatus() // 初始化内部nav-item状态
    },
    computed: {
      // 通过依赖注入，可以免去nav组件对子代的遍历计算
      // items() {
        // return this.$children.filter((vm) => vm.$options.name === 'WlinNavItem')
      // }
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