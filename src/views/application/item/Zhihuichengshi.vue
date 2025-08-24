<template>
  <div class="body">
    <div class="wbk">
      <div class="part" style="padding-bottom: 20px">
        <div class="left_title">
          <div class="left_title_icon"></div>
          <div class="left_title_text">
            <p>新型智慧城市</p>
          </div>
        </div>
        <div class="right_text">
          <p>
            公司以城市多元化、多时态信息为基础，在原有城市的基础设施上，通过建设智慧城市时空信息云平台、北斗高精度位置服务云平台、大数据中心三大基础设施，将各类数据互联互通，为新型智慧城市提供精准、高效的时空位置服务，真正的实现大数据时代城市有“信息烟囱”(
            信息孤岛)向“信息连通器”( 信息互享互通)转变。
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
            <p>{{ item.title }}</p>
            <p>{{ item.content }}</p>
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
          德毅智慧三区联动综合监管平台以整合大学资源为主线，就地拓展、就近发展，实现大学校区、科技园区、公共社区融合联动。校区主要为园区提供创新创业人才和项目，为光谷高新技术开发区的经济与社会发展提供智力支持;园区是大学师生、科研人员和城区居民创新创业及就业的场所，是城区经济发展的一个增长极;社区主要为校区和园区提供公共服务，以创造一一个适宜居注休闲、交的环境。
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
  name: 'ZhihuiChengshi',
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
          title: '智慧城市时空信息云平台',
          content:
            '以北斗时空为基准，以位置服务为核心，通过大数据、物联网、云计算等新一代信息技术，实时汇集城市各种时空信息，形成感知更透彻、互联更广泛、决策更智能、服务更灵活、更加安全可靠的智慧城市时空信息平台，是新型智慧城市建设的重要空间信息基础设施。',
        },
        {
          id: 2,
          title: '时空大数据中心',
          content:
            '基于北斗卫星导航定位技术建设的综合性高精度位置服务体系，融合大数据、高性能云计算和海量云存储技术，为政府部门、行业用户、大众用户提供基于高精度位置导航、监控、调度和分析决策技术支持服务。',
        },
        {
          id: 3,
          title: '北斗高精度位置服务云平台',
          content:
            '通过对时空大数据的收集和各种业务系统库的对接，将不同来源、不同类型、不同应用的时空数据进行集中、规范的整合；并通过基础地理信息平台完成数据发布和资源共享，形成智慧城市的“知识库”。',
        },
      ],
      items_application: [
        {
          id: 1,
          imgSrc: require('@/assets/images/application/zhcs_application1.png'),
        },
        {
          id: 2,
          imgSrc: require('@/assets/images/application/zhcs_application2.png'),
        },
        {
          id: 3,
          imgSrc: require('@/assets/images/application/zhcs_application3.png'),
        },
        {
          id: 4,
          imgSrc: require('@/assets/images/application/zhcs_application4.png'),
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
  width: 780px;
  height: 830px;
  margin-left: -15px;
  background: url('~@/assets/images/application/zhcs_main.png');
}
.right_ul {
  display: flex;
  width: 1200px;
  margin-top: -40px;
  list-style: none;
  padding-bottom: 80px;
  li {
    width: 307px;
    height: 260px;
    padding: 40px 50px 0 43px;
    p:nth-child(1) {
      position: relative;
      top: 217px;
      bottom: 0px;
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
    height: 264px;
    width: 320px;
    padding: 36px 37px 0 43px;
  }
  li:nth-child(3) {
    height: 262px;
    width: 303px;
    padding: 36px 37px 0 43px;
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
    .main_applicationImg {
      height: 300px;
      width: 590px;
      margin-bottom: 9px;
      margin-right: 9px;
      background-size: 100%;
    }
  }
}
</style>
