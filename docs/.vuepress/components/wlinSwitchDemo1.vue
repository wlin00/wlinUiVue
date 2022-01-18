<template>
  <div style="padding-top: 16px;">
    <h2>基本用法：支持双向绑定</h2>

    <div class="wrap" style="box-sizing:border-box;position:relative;">
      <wlin-switch v-model="bool" />
      <wlin-switch disabled style="margin-left:20px;" v-model="bool1" />
    </div>
    <p>
      <strong>代码</strong>
    </p>
    <div class="demo-code">
      <pre class="language-html wlin-pre" v-html="computeContent"></pre>
    </div>

    <div class="demo-code" style="margin-top:16px;">
      <pre class="language-html wlin-pre" v-html="computeJs"></pre>
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
  import WlinSwitch from '../../../src/components/switch/switch'
  import 'prismjs';
  import 'prismjs/themes/prism.css'
  const Prism = window.Prism

  export default {
    components: {WlinSwitch},
    computed: {
      computeContent() {
        return Prism.highlight(this.content, Prism.languages.html, 'html') 
      },
        computeJs() {
        return Prism.highlight(this.js, Prism.languages.javascript, 'javascript') 
      },
    },
    data () {
      return {
        bool: true,
        bool1: false,
        js: `data() {
    return {
      bool: true,
      bool1: false,
    }
  }`,
        content: `
  <Switch v-model="bool" />
  <Switch disabled style="margin-left:20px;" v-model="bool1" />
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