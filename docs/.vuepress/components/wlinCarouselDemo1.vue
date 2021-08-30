<template>
  <div style="padding-top: 16px;">
    <h2>可支持移动端滑动切换</h2>
    <p>
      <strong>预览</strong>
    </p>
      <wlin-carousel class="carousel-class" v-model="selected" :autoPlay="true" :reversePlay="false">
        <wlin-carousel-item name="food" class="box">
          <img src="../../../src/assets/img/l_1.png" alt="">
        </wlin-carousel-item>

        <wlin-carousel-item name="water" class="box">
          <img src="../../../src/assets/img/l_2.png" alt="">
        </wlin-carousel-item>

        <wlin-carousel-item name="life" class="box">
          <img src="../../../src/assets/img/l_3.png" alt="">
        </wlin-carousel-item>
      </wlin-carousel>
    <p>
      <strong>代码</strong>
    </p>
    <pre style="margin-bottom:10px;">
      <code>{{content}}</code>
    </pre>

    <pre>
      <code>{{content1}}</code>
    </pre>
  </div>
</template>
<script>
import Carousel from '../../../src/components/carousel/carousel'
import CarouselItem from '../../../src/components/carousel/carousel-item'

  export default {
    name: 'wlinCarouselDemo1',
    components: {
      'wlin-carousel': Carousel,
      'wlin-carousel-item': CarouselItem
    },
    data () {
      return {
        selected: 'food',
        content: `
  <wlin-carousel class="carousel-class" v-model="selected" :autoPlay="true" :reversePlay="false">
              <wlin-carousel-item name="food" class="box">
                <img src="@/assets/img/empty.png" alt="">
              </wlin-carousel-item>

              <wlin-carousel-item name="water" class="box">
                <img src="@/assets/img/empty.png" alt="">
              </wlin-carousel-item>

              <wlin-carousel-item name="life" class="box">
                <img src="@/assets/img/empty.png" alt="">
              </wlin-carousel-item>
            </wlin-carousel>
      `.replace(/^ {8}/gm, '').trim(),
        content1: `
    .box {
                align-items: center;
                justify-content: center;
                font-size: 30px;
                background: #ddd;
              }
              .carousel-class {
                width: 100%;
                height: 350px;
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

<style lang="scss">
.box {
  align-items: center;
  justify-content: center;
  font-size: 30px;
  background: #ddd;
  >img {
    width: 100%;
    height: 100%;
  }
}
.carousel-class {
  width: 100%;
  height: 350px;
}
</style>