<template>
  <div style="padding-top: 16px;">
    <h2>可关闭的按钮</h2>
    <p>
      <strong>默认可自动关闭</strong>
    </p>

    <div>
      <wlin-button @click="onClickButton1">弹出</wlin-button>
      <wlin-button @click="onClickButton2">弹出</wlin-button>

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
  .wlin-toast {
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
  onClickButton1 () {
    this.$toast('可关闭的弹出框', {
      closeButton: {
        text: '知道了',
        callback: () => {
          console.log('他说知道了')
        }
      }
    })
  }
  onClickButton2 () {
    this.$toast('不可关闭的弹出框', {
      showCloseBtn: false
    })
  }
}`,
        content: `<div>
          <wlin-button @click="onClickButton1">上方弹出</wlin-button>
          <wlin-button :showCloseBtn="false" @click="onClickButton2">弹出</wlin-button>
        </div>`.replace(/^ {8}/gm, '').trim()
      }
    },
    methods: {
      onClickButton1 () {
        this.$toast('可关闭的弹出框', {
          closeButton: {
            text: '知道了',
            callback: () => {
              console.log('他说知道了')
            }
          }
        })
      },
      onClickButton2 () {
        this.$toast('不可关闭的弹出框', {
          showCloseBtn: false
        })
      },
    },
  }
</script>

<style lang="scss" scoped>
.wlin-pre {
  background-color: #f5f2f0 !important;
}
</style>