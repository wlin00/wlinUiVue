<template>
  <div class="wlin-pager" v-if="!(hideIfOnePage && totalPage === 1)">
    <template v-if="!simple">
      <span
        class="wlin-pager-nav prev"
        :class="{ disabled: value === 1 }"
        @click="updatePage(value - 1)"
      >
        <wlin-icon name="left"></wlin-icon>
      </span>
      <template v-for="(page, index) in pages">
        <template v-if="!simple">
          <template v-if="page === value">
            <span class="wlin-pager-item current" :key="index">{{ page }}</span>
          </template>
          <template v-else>
            <span
              class="wlin-pager-item"
              @click="updatePage(page)"
              :key="index"
              >{{ page }}</span
            >
          </template>
        </template>
      </template>
      <span
        class="wlin-pager-nav next"
        :class="{ disabled: value === totalPage }"
        @click="updatePage(value + 1)"
      >
        <wlin-icon name="right"></wlin-icon>
      </span>

      <div class="wlin-pager-select wlin-pager-box">
        <select @change="handleSelect">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
        </select>
      </div>
      <div class="wlin-pager-jump">
        <div class="inner-span">跳至</div>
        <input maxlength="15" type="text" id="inp" :value.sync="inputValue" />
        <wlin-button
          type="primary"
          circle
          style="width:60px;height:32px;"
          @click="handleJump"
          >Jump</wlin-button
        >
      </div>
    </template>

    <!-- 简易模式 -->
    <template v-else>
      <span
        class="wlin-pager-nav prev"
        :class="{ disabled: value === 1 }"
        @click="updatePage(value - 1)"
      >
        <wlin-icon name="left"></wlin-icon>
      </span>
      <template>
        <div>
          <span class="wlin-pager-item simple">{{ value }}</span>
          <span class="wlin-pager-item simple">/</span>
          <span class="wlin-pager-item" @click="handleJumpTotal(totalPage)">{{
            totalPage
          }}</span>
        </div>
      </template>
      <span
        class="wlin-pager-nav next"
        :class="{ disabled: value === totalPage }"
        @click="updatePage(value + 1)"
      >
        <wlin-icon name="right"></wlin-icon>
      </span>
    </template>
  </div>
</template>

<script>
import Icon from "../icon/icon";
import Button from "../button/button";

export default {
  name: "wlinPager",
  components: {
    "wlin-icon": Icon,
    "wlin-button": Button
  },
  props: {
    hideIfOnePage: {
      type: Boolean,
      default: true
    },
    totalPage: {
      type: Number,
      required: true
    },
    value: {
      // v-model 会自动找到自定义组件中的名为‘value’的prop， 和对应的名为‘input’的emit事件发布
      type: Number,
      required: true
    },
    simple: {
      type: Boolean,
      default: false
    },
    //pageSize改变时的回调
    pageSizeChange: {
      type: Function,
      validator(value) {
        return typeof value === "function";
      }
    },
    //pageNo改变时的回调 - v-model加入后只需要订阅change事件
    // pageChange: {
    //   type: Function,
    //   validator(value){
    //     return typeof(value) === 'function'
    //   }
    // },
    //错误捕获时的回调
    warnCallBack: {
      type: Function,
      validator(value) {
        return typeof value === "function";
      }
    }
  },
  data() {
    return {
      inputValue: ""
    };
  },
  mounted() {
    // console.log(this.currentPage);
  },
  methods: {
    unique(arr) {
      //数组去重
      let map = {};
      arr.forEach(item => {
        map[item] = true;
      });
      return Object.keys(map).map(e => parseInt(e, 10));
    },
    updatePage(page) {
      if (page >= 1 && page <= this.totalPage) {
        //子组件通知父组件更新数据
        this.$emit("input", page);
        this.$emit("change", page);
        // this.$nextTick(()=>{
        //   this.pageChange && this.pageChange(page)
        //   console.log("change", this.pages);
        // })
      }
    },
    handleJumpTotal(totalPage) {
      this.$emit("input", totalPage);
      this.$emit("change", totalPage);
    },
    //处理分页组件点击的跳转
    handleJump() {
      if (
        !document.querySelector("#inp").value ||
        !/^[0-9]+$/.test(Number(document.querySelector("#inp").value))
      ) {
        return;
      }
      let pageNo = Number(document.querySelector("#inp").value);
      if (1 <= pageNo && pageNo <= this.totalPage) {
        // this.$emit("update:currentPage",pageNo)
        // this.$nextTick(()=>{
        //     this.pageChange && this.pageChange(pageNo)
        //   })
        this.$emit("input", pageNo);
        this.$emit("change", pageNo);
      } else {
        this.warnCallBack && this.warnCallBack();
        // clear input value sync
        this.inputValue = "";
      }
    },
    //处理pagesize改变
    handleSelect(e) {
      var currentSelect = Number(e.target.value);
      //pageSizeChange时，组件当前页码回到第一页
      // this.$emit("update:currentPage", 1);
      this.$emit("input", 1);
      this.pageSizeChange && this.pageSizeChange(currentSelect);
    }
  },
  computed: {
    //省略号模式（未限制页数）- 计算属性
    // pages() {
    //   //分页数据初始值
    //   let pages = [
    //     1,
    //     this.totalPage,
    //     this.currentPage,
    //     this.currentPage - 1,
    //     this.currentPage - 2,
    //     this.currentPage + 1,
    //     this.currentPage + 2,
    //   ];
    //   //对数据非法项筛选
    //   let pageFilter = pages.filter((e) => {
    //     return e >= 1 && e <= this.totalPage;
    //   });
    //   //对数据去重排序
    //   let pages2 = this.unique(pageFilter.sort((a, b) => a - b));
    //   //当数据前一项和后一项差值大于1，插入一条字符串
    //   //reduce,一参的回调方法，参数1--过去的值（可积累）；参数2--当前的值； 参数3 -- index ；参数4 -- 当前操作的数组
    //   //reduce，二参的值对应prev的初始值
    //   let pagesRes = pages2.reduce((prev, current, index, arr) => {
    //     prev.push(current);
    //     //判断前后差值
    //     arr[index + 1] !== undefined &&
    //       arr[index + 1] - arr[index] > 1 &&
    //       prev.push("...");
    //     return prev;
    //   }, []);
    //   console.log('currentArr: ',pagesRes)
    //   return pagesRes;
    // },

    //传统模式（限制每次展示页数） - 计算属性
    pages() {
      //分页数据初始值
      let pages = [
        // 1,
        // this.totalPage,
        this.value,
        this.value - 1,
        this.value - 2,
        this.value - 3,
        this.value - 4,

        this.value + 1,
        this.value + 2,
        this.value + 3,
        this.value + 4
      ];
      //对数据非法项筛选，只保留[1,max]间的值
      let pageFilter = pages.filter(e => {
        return e >= 1 && e <= this.totalPage;
      });
      //对数据去重排序
      let pages2 = this.unique(pageFilter.sort((a, b) => a - b));
      //console.log('current ',this.currentPage,pages2,pages2.indexOf(this.currentPage))

      //限制分页组件最大展示的数据总量
      let pageRes =
        this.value >= 3 && this.value <= this.totalPage - 2
          ? [
              this.value - 2,
              this.value - 1,
              this.value,
              this.value + 1,
              this.value + 2
            ]
          : this.value <= 3
          ? pages2.slice(0, 5)
          : pages2.slice(-5);

      return pageRes;
    }
  }
};
</script>

<style lang="scss" scoped>
.wlin-pager {
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  @media screen and (max-width: 500px) {
    min-height: 100px;
  }
  &-separator {
    width: 20px;
    font-size: 12px;
  }
  &-item {
    border: 1px solid rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    padding: 0 12px;
    color: rgba(0, 0, 0, 0.65);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    min-width: 36px;
    height: 32px;
    margin-left: 8px;
    box-sizing: border-box;
    @media screen and(max-width: 500px) {
      padding: 0 6px;
    }
    cursor: pointer;
    &:hover {
      border-color: #4d80f0;
      background-color: #4d80f0;
      color: #fff;
    }
    &:not(.current):active {
      opacity: 0.85;
    }
    &.current {
      cursor: default;
      border-color: #4d80f0;
      background-color: #4d80f0;
      color: #fff;
    }
    &.simple {
      border: none;
      cursor: default;
      &:hover {
        background-color: #fff;
        border-color: 1px solid rgba(0, 0, 0, 0.15);
        color: rgba(0, 0, 0, 0.65);
        opacity: 1;
      }
    }
  }
  &-box {
    display: inline-block;
    > select {
      margin-left: 20px;
    }
  }
  &-select {
    width: 100px;
    height: 32px;
    display: inline-flex;
    align-items: center;
    > select {
      height: 32px;
      width: 100px;
      border-color: rgba(0, 0, 0, 0.25);
    }
  }
  &-jump {
    display: inline-flex;
    margin-left: 10px;
    .inner-span {
      width: 50px;
      height: 32px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      background: #fff;
      color: rgba(0, 0, 0, 0.65);
    }
    > input {
      display: inline-flex;
      width: 50px;
      margin: 0 5px;
      padding: 0 5px;
      border-color: rgba(0, 0, 0, 0.25);
      // top: 50%;
      // transform: translateY(-50%);
    }
    > .font {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.65);
      align-items: center;
      height: 32px;
      display: inline-flex;
    }

    > span:last-of-type {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 50px;
      padding: 0 12px;
      box-sizing: border-box;
      color: #fff;
      background-color: #4d80f0;
      font-size: 14px;
      cursor: pointer;
      text-align: center;
      height: 32px;
      align-items: center;
      border-radius: 4px;
    }
    > span:last-of-type {
      &:hover {
        opacity: 0.7;
      }
      &:active {
        opacity: 0.85;
      }
    }
  }
  &-nav {
    &.next {
      margin-left: 8px;
    }
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    min-width: 32px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(0, 0, 0, 0.25);
    color: rgba(0, 0, 0, 0.65);
    font-weight: normal;
    box-sizing: border-box;
    padding: 0 10px;
    font-size: 14px;
    border-radius: 4px;

    &:not(.disabled):hover {
      background-color: #4d80f0;
      color: #fff;
      border-color: #4d80f0;
    }
    &:active {
      opacity: 0.85;
    }
    &.disabled {
      color: rgba(0, 0, 0, 0.15);
      fill: rgba(0, 0, 0, 0.15);
      border-color: #d9d9d9;
      cursor: not-allowed;
    }
  }
}
</style>
