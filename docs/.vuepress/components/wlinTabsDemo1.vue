<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>支持双向绑定</strong>
    </p>

    <wlin-tabs v-model="selected">
      <wlin-tabs-head>
        <wlin-tabs-item name="1">1</wlin-tabs-item>
        <wlin-tabs-item name="2">2</wlin-tabs-item>
        <wlin-tabs-item name="3">3</wlin-tabs-item>

      </wlin-tabs-head>
      <wlin-tabs-body>
        <wlin-tabs-pane name="1">content 1</wlin-tabs-pane>
        <wlin-tabs-pane name="2">content 2</wlin-tabs-pane>
        <wlin-tabs-pane name="3">content 3</wlin-tabs-pane>

      </wlin-tabs-body>
    </wlin-tabs>

    <p>
      <strong>代码</strong>
    </p>
    <div class="demo-code">
      <pre class="language-html wlin-pre" v-html="computeJs"></pre>
    </div>
    <div class="demo-code" style="margin-top:16px;">
      <pre class="language-html wlin-pre" v-html="computeContent"></pre>
    </div>
  </div>
</template>
<script>
  import WlinTabs from '../../../src/components/tabs/tabs'
  import WlinTabsBody from '../../../src/components/tabs/tabs-body'
  import WlinTabsHead from '../../../src/components/tabs/tabs-head'
  import WlinTabsItem from '../../../src/components/tabs/tabs-item'
  import WlinTabsPane from '../../../src/components/tabs/tabs-pane'
  import 'prismjs';
  import 'prismjs/themes/prism.css'
  const Prism = window.Prism

  export default {
    components: {WlinTabs, WlinTabsBody, WlinTabsHead, WlinTabsItem, WlinTabsPane},
    computed: {
      computeJs() {
        return Prism.highlight(this.js, Prism.languages.javascript, 'javascript') 
      },
      computeContent() {
        return Prism.highlight(this.content, Prism.languages.html, 'html') 
      },
    },
    data () {
      return {
        selected: '1',
        js: `data () {
    return {
      selected: '1'
    }
  }`,
        content: `
          <wlin-tabs v-model="selected">
            <wlin-tabs-head>
              <wlin-tabs-item name="1">1</wlin-tabs-item>
              <wlin-tabs-item name="2">2</wlin-tabs-item>
              <wlin-tabs-item name="3">3</wlin-tabs-item>
            </wlin-tabs-head>
            <wlin-tabs-body>
              <wlin-tabs-pane name="1">content 1</wlin-tabs-pane>
              <wlin-tabs-pane name="2">content 2</wlin-tabs-pane>
              <wlin-tabs-pane name="3">content 3</wlin-tabs-pane>
            </wlin-tabs-body>
          </wlin-tabs>
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