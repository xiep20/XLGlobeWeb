<template>
  <div class="module-page">
    <ModuleLayout
      v-if="!loading && !error"
      title="Cesium原生示例"
      subtitle="选择您需要的功能模块，点击卡片查看详细内容"
      :tree-data="treeData"
      :cards-list="cardsList"
      module-path="/demo/cesium-native"
    />
    <div v-else-if="loading" class="module-page__loading">加载中...</div>
    <div v-else class="module-page__error">配置加载失败，请检查 config/cesium-native.json</div>
  </div>
</template>

<script setup>
import ModuleLayout from '@/layout/ModuleLayout.vue'
import { useModuleConfig } from '@/composables/useModuleConfig'

const { treeData, cardsList, loading, error } = useModuleConfig('cesium-native')
</script>

<style lang="scss" scoped>
.module-page__loading,
.module-page__error {
  padding: 60px 20px;
  text-align: center;
  color: #666;
}
.module-page__error {
  color: #f56c6c;
}
</style>
