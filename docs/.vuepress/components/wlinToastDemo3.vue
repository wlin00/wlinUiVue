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
    <pre><code>{{content}}</code></pre>
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

  Vue.use(plugin)

  export default {
    components: {WlinButton},
    data () {
      return {
        content: `
          <style>
            .wlin-toast {
              z-index: 30;
            }
          </style>

          <div>
            <g-button @click="onClickButton">上方弹出</g-button>
          </div>

          methods: {
            onClickButton () {
              this.$toast('<strong style="color:red;">加粗的提示</strong>', {
                enableHtml: true
              })
            }
          },
      `.replace(/^ {8}/gm, '').trim()
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