<template>
  <div class="devdocpage" ref="devdocpage" :loading="loading">
    <markdown-it-vue
      class="md-body"
      :content="content"
      :options="options"
      v-show="ismarkdown"
    />
    <iframe
      :src="url"
      frameborder="0"
      class="rightiframe"
      :style="{ height: iframeH + 'px' }"
      ref="dociframe"
      v-show="url != ''"
    ></iframe>
  </div>
</template>

<script>
import MarkdownItVue from 'markdown-it-vue'
import 'markdown-it-vue/dist/markdown-it-vue.css'

export default {
  name: 'CesiumDevdoc',
  components: {
    MarkdownItVue,
  },
  data() {
    return {
      loading: false,
      url: '',
      content: '',
      ismarkdown: false,
      iframeH: '300',
      options: {
        markdownIt: {
          html: true,
          linkify: true,
        },
        linkAttributes: {
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        },
        katex: {
          throwOnError: false,
          errorColor: '#cc0000',
        },
        icons: 'font-awesome',
        githubToc: {
          tocFirstLevel: 2,
          tocLastLevel: 3,
          tocClassName: 'toc',
          anchorLinkSymbol: '',
          anchorLinkSpace: false,
          anchorClassName: 'anchor',
          anchorLinkSymbolClassName: 'octicon octicon-link',
        },
      },
    }
  },
  props: {
    mdUrl: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.iframeH = this.$refs.devdocpage.clientHeight
    this.loadContent()
  },

  watch: {
    mdUrl: {
      handler(newval) {
        if (newval) {
          this.loadContent()
        }
      },
      immediate: true,
    },
  },
  methods: {
    loadContent() {
      if (!this.mdUrl) return
      
      this.loading = true
      
      // 判断是否为markdown文件
      if (this.mdUrl.indexOf('.md') > 0) {
        if (this.$http && typeof this.$http.get === 'function') {
          this.$http
            .get(`${this.mdUrl}`)
            .then((res) => {
              this.url = ''
              this.content = `${res.data}`
              this.ismarkdown = true
              this.loading = false
            })
            .catch((e) => {
              console.error('Failed to load markdown:', e)
              this.loading = false
            })
        } else {
          console.error('$http not available')
          this.loading = false
        }
      } else if (this.mdUrl.indexOf('.html') > 0) {
        // HTML文件直接通过iframe显示
        this.url = this.mdUrl
        this.content = ''
        this.ismarkdown = false
        
        // 设置iframe高度
        setTimeout(() => {
          const tiframe = this.$refs.dociframe
          if (tiframe && tiframe.contentWindow && tiframe.contentWindow.document) {
            let frameH = tiframe.contentWindow.document.body.scrollHeight + 50
            tiframe.height = frameH
            this.iframeH = frameH
          }
          this.loading = false
        }, 800)
      } else {
        this.url = ''
        this.content = ''
        this.ismarkdown = false
        this.loading = false
      }
      
      // 滚动到顶部
      if (document.getElementsByClassName('el-main').length > 0) {
        document.getElementsByClassName('el-main')[0].scrollTop = 0
      }
    },
  },
}
</script>

<style scoped>
.devdocpage {
  width: 100%;
  min-height: 100%;
  text-align: left;
}

.markdown-body {
  width: 85%;
  margin: 0 0 0 5%;
}

.rightiframe {
  width: 100%;
  padding: 0;
  min-height: 100%;
  height: 100%;
}
</style>
