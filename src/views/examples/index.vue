<template>
  <div class="examples">
    <el-row class="row">
      <el-col style="width:300px;" class="hidden-md-and-down menu">
        <sider-bar
          ref="leftSiderBar"
          :menu-data="examplesData"
          :default-active="current"
          @on-menu-select="selectMenuHandler"
        ></sider-bar>
      </el-col>
      <el-col style="width: calc(100% - 303px);height: calc(100% - 60px);" class="col menuright">
        <div class="content mscroll" ref="content" >
        <!-- <el-scrollbar ref="contents" style="height:100%;overflow-x:hidden;"> -->
          <div class="tips">
            <span>说明：</span>
            <p>1.示例仅做参考，展现的数据只是测试数据。</p>
            <p>2.示例使用XLGlobe开发。</p>
            <p>
              3.如果需要额外的示例或者示例存在的问题，请联系&nbsp;<a
                href="#"
                >我</a
              >。
            </p>
          </div>
          <el-popover placement="top-start" trigger="click">
            <sider-bar
              :menu-data="examplesData"
              :show-children="false"
              class="nav-menu"
              @on-menu-select="selectMenuHandler"
            ></sider-bar>
            <img
              slot="reference"
              src="@/assets/svg/bg/nav.svg"
              class="nav-icon hidden-md-and-up"
            />
          </el-popover>
          <example-list id="scroll" :examples-data="examplesData" ref="examplesDataRef"></example-list>
        <!-- </el-scrollbar> -->
          <ly-foot></ly-foot>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import '../../themes/scroll.less'
import ExampleList from './ExampleList'
import LyFoot from '../../layout/LyFoot2'
export default {
  name: 'ExamplesIndex',
  components: {
    ExampleList,
    LyFoot,
  },
  data() {
    return {
      examplesData: [],
      divHeightArray: [],//所有右侧小块的高度
      currentMenuTxt: [],//所有右侧小块的名称
      currentMenu: [0,0],//当前选中的菜单数组
      current: 'online',//选中的名称
    }
  },
  methods: {
    handleScroll() {
      // let scrollbarEl = this.$refs.content.wrap
      let scrollbarEl = this.$refs.content
      scrollbarEl.onscroll = () => {//监听滚动事件
        this.divHeightArray.forEach((item,index)=>{
          item.filter((it,i)=>{
            if(it < (scrollbarEl.scrollTop + 100)){
              this.currentMenu = [index,i]//当前滑动选择的菜单
            }
          })
        })
        if(this.$refs.leftSiderBar.sidebarToggleFlag){
          this.current = this.currentMenuTxt[this.currentMenu[0]][this.currentMenu[1]]//从文字数组中提出中文
        }
      }
    },
    getExamplesData() {
      let _this = this;
      if (this.$http && typeof this.$http.get === 'function') {
        this.$http.get('config/examples.json').then((res) => {
          this.examplesData = res.data || []
          if(res.data){
            setTimeout(() => {
              res.data.forEach((item,index) => {
                _this.divHeightArray[index] = new Array();//高度数组集合
                _this.currentMenuTxt[index] = new Array();//文字数组集合
                item.children.forEach((obj,i)=>{
                  _this.divHeightArray[index][i] = _this.$refs.examplesDataRef.$refs[obj.name][0].offsetTop//获取高度
                  _this.currentMenuTxt[index][i] = obj.name
                })
              });
            }, 2000);
          }
        }).catch((error) => {
          console.error('Failed to load examples data:', error)
        })
      } else {
        console.error('$http not available in getExamplesData')
      }
    },
    selectMenuHandler(value) {
      if (value) {
        let el = document.getElementById('nav-' + value)
        if (el) {
          this.$refs['content'].scrollTop = el.offsetTop - 15
          // this.$refs['content'].wrap.scrollTop = el.offsetTop - 15
        }
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.getExamplesData()
      this.handleScroll()
    })
  },
  created(){
    
  }
}
</script>

<style lang="scss">
.nav-menu {
  .el-menu-item {
    color: rgba(0, 0, 0, 0.6);
    font-weight: bold;
    height: 40px;
    line-height: 40px;
    .icon-svg {
      color: rgba(0, 0, 0, 0.6);
    }
  }
}
</style>

<style lang="scss" scoped>

.examples {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding-top: 60px;
  .row,
  .col {
    // height: calc(100% - 32px);
    height: 100%;
  }
  .menu {
    // background: rgba(1, 13, 30, 0.9);
    // background: linear-gradient(to bottom, #010308, #041e52, #010205);
    background: linear-gradient(to bottom, #010308, #051a46, #041d4f);
    height: 100%;
    // padding-top: 20px;
    // padding-left: 10px;
    overflow: hidden;
    margin-top: 1px;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    transition: 0.5s;
  }
  .menuright {
    width: 87%;
    float: right;
    transition: width 0.5s;
    background-color: #efefef;
  }
  .content {
    height: 100%;
    padding: 10px 20px 0px 20px;
    overflow: hidden;
    overflow-y: auto;
    .tips {
      font-size: 13px;
      color: rgba(0, 0, 0, 0.6);
      margin-bottom: 10px;
      p {
        padding-top: 5px;
      }
      a {
        text-decoration: none;
        color: #0865ba;
      }
    }
  }

  .nav-icon {
    position: absolute;
    left: 10px;
    bottom: 10px;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
}
::v-deep .el-scrollbar__wrap{
  overflow-x: hidden !important;
}
// ::v-deep .el-scrollbar__bar{
//   &.is-vertical{
//     width:0;//滚动条宽度
//   }
// }
</style>
