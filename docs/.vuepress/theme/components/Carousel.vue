<script setup lang="ts">
import type { PlumeHomeConfigBase } from 'vuepress-theme-plume'
import { VPHomeBox } from 'vuepress-theme-plume/client'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps<PlumeHomeConfigBase & {
  // 组件 props, frontmatter 中的属性将会传递给组件
  backgroundImage?: string
  backgroundAttachment?: string
  full?: boolean
}>()

// 轮播图的图片数据
const items = [
  { src: 'https://raw.githubusercontent.com/Pai3141/PictureBed/main/img/math-pencil.png', alt: 'Image 1' },
  { src: 'https://raw.githubusercontent.com/Pai3141/PictureBed/main/img/pumpkin.png', alt: 'Image 2' },
  { src: 'https://raw.githubusercontent.com/Pai3141/PictureBed/main/img/math-pencil.png', alt: 'Image 3' },
  { src: 'https://raw.githubusercontent.com/Pai3141/PictureBed/main/img/why-domain-name.jpg', alt: 'Image 4' },
]

// 当前展示的图片索引
const currentIndex = ref(0)

// 定时器用于自动轮播
let autoSlideInterval: ReturnType<typeof setInterval> | null = null

// 切换到下一张图片
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % items.length
}

// 切换到上一张图片
const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + items.length) % items.length
}

// 跳转到指定图片
const goToSlide = (index: number) => {
  currentIndex.value = index
}

// 启动自动轮播
const startAutoSlide = () => {
  autoSlideInterval = setInterval(nextSlide, 3000) // 每3秒切换一次
}

// 组件挂载时启动自动轮播
onMounted(() => {
  startAutoSlide()
})

// 组件卸载时停止自动轮播
onBeforeUnmount(() => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval)
  }
})
</script>

<template>
  <VPHomeBox
      :type="type"
      :background-image="backgroundImage"
      :background-attachment="backgroundAttachment"
      :full="full"
  >
    <!-- 轮播图容器 -->
    <div class="carousel-container">
      <!-- 轮播图项目 -->
      <div class="carousel">
        <div
            class="carousel-items"
            :style="{
            transform: `translateX(-${currentIndex * 100}%)`
          }"
        >
          <div
              v-for="(item, index) in items"
              :key="index"
              class="carousel-item"
          >
            <img :src="item.src" :alt="item.alt" />
          </div>
        </div>
      </div>

      <!-- 上一张和下一张按钮 -->
      <button class="carousel-button prev" @click="prevSlide">❮</button>
      <button class="carousel-button next" @click="nextSlide">❯</button>

      <!-- 底部圆点导航 -->
      <div class="dots">
        <span
            v-for="(item, index) in items"
            :key="index"
            :class="['dot', { active: index === currentIndex }]"
            @click="goToSlide(index)"
        ></span>
      </div>
    </div>
  </VPHomeBox>
</template>

<style scoped>
.carousel-container {
  position: relative;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  overflow: hidden;
}

.carousel {
  position: relative;
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-items {
  display: flex;
}

.carousel-item {
  min-width: 100%;
  transition: opacity 0.5s ease-in-out;
}

.carousel-item img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  z-index: 10;
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}

.dots {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

.dot {
  width: 10px;
  height: 10px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  cursor: pointer;
}

.dot.active {
  background-color: white;
}
</style>
