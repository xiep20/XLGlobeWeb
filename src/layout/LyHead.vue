<template>
  <div class="ly-head" :class="headClass">
    <div class="title">
      <img src="../assets/images/favicon.png" />
      <font style="color: #fff; margin-left: 10px"
        >XLGlobe For WebGL<span style="font-size: 12px"> （V2.0）</span></font
      >
    </div>
    <div class="menu-h">
      <el-menu
        menu-trigger="hover"
        :default-active="activeMenu"
        class="menu-list hidden-sm-and-down"
        mode="horizontal"
        @select="menuSelectHandler"
        text-color="#fff"
        active-text-color="#2A89FF"
      >
        <el-menu-item index="/index">首页</el-menu-item>
        <el-menu-item index="/examples">功能示例</el-menu-item>
        <el-submenu index="/docs">
          <template slot="title">开发文档</template>
            <el-menu-item index="/docs/1-1-1">开发指南</el-menu-item>
            <el-menu-item index="/docs/2-1">类参考</el-menu-item>
            <el-menu-item index="/docs/3-1">相关文档</el-menu-item>
        </el-submenu>
        <!-- <el-submenu index="/application">
          <template slot="title">行业应用</template>
          <el-menu-item index="/application_智慧城市">智慧城市</el-menu-item>
          <el-menu-item index="/application_智慧交通">智慧交通</el-menu-item>
          <el-menu-item index="/application_智慧园区">智慧园区</el-menu-item>
          <el-menu-item index="/application_智慧水务">智慧水务</el-menu-item>
          <el-menu-item index="/application_智慧管网">智慧管网</el-menu-item>
          <el-menu-item index="/application_智慧规划">智慧规划</el-menu-item>
          <el-menu-item index="/application_应急指挥">应急指挥</el-menu-item>
          <el-menu-item index="/application_智慧城管">智慧城管</el-menu-item>
          <el-menu-item index="/application_北斗应用">北斗应用</el-menu-item>
        </el-submenu> -->
      </el-menu>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LyHead',
  data() {
    return {
      drawer: false,
    }
  },
  computed: {
    headClass() {
      let clazz = ''
      if (this.$route.path === '/editor') {
        clazz = 'hide-head'
      } else if (
        this.$route.path !== '/index' &&
        this.$route.path !== '/application'
      ) {
        clazz = 'bg-head'
      } else if (
        this.$route.path === '/index' ||
        this.$route.path === '/application'
      ) {
        clazz = 'bg-head-hide'
      }
      return clazz
    },
    activeMenu() {
      // return this.$route.path.replace('/', '')
      return this.$route.path
    },
  },
  methods: {
    menuSelectHandler(index) {
      if (index.indexOf('/application_') == 0) {
        this.$router
          .push({
            path: '/application',
            query: {
              item: index.split('_')[1],
            },
          })
          .catch((err) => {
            err
          })
      }else {
        this.$router.push(index).catch((err) => {
          err
        })
      }
      this.drawer = false
    },
    gotoGitHub() {},
  },
}
</script>

<style lang="scss">
.el-menu {
  background-color: transparent;
}
.el-menu--horizontal .el-menu .el-menu-item,
.el-menu--horizontal .el-menu .el-submenu__title {
  background-color: transparent;
}

.el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
.el-menu--horizontal > .el-submenu .el-submenu__title:hover {
  background-color: transparent;
}
.ly-head {
  .menu-h {
    .el-menu.el-menu--horizontal {
      border-bottom: solid 0px #e6e6e6;
      .el-menu-item {
        // height: 40px;
        // line-height: 40px;
        // color: #fff;
        // font-weight: bold;
        // background: transparent;
        font-size: 20px;
      }
      .el-submenu {
        // background: transparent;
        // font-size: 16px;
        // color: #fff;
        // font-weight: bold;
        // background: transparent;
        .el-submenu__title {
          //   height: 40px;
          //   line-height: 40px;
          //   border-bottom: 2px solid transparent;
          color: #ffffff;
          font-size: 20px;
        }
      }
    }
  }
}
body > .el-menu--horizontal {
  // background-color: rgb(37, 37, 37);
  background-color:rgba(5, 26, 70, 0.8);
  color: #fff;
  width: 150px;
  // margin-left: 20px;
  .el-menu-item {
    width: 150px;
  }
}
.el-menu--horizontal > .el-menu-item {
  color: #fff;
}
.el-menu--horizontal > .el-menu-item.is-active {
  color: #2a89ff;
  border-image: #2a89ff; //linear-gradient(to right, #0dccff, #4760ff) 1 10;
}
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  outline: 0;
  color: #2a89ff !important;
  background-color: rgba(5, 26, 70, 0.5);
}

.menu-drawer {
  .logo {
    text-align: center;
    margin-top: 15px;
    .svg-icon {
      width: 70px;
      height: 70px;
      color: #0865ba;
    }
  }
  .title {
    margin: 10px 0;
    text-align: center;
    font-size: 20px;
    font-style: oblique;
    background: linear-gradient(to right, rgb(241, 8, 40), #0865ba);
    background-clip: text;
    color: transparent;
  }
  .menu-list {
    padding-left: 10px;
    .svg-icon {
      width: 20px;
      height: 20px;
      margin-right: 20px;
    }
    .el-menu-item {
      background: transparent;
      border-bottom: 0 solid #409eff;
      font-size: 20px;
      color: rgba(255, 255, 255, 0.6);
      &.is-active {
        color: #409eff;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.ly-head {
  position: absolute;
  height: 61px;
  // width: calc(100% - 40px);
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  padding: 0px 20px 0 20px;
  .title {
    color: #fff;
    font-size: 24px;
    font-style: oblique;
    display: flex;
    align-items: center;
    .svg-icon {
      cursor: pointer;
      margin-right: 10px;
    }
  }
  .menu-h {
    // display: flex;
    align-items: center;
    margin-right: 15px;
    .icon-github {
      cursor: pointer;
      width: 32px;
      height: 32px;
      margin-left: 30px;
    }
    .menu-list {
      background: rgba(0, 0, 0, 0);
      color: #fff;
    }
  }

  &.bg-head {
    // background: linear-gradient(to right, #214898e6, #2e66bf, #163879);
    background: linear-gradient(to right, #010308, #041e52, #010205);
  }

  &.hide-head {
    display: none;
  }
}
.bg-head-hide {
  background: none;
}
.bg-head-show {
  // background: linear-gradient(to right, #214898e6, #2e66bf, #163879);
  background: linear-gradient(to right, #010308, #041e52, #010205);
  // background: linear-gradient(
  //   to right,
  //   rgba(0, 0, 0, 0.9),
  //   rgba(1, 13, 30, 0.9),
  //   rgba(0, 0, 0, 0.9)
  // );
}

</style>
