<template>
  <div style="padding-top: 16px;">
    <h2>可关闭的sider</h2>
    <p>
      <strong>预览</strong>
    </p>

    <wlin-layout style="color: white; overflow:hidden; margin-bottom:50px;">
      <wlin-header style="height: 50px; background:lightskyblue;">
        header
      </wlin-header>
      <wlin-layout>
        <wlin-sider style="height: 100px; background:#ddd; width:200px; color: black;">
          sider
        </wlin-sider>
        <wlin-content style="height: 100px; background:deepskyblue;">
          content
        </wlin-content>
      </wlin-layout>
      <wlin-footer style="height: 50px; background:lightskyblue;">
        footer
      </wlin-footer>
    </wlin-layout>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<style scoped>
  * {
    box-sizing: border-box;
  }
</style>
<script>
  import WlinLayout from '../../../src/components/container/layout'
  import WlinHeader from '../../../src/components/container/header'
  import WlinFooter from '../../../src/components/container/footer'
  import WlinContent from '../../../src/components/container/content'
  import WlinSider from '../../../src/components/container/sider'

  export default {
    components: {WlinLayout, WlinHeader, WlinFooter, WlinContent, WlinSider},
    data () {
      return {
        content: `
        <wlin-layout style="color: white; overflow:hidden; margin-bottom:50px;">
            <wlin-header style="height: 50px; background:lightskyblue;">
              header
            </wlin-header>
            <wlin-layout>
              <wlin-sider style="height: 100px; background:#ddd; width:200px; color: black;">
                sider
              </wlin-sider>
              <wlin-content style="height: 100px; background:deepskyblue;">
                content
              </wlin-content>
            </wlin-layout>
            <wlin-footer style="height: 50px; background:lightskyblue;">
              footer
            </wlin-footer>
  </wlin-layout>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>