<template>
  <div class="cascader-item" :style="{height}">
    <!-- 若当前数据源items中存在children，则递归组件本身 -->
    <!-- <cascader-items :items="item" v-for="(item, index) in items.children" :key="index" v-if="items.children && items.children.length" ></cascader-items> -->

    <div class="cascader-item__left">
      <div class="cascader-item__label" :class="[selected && selected.map((e)=>e.name) && selected.map((e)=>e.name).includes(item.name) && 'cascader-item__label--active']" v-for="(item, index) in items" :key="index" @click="handleLeftClick(item)">
        <span :style="{padding: !item.children && '0 11.5px'}">{{ item.name }}</span>
        <wlin-icon v-if="item.children && item.children.length" name="right"></wlin-icon>
      </div>
    </div>

    <div class="cascader-item__right" v-if="nextItems">
      <!-- 递归组件自身 -->
      <cascader-items @selectedChange="getSelectedChange" :selected="selected" :level="level+1" :height="height" :items="nextItems"></cascader-items>
    </div>

  </div>
</template>

<script>
  // cascaderItems, 会结合传入的数据源，递归遍历组件自身(以组件自身的name为组件名），以渲染级联选择器的下拉视图。
  import Icon from '../icon/icon'
  export default {
    name: "cascaderItems",
    props: {
      selected: {
        type: Array,
      },
      items: {
        type: Array,
      },
      height: String,
      level: Number,
    },
    data() {
      return {
      }
    },
    components: {
      'wlin-icon': Icon,
    },
    methods: {
      handleLeftClick(item) {
        const selectedCopy = JSON.parse(JSON.stringify(this.selected))
        selectedCopy[this.level] = item

        // 判断当前是否需要删除之前选中的子代数据
        selectedCopy.splice(this.level + 1)

        setTimeout(() => {
          this.$nextTick(() => {
            const changeVal = selectedCopy.map((e) => e.id)
            const changeName = selectedCopy.map((e) => e.name)

            this.$emit('selectedChange', selectedCopy)  
            !item.children && this.$emit('dataChange', changeVal) // 若选择到最后一级，则发布‘change’事件(len = 1的特殊边界条件)
            !item.children && this.$emit('nameChange', changeName) // 若选择到最后一级，则发布‘changeName’事件,更新选中项name(len = 1的特殊边界条件)
          })
        })
      },
      getSelectedChange(e) {
        // sync child component
        this.$emit('selectedChange', e)
        !e[e.length - 1].children && this.$emit('dataChange', e.map(e=>e.id))
        !e[e.length - 1].children && this.$emit('nameChange', e.map(e=>e.name))
      }
    },
    computed: {
      nextItems() { // 用于计算当前点击后， 下一级的级联展示的数据
        if (!this.selected[this.level] || !this.selected[this.level].children) {
          return null
        }
        return this.selected[this.level].children
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
  height: 100px;
  user-select: none;


  &__label {
    cursor: pointer;
    padding: .3em .8em;
    font-size: 16px;
    &:hover {
      background: rgb(245, 247, 250);
    }
    .icon {
      font-size: 12px;
      margin-left: 1em;
      transform: scale(.8);
    }
    &--active {
      background: rgb(245, 247, 250);
      color: rgb(64, 158, 255);
    }
  }
  &__left {
    box-sizing: border-box;
    height: 100%;
    overflow-y: overlay;
    padding: .2em 0;
    display: flex;
    flex-direction: column;
  }
  &__right {
    height: 100%;
    box-sizing: border-box;
    overflow-y: overlay ;
    border-left: 1px solid lighten(#999, 25%);
  }

}
</style>