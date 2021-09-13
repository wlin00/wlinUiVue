<template>
  <div>
    <wlin-nav 
      v-model="selected"
      :multiple="false"
      @change="handleChange"
      :vertical="false"
      style="margin-bottom: 300px;"
    >
      <wlin-nav-item name="home">首页</wlin-nav-item>
      <wlin-nav-sub name="about">
        <template slot="title">关于</template>
        <wlin-nav-item name="about1">关于1</wlin-nav-item>
        <wlin-nav-item name="about2">关于2</wlin-nav-item>
        <wlin-nav-sub name="about3">
          <template slot="title">关于3</template>
          <wlin-nav-item name="about31">关于3-1</wlin-nav-item>
          <wlin-nav-item name="about32">关于3-2</wlin-nav-item>
          <wlin-nav-sub name="about33">
            <template slot="title">关于3-3</template>
            <wlin-nav-item name="about331">关于3-3-1</wlin-nav-item>
            <wlin-nav-item name="about332">关于3-3-2</wlin-nav-item>
          </wlin-nav-sub>
        </wlin-nav-sub>
      </wlin-nav-sub>
      <wlin-nav-item name="mine">我的</wlin-nav-item>
    </wlin-nav>



    <wlin-nav 
      v-model="selected"
      :multiple="false"
      @change="handleChange"
      :vertical="true"
    >
      <wlin-nav-item name="home">首页</wlin-nav-item>
      <wlin-nav-sub name="about">
        <template slot="title">关于</template>
        <wlin-nav-item name="about1">关于1</wlin-nav-item>
        <wlin-nav-item name="about2">关于2</wlin-nav-item>
        <wlin-nav-sub name="about3">
          <template slot="title">关于3</template>
          <wlin-nav-item name="about31">关于3-1</wlin-nav-item>
          <wlin-nav-item name="about32">关于3-2</wlin-nav-item>
          <wlin-nav-sub name="about33">
            <template slot="title">关于3-3</template>
            <wlin-nav-item name="about331">关于3-3-1</wlin-nav-item>
            <wlin-nav-item name="about332">关于3-3-2</wlin-nav-item>
          </wlin-nav-sub>
        </wlin-nav-sub>
      </wlin-nav-sub>
      <wlin-nav-item name="mine">我的</wlin-nav-item>
    </wlin-nav>
  </div>

  
</template>

<script>
import Nav from './components/nav/nav.vue'
import NavItem from './components/nav/nav-item.vue'
import NavSub from './components/nav/nav-sub.vue'

export default {
  components: {
    "wlin-nav": Nav,
    "wlin-nav-item": NavItem,
    "wlin-nav-sub": NavSub,
  },
  methods: {
    handleChange(value, path) {
      console.log('cg', value, 'path', path)
    }
  },
  mounted () {
  },
  data() {
    return {
      // source: [{
      //   name: '浙江',
      //   id: '1',
      //   children: [
      //     {
      //       name: '杭州',
      //       id: '2',
      //       children: [
      //         { name: '上城', id: '3' },
      //         { name: '下城', id: '4' },
      //         { name: '江干', id: '5' },
      //       ]
      //     },
      //     {
      //       name: '嘉兴',
      //       id: '6',
      //       children: [
      //         { name: '南湖', id: '7', children: [{ name: '南湖A', id:'21' }] },
      //         { name: '秀洲', id: '8' },
      //         { name: '嘉善', id: '9' },
      //       ]
      //     }
      //   ]
      // }, {
      //   name: '福建',
      //   id: '10',
      //   children: [
      //     {
      //       name: '福州',
      //       id: '11',
      //       children: [
      //         { name: '鼓楼', id: '12' },
      //         { name: '台江', id: '13' },
      //         { name: '仓山', id: '14' },
      //       ]
      //     },
      //   ]
      // }, {
      //   name: '安徽',
      //   id: '15',
      //   children: [
      //     {
      //       name: '合肥',
      //       id: '16',
      //       children: [
      //         { name: '瑶海', id: '17' },
      //         { name: '庐阳', id: '18' },
      //       ]
      //     },
      //   ]
      // }],
      selected: ['about331'],
  
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-size: 14px;
}
.box {
  // width: 100%;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  background: #ddd;
  >img {
    width: 100%;
    height: 100%;
  }

  // height: 100px;
  // border: 1px solid red;
}
.carousel-class {
  width: 100%;
  height: 350px;

}
</style>
