<template>
  <div style="padding-top: 16px;">
    <h2>普通模式</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div style="width:100%;box-sizing:border-box;padding:10px;">
      <wlin-collapse style="margin-bottom: 20px;" v-model="value" @change="handleCollapseChange">
        <wlin-collapse-item title='标题1'>内容1</wlin-collapse-item>
        <wlin-collapse-item title='标题2'>内容2</wlin-collapse-item>
        <wlin-collapse-item title='标题3'>内容3</wlin-collapse-item>
      </wlin-collapse>
    </div>

    <p>
      <strong>代码</strong>
    </p>
    
    <div class="demo-code" style="margin-top:16px;">
      <pre class="language-html wlin-pre" v-html="computeContent"></pre>
    </div>
    <div class="demo-code">
      <pre class="language-html wlin-pre" v-html="computeJs"></pre>
    </div>
  </div>
</template>
<script>
  import WlinCollapse from '../../../src/components/collapse/collapse'
  import wlinCollapseItem from '../../../src/components/collapse/collapse-item'
  import 'prismjs';
  import 'prismjs/themes/prism.css'
  const Prism = window.Prism

  export default {
    components: {WlinCollapse, wlinCollapseItem},
    methods: {
      handleCollapseChange(val) {
        console.log('collapse-change', val)
      }
    },
    computed: {
      computeJs() {
        return Prism.highlight(this.js, Prism.languages.css, 'css') 
      },
      computeContent() {
        return Prism.highlight(this.content, Prism.languages.html, 'html') 
      },
    },
    data () {
      return {
        value: ['标题1', '标题3'],
        js: `data () {
    return {
      data: {
        value: ['标题1', '标题3']
      }
    }
  },
  methods: {
    handleCollapseChange(val) {
      console.log('collapse-change', val)
    }
  }`,
        content: `
          <div style="width:100%;box-sizing:border-box;padding:10px;">
            <wlin-collapse style="margin-bottom: 20px;" v-model="value" @change="handleCollapseChange">
              <wlin-collapse-item title='标题1'>内容1</wlin-collapse-item>
              <wlin-collapse-item title='标题2'>内容2</wlin-collapse-item>
              <wlin-collapse-item title='标题3'>内容3</wlin-collapse-item>
            </wlin-collapse>
          </div>
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