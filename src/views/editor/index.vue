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
        <el-tabs v-model="activeName" @tab-click="tabClickHandler">
          <el-tab-pane label="JS" name="js-editor">
            <div class="js-editor" ref="js-editor"></div>
          </el-tab-pane>
          <el-tab-pane label="HTML" name="html-editor">
            <div class="html-editor" ref="html-editor"></div>
          </el-tab-pane>
        </el-tabs>
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
  name: 'EditorIndex',
  data() {
    return {
      activeName: 'js-editor',
      type: '',
      example: '',
      label: '',
      tempHtml: '',
      oriHtmlStr: '',
      htmlStr: '',
      cssStr: '',
      importjsStr:'',
      oriJsStr: '',
      jsStr: '',
      otherJsStr: '',
      htmlEditor: null,
      jsEditor: null,
      codeVisible: false
    }
  },
  watch: {
    codeVisible(newValue) {
      if (newValue) {
        this.$nextTick(() => {
          this.createEditor()
        })
      }
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
      if (this.activeName === 'js-editor') {
        if (!this.jsEditor) {
          this.jsEditor = monaco.editor.create(this.$refs['js-editor'], {
            language: 'javascript',
            ...config
          })
          this.jsEditor.setValue(this.jsStr)
        } else {
          this.jsEditor.setValue(this.jsStr)
        }
      } else if (this.activeName === 'html-editor') {
        if (!this.htmlEditor) {
          this.htmlEditor = monaco.editor.create(this.$refs['html-editor'], {
            language: 'html',
            ...config
          })
          this.htmlEditor.setValue(this.htmlStr)
        } else {
          this.htmlEditor.setValue(this.htmlStr)
        }
      }
    },
    reset() {
      this.jsStr = this.oriJsStr
      this.htmlStr = this.oriHtmlStr
      this.jsEditor && this.jsEditor.setValue(this.jsStr)
      this.htmlEditor && this.htmlEditor.setValue(this.htmlStr)
      this.loadExample()
    },
    run() {
      this.jsStr = this.jsEditor ? this.jsEditor.getValue() : this.oriJsStr
      this.htmlStr = this.htmlEditor
        ? this.htmlEditor.getValue()
        : this.oriHtmlStr
      this.loadExample()
    },
    getTempPage() {
      return axios.get('examples/pages/temp.html')
    },
    getExamplePage() {
      return axios.get(`examples/pages/${this.type}/${this.example}.html`)
    },
    loadExample() {
      let iFrame = this.createIFrame()
      document.getElementsByTagName('title')[0].innerText=this.label;
      iFrame.contentWindow['XLGlobe'] = window.XLGlobe
      let iframeDocument = iFrame.contentWindow.document
      iframeDocument.open()
      let content = this.htmlStr + this.otherJsStr + '<script>' + this.jsStr + '<' +  '/script>'
      let csscont = this.cssStr
      iframeDocument.write(this.tempHtml.replace('.cssTemp {}', csscont).replace('<importjs></importjs>',this.importjsStr).replace('<htmlTemp />', content))
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
    tabClickHandler(tab) {
      this.$nextTick(() => {
        this.createEditor()
      })
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (this.$route) {
        let query = this.$route.query
        this.type = query.type
        this.example = query.example
        this.label = query.label
        Promise.all([this.getTempPage(), this.getExamplePage()]).then(
          ([tempPage, examplePage]) => {
            this.tempHtml = tempPage.data
            let exampleHtml = examplePage.data
            if (exampleHtml && this.tempHtml) {
              let index1 = exampleHtml.indexOf('</style>')
              if (index1 >= 0) {
                this.cssStr = exampleHtml.substr(7, index1-7)
                exampleHtml = exampleHtml.substr(index1+8)
              }
              let importjsindex = exampleHtml.indexOf('</importjs>')
              if (importjsindex >= 0) {
              let importjsindexstart = exampleHtml.indexOf('<importjs>')
                this.importjsStr = exampleHtml.substr(importjsindexstart+10, importjsindex-12)
                exampleHtml=exampleHtml.replace(/<importjs>[\w\W]*<\/importjs>/g,'')
              }
              let index = exampleHtml.indexOf('<script>')
              let index2 = exampleHtml.indexOf('<&other&>')
              if (index2 >= 0) {
                this.oriHtmlStr = exampleHtml.substr(0, index2)
                this.otherJsStr = exampleHtml
                  .substr(index2, index - index2)
                  .replace(/&other&/g, 'script')
              } else {
                this.oriHtmlStr = exampleHtml.substr(0, index)
              }
              this.oriJsStr = exampleHtml
                .substr(index)
                .replace('<script>', '')
                .replace(/<\/script>/g, '')
              this.jsStr = this.oriJsStr
              this.htmlStr = this.oriHtmlStr
              this.loadExample()
            }
          }
        ).catch((error) => {
          console.error('Failed to load example pages:', error)
        })
      }
    })
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
      .js-editor,
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
