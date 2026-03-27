/**
 * Markdown 渲染工具（参考 markdown-it + highlight.js 方案）
 * 支持代码高亮与代码块一键复制
 * @see https://article.juejin.cn/post/7458656534718316595
 *
 * 可选插件说明（仅当文档中用到对应语法时再安装）：
 * - markdown-it-emoji: 支持 :emoji:
 * - markdown-it-deflist: 定义列表
 * - markdown-it-abbr: 缩写
 * - markdown-it-footnote: 脚注 [^1]
 * - markdown-it-ins / mark / sub / sup: 下划线、高亮、下标、上标
 * - markdown-it-task-lists: 任务列表 [ ] / [x]
 * - markdown-it-container: ::: 自定义块（如 hljs-left/center/right）
 * - markdown-it-toc / markdown-it-toc-done-right: 目录
 * - @DatatracCorporation/markdown-it-mermaid: Mermaid 图表
 * 当前项目未使用上述语法，故未接入；若后续文档需要再按需安装并 .use(plugin)。
 */
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import typescript from 'highlight.js/lib/languages/typescript'
import xml from 'highlight.js/lib/languages/xml'
import css from 'highlight.js/lib/languages/css'
import json from 'highlight.js/lib/languages/json'
import python from 'highlight.js/lib/languages/python'
import shell from 'highlight.js/lib/languages/shell'
import sql from 'highlight.js/lib/languages/sql'
import java from 'highlight.js/lib/languages/java'
import cpp from 'highlight.js/lib/languages/cpp'
import c from 'highlight.js/lib/languages/c'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('js', javascript)
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('ts', typescript)
hljs.registerLanguage('html', xml)
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('css', css)
hljs.registerLanguage('json', json)
hljs.registerLanguage('python', python)
hljs.registerLanguage('py', python)
hljs.registerLanguage('shell', shell)
hljs.registerLanguage('bash', shell)
hljs.registerLanguage('sql', sql)
hljs.registerLanguage('java', java)
hljs.registerLanguage('cpp', cpp)
hljs.registerLanguage('c', c)

hljs.configure({ ignoreUnescapedHTML: true })

/**
 * 创建配置了代码高亮的 markdown-it 实例
 */
export function createMarkdownRenderer() {
  return new MarkdownIt({
    html: true,
    linkify: true,
    breaks: true,
    highlight(str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(str, { language: lang }).value
        } catch (_) {
          // ignore
        }
      }
      try {
        return hljs.highlightAuto(str).value
      } catch (_) {
        return ''
      }
    }
  })
}

const defaultMd = createMarkdownRenderer()

/**
 * 渲染 Markdown 为 HTML
 * @param {string} content
 * @param {MarkdownIt} [renderer] 可选，不传则用默认实例
 * @returns {string}
 */
export function renderMarkdown(content, renderer = defaultMd) {
  if (!content) return ''
  return (renderer || defaultMd).render(content)
}

/**
 * 对容器内 pre code 做语法高亮
 * @param {HTMLElement} element
 */
export function highlightCode(element) {
  if (!element || !element.querySelectorAll) return
  const blocks = element.querySelectorAll('pre code')
  blocks.forEach((el) => {
    hljs.highlightElement(el)
  })
}

/**
 * 为容器内每个 pre 代码块添加复制按钮
 * @param {HTMLElement} element
 */
export function addCopyButtons(element) {
  if (!element || !element.querySelectorAll) return
  const pres = element.querySelectorAll('pre')
  pres.forEach((pre) => {
    if (pre.querySelector('.md-copy-btn')) return
    const code = pre.querySelector('code')
    const text = code ? code.textContent || '' : ''
    const btn = document.createElement('button')
    btn.type = 'button'
    btn.className = 'md-copy-btn'
    btn.textContent = '复制'
    btn.addEventListener('click', () => {
      const toCopy = text
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(toCopy).then(
          () => {
            btn.textContent = '已复制'
            btn.classList.add('md-copy-btn--done')
            setTimeout(() => {
              btn.textContent = '复制'
              btn.classList.remove('md-copy-btn--done')
            }, 1500)
          },
          () => {
            btn.textContent = '复制失败'
          }
        )
      } else {
        const ta = document.createElement('textarea')
        ta.value = toCopy
        ta.style.position = 'fixed'
        ta.style.opacity = '0'
        document.body.appendChild(ta)
        ta.select()
        try {
          document.execCommand('copy')
          btn.textContent = '已复制'
          btn.classList.add('md-copy-btn--done')
          setTimeout(() => {
            btn.textContent = '复制'
            btn.classList.remove('md-copy-btn--done')
          }, 1500)
        } catch (e) {
          btn.textContent = '复制失败'
        }
        document.body.removeChild(ta)
      }
    })
    pre.style.position = 'relative'
    pre.insertBefore(btn, pre.firstChild)
  })
}

/**
 * 高亮代码块并添加复制按钮（文章中的 buildCodeBlock）
 * @param {HTMLElement} element 包含 markdown 渲染结果的容器
 */
export function processCodeBlocks(element) {
  highlightCode(element)
  addCopyButtons(element)
}

export default defaultMd
