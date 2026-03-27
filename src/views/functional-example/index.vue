<template>
  <div class="module-page">
    <ModuleLayout
      v-if="!loading && !error"
      title="功能示例"
      subtitle="示例仅做参考，展现的数据为测试数据；使用 XLGlobe 开发。"
      :tree-data="treeData"
      :cards-list="cardsList"
      module-path="/demo/functional-example"
    />
    <div v-else-if="loading" class="module-page__loading">加载中...</div>
    <div v-else class="module-page__error">配置加载失败，请检查 config/functional-example.json</div>
  </div>
</template>

<script setup>
import ModuleLayout from '@/layout/ModuleLayout.vue'
import { useModuleConfig } from '@/composables/useModuleConfig'

const { treeData, cardsList, loading, error } = useModuleConfig('functional-example')
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
