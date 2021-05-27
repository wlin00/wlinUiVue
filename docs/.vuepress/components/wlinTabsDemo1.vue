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
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import WlinTabs from '../../../src/components/tabs/tabs'
  import WlinTabsBody from '../../../src/components/tabs/tabs-body'
  import WlinTabsHead from '../../../src/components/tabs/tabs-head'
  import WlinTabsItem from '../../../src/components/tabs/tabs-item'
  import WlinTabsPane from '../../../src/components/tabs/tabs-pane'

  export default {
    components: {WlinTabs, WlinTabsBody, WlinTabsHead, WlinTabsItem, WlinTabsPane},
    data () {
      return {
        selected: '1',
        content: `
          data:{
            selected: '1'
          }

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