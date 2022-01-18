<template>
  <div>
    <wlin-switch v-model="bool" />
  </div>

  
</template>

<script>
import Switch from './components/switch/switch.vue'

export default {
  components: {
    "wlin-switch": Switch,
  },
  methods: {
 
  },
  mounted () {
  },
  data() {
    return {
      bool: false
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
