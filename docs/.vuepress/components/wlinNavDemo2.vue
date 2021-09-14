<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>支持水平或竖直模式</strong>
    </p>
    <wlin-nav 
      v-model="selected"
      :multiple="false"
      @change="handleChange"
      :vertical="false"
    >
      <wlin-nav-item name="home">
        <a href="https://baidu.com" target="_blank">首页</a>
      </wlin-nav-item>
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
import Nav from '../../../src/components/nav/nav'
import NavItem from '../../../src/components/nav/nav-item'
import NavSub from '../../../src/components/nav/nav-sub'

  export default {
    name: 'wlinCarouselDemo1',
    components: {
      'wlin-nav': Nav,
      'wlin-nav-item': NavItem,
      'wlin-nav-sub': NavSub
    },
    data () {
      return {
        selected: ['about331'],
        content: `
  <wlin-nav 
      v-model="selected"
      :multiple="false"
      @change="handleChange"
      :vertical="false"
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
      `.replace(/^ {8}/gm, '').trim(),
        content1: `
        data() {
                return {
                  selected: ['about331'],
                }
              },
              methods: {
                handleChange(value, path) {
                  console.log('cg', value, 'path', path)
                }
              }
      `.replace(/^ {8}/gm, '').trim(),
      }
    },
    methods: {
      handleChange(value, path) {
        console.log('cg', value, 'path', path)
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