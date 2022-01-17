<template>
  <div style="padding-top: 16px;">
    <h2>设置 gutter</h2>
    <p>
      <strong>预览</strong>
    </p>
    <wlin-row class="demoRow" gutter="10">
      <wlin-col span="8">
        <div class="demoCol">8</div>
      </wlin-col>
      <wlin-col span="8">
        <div class="demoCol">8</div>
      </wlin-col>
      <wlin-col span="8">
        <div class="demoCol">8</div>
      </wlin-col>
    </wlin-row>
    <wlin-row class="demoRow" gutter="10">
      <wlin-col span="6">
        <div class="demoCol">6</div>
      </wlin-col>
      <wlin-col span="6">
        <div class="demoCol">6</div>
      </wlin-col>
      <wlin-col span="6">
        <div class="demoCol">6</div>
      </wlin-col>
      <wlin-col span="6">
        <div class="demoCol">6</div>
      </wlin-col>
    </wlin-row>

    <p>
      <strong>代码</strong>
    </p>
    <div class="demo-code">
      <pre class="language-html wlin-pre" v-html="computeStyle"></pre>
    </div>
    <div class="demo-code" style="margin-top:16px;">
      <pre class="language-html wlin-pre" v-html="computeContent"></pre>
    </div>
  </div>
</template>
<style scoped>
  * {
    box-sizing: border-box;
  }
  .demoRow{
    margin: 10px 0;
  }
  .demoCol {
    height: 50px;
    border: 1px solid #ccc;
    background: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
<script>
  import WlinRow from '../../../src/components/layout/row'
  import WlinCol from '../../../src/components/layout/col'
  import 'prismjs';
  import 'prismjs/themes/prism.css'
  const Prism = window.Prism

  export default {
    components: {WlinRow, WlinCol},
    computed: {
      computeStyle() {
        return Prism.highlight(this.style, Prism.languages.css, 'css') 
      },
      computeContent() {
        return Prism.highlight(this.content, Prism.languages.html, 'html') 
      },
    },
    data () {
      return {
      style: `* {
    box-sizing: border-box;
  }
  .demoRow{
    margin: 10px 0;
  }
  .demoCol {
    height: 50px;
    border: 1px solid #ccc;
    background: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }`,
        content: `
          <wlin-row class="demoRow" gutter="10">
            <wlin-col span="8">
              <div class="demoCol">8</div>
            </wlin-col>
            <wlin-col span="8">
              <div class="demoCol">8</div>
            </wlin-col>
            <wlin-col span="8">
              <div class="demoCol">8</div>
            </wlin-col>
          </wlin-row>
          <wlin-row class="demoRow" gutter="10">
            <wlin-col span="6">
              <div class="demoCol">6</div>
            </wlin-col>
            <wlin-col span="6">
              <div class="demoCol">6</div>
            </wlin-col>
            <wlin-col span="6">
              <div class="demoCol">6</div>
            </wlin-col>
            <wlin-col span="6">
              <div class="demoCol">6</div>
            </wlin-col>
          </wlin-row>



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
