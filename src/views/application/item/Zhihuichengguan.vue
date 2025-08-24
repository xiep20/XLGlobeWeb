<template>
  <div class="body">
    <div class="gbk">
      <div class="part">
        <div class="left_title">
          <div class="left_title_icon"></div>
          <div class="left_title_text">
            <p style="width: 300px">智慧城管 <br />解决方案</p>
          </div>
        </div>
        <div class="right_text">
          <p>
            公司在智慧城市框架下，不断推进技术应用创新和管理模式创新，结合城市管理实际需求，对“数字城管”信息平台进行提升和创新，着力打造智慧城市管理新格局。通过融合物联网、3G/4G通信、时空信息、云计算、大数据分析技术、虚拟化技术等多项前沿技术，建立智能程度更高、感知更全面的智慧城市管理平台，并运用互联网思维及城市治理理念，创新城市管理运营模式，建立科学的智慧管理新体系，真正实现从管理到服务、从治理到运营，从相对独立到协同一体的智慧城市精益化管理新模式。
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
  </div>
</template>
<script>
export default {
  name: 'ZhihuiChengguan',
  props: {},
  data() {
    return {
      items_feature: [
        {
          id: 1,
          itemTitle: '/// 更全面的感知',
          itemText:
            '通过北斗/GPS、遥感影像、二维码、RFID、智能视频分析、公众感知等手段，实现更全面的感知。',
        },
        {
          id: 2,
          itemTitle: '/// 更广泛的参与',
          itemText:
            '进一步优化改善信息采集与业务监督、指挥、处理、评价等多部门协同工作的流程，缩短发现、反馈、处理问题的周期，与责任单位的协同处置更广泛。',
        },
        {
          id: 3,
          itemTitle: '/// 更广泛的参与',
          itemText:
            '采用微信、微博、城管通、网站等平台，收集公众上报问题，增强城市管理部门与公众之间的互动，提升公众参与城市管理的热情，实现全民城管。',
        },
        {
          id: 4,
          itemTitle: '/// 更先进的技术',
          itemText:
            '优化原有数字城管系统界面，重设系统表单，采用HTML5页面技术，实现多浏览器支持，升级原有系统功能，满足智慧城管系统使用需求。',
        },
        {
          id: 5,
          itemTitle: '/// 更精细的管理',
          itemText:
            '综合现有可用资源与行业应用，基于数据，实现城市管理的事前、事中、事后的全过程精细化管理。',
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
  background: linear-gradient(0deg, #0cb8fa 0%, #5a42ec 100%);
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
  margin-bottom: 40px;
  list-style: none;
  padding-bottom: 80px;
  li {
    width: 520px;
    height: 180px;
    padding: 40px;
    p:nth-child(1) {
      margin-bottom: 30px;
      font-size: 18px;
      font-family: Microsoft YaHei;
      font-weight: bold;
    }
    p:nth-child(2) {
      font-size: 20px;
      font-family: Microsoft YaHei;
      font-weight: 300;
      line-height: 30px;
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
    color: #f8f8f8;
    background: linear-gradient(0deg, #102650 0%, #040d1d 100%);
  }
  li:nth-child(4) {
    color: #f8f8f8;
    background: linear-gradient(0deg, #102650 0%, #040d1d 100%);
  }
  li:nth-child(5) {
    color: #f8f8f8;
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
