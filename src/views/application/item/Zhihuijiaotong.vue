
<template>
  <div class="body">
    <div class="wbk">
      <div class="part">
        <div class="left_title">
          <div class="left_title_icon"></div>
          <div class="left_title_text">
            <p>智慧交通</p>
          </div>
        </div>
        <div class="right_text">
          <p>
            以国家智能交通系统体系框架为指导，建成"高效、安全、环保、舒适、文明"的智慧交通与运输体系;大幅度提高城市交通运输系统的管理水平和运行效率，为出行者提供全方位的交通信息服务和便利、高效、快捷、经济、安全、人性、智能的交通运输服务;为交通管理部门和相关企业提供及时、准确、全面和充分的信息支持和信息化决策支持。
          </p>
        </div>
      </div>
    </div>

    <div class="gbk">
      <div class="part">
        <div class="left_title">
          <div class="left_title_icon"></div>
          <div class="left_title_text">
            <p>方案概述</p>
          </div>
        </div>
      </div>
      <div class="main_text">
        <p>
          公司在交通运输领域充分利用物联网、空间感知、云计算、移动互联网等新一代信息技术，综合运用交通科学、系统方法、人工智能、知识挖掘等理论与工具，通过建设实时的动态信息服务体系，深度挖掘交通运输相关数据，形成问题分析模型，推动交通运输更安全、更高效、更便捷、更经济、更环保、更舒适的运行和发展，带动交通运输相关产业转型、升级。
        </p>
      </div>
      <div class="mainImg" style="margin-bottom:80px"></div>
    </div>

    <div class="wbk">
      <div class="part">
        <div class="left_title">
          <div class="left_title_icon"></div>
          <div class="left_title_text">
            <p>核心优势</p>
          </div>
        </div>
      </div>
      <div>
        <ul class="good_ul">
          <li class="good_li" v-for="item in items_good" :key="item.id">
            <div
              class="good_ul_icon"
              :style="'background-image: url(' + item.imgSrc + ')'"
            ></div>
            <p class="good_p1">{{ item.title }}</p>
            <p class="good_p2">{{ item.content }}</p>
          </li>
        </ul>
      </div>
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
            <p>{{ item.title }}</p>
            <p>{{ item.content }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ZhihuiJiaotong',
  props: {},
  data() {
    return {
      items: [
        {
          id: 1,
          itemTitle: '智慧城市时空信息云平台',
          itemText:
            '以北斗时空为基准，以位置服务为核心，通过大数据、物联网、云计算等新一代信息技术，实时汇集城市各种时空信息，形成感知更透彻、互联更广泛、决策更智能、服务更灵活、更加安全可靠的智慧城市时空信息平台，是新型智慧城市建设的重要空间信息基础设施。',
        },
        {
          id: 2,
          itemTitle: '时空大数据中心',
          itemText:
            '基于北斗卫星导航定位技术建设的综合性高精度位置服务体系，融合大数据、高性能云计算和海量云存储技术，为政府部门、行业用户、大众用户提供基于高精度位置导航、监控、调度和分析决策技术支持服务。',
        },
        {
          id: 3,
          itemTitle: '北斗高精度位置服务云平台',
          itemText:
            '通过对时空大数据的收集和各种业务系统库的对接，将不同来源、不同类型、不同应用的时空数据进行集中、规范的整合；并通过基础地理信息平台完成数据发布和资源共享，形成智慧城市的“知识库”。',
        },
      ],
      items_feature: [
        {
          id: 1,
          title: '交通“一张图”',
          content:
            '整合基础地图、交通设施、路况信息、实时天气等多源数据，实现专业级交通数据的标准化管理、发布和共享，打造基于交通数据“一张图”的可视化管理和分析平台。',
        },
        {
          id: 2,
          title: '车辆实时监控',
          content:
            '实现车辆的地图可视化监控，了解车辆的位置、速度、行驶状态等信息，帮助管理者及时了解每一辆车当前的运营状态。',
        },
        {
          id: 3,
          title: '车辆运营分析',
          content:
            '让企业实时掌控车资产整体情况和每辆车的运营细节。通过对司机驾驶行为，车辆利用率，车况等常见项，以及可制化业务数据的分析，为企业进行精细化管理提供科学依据。',
        },
        {
          id: 4,
          title: '主动安全保障',
          content:
            '超速、疲劳驾驶、三急等违规驾驶行为实时报警；结合地理围栏，对车辆晚点，偏离预定轨迹，非法进入禁区等预设置的异常情况进行实时报警，让管理者第一时间得到通知。',
        },
      ],
      items_good: [
        {
          id: 1,
          title: '专业交通数据',
          content:
            '拥有全国高精度路网、里程桩、营运车辆、路况信息、实时天气等动静态专业数据，为交通业务应用提供数据支撑。',
          imgSrc: require('@/assets/images/application/zhjt_good2.png'),
        },
        {
          id: 2,
          title: '海量数据智能监管',
          content:
            '依托平台能力，实现千万级实时数据智能化监控，并结合交通业务指标，提升交通行业精准化管理和监控水平。',
          imgSrc: require('@/assets/images/application/zhjt_good1.png'),
        },
        {
          id: 3,
          title: '丰富的分析经验',
          content:
            '丰富的多维、多时序的大数据运营经验，通过对车辆轨迹、驾驶行为等数据挖掘分析，科学辅助企业业务决策。',
          imgSrc: require('@/assets/images/application/zhjt_good3.png'),
        },
        {
          id: 4,
          title: '技术团队服务保障',
          content:
            '团队也将以多年项目交付中积累的经验为基础，为用户与合作伙伴提供包括工具学习、技术支持、项目咨询等系列服务，助力项目实施与交付。',
          imgSrc: require('@/assets/images/application/zhjt_good4.png'),
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
  height: 605px;
  margin-top: 28px;
  background: url('~@/assets/images/application/zhjt_main.png');
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
      top: 130px;
      bottom: 0px;
      margin: 0 auto;
      font-size: 18px;
      font-family: Microsoft YaHei;
      font-weight: bold;
    }
    p:nth-child(2) {
      margin-top: -18px;
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
  width: 1200px;
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
    .main_applicationImg {
      height: 300px;
      width: 590px;
      margin-bottom: 9px;
      margin-right: 9px;
      background-size: 100%;
    }
  }
}
.good_ul {
  display: flex;
  flex-wrap: wrap;
  width: 1200px;
  margin-top: -40px;
  list-style: none;
  padding-bottom: 80px;
  li {
    width: 250px;
    height: 286px;
    padding: 32px 17px 32px 32px;
    border-left: 1px solid #ededed;
    .good_ul_icon {
      width: 44px;
      height: 44px;
      margin-bottom: 24px;
    }
  }
}
.good_p1 {
  position: relative;
  top: 200px;
  font-size: 26px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #333333;
}
.good_p2 {
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 300;
  color: #666666;
}
</style>
