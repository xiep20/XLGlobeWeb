<template>
  <div class="aframeEarth">
    <iframe :src="url" frameborder="0"></iframe>
  </div>
</template>
<script>
export default {
  name: 'AframeEarth',
  components: {},
  data() {
    return {
      url: 'Canvas-3d-earth/index.html',
    }
  },
  mounted() {},
}
</script>
<style scoped>
.aframeEarth {
  width: 100%;
  height: 100%;
  border: none;
}
iframe {
  width: 100%;
  height: 100%;
}
</style>
