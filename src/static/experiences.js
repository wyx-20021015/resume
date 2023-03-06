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
    name: '单词小程序',
    from: '2022/11/10',
    to: '2022/12/1',
    description:
      '一款帮助同学们趣味学习单词的软件，本人负责前端部分的开发，使用uniapp，实现了登录、切词、收藏、评论、阅读推荐等功能，使用mobx管理全局状态，vant组件库搭建布局，使用Promise封装了小程序原生的接口，使用节流函数防止恶意点击。在项目中强化了自己的小程序端开发能力和布局能力。',
    links: [
      {
        name: 'gitee地址',
        href: 'https://gitee.com/wyx2002/hust_program-work'
      }
    ]
  },
  {
    name: 'cheesi ui',
    from: '2023/1/30',
    to: '2023/2/16',
    description:
      '合作完成的react组件库。团队内担任队长，负责技术选型、环境搭建和部分组件的开发。使用tsx编写组件逻辑，dumi编写文档站，jest+rtl+ts-jest单元测试，less编写样式。在本项目中提高了自己的react能力和组件化思维，感受了单元测试带来的质量保障，也收获了一次宝贵的领导经验。',
    links: [
      {
        name: '代码地址',
        href: 'https://github.com/wjywy/miniAntd'
      },
      {
        name: '部署地址',
        href: 'http://cheesi.wangyixuan2002.cn/'
      }
    ]
  },
  {
    name: '后台管理系统',
    from: '2022/10/16',
    to: '2022/11/1',
    description:
      '使用 react 进行前端开发，Koa 编写后台逻辑，mongodb数据库。前后端都使用Typescript。包括增删改查、上传文件等常见功能。通过node-shcedule做到服务器自检，cookie-session鉴权，puppeteer爬取真实数据，koa-static搭建服务解决跨域，antd组件库来布局。',
    links: [
      { name: 'github地址', href: 'https://github.com/wyx-20021015/cms-fe' }
    ]
  },
  {
    name: '个人博客',
    from: '2022/9/17',
    to: '2022/10/1',
    description:
      '个人独立完成的博客网站。使用 Vue3 + tsx + Koa 开发，使用 TS 编写前后端。通过将 Vue 和 tsx 结合能写出更有表现力的代码，利用js语法特性，跳出了api的束缚。此项目中的一些动画锻炼了 CSS 能力。使用ubuntu+jenkins+nginx部署在服务器上，持续使用并维护。',
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
