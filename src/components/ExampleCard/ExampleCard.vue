<template>
  <div
    class="example-card"
    role="button"
    tabindex="0"
    @click="handleClick"
    @keydown.enter="handleClick"
  >
    <div class="example-card__image">
      <img
        v-if="card.image"
        :src="card.image"
        :alt="card.title"
        loading="lazy"
      />
      <div v-else class="example-card__placeholder" />
    </div>
    <div class="example-card__content">
      <h3 class="example-card__title">{{ card.title }}</h3>
      <p v-if="card.description" class="example-card__description">
        {{ card.description }}
      </p>
      <div v-if="card.tags && card.tags.length" class="example-card__tags">
        <span
          v-for="tag in card.tags"
          :key="tag"
          class="example-card__tag"
        >{{ tag }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

/**
 * 示例卡片组件
 *
 * 根据 card.type 执行：
 * - demo: 路由跳转 /demo/:module/:id（DemoPageLayout 组件/iframe）
 * - editor: 新窗口打开 ./#/editor?type=&example=&label=（Monaco 代码编辑 + 右侧运行）
 * - md: 路由跳转 /doc?path=（文档页）
 * - link: 新窗口打开外链
 * 样式：8px 圆角、16:9 图片区、hover 阴影、14px 标题、12px 灰色描述。
 */

const props = defineProps({
  card: {
    type: Object,
    required: true
  },
  /** 当前模块路由前缀，用于 demo 跳转时拼接路径 */
  modulePath: {
    type: String,
    default: ''
  }
})

const router = useRouter()

function handleClick() {
  const c = props.card
  if (!c || !c.type) return
  if (c.type === 'link' && c.link) {
    window.open(c.link, '_blank')
    return
  }
  if (c.type === 'md' && c.path) {
    router.push({ path: '/doc', query: { path: c.path } })
    return
  }
  if (c.type === 'editor' && c.editorType != null && c.editorExample != null) {
    // 参考 src/views/examples/ExampleList.vue 的实现，使用相对路径和 window.open
    const label = c.editorLabel != null ? c.editorLabel : c.title
    window.open(
      `editor?type=${encodeURIComponent(c.editorType)}&example=${encodeURIComponent(c.editorExample)}&label=${encodeURIComponent(label)}`
    )
    return
  }
  if (c.type === 'demo' && c.id) {
    const base = props.modulePath || '/demo'
    const path = base.replace(/\/$/, '') + '/' + c.id
    router.push(path)
  }
}
</script>

<style lang="scss" scoped>
.example-card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    transform: translateY(-4px);
  }

  &:focus {
    outline: 2px solid #2a89ff;
    outline-offset: 2px;
  }
}

.example-card__image {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 */
  background-color: #f5f7fa;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.example-card__placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #e8ecf1 0%, #f5f7fa 100%);
}

.example-card__content {
  padding: 16px;
}

.example-card__title {
  margin: 0 0 8px 0;
  font-size: 14px;
  font-weight: 600;
  color: #333;
  line-height: 1.4;
}

.example-card__description {
  margin: 0 0 10px 0;
  font-size: 12px;
  color: #666;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.example-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.example-card__tag {
  font-size: 11px;
  color: #909399;
  background: #f4f4f5;
  padding: 2px 8px;
  border-radius: 4px;
}
</style>
