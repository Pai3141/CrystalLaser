<template>
  <div class="product-container">
    <h1 class="fancy-title">💞Guess you like!</h1>
    <div class="product-list">
      <div class="product-card" v-for="product in products" :key="product.id">
        <img :src="product.image" alt="product.name" class="product-image"/>
        <div class="product-info">
          <p class="product-name">{{ product.name }}</p>
          <p class="product-description">{{ product.description }}</p>
        </div>
        <!-- 底部操作栏 -->
        <div class="product-actions">
          <button class="action-button buy-now">
            <span style="color: #fa5800;font-style:italic;font-weight: bold;padding-right: 5px">${{ product.price }}</span>
            BUY NOW
          </button>
<!--          <button>-->
<!--            <svg t="1736848865880" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"-->
<!--                 p-id="6065" xmlns:xlink="http://www.w3.org/1999/xlink" width="22" height="22">-->
<!--              <path-->
<!--                  d="M379.648 1014.592c-65.376 0-118.56-53.184-118.56-118.56s53.184-118.56 118.56-118.56 118.56 53.184 118.56 118.56-53.184 118.56-118.56 118.56z m0-173.088c-30.08 0-54.56 24.48-54.56 54.56s24.48 54.56 54.56 54.56 54.56-24.48 54.56-54.56-24.48-54.56-54.56-54.56zM790.72 1020c-65.376 0-118.56-53.184-118.56-118.56s53.184-118.56 118.56-118.56 118.528 53.184 118.528 118.56-53.184 118.56-118.528 118.56z m0-173.088c-30.08 0-54.56 24.48-54.56 54.56s24.48 54.528 54.56 54.528c30.08 0 54.528-24.48 54.528-54.56s-24.48-54.528-54.528-54.528zM484.16 744.896c-151.808 0-172.736-4.448-181.824-8.576-43.936-15.52-56.352-27.072-75.968-69.792-9.568-19.456-19.328-77.408-55.68-347.424-12.864-95.584-27.424-203.712-32.16-221.344-7.808-16.928-20.736-27.392-25.024-28.992-8.608-1.312-44.704-0.768-73.504 0.544A32 32 0 1 1 37.056 5.376C57.664 4.416 107.584 2.56 125.504 5.888c31.872 5.888 59.744 39.008 72.16 67.296 5.728 13.024 12.512 59.52 36.48 237.376 16.192 120.256 40.608 301.408 49.504 327.328l0.736 1.472c12.48 27.264 12.48 27.264 40.96 37.184l0.544 0.192c40.064 7.936 387.808 3.04 599.36-1.984a32 32 0 0 1 1.504 63.968c-1.472 0.032-147.936 3.488-295.872 5.184-59.072 0.672-107.296 0.96-146.688 0.96z"-->
<!--                  fill="" p-id="6066"></path>-->
<!--              <path-->
<!--                  d="M260.256 571.04a32 32 0 0 1-1.44-63.968c266.496-12.224 566.112-30.368 604.256-40.256 27.68-16.288 35.296-30.976 38.592-37.92 8.896-24.416 52.224-192.448 51.84-220.896-2.336-7.552-14.88-15.072-20.544-16.768-9.216-0.224-56.256-0.8-250.624-2.176a32 32 0 0 1 0.224-64h0.224c249.536 1.76 253.824 2.176 256.64 2.432 21.792 2.08 68.288 25.088 77.056 68.864 7.968 39.936-52.256 249.888-56.48 258.912-8.192 17.504-24.032 43.552-66.88 68.128-10.496 6.304-26.144 14.176-332.768 32.064-149.248 8.704-297.088 15.52-298.56 15.584l-1.504 0.032zM492.896 188.928h-0.224c-160.064-1.056-303.264-1.92-303.264-1.92a32 32 0 0 1 0.192-64h0.192s143.232 0.864 303.296 1.92a32 32 0 0 1-0.224 64z"-->
<!--                  fill="" p-id="6067"></path>-->
<!--            </svg>-->
<!--          </button>-->

<!--          <button>-->
<!--            <svg t="1737110252843" class="icon" viewBox="0 0 1059 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"-->
<!--                 p-id="2687" width="22" height="22">-->
<!--              <path-->
<!--                  d="M253.488042 1024c-16.9 0-33.2875-5.1125-47.6125-15.3625-26.625-18.425-39.425-49.6625-34.3125-81.925l40.9625-251.9c1.5375-10.2375-1.5375-20.475-8.7-27.65L28.213042 466.4375c-22.0125-22.525-29.1875-55.3-19.45-84.9875 9.725-29.7 35.325-51.2 66.05-55.8125l237.575-36.35c10.75-1.5375 19.4625-8.1875 24.0625-17.925L441.388042 48.125c13.825-29.7 42.5-48.125 75.2625-48.125s61.4375 18.4375 75.2625 48.125l104.45 223.2375c4.6125 9.725 13.825 16.375 24.0625 17.925L958.000542 325.625a82.355 82.355 0 0 1 66.05 55.8125c10.2375 29.7 2.5625 62.4625-19.45 84.9875l-175.625 180.7375c-7.1625 7.175-10.2375 17.925-8.7 27.65l40.9625 251.9c5.125 31.75-8.1875 63.4875-34.3 81.925-26.1125 18.4375-59.9 20.4875-88.0625 4.6125l-206.85-114.6875c-9.725-5.1125-20.9875-5.1125-30.7125 0l-207.3625 115.2c-12.8125 6.65-26.6375 10.2375-40.4625 10.2375zM516.650542 51.2c-12.8 0-23.55 7.1625-29.1875 18.4375L383.525542 292.875c-11.775 25.0875-35.325 43.0125-62.975 47.1l-237.575 36.35c-12.2875 2.05-21.5 9.7375-25.6 21.5-4.1 11.775-1.025 24.0625 7.675 32.775L240.688042 611.325c18.4375 18.95 26.625 45.5625 22.525 71.675L222.250542 934.9125c-2.05 12.8 3.075 24.575 13.3125 31.7375 10.2375 7.175 23.0375 7.6875 33.7875 1.5375l207.3625-115.2c25.0875-13.825 55.3-13.825 80.3875 0l207.3625 115.2c10.75 6.1375 23.55 5.625 33.8-1.5375 10.2375-7.1625 15.3625-18.95 13.3125-31.7375L770.625542 683.0125c-4.1-26.1125 4.1-52.7375 22.525-71.675l175.625-180.7375c8.7-8.7 11.2625-20.9875 7.675-32.775-4.0875-11.775-13.3125-19.9625-25.6-21.5l-237.5625-36.35c-27.65-4.0875-51.2-22.0125-62.975-47.1L545.838042 69.6375c-5.625-11.2625-16.375-18.4375-29.1875-18.4375z m0 0"-->
<!--                  p-id="2688"></path>-->
<!--            </svg>-->
<!--          </button>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Goods",
  data() {
    return {
      products: [
        {
          "id": 1,
          "name": "Goji Berries",
          "description": "Nourishes liver & kidneys, improves eyesight, calms the mind",
          "price": "12.8",
          "image": "./goods/gouqi.png"
        },
        {
          "id": 2,
          "name": "Ginseng",
          "description": "Boosts energy, nourishes blood, strengthens the body",
          "price": "198.5",
          "image": "./goods/renshen.png"
        },
        {
          "id": 3,
          "name": "Longan Dried Fruit",
          "description": "Nourishes blood, calms the mind, boosts energy",
          "price": "28.9",
          "image": "./goods/longyangan.png"
        },
        {
          "id": 4,
          "name": "Fritillaria",
          "description": "Moisturizes lungs, relieves cough, clears heat",
          "price": "56.7",
          "image": "./goods/gouqi.png"
        },
        {
          "id": 5,
          "name": "Reishi Mushroom",
          "description": "Boosts immunity, regulates body",
          "price": "128.3",
          "image": "./goods/chuanbeimu.png"
        },
        {
          "id": 6,
          "name": "Astragalus",
          "description": "Boosts energy, strengthens the body",
          "price": "15.0",
          "image": "./goods/huangqi.png"
        },
        {
          "id": 7,
          "name": "Zhiqiao",
          "description": "Regulates qi, relieves bloating",
          "price": "19.8",
          "image": "./goods/zhike.png"
        },
        {
          "id": 8,
          "name": "Codonopsis",
          "description": "Tonifies spleen, boosts immunity",
          "price": "38.5",
          "image": "./goods/dangshen.png"
        },
        {
          "id": 9,
          "name": "White Peony",
          "description": "Nourishes blood, softens liver, relieves pain",
          "price": "42.3",
          "image": "./goods/baishao.png"
        },
        {
          "id": 10,
          "name": "Chinese Yam",
          "description": "Tonifies qi, nourishes yin, strengthens spleen",
          "price": "22.9",
          "image": "./goods/shanyao.png"
        },
        {
          "id": 11,
          "name": "Cinnamon Twig",
          "description": "Induces sweating, relieves cold, warms yang",
          "price": "18.5",
          "image": "./goods/guizhi.png"
        },
        {
          "id": 12,
          "name": "Red Dates",
          "description": "Nourishes blood, strengthens spleen & stomach",
          "price": "10.0",
          "image": "./goods/hongzao.png"
        },
        {
          "id": 13,
          "name": "Goji Leaves",
          "description": "Clears liver, improves eyesight",
          "price": "18.3",
          "image": "./goods/gouqiye.png"
        },
        {
          "id": 14,
          "name": "Atractylodes",
          "description": "Strengthens spleen, expels dampness",
          "price": "35.6",
          "image": "./goods/baizhu.png"
        },
        {
          "id": 15,
          "name": "Longan Flesh",
          "description": "Nourishes heart, calms the mind, boosts energy",
          "price": "45.2",
          "image": "./goods/longyanrou.png"
        },
        {
          "id": 16,
          "name": "Chrysanthemum",
          "description": "Clears heat, detoxifies, improves eyesight",
          "price": "25.4",
          "image": "./goods/juhua.png"
        },
        {
          "id": 17,
          "name": "Bupleurum",
          "description": "Relieves cold, soothes liver, regulates qi",
          "price": "22.0",
          "image": "./goods/chaihu.png"
        },
        {
          "id": 18,
          "name": "Immature Bitter Orange",
          "description": "Regulates qi, aids digestion",
          "price": "30.7",
          "image": "./goods/zhishi.png"
        },
        {
          "id": 19,
          "name": "Cyperus",
          "description": "Regulates liver, relieves pain, aids menstruation",
          "price": "21.3",
          "image": "./goods/xiangfu.png"
        },
        {
          "id": 20,
          "name": "Hawthorn",
          "description": "Aids digestion, promotes circulation",
          "price": "13.2",
          "image": "./goods/shanzha.png"
        },
        {
          "id": 21,
          "name": "Angelica Sinensis",
          "description": "Nourishes blood, regulates menstruation, relieves pain",
          "price": "39.8",
          "image": "./goods/danggui.png"
        },
        {
          "id": 22,
          "name": "Reishi Spore Powder",
          "description": "Boosts immunity, anti-fatigue",
          "price": "68.9",
          "image": "./goods/lingzhibaosifen.png"
        },
        {
          "id": 23,
          "name": "Achyranthes",
          "description": "Promotes circulation, strengthens tendons & bones",
          "price": "28.0",
          "image": "./goods/niuxi.png"
        },
        {
          "id": 24,
          "name": "Coptis",
          "description": "Clears heat, detoxifies",
          "price": "52.6",
          "image": "./goods/huanglian.png"
        }
      ]

      ,
    };
  },
};
</script>

<style scoped>
/* 商品容器样式 */
.product-container {
  padding: 33px;
  background-color: #f9f9f9;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

/* 商品列表样式 */
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

/* 商品卡片样式 */
.product-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  display: flex;
  flex-direction: column; /* Stack content vertically */
  height: 100%; /* Ensure card fills available height */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
}

/* 商品图片 */
.product-image {
  width: 100%;
  height: 125px;
  object-fit: cover;
}

/* 商品信息 */
.product-info {
  padding: 15px;
  flex-grow: 1; /* Take up available space to push button down */
}

/* 商品名称 */
.product-name {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

/* 商品描述 */
.product-description {
  font-size: 1rem;
  color: #777;
  margin-bottom: 15px;
}

/* 商品价格 */
.product-price {
  font-size: 1.2rem;
  font-weight: bold;
  color: #e74c3c;
}

/* 底部操作栏 */
.product-actions {
  display: flex;
  justify-content: center; /* Center the button horizontally */
  padding: 10px 0;
  background-color: #f2f2f2;
  border-top: 1px solid #ddd;
  margin-top: auto; /* Pushes the button to the bottom */
  width: 100%;
}

/* 操作按钮样式 */
.action-button {
  background-color: #e7bf3c;
  color: white;
  border: none;
  padding: 8px 10px;
  border-radius: 19px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.action-button:hover {
  background-color: #ffd65f;
}

.action-button svg {
  margin-right: 8px; /* 图标与文本之间的间距 */
}

/* 响应式布局：在手机设备上每行展示 3 个商品 */
@media (max-width: 768px) {
  .product-list {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* 响应式布局：在较小的设备上每行展示 2 个商品 */
@media (max-width: 480px) {
  .product-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

.fancy-title {
  font-size: 1.5rem; /* 设置适中的字体大小 */
  font-weight: bold; /* 加粗字体 */
  font-family: Consolas;
  font-style: italic;
  text-align: left; /* 居中对齐 */
  color: #e8709a; /* 设置深色字体 */
  letter-spacing: 1px; /* 设置字母间距 */
  margin-bottom: 20px; /* 设置底部间距 */
  padding: 5px; /* 添加内边距 */
}

/**
.fancy-title:hover {
  color: #e74c3c;
  transform: translateY(0px);
}
*/

</style>
