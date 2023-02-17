/**
 * @typedef ExperienceItem
 * @property {string} name 项目名称
 * @property {string} from 项目开始时间
 * @property {string} to 项目结束时间
 * @property {string} description 项目描述
 * @property {Array<{name: string, href: string}>} links 项目相关链接的数组，name为名字，href为跳转链接
 */

/** @type {Array<ExperienceItem>} */
const experiences = [
  {
    name: 'cheesi ui',
    from: '2023/1/30',
    to: '2023/2/16',
    description:
      '合作完成的react组件库，使用tsx编写组件逻辑，dumi编写文档站，jest+rtl+ts-jest单元测试，less编写样式。',
    links: [
      {
        name: '代码地址',
        href: 'https://github.com/wjywy/miniAntd'
      }
    ]
  },
  {
    name: '后台管理系统',
    from: '2022/10/16',
    to: '2022/11/1',
    description:
      '校内课程的作业。使用 react 进行前端开发，Koa 编写后台逻辑。前后端都使用Typescript。',
    links: [
      { name: 'github地址', href: 'https://github.com/wyx-20021015/cms-fe' }
    ]
  },
  {
    name: '个人博客',
    from: '2022/9/17',
    to: '2022/10/1',
    description:
      '个人独立完成的博客网站。使用 Vue3 + tsx + Koa 开发，使用 TS 编写前后端。通过将 Vue 和 tsx 结合能写出更有表现力的代码。现部署在服务器上，持续使用并维护。',
    links: [
      {
        name: '部署地址',
        href: 'http://www.wangyixuan2002.cn'
      },
      {
        name: '代码地址',
        href: 'https://github.com/wyx-20021015/wyx-blog-fe'
      }
    ]
  }
]

export default experiences
