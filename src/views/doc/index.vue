<template>
  <div class="doc-page">
    <header class="doc-page__header">
      <el-button type="primary" text @click="goBack">返回</el-button>
    </header>
    <div class="doc-page__body" v-loading="loading">
      <div
        v-if="content"
        ref="mdContainerRef"
        class="doc-page__md markdown-body"
        v-html="renderedContent"
      />
      <iframe
        v-else-if="iframeUrl"
        :src="iframeUrl"
        class="doc-page__iframe"
        frameborder="0"
        ref="dociframe"
        @load="handleIframeLoad"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { createMarkdownRenderer, renderMarkdown, processCodeBlocks } from '@/utils/markdown'
import 'highlight.js/styles/atom-one-dark.css'

/**
 * 文档页：展示 Markdown 或 HTML（type=md 卡片跳转目标）
 * 参考：markdown-it + highlight.js 代码高亮与代码块复制
 * @see https://article.juejin.cn/post/7458656534718316595
 */

const route = useRoute()
const router = useRouter()
const loading = ref(false)
const content = ref('')
const iframeUrl = ref('')
const mdContainerRef = ref(null)
const dociframe = ref(null)

const mdRenderer = createMarkdownRenderer()

const nPath = computed(() => route.query.path || '')

const renderedContent = computed(() => renderMarkdown(content.value, mdRenderer))

function goBack() {
  router.back()
}

function processMdCodeBlocks() {
  nextTick(() => {
    if (mdContainerRef.value) {
      processCodeBlocks(mdContainerRef.value)
    }
  })
}

watch(content, () => {
  processMdCodeBlocks()
})

function handleIframeLoad() {
  const tiframe = dociframe.value
  if (tiframe && tiframe.contentWindow && tiframe.contentWindow.document) {
    let frameH = tiframe.contentWindow.document.body.scrollHeight + 50
    tiframe.height = frameH
  }
}

function loadContent() {
  const path = nPath.value
  if (!path) return
  loading.value = true
  if (path.indexOf('.md') > -1) {
    fetch(path)
      .then((r) => r.text())
      .then((text) => {
        content.value = text
        iframeUrl.value = ''
        loading.value = false
        // 滚动到顶部
        if (document.getElementsByClassName('el-main').length > 0) {
          document.getElementsByClassName('el-main')[0].scrollTop = 0
        }
      })
      .catch(() => {
        loading.value = false
      })
  } else if (nPath.indexOf('.html') > -1) {
    iframeUrl.value = nPath
    content.value = ''
    loading.value = false
    // 滚动到顶部
    if (document.getElementsByClassName('el-main').length > 0) {
      document.getElementsByClassName('el-main')[0].scrollTop = 0
    }
  } else {
    loading.value = false
  }
}

onMounted(loadContent)
watch(nPath, loadContent)
</script>

<style lang="scss" scoped>
.doc-page {
  padding-top: 61px;
  height: 100%;
  min-height: 0;
  display: flex;
  flex-direction: column;
}

.doc-page__header {
  flex-shrink: 0;
  padding: 12px 24px;
  border-bottom: 1px solid #eee;
  background: #fff;
}

.doc-page__body {
  flex: 1;
  min-height: 0;
  overflow: auto;
  padding: 24px;
}

.doc-page__md {
  max-width: 70vw;
  margin: 0 auto;
  color: #333;
  font-size: 14px;
  line-height: 1.8;
}

/* 代码块复制按钮（由 processCodeBlocks 动态插入） */
.doc-page__md :deep(.md-copy-btn) {
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 4px 10px;
  font-size: 12px;
  color: #666;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
}
.doc-page__md :deep(.md-copy-btn:hover) {
  color: #2a89ff;
  border-color: #2a89ff;
}
.doc-page__md :deep(.md-copy-btn--done) {
  color: #67c23a;
  border-color: #67c23a;
}

/* Markdown 正文样式（v-html 渲染内容） */
.doc-page__md :deep(h1),
.doc-page__md :deep(h2),
.doc-page__md :deep(h3),
.doc-page__md :deep(h4),
.doc-page__md :deep(h5),
.doc-page__md :deep(h6) {
  color: #404040;
  font-weight: 500;
  margin: 1.6em 0 0.6em 0;
  clear: both;
}
.doc-page__md :deep(h1) { font-size: 28px; margin-bottom: 24px; line-height: 40px; }
.doc-page__md :deep(h2) { font-size: 22px; }
.doc-page__md :deep(h3) { font-size: 16px; }
.doc-page__md :deep(h4),
.doc-page__md :deep(h5),
.doc-page__md :deep(h6) { font-size: 14px; }

.doc-page__md :deep(p) { margin: 1em 0; }
.doc-page__md :deep(hr) {
  height: 1px;
  border: 0;
  background: #e9e9e9;
  margin: 16px 0;
}
.doc-page__md :deep(ul) { margin: 1em 0; padding-left: 2em; }
.doc-page__md :deep(ul > li) { list-style: circle; margin: 0.4em 0; }
.doc-page__md :deep(ol) { margin: 1em 0; padding-left: 2em; }
.doc-page__md :deep(ol > li) { list-style: decimal; margin: 0.4em 0; }

.doc-page__md :deep(code) {
  margin: 0 3px;
  padding: 2px 6px;
  background: #f5f5f5;
  border-radius: 3px;
  font-size: 13px;
  font-family: Consolas, Monaco, monospace;
}
.doc-page__md :deep(pre) {
  position: relative;
  margin: 1em 0;
  padding: 12px 16px;
  padding-top: 36px;
  background: #282c34;
  border-radius: 4px;
  overflow: auto;
  line-height: 1.5;
}
.doc-page__md :deep(pre code) {
  margin: 0;
  padding: 0;
  background: none;
  color: #abb2bf;
  font-size: 13px;
}

.doc-page__md :deep(blockquote) {
  font-size: 90%;
  color: #666;
  border-left: 4px solid #e9e9e9;
  padding-left: 1em;
  margin: 1em 0;
}
.doc-page__md :deep(blockquote p) { margin: 0.5em 0; }

.doc-page__md :deep(table) {
  border-collapse: collapse;
  border: 1px solid #e9e9e9;
  width: 100%;
  margin: 1em 0;
}
.doc-page__md :deep(th),
.doc-page__md :deep(td) {
  border: 1px solid #e9e9e9;
  padding: 8px 12px;
  text-align: left;
}
.doc-page__md :deep(th) {
  background: #f7f7f7;
  font-weight: 600;
  color: #333;
}
.doc-page__md :deep(strong),
.doc-page__md :deep(b) { font-weight: 600; }
.doc-page__md :deep(a) {
  color: #2a89ff;
  text-decoration: none;
}
.doc-page__md :deep(a:hover) { text-decoration: underline; }
.doc-page__md :deep(img) { max-width: 100%; vertical-align: middle; }
.doc-page__md :deep(iframe) { max-width: 100%; border: none; }

.doc-page__iframe {
  width: 100%;
  min-height: 80vh;
  border: none;
}
</style>
