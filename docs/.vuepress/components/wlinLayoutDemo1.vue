<template>
  <div style="padding-top: 16px;">
    <h2>简单模式</h2>
    <p>
      <strong>预览</strong>
    </p>

    <wlin-layout style="color: white; margin-bottom:50px;">
      <wlin-header style="height: 50px; background:lightskyblue;">
        header
      </wlin-header>
      <wlin-content style="height: 100px; background:deepskyblue;">
        content
      </wlin-content>
      <wlin-footer style="height: 50px; background:lightskyblue;">
        footer
      </wlin-footer>
    </wlin-layout>

    <p>
      <strong>代码</strong>
    </p>
    <div class="demo-code">
      <pre class="language-html wlin-pre" v-html="computeContent"></pre>
    </div>
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
  import 'prismjs';
  import 'prismjs/themes/prism.css'
  const Prism = window.Prism

  export default {
    components: {WlinLayout, WlinHeader, WlinFooter, WlinContent, WlinSider},
    computed: {
      computeContent() {
        return Prism.highlight(this.content, Prism.languages.html, 'html') 
      }
    },
    data () {
      return {
        content: `
           <wlin-layout style="color: white; margin-bottom:50px;">
            <wlin-header style="height: 50px; background:lightskyblue;">
              header
            </wlin-header>
            <wlin-content style="height: 100px; background:deepskyblue;">
              content
            </wlin-content>
            <wlin-footer style="height: 50px; background:lightskyblue;">
              footer
            </wlin-footer>
          </wlin-layout>
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