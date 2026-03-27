<template>
  <div class="editor">
    <div class="code hidden-md-and-down" v-show="codeVisible">
      <div class="title">
        <h4>代码编辑器</h4>
        <div class="btn">
          <el-button
            type="warning"
            title="重置"
            size="small"
            @click="reset"
            >重置</el-button
          >
          <el-button
            type="success"
            size="small"
            title="运行"
            @click="run"
            >运行</el-button
          >
        </div>
      </div>
      <div class="content">
        <el-tabs v-model="activeName" @tab-click="handleTabClick">
          <el-tab-pane label="JS" name="js-editor">
            <div class="js-editor" ref="jsEditorRef"></div>
          </el-tab-pane>
          <el-tab-pane label="HTML" name="html-editor">
            <div class="html-editor" ref="htmlEditorRef"></div>
          </el-tab-pane>
        </el-tabs>
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

// tabs / 代码区状态
const activeName = ref('js-editor')
const codeVisible = ref(false)

// 示例页面相关数据
const type = ref('')
const example = ref('')
const label = ref('')
const tempHtml = ref('')
const oriHtmlStr = ref('')
const htmlStr = ref('')
const cssStr = ref('')
const importjsStr = ref('')
const oriJsStr = ref('')
const jsStr = ref('')
const otherJsStr = ref('')

// 编辑器与预览容器引用
const jsEditorRef = ref(null)
const htmlEditorRef = ref(null)

const exampleRef = ref(null)

// monaco 实例
const jsEditor = ref(null)
const htmlEditor = ref(null)

// 处理 tab 切换
function handleTabClick(tab) {
  nextTick(() => {
    createEditor()
  })
}

function createEditor() {
  // 确保 DOM 元素存在
  if (!jsEditorRef.value && !htmlEditorRef.value) {
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

    if (activeName.value === 'js-editor') {
      if (!jsEditor.value && jsEditorRef.value) {
        console.log('Creating JS editor');
        jsEditor.value = monaco.editor.create(jsEditorRef.value, {
          value: jsStr.value,
          language: 'javascript',
          ...config
        });
        console.log('JS editor created successfully');
      }
    } else if (activeName.value === 'html-editor') {
      if (!htmlEditor.value && htmlEditorRef.value) {
        console.log('Creating HTML editor');
        htmlEditor.value = monaco.editor.create(htmlEditorRef.value, {
          value: htmlStr.value,
          language: 'html',
          ...config
        });
        console.log('HTML editor created successfully');
      }
      // if (htmlEditor.value) {
      //   htmlEditor.value.setValue(htmlStr.value);
      // }
    }
}

function reset() {
  jsStr.value = oriJsStr.value
  htmlStr.value = oriHtmlStr.value
  if (jsEditor.value) {
    jsEditor.value.setValue(jsStr.value)
  }
  if (htmlEditor.value) {
    htmlEditor.value.setValue(htmlStr.value)
  }
  loadExample()
}

function run() {
  jsStr.value = jsEditor.value ? jsEditor.value.getValue() : oriJsStr.value
  htmlStr.value = htmlEditor.value ? htmlEditor.value.getValue() : oriHtmlStr.value
  loadExample()
}

function getTempPage() {
  return axios.get('examples/pages/temp.html')
}

function getExamplePage() {
  return axios.get(`examples/pages/${type.value}/${example.value}.html`)
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

function loadExample() {
  const iFrame = createIFrame()
  if (!iFrame) {
    return
  }
  const titleEls = document.getElementsByTagName('title')
  if (titleEls && titleEls[0]) {
    titleEls[0].innerText = label.value
  }
  iFrame.contentWindow.XLGlobe = window.XLGlobe
  const iframeDocument = iFrame.contentWindow.document
  iframeDocument.open()
  const content =
    htmlStr.value + otherJsStr.value + '<script>' + jsStr.value + '<' + '/script>'
  const csscont = cssStr.value
  iframeDocument.write(
    tempHtml.value
      .replace('.cssTemp {}', csscont)
      .replace('<importjs></importjs>', importjsStr.value)
      .replace('<htmlTemp />', content)
  )
  iframeDocument.close()      
}

onMounted(() => {
  nextTick(() => {
    const query = route.query || {}
    type.value = query.type || ''
    example.value = query.example || ''
    label.value = query.label || ''

    if (!type.value || !example.value) {
      return
    }

    Promise.all([getTempPage(), getExamplePage()])
      .then(([tempPage, examplePage]) => {
        tempHtml.value = tempPage.data
        let exampleHtml = examplePage.data
        if (exampleHtml && tempHtml.value) {
          const index1 = exampleHtml.indexOf('</style>')
          if (index1 >= 0) {
            cssStr.value = exampleHtml.substr(7, index1 - 7)
            exampleHtml = exampleHtml.substr(index1 + 8)
          }
          const importjsindex = exampleHtml.indexOf('</importjs>')
          if (importjsindex >= 0) {
            const importjsindexstart = exampleHtml.indexOf('<importjs>')
            importjsStr.value = exampleHtml.substr(
              importjsindexstart + 10,
              importjsindex - 12
            )
            exampleHtml = exampleHtml.replace(/<importjs>[\w\W]*<\/importjs>/g, '')
          }
          const index = exampleHtml.indexOf('<script>')
          const index2 = exampleHtml.indexOf('<&other&>')
          if (index2 >= 0) {
            oriHtmlStr.value = exampleHtml.substr(0, index2)
            otherJsStr.value = exampleHtml
              .substr(index2, index - index2)
              .replace(/&other&/g, 'script')
          } else {
            oriHtmlStr.value = exampleHtml.substr(0, index)
          }
          oriJsStr.value = exampleHtml
            .substr(index)
            .replace('<script>', '')
            .replace(/<\/script>/g, '')
          jsStr.value = oriJsStr.value
          htmlStr.value = oriHtmlStr.value
          loadExample()
          if (codeVisible.value) {
            nextTick(() => {
              createEditor()
            })
          }
        }
      })
      .catch((error) => {
        console.error('Failed to load example pages:', error)
      })
  })
})
// 监听 codeVisible 变化
watch(codeVisible, (newValue) => {
  if (newValue) {
    nextTick(() => {
      createEditor()
    })
  }
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
      .js-editor,
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
