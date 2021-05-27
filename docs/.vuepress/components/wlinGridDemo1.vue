<template>
  <div style="padding-top: 16px;">
    <h2>24格网格</h2>
    <p>
      <strong>预览</strong>
    </p>
    <wlin-row class="demoRow">
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

    <wlin-row class="demoRow">
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

    <wlin-row class="demoRow">
      <wlin-col span="4">
        <div class="demoCol">4</div>
      </wlin-col>
      <wlin-col span="4">
        <div class="demoCol">4</div>
      </wlin-col>
      <wlin-col span="4">
        <div class="demoCol">4</div>
      </wlin-col>
      <wlin-col span="4">
        <div class="demoCol">4</div>
      </wlin-col>
      <wlin-col span="4">
        <div class="demoCol">4</div>
      </wlin-col>
      <wlin-col span="4">
        <div class="demoCol">4</div>
      </wlin-col>
    </wlin-row>

    <wlin-row class="demoRow">
      <wlin-col span="2">
        <div class="demoCol">2</div>
      </wlin-col>
      <wlin-col span="2">
        <div class="demoCol">2</div>
      </wlin-col>
      <wlin-col span="2">
        <div class="demoCol">2</div>
      </wlin-col>
      <wlin-col span="2">
        <div class="demoCol">2</div>
      </wlin-col>
      <wlin-col span="2">
        <div class="demoCol">2</div>
      </wlin-col>
      <wlin-col span="2">
        <div class="demoCol">2</div>
      </wlin-col>
      <wlin-col span="2">
        <div class="demoCol">2</div>
      </wlin-col>
      <wlin-col span="2">
        <div class="demoCol">2</div>
      </wlin-col>
      <wlin-col span="2">
        <div class="demoCol">2</div>
      </wlin-col>
      <wlin-col span="2">
        <div class="demoCol">2</div>
      </wlin-col>
      <wlin-col span="2">
        <div class="demoCol">2</div>
      </wlin-col>
      <wlin-col span="2">
        <div class="demoCol">2</div>
      </wlin-col>
    </wlin-row>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
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

  export default {
    components: {WlinRow, WlinCol},
    data () {
      return {
        content: `
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

          <wlin-row class="demoRow">
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

          <wlin-row class="demoRow">
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

          <wlin-row class="demoRow">
            <wlin-col span="4">
              <div class="demoCol">4</div>
            </wlin-col>
            <wlin-col span="4">
              <div class="demoCol">4</div>
            </wlin-col>
            <wlin-col span="4">
              <div class="demoCol">4</div>
            </wlin-col>
            <wlin-col span="4">
              <div class="demoCol">4</div>
            </wlin-col>
            <wlin-col span="4">
              <div class="demoCol">4</div>
            </wlin-col>
            <wlin-col span="4">
              <div class="demoCol">4</div>
            </wlin-col>
          </wlin-row>

          <wlin-row class="demoRow">
            <wlin-col span="2">
              <div class="demoCol">2</div>
            </wlin-col>
            <wlin-col span="2">
              <div class="demoCol">2</div>
            </wlin-col>
            <wlin-col span="2">
              <div class="demoCol">2</div>
            </wlin-col>
            <wlin-col span="2">
              <div class="demoCol">2</div>
            </wlin-col>
            <wlin-col span="2">
              <div class="demoCol">2</div>
            </wlin-col>
            <wlin-col span="2">
              <div class="demoCol">2</div>
            </wlin-col>
            <wlin-col span="2">
              <div class="demoCol">2</div>
            </wlin-col>
            <wlin-col span="2">
              <div class="demoCol">2</div>
            </wlin-col>
            <wlin-col span="2">
              <div class="demoCol">2</div>
            </wlin-col>
            <wlin-col span="2">
              <div class="demoCol">2</div>
            </wlin-col>
            <wlin-col span="2">
              <div class="demoCol">2</div>
            </wlin-col>
            <wlin-col span="2">
              <div class="demoCol">2</div>
            </wlin-col>
          </wlin-row>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>