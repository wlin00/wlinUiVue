<template>
  <div style="padding-top: 16px;">
    <h2>基本调用：this.$toast</h2>
    <p>
      <strong>可改变弹出位置</strong>
    </p>

    <div>
      <wlin-button @click="$toast('点击弹出提示', {position:'top'})">上方弹出</wlin-button>
      <wlin-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</wlin-button>
      <wlin-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</wlin-button>
    </div>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<style>
  .wlin-toast {
    z-index: 30 !important;
  }
</style>
<style scoped>
  * {
    box-sizing: border-box;
  }

</style>
<script>
  import plugin from '../../../src/components/toast/toast-plugin'
  import WlinButton from '../../../src/components/button/button'
  import Vue from 'vue'

  Vue.use(plugin)

  export default {
    components: {WlinButton},
    data () {
      return {
        content: `
          <style>
            .wlin-toast {
              z-index: 30;
            }
          </style>

          <wlin-button @click="$toast('点击弹出提示', {position:'top'})">上方弹出</wlin-button>
          <wlin-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</wlin-button>
          <wlin-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</wlin-button>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>