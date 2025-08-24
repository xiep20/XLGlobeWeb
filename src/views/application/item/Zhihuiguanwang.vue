<template>
  <div class="body">
    <div class="wbk">
      <div class="part" style="padding-bottom:20px">
        <div class="left_title">
          <div class="left_title_icon"></div>
          <div class="left_title_text">
            <p>新型智慧城市</p>
          </div>
        </div>
        <div class="right_text">
          <p>
            智慧管网综合管理系统基于SOA思想设计，采用C/S与B/S混合模式，以数据、管理、服务、应用相分离的架构原则，在保持灵活性和扩展的前提下，构建连接各相关政府部门和权属单位的城市地下管网数据管理服务中心，形成分布式应用和集中式管理的综合管线信息系统，实现地下管线信息数据的管理、共享、融合和数据交换。
          </p>
        </div>
      </div>
    </div>
    <div class="wbk">
      <div class="mainImg"></div>
    </div>

    <div class="gbk">
      <div class="part">
        <div class="left_title">
          <div class="left_title_icon"></div>
          <div class="left_title_text">
            <p>系统特点</p>
          </div>
        </div>
      </div>
      <div>
        <ul class="right_ul">
          <li v-for="item in items_feature" :key="item.id">
            <p>{{ item.itemTitle }}</p>
            <p>{{ item.itemText }}</p>
          </li>
        </ul>
      </div>
    </div>

    <div class="wbk">
      <div class="part">
        <div class="left_title">
          <div class="left_title_icon"></div>
          <div class="left_title_text">
            <p>应用案例</p>
          </div>
        </div>
      </div>
      <div class="main_text">
        <p>
          综合管廊智慧运维管理平台是将综合管廊内部的环境与设备监控系统、安全防范系统、通信系统、火灾自动报警系统、地理信息系统等的信息采集与联动控制有机地结合一起，放在监控中心的统一管理平台上，以实现对管廊内部设备的远程管理与控制。综合管理平台具有集中指挥调度、监控管理、数据管理、安全报警、应急联动和综合处理等功能，把综合管廊监控与报警各系统集成为一个相互关联和协调的综合系统，实现各系统统一管理、信息共
          享及联动控制。
        </p>
      </div>
      <div class="main_application">
        <ul>
          <li v-for="item in items_application" :key="item.id">
            <div
              class="main_applicationImg"
              :style="'background-image: url(' + item.imgSrc + ')'"
            ></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ZhihuiGuanwang',
  props: {},
  data() {
    return {
      items_feature: [
        {
          id: 1,
          itemTitle: '管线运行监测',
          itemText:
            '通过系统可对管线进行运行监测，管线漏损点定位、线路巡检、实时监测预警及应急处理管理等。',
        },
        {
          id: 2,
          itemTitle: '运行与维护',
          itemText:
            '通过系统可对管线进行运行监测，管线漏损点定位、线路巡检、实时监测预警及应急处理管理等。',
        },
        {
          id: 3,
          itemTitle: '管线数据管理',
          itemText:
            '提供海量、多源、异构数据的转换、编辑、质量检查、批量入库、参数自动化建模、动态增量更新、数据查询、统计输出、辅助决策分析等功能。',
        },
        {
          id: 4,
          itemTitle: '管线管理系统',
          itemText:
            '提供二三维一体化的管线数据管理服务及系统功能应用服务，为管线档案管理、管线规划、设计、报建、审批、施工与竣工验收工作提供辅助设计与决策支持，缩短会签审批时间，提高工作效率与效能，为社会公众已发提供管线信息服务。',
        },
      ],
      items_application: [
        {
          id: 1,
          imgSrc: require('@/assets/images/application/zhgw_application1.png'),
        },
        {
          id: 2,
          imgSrc: require('@/assets/images/application/zhgw_application2.png'),
        },
        {
          id: 3,
          imgSrc: require('@/assets/images/application/zhgw_application3.png'),
        },
      ],
    }
  },
  watch: {},
  mounted() {},
  methods: {},
}
</script>
<style lang="less" scoped>
.wbk {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background: #fff;
}
.gbk {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background: #f8f8f8;
}
.part {
  display: flex;
  width: 1200px;
  padding: 80px 0;
}
.left_title {
  display: flex;
  margin-right: 90px;
}
.left_title_icon {
  width: 6px;
  height: 36px;
  background: linear-gradient(0deg, #09bbfe 0%, #5a42ec 100%);
  margin-top: 8px;
  margin-right: 10px;
}
.left_title_text {
  width: 230px;
  font-size: 38px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #333333;
  line-height: 50px;
}
.right_text {
  width: 870px;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 300;
  color: #333333;
  line-height: 30px;
}
.mainImg {
  width: 1200px;
  height: 808px;
  margin-bottom: 80px;
  background: url('~@/assets/images/application/zhgw_main.png') no-repeat;
  background-size: 100%;
}
.right_ul {
  display: flex;
  flex-wrap: wrap;
  width: 1200px;
  margin-top: -40px;
  list-style: none;
  padding-bottom: 80px;
  li {
    width: 520px;
    height: 140px;
    padding: 40px;
    p:nth-child(1) {
      position: relative;
      top: 120px;
      bottom: 0px;
      margin: 0 auto;
      font-size: 18px;
      font-family: Microsoft YaHei;
      font-weight: bold;
    }
    p:nth-child(2) {
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
    }
  }
  li:nth-child(2) {
    color: #333333;
    background: #ffffff;
  }
  li:nth-child(3) {
    color: #333333;
    background: #ffffff;
  }
  li:nth-child(1) {
    color: #ffffff;
    background: linear-gradient(0deg, #102650 0%, #040d1d 100%);
  }
  li:nth-child(4) {
    color: #ffffff;
    background: linear-gradient(0deg, #102650 0%, #040d1d 100%);
  }
}
.main_text {
  width: 1198px;
  margin-top: -40px;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #666666;
  line-height: 28px;
}
.main_application {
  width: 1198px;
  margin-top: 20px;
  margin-bottom: 81px;
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin-top: 20px;
    li:nth-child(1) {
      .main_applicationImg {
        height: 295px;
        width: 580px;
        margin-right: 38px;
        background-size: 100%;
      }
    }
    li:nth-child(2) {
      .main_applicationImg {
        height: 295px;
        width: 580px;
        background-size: 100%;
      }
    }
    li:nth-child(3) {
      .main_applicationImg {
        margin-top: 40px;
        height: 390px;
        width: 1200px;
        background-size: 100%;
      }
    }
  }
}
</style>
