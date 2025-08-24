<template>
  <div class="application mscroll">
    <el-container>
      <el-header
        height="600px"
        :style="'background-image: url(' + imgitem + ')'"
      >
        <div class="header-info">
          <p class="info_tit">{{ itemList[selitem].name }}</p>
          <p class="info_tit2">{{ itemList[selitem].enname }}</p>
          <p class="info_cont">{{ itemList[selitem].content }}</p>
          <p class="info_href" v-if="itemList[selitem].hrefinfo">
            <a :href="itemList[selitem].hrefinfo[0]">
              {{ itemList[selitem].hrefinfo[1] + ' -->' }}
            </a>
          </p>
        </div>
      </el-header>
      <div>
        <Itemcont v-if="selitem === '0'"></Itemcont>
        <Zhihuichengshi v-if="selitem === '智慧城市'"></Zhihuichengshi>
        <Zhihuijiaotong v-if="selitem === '智慧交通'"></Zhihuijiaotong>
        <Zhihuiyuanqu v-if="selitem === '智慧园区'"></Zhihuiyuanqu>
        <Zhihuishuiwu v-if="selitem === '智慧水务'"></Zhihuishuiwu>
        <Zhihuiguanwang v-if="selitem === '智慧管网'"></Zhihuiguanwang>
        <Zhihuiguihua v-if="selitem === '智慧规划'"></Zhihuiguihua>
        <Zhihuizhihui v-if="selitem === '应急指挥'"></Zhihuizhihui>
        <Zhihuichengguan v-if="selitem === '智慧城管'"></Zhihuichengguan>
        <Zhihuibeidou v-if="selitem === '北斗应用'"></Zhihuibeidou>
      </div>
    </el-container>
    <LyFoot></LyFoot>
  </div>
</template>
<script>
import Itemcont from '../application/item/Itemcont'
import Zhihuichengshi from '../application/item/Zhihuichengshi'
import Zhihuijiaotong from '../application/item/Zhihuijiaotong'
import Zhihuiyuanqu from '../application/item/Zhihuiyuanqu'
import Zhihuishuiwu from '../application/item/Zhihuishuiwu'
import Zhihuiguanwang from '../application/item/Zhihuiguanwang'
import Zhihuiguihua from '../application/item/Zhihuiguihua'
import Zhihuizhihui from '../application/item/Zhihuizhihui'
import Zhihuichengguan from '../application/item/Zhihuichengguan'
import Zhihuibeidou from '../application/item/Zhihuibeidou'
import LyFoot from '../../layout/LyFoot.vue'

export default {
  name: 'ApplicationIndex',
  components: {
    LyFoot,
    Itemcont,
    Zhihuichengshi,
    Zhihuijiaotong,
    Zhihuiyuanqu,
    Zhihuishuiwu,
    Zhihuiguanwang,
    Zhihuiguihua,
    Zhihuizhihui,
    Zhihuichengguan,
    Zhihuibeidou,
  },
  data() {
    return {
      selitem: '0',
      itemList: {
        智慧城市: {
          name: '智慧城市',
          enname: 'INTELLIGENT CITY',
          img: require('@/assets/images/item/智慧城市.png'),
          content:
            '围绕未来城市治理，聚焦技术与城市运行中各元素的深度融合，满足各级政府在精准分析、科学决策和专业管理方面的需求',
        },
        智慧交通: {
          name: '智慧交通',
          enname: 'INTELLIGENT TRANSPORTATION',
          img: require('@/assets/images/item/智慧交通.png'),
          content:
            '通过对交通管理、交通运输、公众出行等交通领域全方面以及交通建设管理全过程进行管控支撑，使交通系统在区域、城市的时空范围具备感知、互联、分析、预测、控制等能力，以充分保障交通安全、发挥交通基础设施效能、提升交通系统运行效率和管理水平，为通畅的公众出行和可持续的经济发展服务',
        },
        智慧园区: {
          name: '智慧园区',
          enname: 'INTELLIGENT PARK',
          img: require('@/assets/images/item/智慧园区.png'),
          content:
            '由政府（民营企业与政府合作）规划建设的，供水、供电、供气、通讯、道路、仓储及其它配套设施齐全、布局合理且能够满足从事某种特定行业生产和科学实验需要的标准性建筑物或建筑物群体，“包括工业园区、产业园区、物流园区、都市工业园区、科技园区、创意园区等。',
        },
        智慧水务: {
          name: '智慧水务',
          enname: 'INTELLIGENT WATER',
          img: require('@/assets/images/item/智慧水务.png'),
          content:
            '通过数采仪、无线网络、水质水压表等在线监测设备实时感知城市供排水系统的运行状态，并采用可视化的方式有机整合水务管理部门与供排水设施，形成“城市水务物联网”，并可将海量水务信息进行及时分析与处理，并做出相应的处理结果辅助决策建议，以更加精细和动态的方式管理水务系统的整个生产、管理和服务流程，从而达到“智慧”的状态。',
        },
        智慧管网: {
          name: '智慧管网',
          enname: 'INTELLIGENT PIPENETWORK',
          img: require('@/assets/images/item/智慧管网.png'),
          content:
            '通过对地下管线的现况调绘、地下管线的探查、 地下管线测量、地下管线图编绘、普查成果质量 检查等流程手段，探明地下管线的平面位置、高程、埋深、走向(流向)、规格、材质、管线性质、 权属单位以及管线附属构筑物信息，获取最新、 最准确，最全面的地下管线信息。',
          hrefinfo: ['/PipelineWeb/', '德毅智慧综合管网系统'],
        },
        智慧规划: {
          name: '智慧规划',
          enname: 'INTELLIGENT PLANNING',
          img: require('@/assets/images/item/智慧规划.png'),
          content:
            '以云计算、物联网、移动互联网、大数据等新一代信息技术应用为基础，以实现城市中的人与人、物与物、物与人的全面感知、互联互通和信息智能利用为特征，从而实现高效的政府管理、便捷的民生服务、可持续的经济发展为目标的先进的城市发展理念。',
        },
        应急指挥: {
          name: '应急指挥',
          enname: 'EMERGENCY COMMAND',
          img: require('@/assets/images/item/应急指挥.png'),
          content:
            '在突发事件的事前预防、事发应对、事中处置和善后管理过程中建立的必要的应对机制系统。采取一系列必要措施，保障公众生命财产安全；促进社会和谐健康发展的有关活动。',
        },
        智慧城管: {
          name: '智慧城管',
          enname: 'INTELLIGENT CITY MANAGEMENT',
          img: require('@/assets/images/item/智慧城管.png'),
          content:
            '新一代信息技术支撑、知识社会创新2.0环境下的城市管理新模式，通过新一代信息技术支撑实现全面透彻感知、宽带泛在互联、智能融合应用，推动以用户创新、开放创新、大众创新、协同创新为特征的以人为本的可持续创新。智慧城管是智慧城市的重要组成部分。',
        },
        北斗应用: {
          name: '北斗应用',
          enname: 'BDS APPLICATION',
          img: require('@/assets/images/item/北斗应用.png'),
          content:
            '交通运输、农林渔业、水文监测、气象测报、通信授时、电力调度bai、救灾减灾、公共安全等领域得到广泛应用，服务国家重要基础设施，产生了显著的经济效益和社会效益。基于北斗系统的导航服务已被电子商务、移动智能终端制造、位置服务等厂商采用，广泛进入中国大众消费、共享经济和民生领域，应用的新模式、新业态、新经济不断涌现，深刻改变着人们的生产生活方式。',
        },
      },
      imgitem: require('@/assets/images/item/sl.jpg'),
    }
  },
  watch: {
    $route(to, from) {
      this.valueHand(to.query.item)
    },
  },
  created() {
    if (this.$route.query.item != this.selitem) {
      this.valueHand(this.$route.query.item)
    }
  },
  mounted() {
    document
      .getElementsByClassName('application')[0]
      .addEventListener('scroll', function () {
        var scrollTop = this.pageYOffset || this.scrollTop
        if (scrollTop >= 50) {
          document.getElementsByClassName('ly-head')[0].className =
            'ly-head bg-head-show'
        } else {
          document.getElementsByClassName('ly-head')[0].className =
            'ly-head bg-head-hide'
        }
      })
  },
  methods: {
    valueHand: function (sel) {
      this.selitem = sel
      if (this.itemList[sel]) {
        this.imgitem = this.itemList[sel].img
      } else {
        this.imgitem = require('@/assets/images/item/sl.jpg')
      }
    },
  },
}
</script>
<style lang="scss">
</style>
<style lang="less" scoped>
@import '../../themes/scroll.less';
el-main {
  padding: 0px;
  margin: 0px;
}
.application {
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
}
.application .el-header {
  padding: 0;
  background-size: 100% 100%;
}
.application .header-info {
  position: relative;
  top: 36%;
  left: 50%;
  width: 50%;
  margin-left: -25%;
  font-size: 16px;
  color: #fff;
  text-align: center;
  .info_tit {
    font-size: 60px;
    line-height: 72px;
  }
  .info_tit2 {
    font-size: 40px;
    padding: 0 0 15px;
  }
  .info_cont {
    line-height: 24px;
  }
  .info_href {
    margin-top: 10px;
    color: #5dc2f3;
    font-size: 24px;
    a {
      color: #5dc2f3;
    }
  }
}
</style>
