<template>
  <button class="wlin-switch" :class="{'checked': value, 'disabled': disabled}" @click="toggle">
    <span class="wlin-switch__span"></span>
  </button>
</template>
<script lang="ts">
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    disabled: Boolean,
  },
  methods: {
    toggle() {
      if (this.disabled) {
        return
      }
      this.$emit('input', !this.value)
    }
  },
}
</script>
<style lang="scss">
  $h: 22px;
  $h2: $h - 4px;
  $slide-to-left: 2px;
  .wlin-switch {
    height: $h; 
    width: $h * 2; 
    border: none; 
    background: #bfbfbf; 
    border-radius: $h/2; 
    position: relative;
    cursor: pointer;

    &__span {
      transition: all .2s;
      position: absolute;
      top: 2px;
      // left: 2px;
      left: $slide-to-left;
      height: $h2;
      width: $h2;
      background: #fff;
      border-radius: $h2 / 2;
    }
    &:active {
      > span { width: $h2 + 4px; }
    }
    &:focus {
      outline: none;
    }
    &.checked {
      background: #39f;
      > span {
        left: calc(100% - #{$h2} - 2px);
      }
      &:active {
        > span { width: $h2 + 4px; margin-left: -4px; }
      }
    }
    &.disabled {
      cursor: not-allowed;
    }
  }

  
</style>