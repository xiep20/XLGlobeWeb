<template>
  <div class="ly-head" :class="headClass">
    <div class="title">
      <img src="@/assets/images/favicon.png" alt="logo" />
      <span class="title__text">XLGlobeWeb for Cesium<span class="title__ver"> （V2.0）</span></span>
    </div>
    <div class="menu-h">
      <el-menu
        :default-active="activeMenu"
        class="menu-list"
        mode="horizontal"
        :ellipsis="false"
        :text-color="menuTextColor"
        :active-text-color="menuActiveColor"
        @select="menuSelectHandler"
      >
        <template v-for="item in processedMenuList" :key="`tpl-${item.menuIndex}`">
          <el-menu-item
            v-if="!item.hasChildren"
            :key="`item-${item.menuIndex}`"
            :index="item.menuIndex"
          >
            {{ item.name }}
          </el-menu-item>
          <el-sub-menu
            v-else
            :key="`sub-${item.menuIndex}`"
            :index="item.menuIndex"
          >
            <template #title>{{ item.name }}</template>
            <el-menu-item
              v-for="child in item.children"
              :key="`child-${child.menuIndex}`"
              :index="child.menuIndex"
            >
              {{ child.name }}
            </el-menu-item>
          </el-sub-menu>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const menuTextColor = '#fff'
const menuActiveColor = '#2A89FF'
const menuList = ref([])

const activeMenu = computed(() => route.path)

const headClass = computed(() => {
  const p = route.path
  if (p === '/editor' || p === '/deveditor') return 'hide-head'
  if (p !== '/index' && p !== '/application') return 'bg-head'
  if (p === '/index' || p === '/application') return 'bg-head-hide'
  return ''
})

// 预处理菜单数据，为每个菜单项添加hasChildren属性
const processedMenuList = computed(() => {
  const result = menuList.value.map((item, idx) => {
    const hasChildren = Array.isArray(item.children) && item.children.length > 0
    const menuIndex = item.path || `menu-${idx}`
    return {
      ...item,
      hasChildren,
      menuIndex,
      children: hasChildren
        ? item.children.map((child, cIdx) => ({
            ...child,
            menuIndex: child.path || `${menuIndex}-child-${cIdx}`
          }))
        : []
    }
  })
  return result
})

function loadMenuList() {
  const fromGlobal = globalThis?.config?.menuList
  if (Array.isArray(fromGlobal) && fromGlobal.length) {
    menuList.value = fromGlobal
    return
  }
  fetch('/config/conf.json')
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      return res.json()
    })
    .then((data) => {
      menuList.value = Array.isArray(data?.menuList) ? data.menuList : []
    })
    .catch(() => {
      menuList.value = []
    })
}

onMounted(() => {
  loadMenuList()
})

function menuSelectHandler(index) {
  if (index && index.indexOf('/application_') === 0) {
    router.push({ path: '/application', query: { item: index.split('_')[1] } }).catch(() => {})
  } else if (index) {
    router.push(index).catch(() => {})
  }
}

</script>

<style lang="scss">
.el-menu {
  background-color: transparent;
}
.el-menu--horizontal .el-menu .el-menu-item,
.el-menu--horizontal .el-menu .el-sub-menu__title {
  background-color: transparent;
}
.el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
.el-menu--horizontal > .el-sub-menu .el-sub-menu__title:hover {
  background-color: transparent;
}
.ly-head .menu-h .el-menu.el-menu--horizontal {
  border-bottom: solid 0 #e6e6e6;
  flex-shrink: 0;
  .el-menu-item {
    font-size: 20px;
    white-space: nowrap;
    overflow: visible;
    text-overflow: unset;
  }
  .el-sub-menu .el-sub-menu__title {
    color: #fff;
    font-size: 20px;
    white-space: nowrap;
    overflow: visible;
    text-overflow: unset;
  }
}
body > .el-menu--horizontal {
  background-color: rgba(5, 26, 70, 0.8);
  color: #fff;
  min-width: 150px;
  .el-menu-item {
    min-width: 150px;
    white-space: nowrap;
    overflow: visible;
    text-overflow: unset;
  }
}
.el-menu--horizontal > .el-menu-item {
  color: #fff;
}
.el-menu--horizontal > .el-menu-item.is-active {
  color: #2a89ff;
}
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  outline: 0;
  color: #2a89ff !important;
  background-color: rgba(5, 26, 70, 0.5);
}
</style>

<style lang="scss" scoped>
.ly-head {
  position: absolute;
  height: 61px;
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  padding: 0 20px 0 20px;
  .title {
    color: #fff;
    font-size: 24px;
    font-style: oblique;
    display: flex;
    align-items: center;
    .title__text {
      color: #fff;
      margin-left: 10px;
    }
    .title__ver {
      font-size: 12px;
    }
    img {
      display: block;
    }
  }
  .menu-h {
    align-items: center;
    margin-right: 15px;
    min-width: 0;
    overflow-x: auto;
    .menu-list {
      background: transparent;
      color: #fff;
    }
  }
  &.bg-head {
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
  background: linear-gradient(to right, #010308, #041e52, #010205);
}
</style>
