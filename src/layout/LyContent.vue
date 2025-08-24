<template>
  <div class="ly-content">
    <router-view :key='key'/>
  </div>
</template>
<script>
export default {
  name: 'LyContent',
  data() {
    return {}
  },
  computed: {
    key() {
      return this.$route.fullPath;
    },
  },
}
</script>

<style lang="scss" scoped>
.ly-content {
  position: relative;
  width: 100%;
  background: #fff;
  height: calc(100%);
  overflow: hidden;
}
</style>
