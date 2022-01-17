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
    <div class="demo-code">
      <pre class="language-html wlin-pre" v-html="computeContent"></pre>
    </div>
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
  import 'prismjs';
  import 'prismjs/themes/prism.css'
  const Prism = window.Prism
  
  Vue.use(plugin)

  export default {
    components: {WlinButton},
    computed: {
      computeContent() {
        return Prism.highlight(this.content, Prism.languages.html, 'html') 
      }
    },
    data () {
      return {
        content: `
          <wlin-button @click="$toast('点击弹出提示', {position:'top'})">上方弹出</wlin-button>
          <wlin-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</wlin-button>
          <wlin-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</wlin-button>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>

<style lang="scss" scoped>
.wlin-pre {
  background-color: #f5f2f0 !important;
}
</style>