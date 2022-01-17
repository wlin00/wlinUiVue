<template>
  <div style="padding-top: 16px;">
    <h2>支持 HTML</h2>
    <p>
      <strong>预览</strong>
    </p>

    <div class="wrap" style="box-sizing:border-box;padding:10px;">
      <!-- popover组件 - top方向 -->
      <wlin-popover>
        <template>
          <div style="min-height: 30px;">popover-content</div>
        </template>
        <wlin-button slot="reference">点击</wlin-button>
      </wlin-popover>
      <!-- popover组件 - bottom方向 -->
      <wlin-popover position="bottom">
        <template>
          <div style="min-height: 30px;">popover-content</div>
        </template>
        <wlin-button slot="reference">点击</wlin-button>
      </wlin-popover>
        <!-- popover组件 - left方向 -->
      <wlin-popover position="left">
        <template>
          <div style="min-height: 30px;">popover-content</div>
        </template>
        <wlin-button slot="reference">点击</wlin-button>
      </wlin-popover>
      <!-- popover组件 - right方向 -->
      <wlin-popover position="right">
        <template>
          <div style="min-height: 30px;">popover-content</div>
        </template>
        <wlin-button slot="reference">点击</wlin-button>
      </wlin-popover>
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
</style>
<script>
  import WlinButton from '../../../src/components/button/button'
  import WlinPopover from '../../../src/components/popover/popover'
  import 'prismjs';
  import 'prismjs/themes/prism.css'
  const Prism = window.Prism

  export default {
    components: {WlinButton, WlinPopover},
    computed: {
      computeContent() {
        return Prism.highlight(this.content, Prism.languages.html, 'html') 
      }
    },
    data () {
      return {
        content: `
  <div class="wrap" style="box-sizing:border-box;padding:10px;">
    <wlin-popover>
      <template>
        <div style="min-height: 30px;">popover-content</div>
      </template>
      <wlin-button slot="reference">点击</wlin-button>
    </wlin-popover>
    <wlin-popover position="bottom">
      <template>
        <div style="min-height: 30px;">popover-content</div>
      </template>
      <wlin-button slot="reference">点击</wlin-button>
    </wlin-popover>
    <wlin-popover position="left">
      <template>
        <div style="min-height: 30px;">popover-content</div>
      </template>
      <wlin-button slot="reference">点击</wlin-button>
    </wlin-popover>
    <wlin-popover position="right">
      <template>
        <div style="min-height: 30px;">popover-content</div>
      </template>
      <wlin-button slot="reference">点击</wlin-button>
    </wlin-popover>
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