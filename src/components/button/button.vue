<template>
  <button
    class="wlin-button"
    :class="{
      [`icon-${iconPosition}`]: true,
      [`wlin-button--${type}`]: true,
      [`wlin-button--circle`]: circle,
      [`wlin-button--plain`]: plain
    }"
    @click="$emit('click')"
  >
    <!-- button 点击后，注册一个click事件，被父级订阅 -->
    <wlin-icon v-if="loading" class="icon spinner" name="spinner"></wlin-icon>
    <wlin-icon v-if="icon && !loading" :name="icon"></wlin-icon>
    <div class="content"><slot /></div>
  </button>
</template>

<script>
import Icon from "../icon/icon";
export default {
  name: "wlinButton",
  components: {
    "wlin-icon": Icon
  },
  props: {
    type: {
      // 按钮类型： primary主色、success成功、info信息、warning警告、danger危险
      type: String,
      default: "",
      validator(value) {
        return ["primary", "success", "info", "warning", "danger"].includes(
          value
        );
      }
    },
    circle: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ""
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        // 进行接受父组件传来的iconPosition值，并进行校验其合法性
        return value === "left" || value === "right"; //只可传入这两个字符串作参数
      }
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
/* button组件内部样式 */
.wlin-button {
  font-size: 14px;
  height: 32px;
  padding: 0 1em;
  border-radius: 5px;
  border: 1px solid #999;
  background: white;
  //button组件采用flex布局，方便设置icon的方向
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    border-color: #666;
    opacity: 0.85;
  }
  &:active {
    background: #eee;
    opacity: 0.96;
    // color: #333;
  }
  &:focus {
    outline: none;
  }
  &:disabled {
    cursor: default;
  }
  //对子代icon、slot做位置的样式约定。默认icon放在左边
  > .icon {
    order: 1;
    margin-right: 0.1em;
  }
  > .content {
    order: 2;
  }
  //用户若设置icon在右侧，则改变order顺序
  &.icon-right {
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.1em;
    }
    > .content {
      order: 1;
    }
  }
  //设置子代loading动画
  > .spinner {
    animation: spin 2s linear infinite;
  }
  // shape
  &--circle {
    border-radius: 15px;
  }
  // button 颜色
  &--primary {
    background: #4d80f1;
    border-color: #4d80f1;
    color: #fff;
    &:hover {
      border-color: #4d80f1;
    }
    &:active {
      background: #4d80f1;
      opacity: 0.92;
    }
  }
  &--success {
    background: #34d19e;
    border-color: #34d19e;
    color: #fff;
    &:hover {
      border-color: #34d19e;
    }
    &:active {
      background: #34d19e;
      opacity: 0.92;
    }
  }
  &--info {
    background: #999;
    border-color: #999;
    color: #fff;
    &:hover {
      border-color: #999;
    }
    &:active {
      background: #999;
      opacity: 0.92;
    }
  }
  &--warning {
    background: #f91;
    border-color: #f91;
    color: #fff;
    &:hover {
      border-color: #f91;
    }
    &:active {
      background: #f91;
      opacity: 0.92;
    }
  }
  &--danger {
    background: #fa4351;
    border-color: #fa4351;
    color: #fff;
    &:hover {
      border-color: #fa4351;
    }
    &:active {
      background: #fa4351;
      opacity: 0.92;
    }
  }

  // 幽灵按钮
  &--plain {
    &.wlin-button--primary {
      // 主要按钮
      background: #edf2fe;
      border-color: #b8ccf9;
      color: #4d80f1;
      &:hover {
        border-color: #4d80f1;
        background: #4d80f1;
        color: #fff;
        opacity: 1;
      }
      &:active {
        background: #4d80f1;
        border-color: #4d80f1;
        color: #fff;
        opacity: 0.85;
      }
    }

    &.wlin-button--success {
      background: #ebfaf5;
      border-color: #aeedd8;
      color: #34d19e;
      &:hover {
        border-color: #34d19e;
        background: #34d19e;
        color: #fff;
        opacity: 1;
      }
      &:active {
        background: #34d19e;
        border-color: #34d19e;
        color: #fff;
        opacity: 0.85;
      }
    }

    &.wlin-button--info {
      background: #edeeed;
      border-color: rgb(196, 193, 193);
      color: #999;
      &:hover {
        border-color: #999;
        background: #999;
        color: #fff;
        opacity: 1;
      }
      &:active {
        background: #999;
        border-color: #999;
        color: #fff;
        opacity: 0.85;
      }
    }

    &.wlin-button--warning {
      background: #fff5e6;
      border-color: #ffd699;
      color: #f91;
      &:hover {
        border-color: #f91;
        background: #f91;
        color: #fff;
        opacity: 1;
      }
      &:active {
        background: #f91;
        border-color: #f91;
        color: #fff;
        opacity: 0.85;
      }
    }

    &.wlin-button--danger {
      background: #ffecee;
      border-color: #fdb4b9;
      color: #fa4351;
      &:hover {
        border-color: #fa4351;
        background: #fa4351;
        color: #fff;
        opacity: 1;
      }
      &:active {
        background: #fa4351;
        border-color: #fa4351;
        color: #fff;
        opacity: 0.85;
      }
    }
  }
}
//声明按钮加载时的loading旋转动画
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
