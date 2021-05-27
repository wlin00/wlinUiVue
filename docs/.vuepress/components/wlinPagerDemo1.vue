<template>
  <div style="padding-top: 16px;">
    <h2>简易模式</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div style="width:100%;box-sizing:border-box;padding:10px;">
      <wlin-pager 
        v-model="pageNo" 
        :total-page="pageSize" 
        :page-size-change="onPageSizeChange"
        @change="onPageChange"
        :warn-call-back="handleWarn"
        :hide-if-one-page="false"
        :simple="true"
      ></wlin-pager>
    </div>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import WlinPager from '../../../src/components/pager/pager'

  export default {
    components: {WlinPager},
    methods: {
      onPageSizeChange(e) {
        //pageSize改变的回调
        console.log('pageSize',e)
      },
      onPageChange(e){
        //pageNo改变的回调
        console.log(e)
      },
      handleWarn(){
        console.warn('currentPage should be greater than 1 and lower than totalPage')
      },
    },
    data () {
      return {
        pageNo: 1,
        pageSize: 150,
        content: `
          data:{
            pageNo: 1,
            pageSize: 150,
          }

          <div style="width:100%;box-sizing:border-box;padding:10px;">
            <wlin-pager 
              v-model="pageNo" 
              :total-page="pageSize" 
              :page-size-change="onPageSizeChange"
              @change="onPageChange"
              :warn-call-back="handleWarn"
              :hide-if-one-page="false"
              :simple="true"
            ></wlin-pager>
          </div>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>