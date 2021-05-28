<template>
  <div class="cascader-item">
    <!-- 当前遍历的数据label名 -->
    <!-- <span>{{ items.name }}</span> -->
    <!-- 若当前数据源items中存在children，则递归组件本身 -->
    <!-- <cascader-items :items="item" v-for="(item, index) in items.children" :key="index" v-if="items.children && items.children.length" ></cascader-items> -->

    <div class="cascader-item__left">
      <div class="cascader-item__label" v-for="(item, index) in items" :key="index" @click="handleLeftClick(item)">{{ item.name }}</div>
    </div>

    <div class="cascader-item__right" v-if="nextItems">
      <!-- 递归组件自身 -->
      <cascader-items :items="nextItems"></cascader-items>
    </div>

    

  </div>
</template>

<script>
  // cascaderItems, 会结合传入的数据源，递归遍历组件自身(以组件自身的name为组件名），以渲染级联选择器的下拉视图。
  export default {
    name: "cascaderItems",
    props: {
      items: {
        type: Array,
      }
    },
    data() {
      return {
        leftSelect: null
      }
    },
    methods: {
      handleLeftClick(item) {
        console.log('item', item)
        this.leftSelect = item
      }
    },
    computed: {
      nextItems() { // 用于计算当前点击后， 下一级的级联展示的数据
        if (!this.leftSelect || !this.leftSelect.children) {
          return null
        }
        return this.leftSelect.children
      }
    },
  }
</script>

<style lang="scss" scoped>
.cascader-item {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;

  &__left {
    border: 1px solid red;
  }
  &__right {
    margin-top: -1px;
    margin-bottom: -1px;
  }

}
</style>