/**
 * 从 public/config 加载模块目录与卡片配置（JSON）
 *
 * 兼容多种配置格式：
 * - treeData 可为数组或单对象
 * - 节点分为两类：目录节点（含 label）和卡片节点（含 title）
 * - 目录节点的 children 可包含子目录或卡片
 *
 * @param {string} moduleKey 模块标识，对应 public/config/{moduleKey}.json
 * @returns {{ treeData: import('vue').Ref<Object|Array>, cardsList: import('vue').Ref<Array>, loading: import('vue').Ref<boolean>, error: import('vue').Ref<Error|null>, reload: Function }}
 */
import { ref, onMounted } from 'vue'

/**
 * 判断是否为卡片项（含 title）
 */
function isCardItem(item) {
  return item && typeof item.title === 'string' && typeof item.label !== 'string'
}

/**
 * 判断是否为目录节点（含 label）
 */
function isTreeNode(item) {
  return item && typeof item.label === 'string'
}

/**
 * 规范化树节点：将 children 中的卡片和目录节点分离
 * 卡片放入 node.cards，目录节点保留在 node.children
 */
function normalizeNode(node) {
  if (!node) return node
  const rawCards = Array.isArray(node.cards) ? node.cards : []
  const rawChildren = Array.isArray(node.children) ? node.children : []
  
  // 分离卡片和目录节点
  const cardItems = rawChildren.filter(isCardItem)
  const treeItems = rawChildren.filter(isTreeNode)
  
  // 合并原有 cards 和从 children 中提取的卡片
  node.cards = [...rawCards, ...cardItems]
  // 递归处理子目录节点
  node.children = treeItems.map(normalizeNode)
  
  return node
}

/**
 * 将配置中的 treeData 规范化为数组，并统一 nodes.cards 结构
 */
function normalizeTreeData(raw) {
  if (!raw) return []
  const list = Array.isArray(raw) ? raw : raw.id || raw.label ? [raw] : []
  return list.map(normalizeNode)
}

export function useModuleConfig(moduleKey) {
  const treeData = ref([])
  const cardsList = ref([])
  const loading = ref(true)
  const error = ref(null)

  function load() {
    if (!moduleKey) {
      loading.value = false
      return
    }
    loading.value = true
    error.value = null
    // 使用相对路径，适配 XLGlobeWeb 基础路径
    const url = `./config/${moduleKey}.json`
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}: ${url}`)
        return res.json()
      })
      .then((data) => {
        treeData.value = normalizeTreeData(data.treeData)
        cardsList.value = Array.isArray(data.cardsList) ? data.cardsList : []
      })
      .catch((e) => {
        error.value = e
        treeData.value = []
        cardsList.value = []
      })
      .finally(() => {
        loading.value = false
      })
  }

  onMounted(load)

  return { treeData, cardsList, loading, error, reload: load }
}
