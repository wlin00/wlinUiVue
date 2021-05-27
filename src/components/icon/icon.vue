<template>
  <svg class="icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
import "./iconFont";
import "./svg";
export default {
  name: "wlinIcon",
  props: {
    name: {
      type: String,
      default: ""
    }
  }
};
</script>

<style>
.icon {
  width: 1em;
  height: 1em;
}
</style>
