<template>
  <div>
    <!-- <div><wlin-button type="primary">test</wlin-button></div> -->
    <div>
      <!-- <wlin-cascader @change="handleCascaderChange" v-model="selected" height="200px" :source="source"></wlin-cascader> -->
      <wlin-slider class="slider-class" v-model="selected" :autoPlay="true" :reversePlay="false">
        <wlin-slider-item name="1" class="box">
          <img src="@/assets/img/empty.png" alt="">
        </wlin-slider-item>

        <wlin-slider-item name="2" class="box">
          <img src="@/assets/img/empty.png" alt="">
        </wlin-slider-item>

        <wlin-slider-item name="3" class="box">
          <img src="@/assets/img/empty.png" alt="">
        </wlin-slider-item>

        <!-- <wlin-slider-item name="3" class="box">
          <img src="@/assets/img/empty.png" alt="">
        </wlin-slider-item> -->
      </wlin-slider>
    </div>
    <!-- <div>123</div> -->
  </div>
</template>

<script>
// import Button from "./components/button/button";
// import Cascader from "./components/cascader/cascader";
import Slider from './components/slider/slider.vue'
import SliderItem from './components/slider/slider-item.vue'


export default {
  components: {
    // "wlin-button": Button,
    // "wlin-cascader": Cascader
    "wlin-slider": Slider,
    'wlin-slider-item': SliderItem
  },
  methods: {
    // handleCascaderChange(e) {
    //   console.log('cg', e)
    // }
  },
  mounted () {
  },
  data() {
    return {
      selected: '1',
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

  // height: 100px;
  // border: 1px solid red;
}
.slider-class {
  width: 100%;
  height: 350px;

}
</style>
