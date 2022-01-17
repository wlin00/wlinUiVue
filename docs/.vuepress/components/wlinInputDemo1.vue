<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <wlin-input value='张三1'></wlin-input>
    <wlin-input value='张三2' disabled></wlin-input>
    <wlin-input value='张三3' readonly></wlin-input>
    <wlin-input value='张三4' error='您输入的名称已存在'></wlin-input>

    <p>
      <strong>代码</strong>
    </p>
    <div class="demo-code">
      <pre class="language-html wlin-pre" v-html="computeContent"></pre>
    </div>

  </div>
</template>
<script>
  import 'prismjs';
  import 'prismjs/themes/prism.css'
  import Input from '../../../src/components/input/input'
  const Prism = window.Prism

  export default {
    name: 'wlinInputDemo1',
    components: {
      'wlin-input': Input,
      // 'wlin-button-group': ButtonGroup,
    },
    computed: {
      computeContent() {
        return Prism.highlight(this.content, Prism.languages.html, 'html') 
      },
    },
    data () {
      return {
        loading1: true,
        content: `
          <wlin-input value='张三1'></wlin-input>
          <wlin-input value='张三2' disabled></wlin-input>
          <wlin-input value='张三3' readonly></wlin-input>
          <wlin-input value='张三4' error='您输入的名称已存在'></wlin-input>
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

