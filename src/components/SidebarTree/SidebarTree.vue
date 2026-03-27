<template>
  <div class="sidebar-tree">
    <div
      class="sidebar-toggle"
      v-show="isCollapse"
      @click="isCollapse = false"
      title="收起"
    >
      <svg
        t="1601450206429"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1205"
        width="32"
        height="32"
      >
        <path
          d="M769.58720002 113.6128l0 800L640.00000002 913.61280001 640.00000002 113.6128zM574.41280002 113.6128l0 800.00000001-129.5872-1e-8L444.82560002 113.6128zM371.20000002 113.6128l0 800-129.5872 1e-8L241.61280002 113.6128z"
          fill="#ffffff"
          p-id="1206"
        ></path>
      </svg>
    </div>
    <div
      class="sidebar-toggle"
      v-show="!isCollapse"
      @click="isCollapse = true"
      title="展开"
    >
      <svg
        t="1601450243230"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1427"
        width="32"
        height="32"
      >
        <path
          d="M113.6128 126.4128h800V256H113.6128zM113.6128 321.5872h800v129.5872H113.6128zM113.6128 524.8h800v129.5872H113.6128z"
          fill="#ffffff"
          p-id="1428"
        ></path>
      </svg>
    </div>
    <el-menu
      :default-active="currentNodeKey"
      class="sidebar-tree__menu"
      :collapse="isCollapse"
      @select="onMenuSelect"
    >
      <template v-for="node in menuList" :key="node.id">
        <el-sub-menu v-if="hasChildren(node)" :index="node.id">
          <template #title>
            <i :class="'iconfont el-icon-' + node.icon"></i>
            <span class="sidebar-tree__menu-label">{{ node.label }}</span>
          </template>
          <sidebar-tree-node
            v-for="child in node.children"
            :key="child.id"
            :node="child"
          />
        </el-sub-menu>
        <el-menu-item v-else :index="node.id">
          <i :class="'iconfont el-icon-' + node.icon"></i>
          <span class="sidebar-tree__menu-label">{{ node.label }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import SidebarTreeNode from './SidebarTreeNode.vue'

/**
 * 可收缩的左侧菜单（基于 Element Plus el-menu）
 *
 * 数据从各模块 config 的 treeData 读取，支持多级；叶子节点可带 cards，
 * 点击时向父组件通知选中节点以便筛选右侧卡片。
 */

const props = defineProps({
  /** 树数据：TreeNode[] 或 单根 TreeNode */
  treeData: {
    type: Array,
    default: () => []
  },
  /** 当前选中节点 id */
  currentNodeKey: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['node-click', 'collapse-change'])

const isCollapse = ref(false)

watch(isCollapse, (val) => {
  emit('collapse-change', val)
})

const menuList = computed(() => {
  const d = props.treeData
  if (Array.isArray(d) && d.length) return d
  if (d && typeof d === 'object' && (d.id || d.label)) return [d]
  return []
})

const idToNode = computed(() => {
  const map = new Map()
  function walk(nodes) {
    if (!nodes || !nodes.length) return
    nodes.forEach((node) => {
      const id = node.id || node.label
      if (id) map.set(id, node)
      if (node.children && node.children.length) walk(node.children)
    })
  }
  walk(menuList.value)
  return map
})

function hasChildren(node) {
  return node.children && node.children.length > 0
}

function onMenuSelect(index) {
  const node = idToNode.value.get(index)
  if (node) emit('node-click', node)
}
</script>

<style lang="scss" scoped>
.sidebar-tree {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, #010308, #051a46, #041d4f);
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}

.sidebar-tree__toggle {
  margin: 8px;
  flex-shrink: 0;
}

.sidebar-tree__toggle :deep(.el-radio-button__inner) {
  padding: 6px 12px;
}

.sidebar-tree__menu {
  flex: 1;
  overflow-y: auto;
  border-right: none;
  background: transparent;
}

:deep(.el-menu) {
  background: transparent;
  color: #fff;
}

:deep(.el-menu-item),
:deep(.el-sub-menu__title) {
  color: #fff;
}

:deep(.el-menu-item:hover),
:deep(.el-sub-menu__title:hover) {
  background: rgba(0, 0, 0, 0.2);
  color: #fff;
}

:deep(.el-menu-item.is-active) {
  color: #2a89ff;
  background: rgba(42, 137, 255, 0.15);
}

:deep(.sidebar-tree__menu-label) {
  padding-left: 5px;
}

.sidebar-toggle {
  width: 100%;
  height: 36px;
  text-align: center;
  cursor: pointer;
  // background-color: #222530;
  background-color: #284074;
}
.sidebar-toggle svg {
  margin-top: 8px;
  width: 24px;
  height: 24px;
}
</style>
