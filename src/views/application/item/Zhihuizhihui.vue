<template>
  <div class="body">
    <div class="gbk">
      <div class="part">
        <div class="left_title">
          <div class="left_title_icon"></div>
          <div class="left_title_text">
            <p style="width: 300px">背景和趋势</p>
          </div>
        </div>
        <div class="right_text">
          <p>
            随着经济和社会的高速发展，我国城市发展已进入快速增长时期，城市规模不断扩大，人口密集度很高，遭受各种突发事件及灾害的威胁形势严峻。面对严峻的突发事件及灾害威胁，我国逐步加强了对突发公共事件的应对工作，“十一五”发展规划中更是明确地提出应急联动系统建设。为了有效预防、及时控制和消除突发公共事件带来的危害，保障人民财产安全，维护正常社会秩序，建设“应急指挥”是十分迫切和必要的。
          </p>
        </div>
      </div>
    </div>

    <div class="wbk">
      <div class="part">
        <div class="left_title">
          <div class="left_title_icon"></div>
          <div class="left_title_text">
            <p style="width: 700px">省级应急管理指挥调度平台</p>
          </div>
        </div>
      </div>
      <div class="main_text" style="margin-bottom:80px">
        <p>
          平台是基于基础地理信息服务平台，建设城市风险点、危险源排查管控信息系统，实现统一管理及潜在危险预警预测。该平台通过建成分辖区、分行业领域、分种类的地图信息系统，对风险点、危险源清单化、动态化管理，保证风险点、危险源清单信息准确性、风险级别可调整性和风险可预警性。
        </p>
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
          省级应急管理指挥调度平台应用云计算、大数据等新技术，构建基于微服务框架、统一空间基准的空间信息服务平台，保障国家、省、市（县）三级应急业务基于“一张图”的协同联动，满足各级应急管理部门对突发灾害事件各类应急空间数据的快速上图与发布需求，为各级应急管理部门构建本级业务应用系统提供灵活、可扩展的基础服务支撑及二次开发支撑，实现各部门地理信息图层资源的共建、共享、共用，形成云端架构、弹性扩展、应用牵引、共建共享的应急管理应用服务良性生态。通过基于云平台、大数据的应急管理一张图建设，提升应急管理部自然灾害监测预警能力、提升风险识别和预报预警能力、提升指挥调度的分析研判和资源调度能力，从而提升应急管理信息化的应用支撑水平。
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
  name: 'ZhihuiZhihui',
  props: {},
  data() {
    return {
      items_feature: [
        {
          id: 1,
          itemTitle: '/// 值班值守',
          itemText:
            '覆盖省、地市、区县三级，实现智慧中心/值班室电话、传真、短信、移动APP等多种接受（报送）事件信息，支持事件自动记录、定位标记和关联预案等功能，实现报告单快速生成、分发、信息推送等功能，方便各级领导第一时间掌握全面信息。',
        },
        {
          id: 2,
          itemTitle: '/// 事件处置',
          itemText:
            '以事件为主线，汇聚事件处置过程中各类信息，将处置过程结构化、精细化、可视化，通过移动智慧APP实时获取一线处置人员的处置状态；对一般事件，值班人员与相关部门人员进行联系，协调进行处置；对重大事件，向领导和上级部门汇报，并启动重大事件专题处置小组。',
        },
        {
          id: 3,
          itemTitle: '/// 可视指挥',
          itemText:
            '构建应急一张图，分别对警情、警力、视频、区域等几类资源分图层在GIS系统中显示或隐藏。支持重点人口、重要地点、物资储备等扩展要素的分图层展示。图上资源的一键式调用，实现“所见即所得”的可视指挥。对一些重要场所，如车站、机场、场馆，由于其内部空间的复杂性和重点安保的需要，可通过点云建模等方式，进行3D建模。实现基于三维GIS的可视化智慧，实现场景空间结构，关键部位的一目了然。',
        },
        {
          id: 4,
          itemTitle: '/// 大屏展示',
          itemText:
            '以可视化图标、拼盘、动态热力图等形式对实时警情数据、各项数据指标、态势分析，分类统计等应急全要素信息有效融合与数理，在超高分辨率大屏上进行可视化综合展示及应用。',
        },
        {
          id: 5,
          itemTitle: '/// 移动指挥 ',
          itemText:
            '通过APP实现指挥中心事件指派的接受，通过对时间处置状态（接收、到达、处置完毕等）的反馈，实现对时间处置状态的实时跟踪。一线处置人员可实时推送现场的视频以及图像，并可以实现语音对讲、视频通话、数据回传等功能，功能组成“分级责任、相互衔接”的应急指挥体系。',
        },
        {
          id: 6,
          itemTitle: '/// 监测预警',
          itemText:
            '汇聚城市各类视频、数据资源，对各类数据进行检测预警。提供多种分析工具，以可视化图表对警情数据分析研判，以治安管控、防爆反恐、预案制定/实施、指挥调度提供有力保障。',
        },
      ],
      items_application: [
        {
          id: 1,
          imgSrc: require('@/assets/images/application/zhzh_application1.png'),
        },
        {
          id: 2,
          imgSrc: require('@/assets/images/application/zhzh_application2.png'),
        },
        {
          id: 3,
          imgSrc: require('@/assets/images/application/zhzh_application3.png'),
        },
        {
          id: 4,
          imgSrc: require('@/assets/images/application/zhzh_application4.png'),
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
    height: 320px;
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
      line-height: 35px;
    }
  }
  li:nth-child(2) {
    color: #333333;
    background: #fff;
  }
  li:nth-child(3) {
    color: #333333;
    background: #fff;
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
    background: #fff;
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
