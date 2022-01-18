---
title: Grid
---
# Grid 网格

<ClientOnly>
  <wlin-grid-demo-1></wlin-grid-demo-1>
  <wlin-grid-demo-2></wlin-grid-demo-2>
  <wlin-grid-demo-3></wlin-grid-demo-3>
</ClientOnly>


# Attributes

### Row 
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
|gutter| 间距 | String、Number |--|0

### Col
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
|span| 栅格占据的列数 | String、Number |1-24|--
|offset|栅格左侧的间隔格数| String、Number|1-24|--
|ipad|ipad响应式布局|Number、Object|span数字或{span:1;offset:1}|--
|pc|普通电脑响应式布局|Number、Object|span数字或{span:1;offset:1}|--