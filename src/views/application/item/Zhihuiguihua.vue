<template>
  <div class="body">
    <div class="gbk">
      <div class="part">
        <div class="left_title">
          <div class="left_title_icon"></div>
          <div class="left_title_text">
            <p style="width: 360px">
              国土空间规划一张图
              <br />
              实施监督信息系统
            </p>
          </div>
        </div>
        <div class="right_text">
          <p>
            依托公司国土空间基础信息平台，围绕国土空间规划编制、核查、审批、实施、监测评估预警全过程，搭建国土空间规划“一张图”实施监管信息系统。以目标、问题和可操作为导向，搭建监测评估预警指标体系、专项评估及预警模型，增加选址意见书等信息，实现了国土空间规划辅助编制、成果核对和审批、国土空间用途管制支撑和资源环境承载能力监测预警，对国土空间规划实施情况开展长期监测、定期和不定期评估、及时预警，全面提升国土空间治理体系和治理能力现代化水平。
          </p>
        </div>
      </div>
    </div>

    <div class="wbk">
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

    <div class="gbk">
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
          公司国土空间规划“一张图”实施监督信息系统围绕广水市自然资源局机构改革后的自然资源业务需求，完善广水市国土空间大数据体系，通过开展国土空间大数据集成、智能分析广水市规划编制、精准实施及监测评估，建设国土空间规划“一张图”应用、国土空间规划分析评价、国土空间规划成果审查与管理、国土空间规划监测评估预警、资源环境承载能力监测预警、指标模型管理6个子系统，辅助编制、辅助审批、许可信息管理3个拓展系统，三维规划辅助决策应用、领导驾驶舱、管理人员工作台3个创新应用系统；全面服务支撑广水市国土空间规划编制、审批、实施、监测评估预警全过程。
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
  name: 'ZhihuiGuihua',
  props: {},
  data() {
    return {
      items_feature: [
        {
          id: 1,
          itemTitle: '/// 全业务全流程',
          itemText:
            '提供自动化、信息化评价自然资源承载力、国土空间开发适宜性以及国土空间规划实施评估和风险识别评估的功能，为国土空间规划的编制提供支持。',
        },
        {
          id: 2,
          itemTitle: '/// 智能化科学评价',
          itemText:
            '通过系统可对管线进行运行监测，管线漏损点定位、线路巡检、实时监测预警及应急处理管理等。',
        },
        {
          id: 3,
          itemTitle: '/// 成果审查流程化',
          itemText:
            '按照审查办法及传导要求，提供空间一致性、空间准入性、空间符合性、规划冲突、指标符合性、图数一致性、图文一致性、文本规范与约束、突破政策法规等审查功能。',
        },
        {
          id: 4,
          itemTitle: '/// 规划实施精准化',
          itemText:
            '提供与不动产登记、土地供应业务系统、工程建设项目审批系统衔接，并提供规划底图服务、合规性审查功能、行政区划底图等服务。',
        },
        {
          id: 5,
          itemTitle: '/// 监测预警动态化',
          itemText:
            '通过对各类管控边界、约束性指标等的实时监测，提供监测管理、监测指标转换、监测分析与报告、体检指标管理、监测可视化展示等功能。',
        },
        {
          id: 6,
          itemTitle: '/// 指标模型定制化',
          itemText:
            '通过算法注册、数据源管理及配套可视化工具进行模型构建，为国土空间规划编制、审查、实施、监测、评估和预警等提供模型计算支撑。',
        },
      ],
      items_application: [
        {
          id: 1,
          imgSrc: require('@/assets/images/application/zhgh_application1.png'),
        },
        {
          id: 2,
          imgSrc: require('@/assets/images/application/zhgh_application2.png'),
        },
        {
          id: 3,
          imgSrc: require('@/assets/images/application/zhgh_application3.png'),
        },
        {
          id: 4,
          imgSrc: require('@/assets/images/application/zhgh_application4.png'),
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
  font-size: 38px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #333333;
  line-height: 50px;
}
.right_text {
  width: 780px;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 300;
  color: #333333;
  line-height: 30px;
}
.mainImg {
  width: 1245px;
  height: 808px;
  margin-left: 400px;
  margin-top: -40px;
  margin-bottom: 20px;
  background: url('~@/assets/images/application/zhgw_main.png');
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
    height: 170px;
    padding: 40px;
    p:nth-child(1) {
      margin-bottom: 30px;
      font-size: 18px;
      font-family: Microsoft YaHei;
      font-weight: bold;
    }
    p:nth-child(2) {
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 300;
      line-height: 30px;
    }
  }
  li:nth-child(2) {
    color: #333333;
    background: #f8f8f8;
  }
  li:nth-child(3) {
    color: #333333;
    background: #f8f8f8;
  }
  li:nth-child(1) {
    color: #ffffff;
    background: linear-gradient(0deg, #102650 0%, #040d1d 100%);
  }
  li:nth-child(4) {
    color: #ffffff;
    background: linear-gradient(0deg, #102650 0%, #040d1d 100%);
  }
  li:nth-child(5) {
    color: #ffffff;
    background: linear-gradient(0deg, #102650 0%, #040d1d 100%);
  }
  li:nth-child(6) {
    color: #333333;
    background: #f8f8f8;
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
        height: 332px;
        width: 591px;
        margin-right: 10px;
        background-size: 100%;
      }
    }
    li:nth-child(2) {
      .main_applicationImg {
        height: 332px;
        width: 591px;
        background-size: 100%;
      }
    }
    li:nth-child(3) {
      .main_applicationImg {
        height: 332px;
        width: 591px;
        margin-right: 10px;
        margin-top: 10px;
        background-size: 100%;
      }
    }
    li:nth-child(4) {
      .main_applicationImg {
        height: 332px;
        width: 591px;
        margin-top: 10px;
        background-size: 100%;
      }
    }
  }
}
</style>
