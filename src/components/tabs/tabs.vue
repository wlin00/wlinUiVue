<template>
  <div class="wlin-tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
// 注册的事件中心
export default {
  name: "wlinTabs",
  props: {
    // v-model 默认接收名为value的props、并监听名为input的方法
    value: {
      type: String | Number,
      required: true
    },
    // selected: {
    //     type: String,
    //     required: true
    // },
    direction: {
      type: String,
      default: "horizontal",
      validator(value) {
        return ["horizontal", "vertical"].indexOf(value) >= 0;
      }
    }
  },
  data() {
    return {
      // 注册一个事件中心， 由provide提供给子代所有组件
      eventBus: new Vue()
    };
  },
  methods:{
    checkChildren(){
      if(this.$children.length === 0){
        console && console.warn && console.warn('tabs的子组件应该是tabs-head和tabs-nav，但你没有写子组件')
      }
    },
    selectTab(){
      this.$children.forEach((vm)=>{
        if(vm.$options.name === 'wlinTabsHead'){
          vm.$children.forEach((childVm)=>{
            if(childVm.$options.name === 'wlinTabsItem' && childVm.name === this.value){
              // 初始化 触发第一次tab选中
              this.eventBus.$emit('input', this.value, childVm)
            }
          })
        }
      })
    }
  },
  mounted() {
    this.checkChildren()
    this.selectTab()
  },
  // 向子代组件提供依赖，tabs根组件注册事件中心
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
};
</script>

<style lang="scss" scoped>
.wlin-tabs {
}
</style>
