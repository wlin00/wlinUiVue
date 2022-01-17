<template>
  <div style="padding-top: 16px;">
    <h2>可支持移动端滑动切换</h2>
    <p>
      <strong>预览</strong>
    </p>
      <wlin-carousel 
        class="carousel-class" 
        v-model="selected" 
        :autoPlay="true" 
        :reversePlay="false" 
        :delay="3000"
      >
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
    <div class="demo-code">
      <pre class="language-html wlin-pre" v-html="computeStyle"></pre>
    </div>

    <div class="demo-code" style="margin-top:16px;">
      <pre class="language-html wlin-pre" v-html="computeContent"></pre>
    </div>
  </div>
</template>
<script>
import Carousel from '../../../src/components/carousel/carousel.vue'
import CarouselItem from '../../../src/components/carousel/carousel-item'
import 'prismjs';
import 'prismjs/themes/prism.css'
const Prism = window.Prism
  export default {
    name: 'wlinCarouselDemo1',
    components: {
      'wlin-carousel': Carousel,
      'wlin-carousel-item': CarouselItem
    },
    computed: {
      computeStyle() {
        return Prism.highlight(this.style, Prism.languages.css, 'css') 
      },
      computeContent() {
        return Prism.highlight(this.content, Prism.languages.html, 'html') 
      },
    },
    data () {
      return {
        selected: 'food',
        content: `
          <wlin-carousel 
          class="carousel-class" 
          v-model="selected" 
          :autoPlay="true" 
          :reversePlay="false" 
          :delay="3000"
        >
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
        style: `
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

<style lang="scss" scoped>
.wlin-pre {
  background-color: #f5f2f0 !important;
}
</style>