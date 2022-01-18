<template>
  <div style="padding-top: 16px;">
    <h2>常规使用</h2>

    <div class="wrap" style="box-sizing:border-box;position:relative;">
      <wlin-button @click="showDialog">打开对话框</wlin-button>
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

    <wlin-dialog v-model="visible" :closeOnClickOverlay="false" :onConfirm="f1" :onCancel="f2">
      <template v-slot:content>
        <strong>hi</strong>
        <div>hi2</div>
      </template>
      <template v-slot:title>
        <strong>加粗的标题</strong>
      </template>
    </wlin-dialog>
  </div>
</template>
<style>
</style>
<style scoped>
.btn {
  z-index: 100;
}
</style>
<script>
  import WlinDialog from '../../../src/components/dialog/dialog'
  import WlinButton from '../../../src/components/button/button'
  import 'prismjs';
  import 'prismjs/themes/prism.css'
  const Prism = window.Prism

  export default {
    components: {
      WlinDialog,
      WlinButton,
    },
    computed: {
      computeContent() {
        return Prism.highlight(this.content, Prism.languages.html, 'html') 
      },
      computeJs() {
        return Prism.highlight(this.js, Prism.languages.javascript, 'javascript') 
      },
    },
    methods: {
      showDialog() {
        this.visible = true
      },
      f1() {
        console.log('ok')
      },
      f2() {
        console.log('cancel')
        return false
      },
    },
    data () {
      return {
        visible: false,
        js: `data() {
    return {
      visible: false,
    }
  },
  methods: {
    showDialog() {
      this.visible = true
    },
    f1() {
      console.log('ok')
    },
    f2() {
      console.log('cancel')
      return false
    },
  }`,
        content: `
  <wlin-button @click="showDialog">打开对话框</wlin-button>
  <wlin-dialog v-model="visible" :closeOnClickOverlay="false" :onConfirm="f1" :onCancel="f2">
    <template v-slot:content>
      <strong>hi</strong>
      <div>hi2</div>
    </template>
    <template v-slot:title>
      <strong>加粗的标题</strong>
    </template>
  </wlin-dialog>
      `.replace(/^ {8}/gm, '').trim()
      }
    },
  }
</script>

<style lang="scss" scoped>
.wlin-pre {
  background-color: #f5f2f0 !important;
}
</style>