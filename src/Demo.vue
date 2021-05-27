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

// :root {
//   /* 声明变量，让用户可以控制组件的样式 */
//   --button-height: 32px;
//   --font-size: 14px;
//   --button-bg: white;
//   --button-active-bg: #eee;
//   --border-radius: 4px;
//   --color: #333;
//   --border-color: #999;
//   --border-color-hover: #666;
// }

body {
  // font-size: 14px;
}
</style>
