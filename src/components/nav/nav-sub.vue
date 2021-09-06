<template>
  <div class="wlin-nav-sub">
    <span class="wlin-nav-sub__title">
      <slot name="title" />
    </span>
    <div class="wlin-nav-sub__popover">
      <slot/>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'WlinNavSub',
    props: {
      
    },
  }
</script>

<style lang="scss" scoped>
.wlin-nav-sub {
  position: relative;
  padding: 10px 20px;
  &__popover {
    position: absolute;
    top: 100%;
    left: 0;
    border: 1px solid black;
    white-space: nowrap;
  }
}

</style>