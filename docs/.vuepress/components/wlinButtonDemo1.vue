<template>
  <div style="padding-top: 16px;" class="demo">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <wlin-button style="margin-bottom: 10px;">默认按钮</wlin-button>
    <wlin-button style="margin-bottom: 10px;" icon="settings">设置图标</wlin-button>
    <wlin-button style="margin-bottom: 10px;" :loading="loading1" @click="loading1 = !loading1">设置loading</wlin-button>
    <wlin-button style="margin-bottom: 10px;" disabled>禁选按钮</wlin-button>

    <p>
      <strong>代码</strong>
    </p>
    <div class="demo-code">
      <pre class="language-html wlin-pre" v-html="computeContent"></pre>
    </div>
    <!-- <pre><code>{{computeContent}}</code></pre> -->

    <!-- 多种类型 -->
    <h2>多种类型</h2>
    <p>
      <strong>预览</strong>
    </p>
    <wlin-button style="margin-bottom: 10px;" type="primary">主要按钮</wlin-button>
    <wlin-button style="margin-bottom: 10px;" type="success">成功按钮</wlin-button>
    <wlin-button style="margin-bottom: 10px;" type="info">信息按钮</wlin-button>
    <wlin-button style="margin-bottom: 10px;" type="warning">警告按钮</wlin-button>
    <wlin-button style="margin-bottom: 10px;" type="danger">危险按钮</wlin-button>

    <p>
      <strong>代码</strong>
    </p>
    <div class="demo-code">
      <pre class="language-html wlin-pre" v-html="computeContentCombination"></pre>
    </div>

    <!-- 更多选项 -->
    <h2>更多选项</h2>
    <p>
      <strong>预览</strong>
    </p>
    <wlin-button style="margin-bottom: 10px;" circle>圆角按钮</wlin-button>
    <wlin-button style="margin-bottom: 10px;" type="primary" plain>主要幽灵按钮</wlin-button>
    <wlin-button style="margin-bottom: 10px;" type="success" plain>成功幽灵按钮</wlin-button>
    <wlin-button style="margin-bottom: 10px;" type="info" plain>信息幽灵按钮</wlin-button>
    <wlin-button style="margin-bottom: 10px;" type="warning" plain>警告幽灵按钮</wlin-button>
    <wlin-button style="margin-bottom: 10px;" type="danger" plain>危险幽灵按钮</wlin-button>
    
    <p>
      <strong>代码</strong>
    </p>
    <div class="demo-code">
      <pre class="language-html wlin-pre" v-html="computeContentCombination"></pre>
    </div>

    <!-- button-group -->
    <h2>按钮组合</h2>
    <p>
      <strong>预览</strong>
    </p>
    <wlin-button-group>
      <wlin-button icon='left'>上一页</wlin-button>
      <wlin-button>更多</wlin-button>
      <wlin-button icon='right' icon-position='right'>下一页</wlin-button>
    </wlin-button-group>
    <p>
      <strong>代码</strong>
    </p>
    <div class="demo-code">
      <pre class="language-html wlin-pre" v-html="computeContentGroup"></pre>
    </div>
  </div>
</template>
<script>
  import Button from '../../../src/components/button/button'
  import ButtonGroup from '../../../src/components/button/button-group'
  import 'prismjs';
  import 'prismjs/themes/prism.css'
  const Prism = window.Prism
  export default {
    name: 'wlinButtonDemo1',
    components: {
      'wlin-button': Button,
      'wlin-button-group': ButtonGroup,
    },
    computed: {
      computeContent() {
        return Prism.highlight(this.content, Prism.languages.html, 'html') 
      },
      computeContentTypes() {
        return Prism.highlight(this.contentTypes, Prism.languages.html, 'html') 
      },
      computeContentCombination() {
        return Prism.highlight(this.contentCombination, Prism.languages.html, 'html') 
      },
      computeContentGroup() {
        return Prism.highlight(this.contentGroup, Prism.languages.html, 'html') 
      },
    },
    data () {
      return {
        loading1: true,
        content: `
          <wlin-button>默认按钮</wlin-button>
          <wlin-button icon="settings">默认按钮</wlin-button>
          <wlin-button :loading="loading1" @click="loading1 = !loading1">默认按钮</wlin-button>
          <wlin-button disabled>默认按钮</wlin-button>
      `.replace(/^ {8}/gm, '').trim(),
        contentTypes: `
          <wlin-button circle>主要按钮</wlin-button>
          <wlin-button type="primary">主要按钮</wlin-button>
          <wlin-button type="success">成功按钮</wlin-button>
          <wlin-button type="info">信息按钮</wlin-button>
          <wlin-button type="warning">警告按钮</wlin-button>
          <wlin-button type="danger">危险按钮</wlin-button>
          <wlin-button type="primary" plain>主要按钮</wlin-button>
          <wlin-button type="success" plain>成功按钮</wlin-button>
          <wlin-button type="info" plain>信息按钮</wlin-button>
          <wlin-button type="warning" plain>警告按钮</wlin-button>
          <wlin-button type="danger" plain>危险按钮</wlin-button>
      `.replace(/^ {8}/gm, '').trim(),
        contentCombination: `
          <wlin-button circle>圆角按钮</wlin-button>
          <wlin-button type="primary" plain>主要幽灵按钮</wlin-button>
          <wlin-button type="success" plain>成功幽灵按钮</wlin-button>
          <wlin-button type="info" plain>信息幽灵按钮</wlin-button>
          <wlin-button type="warning" plain>警告幽灵按钮</wlin-button>
          <wlin-button type="danger" plain>危险幽灵按钮</wlin-button>
      `.replace(/^ {8}/gm, '').trim(),
        contentGroup: `
          <wlin-button-group>
            <wlin-button icon='left'>上一页</wlin-button>
            <wlin-button>更多</wlin-button>
            <wlin-button icon='right' icon-position='right'>下一页</wlin-button>
          </wlin-button-group>
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

<style lang="scss">
.language-bash  {
  background-color: #f5f2f0 !important;
  >code {
    color: #476582 !important;
  }
}
.language-javascript {
  background-color: #f5f2f0 !important;
  >code {
    color: #476582 !important;
  }
}

</style>