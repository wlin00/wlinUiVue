const path = require('path')
module.exports = {
  base: '/wlinUi/',
  title: 'wlinUI - 基于vue的ui组件库',
  description: '一款基于vue的ui组件库',
  themeConfig: {
    nav: [
      {text: '主页', link: '/'},
      {text: 'github', link: 'https://github.com/wlin00'},
      {text: '博客', link: 'https://wlin00.github.io/'},
      {text: 'vue3.0版', link: 'https://wlin00.github.io/wlinUiVite/'},
    ],
    sidebar: [
      {
        title: '入门',
        collapsable: false,
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/button',
          '/components/input',
          '/components/grid',
          '/components/switch',
          '/components/layout',
          '/components/tabs',
          '/components/popover',
          '/components/toast',
          '/components/pager',
          '/components/collapse',
          '/components/cascader',
          '/components/carousel',
          '/components/nav',
          '/components/dialog',
          '/components/sticky',
        ]
      },

    ]
  },
  scss:{
    includePaths: [path.join(__dirname, '../../styles')]
    // includePaths: ['../../styles/_var.scss', '../../styles/input.scss']
    
  }
}
