<template>
  <div>
    <!-- <div><wlin-button type="primary">test</wlin-button></div> -->
    <div>
      <wlin-cascader :source="source"></wlin-cascader>
      
    </div>
  </div>
</template>

<script>
import Button from "./components/button/button";
import Cascader from "./components/cascader/cascader";

export default {
  components: {
    "wlin-button": Button,
    "wlin-cascader": Cascader
  },
  data() {
    return {
      source: [{
        name: '浙江',
        children: [
          {
            name: '杭州',
            children: [
              { name: '上城' },
              { name: '下城' },
              { name: '江干' },
            ]
          },
          {
            name: '嘉兴',
            children: [
              { name: '南湖' },
              { name: '秀洲' },
              { name: '嘉善' },
            ]
          }
        ]
      }, {
        name: '福建',
        children: [
          {
            name: '福州',
            children: [
              { name: '鼓楼' },
              { name: '台江' },
              { name: '仓山' },
            ]
          },
        ]
      }, {
        name: '安徽',
        children: [
          {
            name: '合肥',
            children: [
              { name: '瑶海' },
              { name: '庐阳' },
            ]
          },
        ]
      }],
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  // margin: 0;
  // padding: 0;
  box-sizing: border-box;
}

body {
  font-size: 14px;
}
</style>
