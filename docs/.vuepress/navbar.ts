import { defineNavbarConfig } from 'vuepress-theme-plume'

export const enNavbar = defineNavbarConfig([
  { text: '🥳Welcome to CrystalLaser!', link: '/' },
  // { text: 'Blog', link: '/blog/' },
  // { text: 'Tags', link: '/blog/tags/' },
  // { text: 'Archives', link: '/blog/archives/' },
  // {
  //   text: 'Notes',
  //   items: [{ text: 'Demo', link: '/notes/demo/README.md' }]
  // },
])

export const zhNavbar = defineNavbarConfig([
  { text: '首页', link: '/zh/' },
  // { text: '博客', link: '/zh/blog/' },
  // { text: '标签', link: '/zh/blog/tags/' },
  // { text: '归档', link: '/zh/blog/archives/' },
  // {
  //   text: '笔记',
  //   items: [{ text: '示例', link: '/zh/notes/demo/README.md' }]
  // },
])

