<template>
  <div class="body">
    <div class="wbk">
      <div class="part" style="padding-bottom: 20px">
        <div class="left_title">
          <div class="left_title_icon"></div>
          <div class="left_title_text">
            <p>智慧园区</p>
          </div>
        </div>
        <div class="right_text">
          <p>
            智慧园区是以互联网为载体，融合“互联网+产业”模式，面向园区提供全产业链支撑服务的智慧解决方案。公司利用物联网、大数据、云计算、移动互联网等关键技术，综合多种传感器技术，包括射频识别（RFID）、视频识别（VFID）、GNSS、称重、车辆感应，温/湿度传感、视频监控等，集成各个业务系统，提供包含三维可视化管理，访客指引、智能停车、智能巡检，安防监控等服务在内的智慧园区整体解决方案，全面提高园区的管理效率和综合服务水平。
          </p>
        </div>
      </div>
    </div>

    <div class="wbk">
      <div class="part" style="padding-top: 0px; padding-bottom: 10px">
        <div style="width: 336px"></div>
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
          智慧园区综合管理平台系统以视频业务为核心，接入园区弱电安防应用子系统，形成园区管控一体化综合解决方案，并且通过内业务子系统的自由灵活组合，进行数据提取分析应用，从而对园区的人员、车辆、物资实行全方位、多业务的融合智能方式综合管理、业务优化，提升园区管理效率、优化业务流程，并可形成多个细分解决方案应用，以满足不同的园区场景需求应用。
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
  name: 'ZhihuiYuanqu',
  props: {},
  data() {
    return {
      items_feature: [
        {
          id: 1,
          itemTitle: '三维可视化管理',
          itemText: '利用三维建模及可视化技术，实现园区三维可视化管理。',
        },
        {
          id: 2,
          itemTitle: '智能巡检',
          itemText:
            '基于”一张图”，对危险源隐患进行查询、统计实现隐患点及巡查轨迹的采集上报。',
        },
        {
          id: 3,
          itemTitle: '访客指引',
          itemText:
            '基于园区数字化地图，对访客进行最短路径或最短时间分析，提供实时路径的精准指引。',
        },
        {
          id: 4,
          itemTitle: '人员可视',
          itemText:
            '建立人员画像，包括 个人基本信息，工作技能，工作状态，移动轨迹，实时位置信息等。',
        },
        {
          id: 5,
          itemTitle: '安防监控',
          itemText:
            '实现园区大范围全景监控，并对各个监控点视频数据接口进行调用。',
        },
        {
          id: 6,
          itemTitle: '资源可视',
          itemText:
            '建立设施画像，包括设备详情，生命周期，关联关系，配置参数，运行状态，移动轨迹，位置等。',
        },
        {
          id: 7,
          itemTitle: '事件可视',
          itemText:
            '建立事件信息画像，包括事件名称，事件地点、事件状态、事件级别、事件参数等。',
        },
        {
          id: 8,
          itemTitle: '智能停车',
          itemText:
            '将车位余量显示、车位动态识别，车卡合一，将费用查询和支付等功能接入园区微信或APP，实现无需停留，视频识别，无卡支付。',
        },
      ],
      items_application: [
        {
          id: 1,
          imgSrc: require('@/assets/images/application/zhyq_application1.png'),
        },
        {
          id: 2,
          imgSrc: require('@/assets/images/application/zhyq_application2.png'),
        },
        {
          id: 3,
          imgSrc: require('@/assets/images/application/zhyq_application3.png'),
        },
        {
          id: 4,
          imgSrc: require('@/assets/images/application/zhyq_application4.png'),
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
  width: 864px;
  height: 494px;
  margin-left: -2px;
  background: url('~@/assets/images/application/zhyq_main.png') no-repeat;
  background-size: 100%;
}
.right_ul {
  display: flex;
  width: 1200px;
  margin-top: -40px;
  list-style: none;
  padding-bottom: 80px;
  li {
    width: 400px;
    height: 280px;
    padding: 10px;
    p:nth-child(1) {
      position: relative;
      top: 250px;
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
    li:nth-child(1) {
      .main_applicationImg {
        height: 181px;
        width: 371px;
        margin-right: 42px;
      }
    }
    li:nth-child(2) {
      .main_applicationImg {
        height: 181px;
        width: 371px;
        margin-right: 42px;
      }
    }
    li:nth-child(3) {
      .main_applicationImg {
        height: 181px;
        width: 371px;
      }
    }
    li:nth-child(4) {
      .main_applicationImg {
        height: 421px;
        width: 1200px;
        margin-top: 54px;
      }
    }
  }
}
</style>
