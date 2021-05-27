<template>
  <div class="header">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "WlinHeader"
};
</script>

<style lang="scss" scoped>
.header {
  height: 100px;
}
</style>
