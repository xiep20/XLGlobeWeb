<template>
  <div class="sider-bar">
    <div
      class="sidebar-toggle"
      v-show="sidebarToggleFlag"
      @click="sidebarToggle"
      title="收起"
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
    <div
      class="sidebar-toggle"
      v-show="!sidebarToggleFlag"
      @click="sidebarToggle"
      title="展开"
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

    <el-menu
      :default-active="defaultActive"
      unique-opened
      active-text-color="#2a89ff"
      @select="slectMenuHandler"
      @open="handleOpen"
      @close="handleClose"
      :collapse="!sidebarToggleFlag"
      ref="sidermenu"
    >
      <template v-for="menu in menuData">
        <el-menu-item
          v-if="!menu.children || menu.children.length === 0 || !showChildren"
          :index="menu.name"
          :key="menu.name"
        >
          <!-- <svg-icon :icon-class="menu.name" class-name="icon-svg"></svg-icon> -->
          <i :class="'iconfont el-icon-' + menu.icon"></i>
          <span slot="title"> {{ menu.label }}</span>
        </el-menu-item>
        <el-submenu
          :index="menu.name"
          :key="menu.name"
          v-if="menu.children && menu.children.length && showChildren"
        >
          <template slot="title">
            <!-- <svg-icon :icon-class="menu.name" class-name="icon-svg"></svg-icon> -->
            <i :class="'iconfont el-icon-' + menu.icon"></i>
            <span slot="title"> {{ menu.label }}</span>
          </template>
          <el-menu-item
            v-for="child in menu.children"
            :index="child.name"
            :key="child.name"
          >
            <span slot="title">{{ child.label }}</span>
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>
<script>
// import '@/themes/iconfont.css';
import '../../themes/iconfont/iconfont.css'
export default {
  name: 'SiderBar',
  data() {
    return {
      sidebarToggleFlag: true,
    }
  },
  props: {
    defaultActive: {
      type: String,
      default: '',
    },
    showChildren: {
      type: Boolean,
      default: true,
    },
    menuData: {
      type: Array,
      default() {
        return []
      },
    },
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    sidebarToggle: function () {
      this.sidebarToggleFlag = !this.sidebarToggleFlag
      if (this.sidebarToggleFlag) {
        document.getElementsByClassName('menu')[0].style.width = '300px'
        document.getElementsByClassName('menuright')[0].style.width =
          'calc(100% - 303px)'
        // document
        //   .getElementsByClassName('menuright')[0]
        //   .classList.remove('menuright_')
      } else {
        document.getElementsByClassName('menu')[0].style.width = '50px'
        document.getElementsByClassName('menuright')[0].style.width =
          'calc(100% - 50px)'
        // document
        //   .getElementsByClassName('menuright')[0]
        //   .classList.add('menuright_')
      }
    },
    slectMenuHandler(index) {
      this.$emit('on-menu-select', index)
    },
    // changeMenuOpen(index) {
    //   this.$refs.sidermenu.open(index)
    // }
  },
}
</script>
<style lang="scss">
.sider-bar {
  width: 100%;
  height: 100%;
  .el-menu {
    border-right: 0px;
    background: transparent;
    // background-color: rgba(1, 13, 30, 0.9);
    // background:#041029;
  }
  .el-menu--collapse {
    width: auto;
  }
  .el-menu-item,
  .el-submenu__title,
  .el-submenu__title i {
    color: #fff;
    font-weight: bold;
    background: transparent;
  }
  .is-active {
    // background-color: #333;
    // background-color: #2a528f;
  }
  .el-menu-item i {
    color: #ffffff;
  }
  .el-menu-item.is-active i {
    // color:rgb(255, 208, 75);
    color: #2a89ff;
  }
}
.el-submenu__title:focus,
.el-submenu__title:hover,
.el-menu-item:focus,
.el-menu-item:hover {
  background-color: #000000 !important;
}
</style>

<style lang="scss" scoped>
.sider-bar {
  .icon-svg {
    color: #fff;
    width: 20px;
    height: 20px;
    position: relative;
    transform: translateY(10%);
    margin-right: 5px;
  }
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
