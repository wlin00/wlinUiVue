<template>
  <div style="padding-top: 16px;">
    <h2>基本用法：可设置distance属性来改变sticky吸顶距离</h2>

    <div class="wrap" style="box-sizing:border-box;position:relative;">
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <wlin-sticky :distance="210">
        <wlin-button class="btn" type="primary" plain>吸顶距离</wlin-button>
      </wlin-sticky>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <wlin-sticky :distance="60">
        <wlin-button class="btn" type="success" plain>基本用法</wlin-button>
      </wlin-sticky>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>

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
.btn {
  z-index: 100;
}
</style>
<script>
  import WlinButton from '../../../src/components/button/button'
  import WlinSticky from '../../../src/components/sticky/sticky'


  export default {
    components: {WlinButton, WlinSticky},
    data () {
      return {
        content: `
    <div class="wrap" style="box-sizing:border-box;position:relative;">
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <wlin-sticky :distance="150">
      <wlin-button class="btn" type="primary" plain>吸顶距离</wlin-button>
    </wlin-sticky>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <wlin-sticky>
      <wlin-button class="btn" type="success" plain>基本用法</wlin-button>
    </wlin-sticky>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
  </div>
      `.replace(/^ {8}/gm, '').trim()
      }
    },
    methods: {
    },
  }
</script>