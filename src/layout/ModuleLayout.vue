<template>
  <div class="module-layout">
    <aside
      class="module-layout__aside"
      :style="{ width: asideWidth }"
    >
      <SidebarTree
        :tree-data="normalizedTreeData"
        :current-node-key="currentNodeKey"
        @node-click="onTreeNodeClick"
        @collapse-change="onCollapseChange"
      />
    </aside>
    <main ref="mainContentRef" class="module-layout__main">
      <div class="module-layout__header">
        <h2 class="module-layout__title">{{ title }}</h2>
        <p v-if="subtitle" class="module-layout__subtitle">{{ subtitle }}</p>
      </div>
      <template v-if="displaySections.length">
        <template v-for="group in displaySections" :key="group.id">
          <section :id="'nav-' + group.id" class="module-layout__group">
            <h3 class="module-layout__group-title">{{ group.label }}</h3>
            <div class="module-layout__group-border"></div>
            <template v-for="section in group.subsections" :key="section.id">
              <div :id="'nav-' + section.id" class="module-layout__section">
                <h4 v-if="section.label" class="module-layout__section-title">{{ section.label }}</h4>
                <div class="module-layout__grid">
                  <ExampleCard
                    v-for="card in section.cards"
                    :key="card.id"
                    :card="card"
                    :module-path="modulePath"
                  />
                </div>
              </div>
            </template>
          </section>
        </template>
      </template>
      <div v-else class="module-layout__grid">
        <ExampleCard
          v-for="card in displayCards"
          :key="card.id"
          :card="card"
          :module-path="modulePath"
        />
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue'
import SidebarTree from '@/components/SidebarTree/SidebarTree.vue'
import ExampleCard from '@/components/ExampleCard/ExampleCard.vue'

/**
 * 通用模块布局：左侧可收缩目录树 + 右侧卡片网格
 *
 * 用于功能示例、原生Cesium、ThreeJS、WebGPU、场景示例。
 * treeData 从各模块 config/cards.js 的 treeData 传入；卡片从树中收集或直接传入 cardsList。
 */

const props = defineProps({
  /** 模块标题 */
  title: {
    type: String,
    default: '示例'
  },
  /** 副标题/说明 */
  subtitle: {
    type: String,
    default: ''
  },
  /** 树数据（单根或数组） */
  treeData: {
    type: [Object, Array],
    default: () => ({})
  },
  /** 扁平卡片列表（若提供则优先使用，否则从 treeData 收集） */
  cardsList: {
    type: Array,
    default: () => []
  },
  /** 当前模块路由前缀，用于 demo 跳转 */
  modulePath: {
    type: String,
    default: '/demo'
  },
  /** 左侧栏宽度（展开时） */
  asideWidthDefault: {
    type: String,
    default: '280px'
  }
})

const currentNodeKey = ref('')
const asideWidth = ref(props.asideWidthDefault)
const mainContentRef = ref(null)

const normalizedTreeData = computed(() => {
  const t = props.treeData
  if (Array.isArray(t) && t.length) return t
  if (t && typeof t === 'object' && (t.id || t.label)) return [t]
  return []
})

function onCollapseChange(collapsed) {
  asideWidth.value = collapsed ? '48px' : props.asideWidthDefault
}

function collectCardsFromTree(node, list = []) {
  if (!node) return list
  if (node.cards && node.cards.length) {
    list.push(...node.cards)
  }
  if (node.children && node.children.length) {
    node.children.forEach(child => collectCardsFromTree(child, list))
  }
  return list
}

/**
 * 收集有 cards 的节点为扁平区块列表（保留顺序）
 * 支持多级目录嵌套，只收集包含卡片的节点
 */
function collectSectionsFromTree(node, sections = []) {
  if (!node) return sections
  // 如果当前节点有卡片，收集为一个区块
  if (node.cards && node.cards.length) {
    sections.push({
      id: node.id || node.label || 'section-' + sections.length,
      label: node.label || '示例',
      cards: node.cards
    })
  }
  // 递归处理子节点
  if (node.children && node.children.length) {
    node.children.forEach(child => collectSectionsFromTree(child, sections))
  }
  return sections
}

/**
 * 按一级目录分组：每个一级子节点为 group，其下带 cards 的节点为 subsection
 * 右侧展示为：一级标题 -> 二级标题 + 卡片网格 -> ...
 * 支持多级目录结构和多根节点
 */
function collectGroupedSections(root) {
  if (!root) return []
  
  // 如果没有 children，直接收集根节点的卡片
  if (!root.children || !root.children.length) {
    const flat = collectSectionsFromTree(root, [])
    if (flat.length === 0) return []
    // 如果只有一个区块且标签与根节点相同，简化显示
    if (flat.length === 1 && flat[0].label === (root.label || '')) {
      flat[0].label = ''
    }
    return [{ id: 'single', label: root.label || '示例', subsections: flat }]
  }
  
  const groups = []
  // 遍历所有一级子节点作为分组
  root.children.forEach(node => {
    // 递归收集该子树下所有带卡片的节点
    const subsections = collectSectionsFromTree(node, [])
    if (subsections.length) {
      groups.push({
        id: node.id || node.label || 'group-' + groups.length,
        label: node.label || '示例',
        subsections
      })
    }
  })
  return groups
}

const displaySections = computed(() => {
  if (props.cardsList && props.cardsList.length) return []
  const tree = props.treeData
  
  // 如果是数组且有多个根节点，需要合并所有根节点的 sections
  if (Array.isArray(tree) && tree.length > 1) {
    const allSections = []
    tree.forEach(root => {
      const sections = collectGroupedSections(root)
      if (sections.length) {
        // 如果返回的是单个组，直接使用；否则展开
        if (sections.length === 1 && sections[0].id === 'single') {
          allSections.push({
            id: root.id || root.label || 'group-' + allSections.length,
            label: root.label || '示例',
            subsections: sections[0].subsections
          })
        } else {
          allSections.push(...sections)
        }
      }
    })
    return allSections
  }
  
  // 单个根节点的情况
  const root = Array.isArray(tree) ? tree[0] : tree
  return collectGroupedSections(root)
})

const displayCards = computed(() => {
  if (props.cardsList && props.cardsList.length) return props.cardsList
  const tree = props.treeData
  const root = Array.isArray(tree) ? tree[0] : tree
  return collectCardsFromTree(root, [])
})

function onTreeNodeClick(data) {
  const id = data.id || ''
  currentNodeKey.value = id
  nextTick(() => {
    const el = id ? document.getElementById('nav-' + id) : null
    if (el && mainContentRef.value) {
      mainContentRef.value.scrollTop = el.offsetTop - 65
    }
  })
}
</script>

<style lang="scss" scoped>
.module-layout {
  display: flex;
  width: 100%;
  height: 100%;
  padding-top: 61px;
  overflow: hidden;
}

.module-layout__aside {
  flex-shrink: 0;
  height: 100%;
  transition: width 0.2s ease;
  overflow: hidden;
}

.module-layout__main {
  flex: 1;
  min-width: 0;
  height: 100%;
  overflow-y: auto;
  background: #efefef;
}

.module-layout__header {
  text-align: center;
  padding: 20px 20px 24px;
  margin-bottom: 8px;

  .module-layout__title {
    color: #2a89ff;
    font-size: 28px;
    margin: 0 0 10px 0;
  }

.module-layout__subtitle {
  color: #666;
  font-size: 16px;
  margin: 0;
}
}

.module-layout__group {
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
}

.module-layout__group-title {
  font-size: 24px;
    color: #00000099;
    margin: 0 0 0px 20px;
    font-weight: 700;
}
.module-layout__group-border{
  display: block;
    height: 1px;
    width: calc(100% - 30px);
    margin: 15px 20px;
    background-color: #0865ba !important;
}

.module-layout__section {
  margin-left: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}

.module-layout__section-title {
  font-size: 18px;
  color: #333;
  margin: 0 0 16px 0;
  padding: 0 20px 0 0;
  font-weight: 500;
  border-left: 4px solid #2a89ff;
  padding-left: 12px;
}

.module-layout__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 32px;
  max-width: calc(100% - 160px);
  margin: 0 auto;
  padding: 0 20px 60px;
}

@media (max-width: 768px) {
  .module-layout__grid {
    grid-template-columns: 1fr;
  }
}
</style>
