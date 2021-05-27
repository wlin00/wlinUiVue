<template>
  <div>
    <wlin-button type="primary">test</wlin-button>
  </div>
</template>

<script>
import Button from "./components/button/button";
export default {
  components: {
    "wlin-button": Button
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
