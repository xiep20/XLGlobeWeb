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
        <div class="html-editor" ref="html-editor"></div>
      </div>
    </div>
    <div
      class="option hidden-md-and-down"
      :style="{ left: !codeVisible ? '10px' : 'calc(30% + 10px)' }"
    >
      <span v-if="!codeVisible">
        <svg-icon
          icon-class="expand"
          class-name="svg-icon"
          @on-click="codeVisible = true"
        ></svg-icon
        >源码
      </span>
      <span v-if="codeVisible">
        <svg-icon
          icon-class="shrink"
          class-name="svg-icon"
          @on-click="codeVisible = false"
        ></svg-icon
        >收缩
      </span>
    </div>
    <div
      class="example"
      ref="example"
      :style="{ width: codeVisible ? '70%' : '100%' }"
    ></div>
  </div>
</template>

<script>
import axios from 'axios'
import * as monaco from 'monaco-editor'

export default {
  name: 'CesiumEditor',
  data() {
    return {
      activeName: 'html-editor',
      examplePageText: '',
      label: '',
      htmlStr: '',
      oriHtmlStr: '',
      htmlEditor: null,
      codeVisible: false
    }
  },
  mounted() {
    this.loadExamplePage()
  },
  watch: {
    codeVisible(newValue) {
      if (newValue) {
        this.$nextTick(() => {
          this.createEditor()
        })
      }
    },
    '$route.query': {
      handler(newQuery) {
        if (newQuery.examplePath) {
          this.loadExamplePage()
        }
      },
      immediate: true
    }
  },
  methods: {
    createEditor() {
      let config = {
        theme: 'vs-dark',
        formatOnPaste: true,
        fontSize: 14,
        scrollbar: {
          verticalScrollbarSize: 2
        }
      }
      if (!this.htmlEditor) {
        this.htmlEditor = monaco.editor.create(this.$refs['html-editor'], {
          language: 'html',
          ...config
        })
        this.htmlEditor.setValue(this.htmlStr)
      } else {
        this.htmlEditor.setValue(this.htmlStr)
      }
    },
    reset() {
      this.htmlStr = this.oriHtmlStr
      this.htmlEditor && this.htmlEditor.setValue(this.htmlStr)
      this.loadExample()
    },
    run() {
      this.htmlStr = this.htmlEditor ? this.htmlEditor.getValue() : this.oriHtmlStr
      this.loadExample()
    },
    getExamplePage() {
      const examplePath = this.$route.query.examplePath
      if (!examplePath) {
        console.error('No examplePath provided in route query')
        return Promise.reject('No examplePath provided')
      }
      return axios.get(examplePath)
    },
    loadExamplePage() {
      this.getExamplePage().then(
        (examplePage) => {
          let exampleHtml = examplePage.data
          this.examplePageText = exampleHtml
          if (exampleHtml) {
            this.oriHtmlStr = exampleHtml
            this.htmlStr = exampleHtml
            this.loadExample()
          }
        }
      ).catch((error) => {
        console.error('Failed to load example page:', error)
      })
    },
    loadExample() {
      let iFrame = this.createIFrame()
      document.getElementsByTagName('title')[0].innerText = this.label || 'Cesium示例'
      let iframeDocument = iFrame.contentWindow.document
      iframeDocument.open()
      
      // 直接写入完整的HTML内容
      iframeDocument.write(this.htmlStr)
      iframeDocument.close()
    },
    createIFrame() {
      let examplePage = this.$refs['example']
      examplePage.innerHTML = ''
      let iframe = document.createElement('iframe')
      iframe.setAttribute('id', 'innerPage')
      iframe.setAttribute('name', 'innerPage')
      examplePage.append(iframe)
      return iframe
    },

  }
}
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
        height: 1000px;
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
      .svg-icon {
        width: 20px;
        height: 20px;
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
