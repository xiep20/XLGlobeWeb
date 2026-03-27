<template>
  <el-sub-menu v-if="hasChildren" :index="node.id">
    <template #title>
      <i :class="'iconfont el-icon-' + node.icon"></i>
      <span class="sidebar-tree__menu-label">{{ node.label }}</span>
    </template>
    <sidebar-tree-node
      v-for="child in node.children"
      :key="child.id || child.label"
      :node="child"
    />
  </el-sub-menu>
  <el-menu-item v-else :index="node.id">
    <i :class="'iconfont el-icon-' + node.icon"></i>
    <span class="sidebar-tree__menu-label">{{ node.label }}</span>
  </el-menu-item>
</template>

<script setup>
import { computed } from 'vue'

/**
 * 递归渲染单层菜单节点：有子节点用 el-sub-menu，否则用 el-menu-item
 */

const props = defineProps({
  node: {
    type: Object,
    required: true
  }
})

const hasChildren = computed(() => {
  return props.node.children && props.node.children.length > 0
})
</script>
