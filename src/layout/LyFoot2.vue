<template>
  <div class="ly-foot" :class="footClass">
    <div class="">
      <div class="left">
        <span></span>
        <span
          ></span
        >
        <span> </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LyFoot',
  data() {
    return {}
  },
  computed: {
    footClass() {
      let clazz = ''
      if (this.$route.path === '/editor' || this.$route.path === '/deveditor') {
        clazz = 'hide-foot'
      } else {
        clazz = ''
      }
      return clazz
    },
    activeMenu() {
      return this.$route.path.replace('/', '')
    },
  },
}
</script>

<style lang="scss" scoped>
.ly-foot {
  // position: absolute;
  width: 100%;
  height: 52px;
  // background-color: #091427;
  color: #000;
  // float: right;
  // bottom: 0;
  text-align: center;
  line-height: 52px;
  z-index: 10;
  font-size: 14px;
  background-color: #fff;
  &.hide-foot {
    display: none;
  }
}
</style>
