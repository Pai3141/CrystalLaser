<template>
  <h1 class="fancy-title">💞Guess you like!</h1>
  <div class="product-container">
    <div class="product-image">
      <div class="image-wrapper">
        <img :src="product.image" alt="Product Image"/>
      </div>
    </div>
    <div class="product-info">
      <h1>{{ product.name }}</h1>
      <p class="description">{{ product.description }}</p>
    </div>
  </div>
  <h1 class="fancy-title"></h1>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          name: "激光针灸仪",
          description: "便携式激光针灸仪是一种高科技的小型便携式的治疗器材，采用激光照射和针灸原理，具有良好的治疗效果。便携式激光针灸仪具有便携、易操作、多功能等特点，采用低能量激光作为治疗手段，不会造成创伤和疼痛，其操作简单方便，不需要专业医师操作，可以在家庭、医院、旅游等多个场合进行自我治疗，非常适合于需要针灸治疗的儿童、老年人和敏感人群等，同时也满足了现代人追求高效便捷的生活方式。",
          price: "19800.00",
          image: "./product/zhenjiuyi.png",
        },
        {
          name: "针灸物理吸盘",
          description: "激光式针灸物理吸盘具有操作简单、适用范围广等特点，可以同时对多个部位进行理疗，用于缓解不同部位和不同类型的疼痛，同样可以根据个人需求选择不同规格和吸力大小的吸盘，以满足不同的理疗需求。同样其操作简单易学，不需要专业医师操作，即使是初学者也能轻松掌握使用方法，易于携带和存储，方便随时使用。激光式针灸物理吸盘可以根据个人健康需求定制理疗计划，将理疗效果最大化，帮助人们更好地维护身体健康。",
          price: "799.00",
          image: "./product/wulixipang.png",
        },
      ],
      currentProductIndex: 0, // 当前显示的产品索引
    };
  },
  computed: {
    product() {
      return this.products[this.currentProductIndex];
    },
  },
  methods: {
    // 切换到下一个产品
    nextProduct() {
      this.currentProductIndex = (this.currentProductIndex + 1) % this.products.length;
    },
  },
  mounted() {
    // 每3秒切换到下一个产品
    this.interval = setInterval(this.nextProduct, 2000);
  },
  beforeDestroy() {
    // 清理定时器
    clearInterval(this.interval);
  },
};
</script>

<style scoped>
.product-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  height: 650px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  max-width: 800px;
  margin: 0 auto;
  transition: transform 0.3s ease-in-out;
}

.product-image {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-bottom: 30px;
  width: 100%;
  height: 300px; /* 统一设置图片容器的高度 */
}

.image-wrapper {
  overflow: hidden; /* 防止图片溢出 */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-image img {
  margin-top: 30px;
  max-width: 100%; /* 图片自适应宽度 */
  height: auto; /* 高度自动调整 */
  object-fit: cover; /* 确保图片覆盖整个容器 */
}

.product-info {
  color: #333;
  text-align: center;
  word-wrap: break-word;
}

.product-info h1 {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
  letter-spacing: 1px;
}

.product-info .description {
  font-size: 18px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 30px;
  font-style: italic;
  word-wrap: break-word;
  white-space: normal;
  overflow: hidden;
}

.price-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.price {
  font-size: 32px;
  color: #f1c40f;
  font-weight: 700;
  letter-spacing: 1px;
  text-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
}

.fancy-title {
  font-size: 1.5rem;
  font-weight: bold;
  font-family: Consolas;
  text-align: left;
  color: #e8709a;
  letter-spacing: 1px;
  margin-bottom: 20px;
  margin-top: 20px;
  padding: 5px;
}
</style>
