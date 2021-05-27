<template>
  <div class="col" :class="colClass" :style="colStyle">
    <div style="border: 1px solid green;height:100px">
      <slot></slot>
    </div>
  </div>
</template>

<script>
let validator = value => {
  let keys = Object.keys(value);
  let flag = true; //检查传入的参数phone是否是一个符合条件的对象格式,主要比较对象的key是否是keys集合的子集
  keys.forEach(e => {
    if (!["span", "offset"].includes(e)) {
      flag = false;
    }
  });
  return flag;
};
export default {
  name: "wlinCol",
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    },
    //接受phone参数可用于组件的响应式需求
    phone: {
      type: Object,
      validator
    },
    ipad: {
      type: Object,
      validator
    },
    pc: {
      type: Object,
      validator
    }
  },
  data() {
    return {
      gutter: 0
    };
  },
  computed: {
    colClass() {
      let { span, offset, phone, ipad, pc } = this;
      //检查是否传入参数phone，若是则添加一个phone相关的响应式class数组，在计算属性返回值的列表中加入解构后的phone-class数组元素
      let phoneList = [],
        ipadList = [],
        pcList = [];
      if (phone) {
        phoneList = [`col-phone-${phone.span}`, `offset-phone-${phone.offset}`];
      }
      if (ipad) {
        ipadList = [`col-ipad-${ipad.span}`, `offset-ipad-${ipad.offset}`];
      }
      if (pc) {
        pcList = [`col-pc-${pc.span}`, `offset-pc-${pc.offset}`];
      }
      return [
        span && `col_${span}`,
        offset && `offset_${offset}`,
        ...phoneList,
        ...ipadList,
        ...pcList
      ];
    },
    colStyle() {
      let { gutter } = this;
      return {
        paddingLeft: gutter ? this.gutter / 2 + "px" : 0,
        paddingRight: gutter ? this.gutter / 2 + "px" : 0
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.col {
  height: 100px;

  //使用scss-loops循环遍历，给每个指定class加样式
  $class: col_;
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      width: ($n/24) * 100%; //计算每种col对应的宽度
    }
  }

  $class2: offset_;
  @for $n from 1 through 24 {
    &.#{$class2}#{$n} {
      margin-left: ($n/24) * 100%; //计算每种col对应的距离左边的偏移量
    }
  }

  //响应式，若添加phone属性，则将col列宽度和offset值改为phone属性中对应的span、offset值
  //media生效后会覆盖之前的width样式
  @media (max-width: 576px) {
    //使用scss-loops循环遍历，给每个指定class加样式
    $class: col-phone-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: ($n/24) * 100%; //计算每种col对应的宽度
      }
    }
    $class2: offset-phone-;
    @for $n from 1 through 24 {
      &.#{$class2}#{$n} {
        margin-left: ($n/24) * 100%; //计算每种col对应的距离左边的偏移量
      }
    }
  }

  @media (min-width: 577px) and (max-width: 1199px) {
    //使用scss-loops循环遍历，给每个指定class加样式
    $class: col-ipad-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: ($n/24) * 100%; //计算每种col对应的宽度
      }
    }
    $class2: offset-ipad-;
    @for $n from 1 through 24 {
      &.#{$class2}#{$n} {
        margin-left: ($n/24) * 100%; //计算每种col对应的距离左边的偏移量
      }
    }
  }

  @media (min-width: 1200px) {
    //使用scss-loops循环遍历，给每个指定class加样式
    $class: col-pc-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: ($n/24) * 100%; //计算每种col对应的宽度
      }
    }
    $class2: offset-pc-;
    @for $n from 1 through 24 {
      &.#{$class2}#{$n} {
        margin-left: ($n/24) * 100%; //计算每种col对应的距离左边的偏移量
      }
    }
  }
}
</style>
