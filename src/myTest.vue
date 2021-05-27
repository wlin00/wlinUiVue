<template>
  <div class="myTest">
    <wlin-collapse
      style="margin-bottom: 20px;"
      v-model="myTitle"
      @change="handleCollapseChange"
    >
      <wlin-collapse-item title="标题1">内容1</wlin-collapse-item>
      <wlin-collapse-item title="标题2">内容2</wlin-collapse-item>
      <wlin-collapse-item title="标题3">内容3</wlin-collapse-item>
    </wlin-collapse>

    <wlin-pager
      style="margin:10px 0;"
      v-model="pageNo"
      :total-page="pageSize"
      :page-size-change="onPageSizeChange"
      @change="onPageChange"
      :warn-call-back="handleWarn"
      :hide-if-one-page="false"
      :simple="true"
    ></wlin-pager>

    <wlin-pager
      style="margin:10px 0;"
      v-model="pageNo"
      :total-page="pageSize"
      :page-size-change="onPageSizeChange"
      @change="onPageChange"
      :warn-call-back="handleWarn"
      :hide-if-one-page="false"
      :simple="false"
    ></wlin-pager>

    <wlin-tabs v-model="selectedTab" @change="handleTabChange">
      <wlin-tabs-head>
        <template slot="action"
          ><!-- 顶部操作按钮 -->
          <button>操作</button>
        </template>
        <wlin-tabs-item name="home">首页</wlin-tabs-item
        ><!-- 顶部导航栏区域 -->
        <wlin-tabs-item name="video">视频</wlin-tabs-item>
        <wlin-tabs-item name="setting">
          <wlin-icon
            style="position:relative;top:2px;left:2px;"
            name="setting"
          ></wlin-icon>
          设置
        </wlin-tabs-item>
      </wlin-tabs-head>
      <wlin-tabs-body>
        <wlin-tabs-pane name="home">首页内容</wlin-tabs-pane>
        <wlin-tabs-pane name="video">视频内容</wlin-tabs-pane>
        <wlin-tabs-pane name="setting">设置内容</wlin-tabs-pane>
      </wlin-tabs-body>
    </wlin-tabs>
  </div>
</template>

<script>
import Pager from "./components/pager/pager";
import Tabs from "./components/tabs/tabs";
import TabsHead from "./components/tabs/tabs-head";
import TabsBody from "./components/tabs/tabs-body";
import TabsItem from "./components/tabs/tabs-item";
import TabsPane from "./components/tabs/tabs-pane";
// Collapse组件
import Collapse from "./components/collapse/collapse.vue";
import CollapseItem from "./components/collapse/collapse-item.vue";

export default {
  props: {
    simple: {
      type: Boolean,
      default: true
    }
  },
  components: {
    "wlin-pager": Pager,
    "wlin-tabs": Tabs,
    "wlin-tabs-head": TabsHead,
    "wlin-tabs-body": TabsBody,
    "wlin-tabs-item": TabsItem,
    "wlin-tabs-pane": TabsPane,
    "wlin-collapse": Collapse,
    "wlin-collapse-item": CollapseItem
  },
  methods: {
    onPageSizeChange(e) {
      //pageSize改变的回调
      console.log("pageSize", e);
    },
    onPageChange(e) {
      //pageNo改变的回调
      // this.pageNo = 1
      // console.log('page-parent',e)
      console.log(e);
    },
    handleWarn() {
      console.warn(
        "currentPage should be greater than 1 and lower than totalPage"
      );
    },
    handleTabChange(e) {
      console.log("tab-change", e);
    },
    handleCollapseChange(val) {
      console.log("collapse-change", val);
    }
  },
  data() {
    return {
      pageNo: 1,
      pageSize: 150,
      selectedTab: "video",
      myTitle: ["标题1", "标题3"]
    };
  }
};
</script>

<style lang="scss" scoped>
.myTest {
  // display: flex;
  width: 100%;
  box-sizing: border-box;
  padding: 80px 0 60px 50px;
}
</style>
