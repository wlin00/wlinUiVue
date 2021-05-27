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
    <pre><code>{{content}}</code></pre>

    <!-- button-group -->
     <!-- <h2>其他</h2>
    <p>
      <strong>预览</strong>
    </p> -->
    <!-- <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{contentGroup}}</code></pre> -->
  </div>
</template>
<script>
  import Input from '../../../src/components/input/input'
  // import ButtonGroup from '../../../src/components/button/button-group'


  export default {
    name: 'wlinInputDemo1',
    components: {
      'wlin-input': Input,
      // 'wlin-button-group': ButtonGroup,
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