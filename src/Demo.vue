<template>
  <div>
    <!-- <div><wlin-button type="primary">test</wlin-button></div> -->
    <div>
      <!-- <wlin-cascader @change="handleCascaderChange" v-model="selected" height="200px" :source="source"></wlin-cascader> -->
      <wlin-carousel class="carousel-class" v-model="selected" :autoPlay="false" :reversePlay="false">
        <wlin-carousel-item name="1" class="box">
          <img src="@/assets/img/l_1.png" alt="">
        </wlin-carousel-item>

        <wlin-carousel-item name="2" class="box">
          <img src="@/assets/img/l_2.png" alt="">
        </wlin-carousel-item>

        <wlin-carousel-item name="3" class="box">
          <img src="@/assets/img/l_3.png" alt="">
        </wlin-carousel-item>

        <!-- <wlin-carousel-item name="3" class="box">
          <img src="@/assets/img/empty.png" alt="">
        </wlin-carousel-item> -->
      </wlin-carousel>
    </div>
    <!-- <div>123</div> -->
  </div>
</template>

<script>
import Carousel from './components/carousel/carousel'
import CarouselItem from './components/carousel/carousel-item'

export default {
  components: {
    // "wlin-button": Button,
    // "wlin-cascader": Cascader
    "wlin-carousel": Carousel,
    'wlin-carousel-item': CarouselItem
  },
  methods: {
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
