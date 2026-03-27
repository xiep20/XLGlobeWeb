<template>
  <div class="editor">
    <div class="code hidden-md-and-down" v-show="codeVisible">
      <div class="title">
        <h4>代码编辑器</h4>
        <div class="btn">
          <el-button
            type="warning"
            title="重置"
            size="mini"
            icon="el-icon-refresh"
            @click="reset"
            >重置</el-button
          >
          <el-button
            type="success"
            size="mini"
            title="运行"
            icon="el-icon-video-play"
            @click="run"
            >运行</el-button
          >
        </div>
      </div>
      <div class="content">
        <div class="html-editor" ref="htmlEditorRef"></div>
      </div>
    </div>
    <div
      class="option hidden-md-and-down"
      :style="{ left: !codeVisible ? '10px' : 'calc(30% + 10px)' }"
    >
      <span v-if="!codeVisible" @click="codeVisible = true">
        <i class="iconfont el-icon-zhankai"></i> 源码
      </span>
      <span v-if="codeVisible" @click="codeVisible = false">
        <i class="iconfont el-icon-shouqi1"></i> 收缩
      </span>
    </div>
    <div
      class="example"
      ref="exampleRef"
      :style="{ width: codeVisible ? '70%' : '100%' }"
    ></div>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import * as monaco from 'monaco-editor'
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';


self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === 'json') {
      return new jsonWorker();
    }
    if (label === 'css' || label === 'scss' || label === 'less') {
      return new cssWorker();
    }
    if (label === 'html' || label === 'handlebars' || label === 'razor') {
      return new htmlWorker();
    }
    if (label === 'typescript' || label === 'javascript') {
      return new tsWorker();
    }
    return new editorWorker();
  },
};

const route = useRoute()

// 编辑器相关数据
const examplePageText = ref('')
const label = ref('')
const htmlStr = ref('')
const oriHtmlStr = ref('')
const codeVisible = ref(false)

// 编辑器与预览容器引用
const htmlEditorRef = ref(null)
const exampleRef = ref(null)

// monaco 实例
const htmlEditor = ref(null)

// 监听 codeVisible 变化
watch(codeVisible, (newValue) => {
  if (newValue) {
    nextTick(() => {
      createEditor()
    })
  }
})

// 监听路由变化
watch(() => route.query, (newQuery) => {
  if (newQuery.examplePath) {
    loadExamplePage()
  }
}, { immediate: true })

function createEditor() {
  // 确保 DOM 元素存在
  if (!htmlEditorRef.value) {
    console.warn('Editor container not found');
    return;
  }

  const config = {
    theme: 'vs-dark',
    formatOnPaste: true,
    fontSize: 14,
    scrollbar: {
      verticalScrollbarSize: 2
    }
  }

  if (!htmlEditor.value) {
    console.log('Creating HTML editor');
    htmlEditor.value = monaco.editor.create(htmlEditorRef.value, {
      value: htmlStr.value,
      language: 'html',
      ...config
    });
    console.log('HTML editor created successfully');
  }
}

function reset() {
  htmlStr.value = oriHtmlStr.value
  if (htmlEditor.value) {
    htmlEditor.value.setValue(htmlStr.value)
  }
  loadExample()
}

function run() {
  htmlStr.value = htmlEditor.value ? htmlEditor.value.getValue() : oriHtmlStr.value
  loadExample()
}

function getExamplePage() {
  const examplePath = route.query.examplePath
  if (!examplePath) {
    console.error('No examplePath provided in route query')
    return Promise.reject('No examplePath provided')
  }
  return axios.get(examplePath)
}

function loadExamplePage() {
  getExamplePage().then(
    (examplePage) => {
      let exampleHtml = examplePage.data
      examplePageText.value = exampleHtml
      if (exampleHtml) {
        oriHtmlStr.value = exampleHtml
        htmlStr.value = exampleHtml
        loadExample()
      }
    }
  ).catch((error) => {
    console.error('Failed to load example page:', error)
  })
}

function loadExample() {
  const iFrame = createIFrame()
  if (!iFrame) {
    return
  }
  const titleEls = document.getElementsByTagName('title')
  if (titleEls && titleEls[0]) {
    titleEls[0].innerText = label.value || 'Cesium示例'
  }
  iFrame.contentWindow.XLGlobe = window.XLGlobe
  const iframeDocument = iFrame.contentWindow.document
  iframeDocument.open()
  
  // 为相对路径添加基础路径
  let content = htmlStr.value
  // 获取当前页面的基础路径
  const baseUrl = '' // window.location.origin + '/XLGlobeWeb/'
  // 为所有相对路径添加基础路径
  content = content.replace(/(src|href)="(?!http)([^"]+)"/g, (match, attr, path) => {
    if (path.startsWith('/')) {
      // 处理以/开头的路径
      return `${attr}="${baseUrl}${path.substring(1)}"`
    } else {
      // 处理相对路径，移除所有../前缀
      let cleanPath = path
      while (cleanPath.startsWith('../')) {
        cleanPath = cleanPath.substring(3)
      }
      return `${attr}="${baseUrl}${cleanPath}"`
    }
  })
  
  // 直接写入完整的HTML内容
  iframeDocument.write(content)
  iframeDocument.close()
}

function createIFrame() {
  const exampleEl = exampleRef.value
  if (!exampleEl) {
    return null
  }
  exampleEl.innerHTML = ''
  const iframe = document.createElement('iframe')
  iframe.setAttribute('id', 'innerPage')
  iframe.setAttribute('name', 'innerPage')
  exampleEl.append(iframe)
  return iframe
}

onMounted(() => {
  loadExamplePage()
})
</script>

<style lang="scss">
#innerPage {
  width: 100%;
  height: 100%;
  border: none;
  overflow: hidden;
}
.code {
  .el-tabs__header {
    margin: 0 0 0 10px;
  }
}
</style>

<style lang="scss" scoped>
.editor {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  .code {
    height: 100%;
    width: 30%;
    overflow: hidden;
    .title {
      padding: 10px 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      h4 {
        color: #cecece;
      }
    }
    .content {
      overflow: hidden;
      padding: 0 2px;
      .html-editor {
        height: calc(100vh - 100px);
      }
    }
  }
  .option {
    position: absolute;
    top: 20px;
    height: 25px;
    width: 60px;
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    cursor: pointer;
    font-size: 13px;
    font-weight: bold;
    border-radius: 4px;
    span {
      height: 100%;
      display: flex;
      align-items: center;
      i {
        width: 20px;
        height: 20px;
        line-height: 20px;
        margin: 0px 5px;
      }
    }
  }
  .example {
    width: 70%;
    height: 100%;
    overflow: hidden;
  }
}
</style>
