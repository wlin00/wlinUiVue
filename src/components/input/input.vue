<template>
  <div class="wlin-input-wrapper" :class="{ error }">
    <input
      type="text"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      :error="error"
      @change="$emit('change', $event.target.value)"
      @input="$emit('input', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
    />
    <template v-if="error">
      <wlin-icon name="error" class="icon-error"></wlin-icon>
      <span class="errorMessage">{{ error }}</span>
    </template>
  </div>
</template>

<script>
import Icon from "../icon/icon";
export default {
  components: {
    "wlin-icon": Icon
  },
  name: "wlinInput",
  props: {
    value: {
      //input接受的value值
      type: String,
      default: ""
    },
    disabled: {
      //可选项 - input是否禁用
      type: Boolean,
      default: false
    },
    readonly: {
      //可选项 - input是否只读
      type: Boolean,
      default: false
    },
    error: {
      //input错误的传参
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$red: #f1453d;
.wlin-input-wrapper {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  > :not(:last-child) {
    margin-right: 0.5em;
  }
  > input {
    height: 32px;
    border: 1px solid $border-color;
    border-radius: 4px;
    padding: 0 8px;
    font-size: inherit;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &[disabled],
    &[readonly] {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }
  }
  &.error {
    > input {
      border-color: $red;
    }
  }
  .icon-error {
    fill: $red;
  }
  .errorMessage {
    color: $red;
  }
}
</style>
