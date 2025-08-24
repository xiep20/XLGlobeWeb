<template>
  <div class="body">
    <div class="wbk">
      <div class="part" style="padding-bottom:20px">
        <div class="left_title">
          <div class="left_title_icon"></div>
          <div class="left_title_text">
            <p>智慧水务</p>
          </div>
        </div>
        <div class="right_text">
          <p>
            公司智慧水利服务平台采用面向服务架构（SOA） 思想，
            以“云计算”、“物联网”等技术为支撑、以水利信息化基础设施整合为先导，以水利信息资源共享为核心，
            以水利业务应用推进为重点， 以标准规范体系为指导，
            以安全防护体系为保障，采用“分布多级、统一管理、集中服务”的总体架构模式，推进水利信息化的全面渗透，深度融合，将水利信息化提高到全新的水平。
          </p>
        </div>
      </div>
    </div>
    <div class="wbk">
      <div class="part" style="padding-top: 0">
        <div style="width: 349px"></div>
        <div class="mainImg"></div>
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
          公司结合水利部门职责及业务需求，依托水利云数据中心，针对河湖长制、防汛抗旱、水资源管理、城市供排水管理、水政执法、水利工程建设管理、河湖水域划界确权管理、水库灌区信息化、水利电子政务等方向，建设业务应用系统，通过信息化手段，全面提高管理人员业务能力，规范管理流程，
          提高管理效率。
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
  name: 'ZhihuiShuiwu',
  props: {},
  data() {
    return {
      items_feature: [
        {
          id: 1,
          itemTitle: '透彻感知',
          itemText:
            '构建全时水文物联网监测体系，特别是水源地、重要断面，水库等关键区域的传感器与智能设备组成物联网，实时对从监测对象的水位、流量、降水等监测与分析，做到变被动为主动、透彻感知。',
        },
        {
          id: 2,
          itemTitle: '广泛互联',
          itemText:
            '水文作为防汛抗旱、水环境治理多领域拓展的建设项目，其发展不是孤立的，涉及面必然极为广泛。未来，智慧水文必将与水务管理的其他信息化模块互联对接，按照水利部标准构建水文数据库，以进一步丰富和拓展水文信息化内涵。',
        },
        {
          id: 3,
          itemTitle: '智能运作',
          itemText:
            '深入结合大数据、水文水动力模型技术，实现从信息采集到分析判断、预警、自适应操作的全程指挥操作，通过数学模型提取有价值的信息，为水文工作提供强大的决策支持，强化武汉市水文工作的科学性和前瞻性。',
        },
      ],
      items_application: [
        {
          id: 1,
          imgSrc: require('@/assets/images/application/zhsw_application1.png'),
        },
        {
          id: 2,
          imgSrc: require('@/assets/images/application/zhsw_application2.png'),
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
  width: 533px;
  height: 638px;
  margin-right: 318px;
  margin-left: -38px;
  background: url('~@/assets/images/application/zhsw_main.png');
}
.right_ul {
  display: flex;
  width: 1200px;
  margin-top: -40px;
  list-style: none;
  padding-bottom: 80px;
  li {
    width: 320px;
    height: 220px;
    padding: 40px;
    p:nth-child(1) {
      position: relative;
      top: 220px;
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
  li:nth-child(2n) {
    color: #333333;
    background: #ffffff;
  }
  li:nth-child(2n-1) {
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
    .main_applicationImg {
      height: 287px;
      width: 544px;
      margin-bottom: 9px;
      margin-right: 40px;
      background-size: 100%;
    }
    li:nth-child(2) {
      .main_applicationImg {
        height: 287px;
        width: 614px;
        margin-bottom: 9px;
        margin-right: 0px;
        background-size: 100%;
      }
    }
  }
}
</style>
