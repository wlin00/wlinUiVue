---
title: Toast
---

# Toast 轻提示

<ClientOnly>
  <wlin-toast-demo1></wlin-toast-demo1>
  <wlin-toast-demo2></wlin-toast-demo2>
  <wlin-toast-demo3></wlin-toast-demo3>
</ClientOnly>


# options
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
| message | 显示内容，函数第一个参数 |    String | --| --
| object | 函数接受的第二个参数 |    String | autoClose, closeButton, enableHtml, position| --
| position | 设置位置 |    String | top、middle、bottom| middle
|autoClose|是否自动关闭|Boolean|true、false|true
| closeButton | 设置关闭按钮      |  Object |--| {message:'关闭', callback:undefined}
|enableHtml|是否支持html内容|Boolean|true、false|false