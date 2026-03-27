<template>
  <div class="container">
    <ly-head></ly-head>
    <ly-content></ly-content>
    <!-- <ly-foot></ly-foot> -->
  </div>
</template>

<script>
import LyHead from '@/layout/LyHead.vue'
import LyContent from '@/layout/LyContent.vue'
// import LyFoot from '@/layout/LyFoot'

export default {
  name: 'HomeIndex',
  components: {
    LyHead,
    LyContent,
    // LyFoot
  },
  data() {
    return {}
  },
  mounted() {
    document.oncontextmenu = new Function('event.returnValue=false')
    document.onselectstart = new Function('event.returnValue=false')
    
    // // 检查是否是第一次访问
    // const hasShownDialog = sessionStorage.getItem('versionUpgradeDialogShown')
    // if (!hasShownDialog) {
    //   // 显示版本升级提示对话框
    //   this.$msgbox({
    //     title: '版本升级提示',
    //     message: '当前sdk依赖cesium版本较低，目前正在升级更新中，部分示例不可用，仅供参考源码之用，请见谅！',
    //     showCancelButton: false,
    //     confirmButtonText: '确定',
    //     type: 'info',
    //     center: true,
    //     customClass: 'version-upgrade-dialog'
    //   }).then(() => {
    //     // 用户点击确定后，标记为已显示
    //     sessionStorage.setItem('versionUpgradeDialogShown', 'true')
    //   }).catch(() => {
    //     // 用户点击确定后的处理
    //     sessionStorage.setItem('versionUpgradeDialogShown', 'true')
    //   })
    // }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>

<style lang="scss">
// 版本升级对话框样式
.version-upgrade-dialog {
  .el-message-box__header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    .el-message-box__title {
      color: white;
      font-weight: bold;
    }
    .el-message-box__headerbtn .el-message-box__close {
      color: white;
    }
  }
  
  .el-message-box__content {
    padding: 30px 20px;
    text-align: center;
    font-size: 16px;
    line-height: 1.6;
    color: #333;
  }
  
  .el-message-box__btns {
    padding: 0 20px 20px;
    text-align: center;
    
    .el-button--primary {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border: none;
      padding: 12px 30px;
      font-size: 16px;
      border-radius: 25px;
      
      &:hover {
        background: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%);
      }
    }
  }
}
</style>
