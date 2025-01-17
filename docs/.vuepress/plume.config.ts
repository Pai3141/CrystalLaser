import { defineThemeConfig } from 'vuepress-theme-plume'
import { enNavbar, zhNavbar } from './navbar'
import { enNotes, zhNotes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: './logo.png',

  appearance: true,  // 配置 深色模式

  social: [
    { icon: {svg: "<?xml version=\"1.0\" standalone=\"no\"?><!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\"><svg t=\"1736848865880\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"6065\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"200\" height=\"200\"><path d=\"M379.648 1014.592c-65.376 0-118.56-53.184-118.56-118.56s53.184-118.56 118.56-118.56 118.56 53.184 118.56 118.56-53.184 118.56-118.56 118.56z m0-173.088c-30.08 0-54.56 24.48-54.56 54.56s24.48 54.56 54.56 54.56 54.56-24.48 54.56-54.56-24.48-54.56-54.56-54.56zM790.72 1020c-65.376 0-118.56-53.184-118.56-118.56s53.184-118.56 118.56-118.56 118.528 53.184 118.528 118.56-53.184 118.56-118.528 118.56z m0-173.088c-30.08 0-54.56 24.48-54.56 54.56s24.48 54.528 54.56 54.528c30.08 0 54.528-24.48 54.528-54.56s-24.48-54.528-54.528-54.528zM484.16 744.896c-151.808 0-172.736-4.448-181.824-8.576-43.936-15.52-56.352-27.072-75.968-69.792-9.568-19.456-19.328-77.408-55.68-347.424-12.864-95.584-27.424-203.712-32.16-221.344-7.808-16.928-20.736-27.392-25.024-28.992-8.608-1.312-44.704-0.768-73.504 0.544A32 32 0 1 1 37.056 5.376C57.664 4.416 107.584 2.56 125.504 5.888c31.872 5.888 59.744 39.008 72.16 67.296 5.728 13.024 12.512 59.52 36.48 237.376 16.192 120.256 40.608 301.408 49.504 327.328l0.736 1.472c12.48 27.264 12.48 27.264 40.96 37.184l0.544 0.192c40.064 7.936 387.808 3.04 599.36-1.984a32 32 0 0 1 1.504 63.968c-1.472 0.032-147.936 3.488-295.872 5.184-59.072 0.672-107.296 0.96-146.688 0.96z\" fill=\"\" p-id=\"6066\"></path><path d=\"M260.256 571.04a32 32 0 0 1-1.44-63.968c266.496-12.224 566.112-30.368 604.256-40.256 27.68-16.288 35.296-30.976 38.592-37.92 8.896-24.416 52.224-192.448 51.84-220.896-2.336-7.552-14.88-15.072-20.544-16.768-9.216-0.224-56.256-0.8-250.624-2.176a32 32 0 0 1 0.224-64h0.224c249.536 1.76 253.824 2.176 256.64 2.432 21.792 2.08 68.288 25.088 77.056 68.864 7.968 39.936-52.256 249.888-56.48 258.912-8.192 17.504-24.032 43.552-66.88 68.128-10.496 6.304-26.144 14.176-332.768 32.064-149.248 8.704-297.088 15.52-298.56 15.584l-1.504 0.032zM492.896 188.928h-0.224c-160.064-1.056-303.264-1.92-303.264-1.92a32 32 0 0 1 0.192-64h0.192s143.232 0.864 303.296 1.92a32 32 0 0 1-0.224 64z\" fill=\"\" p-id=\"6067\"></path></svg>"
        , name: 'cart'}, link: '/' },
    { icon: {svg: "<?xml version=\"1.0\" standalone=\"no\"?><!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\"><svg t=\"1736849243329\" class=\"icon\" viewBox=\"0 0 1025 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"8427\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"200.1953125\" height=\"200\"><path d=\"M512 0c-27.733333 0-53.333333 14.933333-66.133333 42.666667l-96 206.933333c-12.8 25.6-36.266667 44.8-64 49.066667L64 330.666667c-59.733333 10.666667-85.333333 83.2-42.666667 125.866666l166.4 170.666667c19.2 19.2 27.733333 46.933333 23.466667 72.533333L170.666667 936.533333c-6.4 49.066667 29.866667 87.466667 72.533333 87.466667 12.8 0 23.466667-2.133333 36.266667-8.533333l196.266666-108.8c10.666667-6.4 23.466667-8.533333 36.266667-8.533334 12.8 0 25.6 2.133333 36.266667 8.533334l196.266666 108.8c10.666667 6.4 23.466667 8.533333 36.266667 8.533333 42.666667 0 81.066667-38.4 72.533333-87.466667l-38.4-236.8c-4.266667-25.6 4.266667-53.333333 23.466667-72.533333l166.4-170.666667c42.666667-42.666667 17.066667-115.2-42.666667-125.866666L740.266667 298.666667c-27.733333-4.266667-53.333333-23.466667-64-49.066667L578.133333 42.666667C565.333333 14.933333 539.733333 0 512 0z\" fill=\"#666767\" p-id=\"8428\"></path></svg>"
        , name: 'star'}, link: '/' },
  ],
  navbarSocialInclude: ['cart','star'], // 允许显示在导航栏的 social 社交链接
  // aside: true, // 页内侧边栏， 默认显示在右侧
  // outline: [2, 3], // 页内大纲， 默认显示 h2, h3

  /**
   * 文章版权信息
   * @see https://theme-plume.vuejs.press/guide/features/copyright/
   */
  // copyright: true,

  // prevPage: true,   // 是否启用上一页链接
  // nextPage: true,   // 是否启用下一页链接
  // createTime: true, // 是否显示文章创建时间

  /* 站点页脚 */
  // footer: {
  //   message: 'Power by <a target="_blank" href="https://v2.vuepress.vuejs.org/">VuePress</a> & <a target="_blank" href="https://theme-plume.vuejs.press">vuepress-theme-plume</a>',
  //   copyright: '',
  // },

  /* 过渡动画 @see https://theme-plume.vuejs.press/config/basic/#transition */
  // transition: {
  //   page: true,        // 启用 页面间跳转过渡动画
  //   postList: true,    // 启用 博客文章列表过渡动画
  //   appearance: 'fade',  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
  // },

  locales: {
    '/': {
      /**
       * @see https://theme-plume.vuejs.press/config/basic/#profile
       */
      profile: {
        avatar: 'https://theme-plume.vuejs.press/plume.png',
        name: 'CrystalLaser',
        description: '',
        // circle: true,
        // location: '',
        // organization: '',
      },

      navbar: enNavbar,
      notes: enNotes,

      /**
       * 公告板
       * @see https://theme-plume.vuejs.press/guide/features/bulletin/
       */
       // bulletin: {
       //   layout: 'top-right',
       //   contentType: 'markdown',
       //   title: '',
       //   content: '',
       // },
    },
    '/zh/': {
      /**
       * @see https://theme-plume.vuejs.press/config/basic/#profile
       */
      profile: {
        avatar: 'https://theme-plume.vuejs.press/plume.png',
        name: 'CrystalLaser',
        description: '',
        // circle: true,
        // location: '',
        // organization: '',
      },

      navbar: zhNavbar,
      notes: zhNotes,

      /**
       * 公告板
       * @see https://theme-plume.vuejs.press/guide/features/bulletin/
       */
       // bulletin: {
       //   layout: 'top-right',
       //   contentType: 'markdown',
       //   title: '',
       //   content: '',
       // },
    },
  },
  footer:{ message: '',copyright: '© Copyright 2025 All Rights Reserved. Proprietary Rights Reserved by CrystalLaser.'},
})
