<template>
  <div style="padding-top: 16px;">
    <h2>基本用法：可设置distance属性来改变sticky吸顶距离</h2>

    <div class="wrap" style="box-sizing:border-box;position:relative;">
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <wlin-sticky :distance="210">
        <wlin-button class="btn" type="primary" plain>吸顶距离</wlin-button>
      </wlin-sticky>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <wlin-sticky :distance="60">
        <wlin-button class="btn" type="success" plain>基本用法</wlin-button>
      </wlin-sticky>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>

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
</style>
<style scoped>
.btn {
  z-index: 100;
}
</style>
<script>
  import WlinButton from '../../../src/components/button/button'
  import WlinSticky from '../../../src/components/sticky/sticky'
  import 'prismjs';
  import 'prismjs/themes/prism.css'
  const Prism = window.Prism

  export default {
    components: {WlinButton, WlinSticky},
    computed: {
      computeContent() {
        return Prism.highlight(this.content, Prism.languages.html, 'html') 
      },
    },
    data () {
      return {
        content: `
    <div class="wrap" style="box-sizing:border-box;position:relative;">
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <wlin-sticky :distance="150">
      <wlin-button class="btn" type="primary" plain>吸顶距离</wlin-button>
    </wlin-sticky>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <wlin-sticky>
      <wlin-button class="btn" type="success" plain>基本用法</wlin-button>
    </wlin-sticky>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
  </div>
      `.replace(/^ {8}/gm, '').trim()
      }
    },
    methods: {
    },
  }
</script>

<style lang="scss" scoped>
.wlin-pre {
  background-color: #f5f2f0 !important;
}
</style>