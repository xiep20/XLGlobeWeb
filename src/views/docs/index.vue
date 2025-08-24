<template>
  <div class="docs">
    <el-container>
      <el-aside width="300px" class="mscroll">
        <el-menu
          :default-active="menuActive"
          class="el-menu-vertical-demo"
          background-color="#051b4a00"
          text-color="#fff"
          active-text-color="#2a89ff"
          @select="handleSelect"
          :unique-opened="true"
        >
          <template>
            <div v-for="(item, index) in treedata" :key="index">
            <el-submenu
              :index="item.id"
              v-if="item.children && item.children.length > 0"
              :key="index"
            >
              <template slot="title">
                <i
                  class="iconfont"
                  :class="item.icon"
                  v-if="item.icon && item.icon != ''"
                ></i>
                <span>{{ item.name }}</span>
              </template>
              <template>
                <div v-for="(item2, index2) in item.children" :key="index2">
                <el-submenu
                  :index="item2.id"
                  v-if="item2.children && item2.children.length > 0"
                  :key="index2"
                >
                  <template slot="title">
                    <i
                      class="iconfont"
                      :class="item2.icon"
                      v-if="item2.icon && item2.icon != ''"
                    ></i>
                    <span>{{ item2.name }}</span>
                  </template>
                  <template>
                    <div v-for="(item3, index3) in item2.children" :key="index3">
                    <el-submenu
                      :index="item3.id"
                      v-if="item3.children && item3.children.length > 0"
                      :key="index3"
                    >
                      <template v-if="item3.isHtml" slot="title">
                        <el-menu-item
                          :index="item3.id"
                          :key="index3"
                          style="padding: 0"
                        >
                          <i
                            class="iconfont"
                            :class="item3.icon"
                            v-if="item3.icon && item3.icon != ''"
                          ></i>
                          {{ item3.name }}
                        </el-menu-item>
                      </template>
                      <template v-else slot="title">
                        <i
                          class="iconfont"
                          :class="item3.icon"
                          v-if="item3.icon && item3.icon != ''"
                        ></i>
                        <span>{{ item3.name }}</span>
                      </template>
                      <template >
                        <div v-for="(item4, index4) in item3.children" :key="index4">
                        <el-submenu
                          :index="item4.id"
                          v-if="item4.children && item4.children.length > 0"
                          :key="index4"
                        >
                          <template slot="title">
                            <i
                              class="iconfont"
                              :class="item4.icon"
                              v-if="item4.icon && item4.icon != ''"
                            ></i>
                            <span>{{ item4.name }}</span>
                          </template>
                        </el-submenu>
                        <el-menu-item
                          :index="item4.id"
                          v-if="!item4.children || item4.children.length == 0"
                          :key="index4"
                        >
                          <i
                            class="iconfont"
                            :class="item4.icon"
                            v-if="item4.icon && item4.icon != ''"
                          ></i>
                          {{ item4.name }}
                        </el-menu-item>
                        </div>
                      </template>
                    </el-submenu>
                    <el-menu-item
                      :index="item3.id"
                      v-if="!item3.children || item3.children.length == 0"
                      :key="index3"
                    >
                      <i
                        class="iconfont"
                        :class="item3.icon"
                        v-if="item3.icon && item3.icon != ''"
                      ></i>
                      {{ item3.name }}
                    </el-menu-item>
                    </div>
                  </template>
                </el-submenu>
                <el-menu-item
                  :index="item2.id"
                  v-if="!item2.children || item2.children.length == 0"
                  :key="index2"
                >
                  <i
                    class="iconfont"
                    :class="item2.icon"
                    v-if="item2.icon && item2.icon != ''"
                  ></i>
                  {{ item2.name }}
                </el-menu-item>
                </div>
              </template>
            </el-submenu>
            <el-menu-item
              :index="item.id"
              v-if="!item.children || item.children.length == 0"
              :key="index"
            >
              <i
                class="iconfont"
                :class="item.icon"
                v-if="item.icon && item.icon != ''"
              ></i>
              {{ item.name }}
            </el-menu-item>
            </div>
          </template>
        </el-menu>
      </el-aside>
      <el-main class="mscroll">
        <Devdoc :noselitem="this.$store.getters.apiid" />
      </el-main>
    </el-container>
  </div>
</template>
<script>
import '../../themes/iconfont/iconfont.css'
import Devdoc from '../../components/devdoc/Devdoc'
export default {
  name: 'DocsIndex',
  components: { Devdoc },
  data() {
    return {
      url: 'doc/docleft-zhinan.json',
      treedata: [],
      menuActive: '1-1-1',
    }
  },
  watch: {},
  created() {
    let nameId = this.$route.params.nameId
    if (nameId) {
      this.menuActive = nameId
      this.handleSelect(nameId)
    }
    switch (nameId){
      case '1-1-1':
        this.url = 'doc/docleft-zhinan.json'
        break;
      case '2-1':
        this.url = 'doc/docleft-class.json'
        break;
      case '3-1':
        this.url = 'doc/docleft-document.json'
        break;
    }
    this.getMenu()
  },
  mounted() {
    this.getMenu()
  },
  methods: {
    getMenu(){
      if (this.$http && typeof this.$http.get === 'function') {
        this.$http
          .get(`${this.url}`)
          .then(res => {
            this.treedata = res.data.tree
          })
          .catch(function(error) {
            console.error('Failed to load menu data:', error)
          })
      } else {
        console.error('$http not available in getMenu')
      }
    },
    handleSelect(key, keyPath) {
      this.$store.dispatch('apiindex/setapiid', key)
    }
  }
}
</script>
<style lang="scss">
.docs {
  #vue-md {
    margin-top: 66px;
    width: 100%;
    height: calc(100% - 66px);
    border: none;
    overflow: hidden;
  }
}
</style>
<style lang="less" scoped>
@import '../../themes/scroll.less';
.docs {
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
}
.el-container {
  position: absolute;
  width: 100%;
  top: 61px;
  bottom: 0;
}
.el-aside {
  // position: fixed;
  overflow: scroll;
  height: 100%;
  padding-bottom: 70px;
  text-align: left;
  // background:linear-gradient(to bottom, #010308, #041e52, #010205);
  background: linear-gradient(to bottom, #010308, #051a46, #041d4f);
}
.el-main {
  overflow: scroll;
  height: 100%;
}
.el-submenu__title * {
  font-weight: 500;
  letter-spacing: 2px;
}

@font-face {
  font-family: 'iconfont';
  src: url('data:application/x-font-woff2;charset=utf-8;base64,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')
    format('woff2');
}

.iconfont {
  font-family: 'iconfont' !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-right: 3px;
  width: 24px;
  color: #909399;
  font-weight: 600;
}

.iconshuzhuangbiaoqian:before {
  content: '\e65f';
}

.iconshuzhuangtu-biaoqian:before {
  content: '\e60b';
}

.iconjiemiandajian:before {
  content: '\e635';
}

.iconjihe:before {
  content: '\e6c7';
}

.iconjiaohu:before {
  content: '\e6f7';
}

.iconshujuyuan:before {
  content: '\e620';
}

.iconkehufuwushijian:before {
  content: '\e641';
}

.icontubiao:before {
  content: '\e61b';
}

.iconkaifazhinan:before {
  content: '\e7eb';
}

.iconleicankao:before {
  content: '\e643';
}

.icondianxinganli:before {
  content: '\e600';
}
.el-menu-vertical-demo {
  width: 300px;
}
::v-deep .el-submenu__title:hover {
  background-color: #000000 !important;
}
.el-menu-item:focus,
.el-menu-item:hover {
  background-color: #000000 !important;
}
</style>
