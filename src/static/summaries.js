/**
 * @typedef SummaryItem
 * @property {string} brief 介绍的重点
 * @property {string | undefined} detail 【可选】详细说明(支持 HTML 格式)
 */

/** @type {Array<SummaryItem>} */
const summaries = [
  {
    brief: '有扎实的 JS/HTML/CSS 基础',
    detail: '读过多本相关书籍。'
  },
  {
    brief: '熟悉前端框架',
    detail: '熟练使用 Vue 和 React，了解二者底层原理，了解二者联系与区别'
  },
  {
    brief: '持续产出技术博客',
    detail:
      '博客部署于<a href="http://www.wangyixuan2002.cn/article?offset=1" target="_blank" rel="noreferrer">此地址</a>'
  },
  {
    brief: '有跨端开发能力',
    detail: '熟练使用 Node.js 进行后端开发。会使用 uniapp 和小程序进行开发。'
  },
  {
    brief: '具有抽象封装的能力，了解设计模式',
    detail: '会在项目中抽离出通用组件、布局、工具函数、高阶函数等'
  },
  {
    brief: '熟练使用 TypeScript。',
    detail: '熟悉继承、泛型、重载函数、类型体操等高级用法'
  },
  {
    brief: '掌握计算机基础知识。',
    detail: '理解计网、操作系统、数据结构等计算机核心知识。'
  }
]

export default summaries
