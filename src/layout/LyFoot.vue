<template>
  <div class="ly-foot" :class="footClass">
    <div class="md-footer-panel">
      <div class="ly-foot-copyright">
        <div>
          <span style="margin-right: 15px;">
            个人笔记
          </span>
          <span></span>
        </div>
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
    }
  },
  methods: {
    linkFun(e) {
      var val = e.target.innerHTML
      switch (val) {
        case 'XLMap For Web':
          window.open('http://103.94.20.254:6090/DeuMapWeb_v2.0/#/', '_blank')
          break
        case 'XLMapGL For Web':
          window.open('http://103.94.20.254:6090/RJMapWebGL_v2.0/#/', '_blank')
          break
        case 'XLMap For Server':
          window.open('http://103.94.20.254:9093/#/', '_blank')
          break
        case 'XLGlobeWeb for Cesium':
          window.open(
            'http://103.94.20.254:6090/XLGlobeWeb_V2.0/#/index',
            '_blank'
          )
          break
        case 'XLGlobe For Server':
          window.open('http://103.94.20.254:6090/RJMapWebGL_v2.0/#/', '_blank')
          break
        case 'XLMap For DataStore':
          window.open('http://192.168.200.245:9097/#/', '_blank')
          break
        case 'XLGlobe For DataStore':
          window.open('http://192.168.200.245:9097/#/', '_blank')
          break
        case '智慧城市':
          this.$router.push('/application?item=智慧城市')
          break
        case '智慧交通':
          this.$router.push('/application?item=' + val)
          break
        case '智慧园区':
          this.$router.push('/application?item=' + val)
          break
        case '智慧水务':
          this.$router.push('/application?item=' + val)
          break
        case '智慧管网':
          this.$router.push('/application?item=' + val)
          break
        case '智慧规划':
          this.$router.push('/application?item=' + val)
          break
        case '智慧城管':
          this.$router.push('/application?item=' + val)
          break
        case 'XLMap JS API':
          window.open(
            '',
            '_blank'
          )
          break
        case 'XLMapGL JS API':
          window.open(
            '',
            '_blank'
          )
          break
        case 'XLGlobe JS API':
          this.$router.push('/docs/2-1')
          break
        case '简介':
          window.open(
            '',
            '_blank'
          )
          break
        case '联系我们':
          window.open(
            '',
            '_blank'
          )
          break
        default:
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.ly-foot {
  // position: absolute;
  width: 100%;
  // height: 200px;
  background-color: #1f2023;
  color: #fff;
  float: right;
  // bottom: 0;
  text-align: center;
  line-height: 36px;
  z-index: 10;
  &.hide-foot {
    display: none;
  }
  a {
    color: #a9a9a9;
    text-decoration: none;
  }
  .md-footer-panel {
    color: #a9a9a9;
    font-size: 12px;
    min-width: 840px;
    width: 70%;
    margin: 0 0 0 15%;
    .ly-foot-menu {
      position: relative;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 100%;
      margin: 0;
      padding-top: 24px;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
      .menu-box {
        position: relative;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        .menu-gzh {
          position: relative;
          width: 128px;
          em {
          }
        }
        .menu-logo {
          position: relative;
          height: 36px;
          width: 128px;
          overflow: hidden;
          margin-bottom: 20px;
          cursor: pointer;
          img {
            width: 26px;
            padding: 5px 5px 5px 0;
            float: left;
          }
          span {
            line-height: 36px;
            font-size: 18px;
            padding: 0 0 0 5px;
            float: left;
          }
        }
        .menu-title {
          position: relative;
          height: 28px;
          line-height: 28px;
          vertical-align: middle;
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          overflow: hidden;
          margin-bottom: 20px;
        }
        .menu-link {
          position: relative;
          height: 17px;
          line-height: 17px;
          vertical-align: middle;
          overflow: hidden;
          margin-bottom: 20px;
          cursor: pointer;
        }
      }
    }
    .ly-foot-copyright {
      position: relative;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 100%;
      margin: 0;
      padding: 0;
      height: 64px;
      line-height: 64px;
      vertical-align: middle;
      text-align: center;
      border-top: 1px solid #2e2f33;
    }
  }
}
</style>
