<template>
  <div>
    <p>段落nnnn</p>
    <p>段落nnnn</p>
    <p>段落nnnn</p>
    <p>段落nnnn</p>
    <div style="display:flex;justify-content:center;">
      <div style="width:600px">
        <wlin-sticky distance="100">
          <div style="border:1px solid red;">sticky-inner</div>
        </wlin-sticky>
      </div>
    </div>
    <p>段落nnnn</p>
    <p>段落nnnn</p>
    <p>段落nnnn</p>
    <p>段落nnnn</p>
    <p>段落nnnn</p>
    <p>段落nnnn</p>
    <p>段落nnnn</p>
    <p>段落nnnn</p>
    <p>段落nnnn</p>
    <p>段落nnnn</p>
    <p>段落nnnn</p>
    <p>段落nnnn</p>
        <p>段落nnnn</p>
    <p>段落nnnn</p>
    <p>段落nnnn</p>
    <p>段落nnnn</p>
    <p>段落nnnn</p>
    <p>段落nnnn</p>
    <p>段落nnnn</p>
    <p>段落nnnn</p>
    <p>段落nnnn</p>
    <p>段落nnnn</p>
    <p>段落nnnn</p>
    <p>段落nnnn</p>
        <p>段落nnnn</p>
    <p>段落nnnn</p>
    <p>段落nnnn</p>
    <p>段落nnnn</p>
    <p>段落nnnn</p>
    <p>段落nnnn</p>
    <p>段落nnnn</p>
    <p>段落nnnn</p>
    <p>段落nnnn</p>
    <p>段落nnnn</p>
    <p>段落nnnn</p>
    <p>段落nnnn</p>
 

  </div>

  
</template>

<script>
import Sticky from './components/sticky/sticky.vue'

export default {
  components: {
    "wlin-sticky": Sticky,
  },
  methods: {
 
  },
  mounted () {
  },
  data() {
    return {
      
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
