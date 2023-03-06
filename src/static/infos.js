/**
 * @typedef InfoItem
 * @property {string} name 个人信息的 key
 * @property {string} value 个人信息的 value
 * @property {string | undefined} href 【可选】跳转链接(不设置则展示纯文本，设置则展示链接)
 */

/** @type {Array<InfoItem>} */
const infos = [
  { name: '姓名', value: '王艺轩' },
  { name: '性别', value: '男' },
  { name: '电话', value: '15807008982' },
  { name: '邮箱', value: '2603243185@qq.com' },
  { name: '学校', value: '华中科技大学' },
  { name: '专业', value: '计算机科学与技术' },
  { name: '年级', value: '2024届' },
  { name: '电子简历', value: 'http://resume.wangyixuan2002.cn' }
]

export default infos
