---
title: Pager
---

# Pager 分页

<ClientOnly>
  <wlin-pager-demo1></wlin-pager-demo1>
  <wlin-pager-demo2></wlin-pager-demo2>
</ClientOnly>

# Attributes

### Pager

|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
|v-model| 当前选中 | String |name| --
|total-page| 分页大小 | String |name| --
|simple| 是否简易模式 | Boolean |boolean| false
|hide-if-one-page| 只有一页时，是否隐藏分页器 | Boolean |true、false| false
|page-size-change| 分页大小改变时的回调 | Function |--| --
|@change| 分页改变时的回调 | Function |--| --
