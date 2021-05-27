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
    <pre><code>{{content}}</code></pre>
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
            <wlin-button @click="onClickButton">上方弹出</wlin-button>
            <wlin-button :showCloseBtn="false" @click="onClickButton">弹出</wlin-button>
          </div>
          
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
      `.replace(/^ {8}/gm, '').trim()
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