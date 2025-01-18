import { defineClientConfig } from 'vuepress/client'
import Carousel from "./theme/components/Carousel.vue";
import Goods from "./theme/components/Goods.vue";
import GoodsEng from "./theme/components/GoodsEng.vue";
import Product from './theme/components/Product.vue';

// import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
// import NpmBadge from 'vuepress-theme-plume/features/NpmBadge.vue'
// import NpmBadgeGroup from 'vuepress-theme-plume/features/NpmBadgeGroup.vue'
// import Swiper from 'vuepress-theme-plume/features/Swiper.vue'

// import CustomComponent from './theme/components/Carousel.vue'

import './theme/styles/custom.css'
import Custom from "./theme/components/Custom.vue";

export default defineClientConfig({
  enhance({ app }) {
    // built-in components
    // app.component('RepoCard', RepoCard)
    // app.component('NpmBadge', NpmBadge)
    // app.component('NpmBadgeGroup', NpmBadgeGroup)
    // app.component('Swiper', Swiper) // you should install `swiper`
    app.component('Carousel', Carousel)
    app.component('Goods', Goods)
    app.component('GoodsEng', GoodsEng)
    app.component('Product', Product)
    app.component('Custom', Custom)

    // your custom components
    // app.component('CustomComponent', CustomComponent)
  },
})
