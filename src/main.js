import Vue from "vue";
import Demo from "./Demo.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(Demo)
}).$mount("#app");

// // 图标
// import Icon from './components/icon/icon.vue'
// // 按钮
// import Button from './components/button/button.vue'
// import ButtonGroup from './components/button/button-group'
// // 输入框
// import Input from './components/input/input.vue'
// // layout布局组件
// import Row from './components/layout/row.vue'
// import Col from './components/layout/col.vue'
// // 布局容器组件
// import Header from './components/container/header.vue'
// import Content from './components/container/content.vue'
// import Footer from './components/container/footer.vue'
// import Layout from './components/container/layout.vue'
// import Sider from './components/container/sider.vue'
// // 分页组件
// import Pager from './components/pager/pager.vue'
// // 轻提示组件
// import Toast from './components/toast/toast-plugin'
// // tab组件
// import Tabs from './components/tabs/tabs.vue'
// import TabsBody from './components/tabs/tabs-body.vue'
// import TabsHead from './components/tabs/tabs-head.vue'
// import TabsItem from './components/tabs/tabs-item.vue'
// import TabsPane from './components/tabs/tabs-pane.vue'
// // Popover组件
// import Popover from './components/popover/popover.vue'
// // Collapse组件
// import Collapse from './components/collapse/collapse.vue'
// import CollapseItem from './components/collapse/collapse-item.vue'

// // 引入chai.js用于断言，进行单元测试;引入chai-spies进行mock
// import chai from 'chai'
// import spies from 'chai-spies'
// chai.use(spies)

// //声明全局的组件
// Vue.component('wlin-button', Button)
// Vue.component('wlin-icon', Icon)
// Vue.component('wlin-button-group', ButtonGroup)
// Vue.component('wlin-input',Input)
// Vue.component('wlin-row',Row)
// Vue.component('wlin-col',Col)
// Vue.component('wlin-header',Header)
// Vue.component('wlin-content',Content)
// Vue.component('wlin-footer',Footer)
// Vue.component('wlin-layout',Layout)
// Vue.component('wlin-sider',Sider)
// Vue.component('wlin-pager',Pager)
// Vue.component('wlin-tabs',Tabs)
// Vue.component('wlin-tabs-head',TabsHead)
// Vue.component('wlin-tabs-body',TabsBody)
// Vue.component('wlin-tabs-item',TabsItem)
// Vue.component('wlin-tabs-pane',TabsPane)
// Vue.component('wlin-popover', Popover)
// Vue.component('wlin-collapse', Collapse)
// Vue.component('wlin-collapse-item', CollapseItem)

// Vue.use(Toast)
