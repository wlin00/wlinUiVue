<template>
  <div style="padding-top: 16px;">
    <h2>支持 HTML</h2>
    <p>
      <strong>预览</strong>
    </p>

    <div>
      <wlin-button @click="onClickButton">弹出</wlin-button>
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
  .gulu-toast {
    z-index: 30 !important;
  }
</style>
<style scoped>
  * {
    box-sizing: border-box;
  }

</style>
<script>
  import plugin from '../../../src/components/toast/toast-plugin'
  import WlinButton from '../../../src/components/button/button'
  import Vue from 'vue'
  import 'prismjs';
  import 'prismjs/themes/prism.css'
  const Prism = window.Prism

  Vue.use(plugin)

  export default {
    components: {WlinButton},
    computed: {
      computeJs() {
        return Prism.highlight(this.js, Prism.languages.javascript, 'javascript') 
      },
      computeContent() {
        return Prism.highlight(this.content, Prism.languages.html, 'html') 
      }
    },
    data () {
      return {
        js: `data () {
  onClickButton () {
    this.$toast('<strong style="color:red;">加粗的提示</strong>', {
      enableHtml: true
    })
  }
}`,
        content: ` <div>
          <wlin-button @click="onClickButton">上方弹出</wlin-button>
        </div>`.replace(/^ {8}/gm, '').trim()
      }
    },
    methods: {
      onClickButton () {
        this.$toast('<strong style="color:red;">加粗的提示</strong>', {
          enableHtml: true
        })
      }
    },
  }
</script>

<style lang="scss" scoped>
.wlin-pre {
  background-color: #f5f2f0 !important;
}
</style>