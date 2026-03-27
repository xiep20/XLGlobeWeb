<template>
  <div class="demo-page-layout">
    <header class="demo-page-layout__header">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: breadcrumbRoot }">{{ breadcrumbRootLabel }}</el-breadcrumb-item>
        <el-breadcrumb-item>{{ title }}</el-breadcrumb-item>
      </el-breadcrumb>
      <h1 class="demo-page-layout__title">{{ title }}</h1>
    </header>
    <div class="demo-page-layout__body">
      <aside
        class="demo-page-layout__code"
        :class="{ 'demo-page-layout__code--collapsed': codeCollapsed }"
      >
        <div class="demo-page-layout__code-toolbar">
          <span>代码</span>
          <el-button
            type="primary"
            text
            size="small"
            @click="codeCollapsed = !codeCollapsed"
          >
            {{ codeCollapsed ? '展开' : '收起' }}
          </el-button>
        </div>
        <div v-show="!codeCollapsed" class="demo-page-layout__code-content">
          <pre><code>{{ codeContent }}</code></pre>
        </div>
      </aside>
      <main class="demo-page-layout__preview">
        <component
          v-if="previewComponent"
          :is="previewComponent"
        />
        <iframe
          v-else-if="previewUrl"
          :src="previewUrl"
          class="demo-page-layout__iframe"
          frameborder="0"
        />
        <div v-else class="demo-page-layout__placeholder">
          请配置 component 或 previewUrl
        </div>
      </main>
    </div>
    <footer v-if="links && links.length" class="demo-page-layout__footer">
      <span v-for="(link, i) in links" :key="i">
        <a :href="link.href" target="_blank" rel="noopener">{{ link.text }}</a>
        <span v-if="i < links.length - 1"> | </span>
      </span>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, markRaw, onMounted } from 'vue'

/**
 * 示例页布局：面包屑 + 左侧代码（可折叠）+ 右侧预览 + 底部链接
 *
 * 用于 type=demo 的卡片跳转后的页面。通过路由 params/query 传入 demoId 或 component 路径，动态加载预览组件或 iframe。
 */

const props = defineProps({
  /** 页面标题 */
  title: {
    type: String,
    default: '示例'
  },
  /** 面包屑根路径 */
  breadcrumbRoot: {
    type: String,
    default: '/cesium-native'
  },
  /** 面包屑根名称 */
  breadcrumbRootLabel: {
    type: String,
    default: '原生Cesium'
  },
  /** 代码内容（纯文本） */
  codeContent: {
    type: String,
    default: ''
  },
  /** 预览用组件（异步加载后传入） */
  previewComponent: {
    type: Object,
    default: null
  },
  /** 预览用 iframe URL（与 previewComponent 二选一） */
  previewUrl: {
    type: String,
    default: ''
  },
  /** 底部链接 [{ href, text }] */
  links: {
    type: Array,
    default: () => []
  }
})

const codeCollapsed = ref(false)
</script>

<style lang="scss" scoped>
.demo-page-layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  padding-top: 61px;
  background: #fff;
}

.demo-page-layout__header {
  padding: 16px 24px;
  border-bottom: 1px solid #eee;
}

.demo-page-layout__title {
  margin: 12px 0 0 0;
  font-size: 20px;
  color: #333;
}

.demo-page-layout__body {
  display: flex;
  flex: 1;
  min-height: 0;
}

.demo-page-layout__code {
  width: 400px;
  min-width: 200px;
  border-right: 1px solid #eee;
  display: flex;
  flex-direction: column;
  transition: width 0.2s, min-width 0.2s;

  &.demo-page-layout__code--collapsed {
    width: 48px;
    min-width: 48px;
  }
}

.demo-page-layout__code-toolbar {
  padding: 8px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  font-size: 12px;
  color: #666;
}

.demo-page-layout__code-content {
  flex: 1;
  overflow: auto;
  padding: 12px;

  pre {
    margin: 0;
    font-size: 12px;
    line-height: 1.5;
  }
  code {
    color: #333;
  }
}

.demo-page-layout__preview {
  flex: 1;
  min-width: 0;
  overflow: hidden;
}

.demo-page-layout__iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.demo-page-layout__placeholder {
  padding: 40px;
  color: #999;
  text-align: center;
}

.demo-page-layout__footer {
  padding: 12px 24px;
  border-top: 1px solid #eee;
  font-size: 12px;
  color: #666;

  a {
    color: #2a89ff;
    text-decoration: none;
  }
}
</style>
