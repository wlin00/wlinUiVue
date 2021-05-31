---
title: 快速上手
---

# 快速上手

<!-- ## 安装
请参考 [安装](../install/) 章节 -->

## 使用

```javascript
import { 
  Button, Input, Popover, Toast, Col, Row,  Pager, Collapse, 
  CollapseItem, Cascader, Layout, Header, Footer, Sider, Content,
  Tabs, TabsHead, TabsItem, TabsPane, TabsBody, Plugin  } from 'wlinui/src/index'
import Vue from 'vue'
Vue.use(Plugin)

new Vue({
  el: '#app',
  components: {
    'wlin-button':Button,
    'wlin-input': Input,
    'wlin-popover': Popover,
    'wlin-pager': Pager,
    'wlin-collapse': Collapse,
    'wlin-collapse-item': CollapseItem,
    'wlin-cascader': Cascader,
    'wlin-col': Col,
    'wlin-row': Row,
    'wlin-layout': Layout,
    'wlin-header': Header,
    'wlin-footer': Footer,
    'wlin-content': Content,
    'wlin-sider': Sider,
    'wlin-tabs': Tabs,
    'wlin-tabs-head': TabsHead,
    'wlin-tabs-body': TabsBody,
    'wlin-tabs-item': TabsItem,
    'wlin-tabs-pane': TabsPane,
  }
})
```
