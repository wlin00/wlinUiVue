<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <wlin-cascader @change="handleCascaderChange" v-model="selected" height="200px" :source="source"></wlin-cascader>
    <p>
      <strong>代码</strong>
    </p>
    <div class="demo-code">
      <pre class="language-html wlin-pre" v-html="computeContent"></pre>
    </div>

    <div class="demo-code" style="margin-top:16px;">
      <pre class="language-html wlin-pre" v-html="computeContent1"></pre>
    </div>
  </div>
</template>
<script>
  import Cascader from '../../../src/components/cascader/cascader'
  import 'prismjs';
  import 'prismjs/themes/prism.css'
  const Prism = window.Prism
  
  export default {
    name: 'wlinInputDemo1',
    components: {
      'wlin-cascader': Cascader,
    },
    computed: {
      computeContent() {
        return Prism.highlight(this.content, Prism.languages.html, 'html') 
      },
      computeContent1() {
        return Prism.highlight(this.content1, Prism.languages.javascript, 'javascript') 
      }
    },
    data () {
      return {
        selected: [],
        source: [{
          name: '浙江',
          id: '1',
          children: [
            {
              name: '杭州',
              id: '2',
              children: [
                { name: '上城', id: '3' },
                { name: '下城', id: '4' },
                { name: '江干', id: '5' },
              ]
            },
            {
              name: '嘉兴',
              id: '6',
              children: [
                { name: '南湖', id: '7', children: [{ name: '南湖A', id:'21' }] },
                { name: '秀洲', id: '8' },
                { name: '嘉善', id: '9' },
              ]
            }
          ]
        }, {
          name: '福建',
          id: '10',
          children: [
            {
              name: '福州',
              id: '11',
              children: [
                { name: '鼓楼', id: '12' },
                { name: '台江', id: '13' },
                { name: '仓山', id: '14' },
              ]
            },
          ]
        }, {
          name: '安徽',
          id: '15',
          children: [
            {
              name: '合肥',
              id: '16',
              children: [
                { name: '瑶海', id: '17' },
                { name: '庐阳', id: '18' },
              ]
            },
          ]
        }],
        content: `
          <wlin-cascader 
            v-model="selected"
            height="200px"
            :source="source"
            @change="handleCascaderChange"
          ></wlin-cascader>   
      `.replace(/^ {8}/gm, '').trim(),
        content1: `data () {
            return {
              selected: [],
              source: [{
                name: '浙江',
                id: '1',
                children: [
                  {
                    name: '杭州',
                    id: '2',
                    children: [
                      { name: '上城', id: '3' },
                      { name: '下城', id: '4' },
                      { name: '江干', id: '5' },
                    ]
                  },
                  {
                    name: '嘉兴',
                    id: '6',
                    children: [
                      { name: '南湖', id: '7', children: [{ name: '南湖A', id:'21' }] },
                      { name: '秀洲', id: '8' },
                      { name: '嘉善', id: '9' },
                    ]
                  }
                ]
              }, {
                name: '福建',
                id: '10',
                children: [
                  {
                    name: '福州',
                    id: '11',
                    children: [
                      { name: '鼓楼', id: '12' },
                      { name: '台江', id: '13' },
                      { name: '仓山', id: '14' },
                    ]
                  },
                ]
              }, {
                name: '安徽',
                id: '15',
                children: [
                  {
                    name: '合肥',
                    id: '16',
                    children: [
                      { name: '瑶海', id: '17' },
                      { name: '庐阳', id: '18' },
                    ]
                  },
                ]
              }]
            }
  }
      `.replace(/^ {8}/gm, '').trim(),
      }
    },
    methods: {
      handleCascaderChange(e) {
        console.log('cg', e)
      }
    }
  }
</script>

<style lang="scss" scoped>
.wlin-pre {
  background-color: #f5f2f0 !important;
}
</style>