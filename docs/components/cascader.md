---
title: Cascader
---
# Cascader 级联选择器

<ClientOnly>
  <wlin-cascader-demo1></wlin-cascader-demo1>
</ClientOnly>

# Attributes

### Cascader

|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
|v-model| 当前选中 | Array |--| []
|height| 高度 | String |--| --
|source| 选择器下拉总数据配置 | Array |--| []
|@change| 级联选择器改变时的回调 | Function |--| --

### Cascader-Item

|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
|name| 当前选中 | String |--| --