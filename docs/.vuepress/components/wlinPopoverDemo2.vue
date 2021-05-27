<template>
  <div style="padding-top: 16px;">
    <h2>将触发方式改为 hover</h2>
    <p>
      <strong>预览</strong>
    </p>

  <div class="wrap" style="box-sizing:border-box;padding:10px;">
    <!-- popover组件 - top方向 -->
    <wlin-popover trigger="hover">
      <template>
        <div style="min-height: 30px;">popover-content</div>
      </template>
      <wlin-button slot="reference">点击</wlin-button>
    </wlin-popover>
    <!-- popover组件 - bottom方向 -->
    <wlin-popover position="bottom" trigger="hover">
      <template>
        <div style="min-height: 30px;">popover-content</div>
      </template>
      <wlin-button slot="reference">点击</wlin-button>
    </wlin-popover>
      <!-- popover组件 - left方向 -->
    <wlin-popover position="left" trigger="hover">
      <template>
        <div style="min-height: 30px;">popover-content</div>
      </template>
      <wlin-button slot="reference">点击</wlin-button>
    </wlin-popover>
    <!-- popover组件 - right方向 -->
    <wlin-popover position="right" trigger="hover">
      <template>
        <div style="min-height: 30px;">popover-content</div>
      </template>
      <wlin-button slot="reference">点击</wlin-button>
    </wlin-popover>
  </div>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<style>
</style>
<style scoped>
</style>
<script>
  import WlinButton from '../../../src/components/button/button'
  import WlinPopover from '../../../src/components/popover/popover'


  export default {
    components: {WlinButton, WlinPopover},
    data () {
      return {
        content: `
        <div class="wrap" style="box-sizing:border-box;padding:10px;">
            <wlin-popover trigger="hover">
              <template>
                <div style="min-height: 30px;">popover-content</div>
              </template>
              <wlin-button slot="reference">点击</wlin-button>
            </wlin-popover>
            <wlin-popover position="bottom" trigger="hover">
              <template>
                <div style="min-height: 30px;">popover-content</div>
              </template>
              <wlin-button slot="reference">点击</wlin-button>
            </wlin-popover>
            <wlin-popover position="left" trigger="hover">
              <template>
                <div style="min-height: 30px;">popover-content</div>
              </template>
              <wlin-button slot="reference">点击</wlin-button>
            </wlin-popover>
            <wlin-popover position="right" trigger="hover">
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