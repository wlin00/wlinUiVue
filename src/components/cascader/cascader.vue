<template>
  <div class="cascader">
    <div class="cascader__trigger" @click="visible = !visible">
    </div>
    
    <div class="cascader__wrap" v-if="visible">
      <cascader-items :items='source'></cascader-items>
    </div>
   
    
  </div>
</template>

<script>
  import CascaderItems from './cascader-items'
  export default {
    name: "wlinCascader",
    components: {
      CascaderItems
    },
    data() {
      return {
        visible: false
      }
    },
    props: {
      source: {
        type: Array,
        default: []
      },
    },
    mounted () {
      console.log('data-source', this.source)
    },
  }
</script>

<style lang="scss" scoped>
.cascader {

  &__trigger {
    width: 100px;
    height: 30px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border:3px solid blue;
  }

  &__wrap {
    width: 300px;
    border: 3px solid black;
  }
}

</style>