<template>
  <div class="example-list">
    <template v-for="item in examplesData">
        <div :key="item.name">
        <p class="example-label" :id="'nav-' + item.name">
          <svg-icon :icon-class="item.name" class-name="icon-svg"></svg-icon>
          {{ item.label }}
        </p>
        <el-divider></el-divider>
        <div
          class="card-list"
          v-if="!item.children && item.examples.length > 0"
        >
          <el-card
            v-for="example in item.examples"
            :key="example.name"
            :class="selcard"
            shadow="hover"
            :body-style="{ padding: '0px' }"
          >
            <!-- <img
              :src="getImgPath(item.name, example)"
              @click="gotoEditor(item.name, example)"
            /> -->
            <div class="cardimg_">
              <el-image
                :key="getImgPath(item.name, example)"
                :src="getImgPath(item.name, example)"
                @click="gotoEditor(item.name, example)"
                lazy
              ></el-image>
            </div>
            <p>
              {{ example.label
              }}<font color="orange" v-if="example.isPlugin"> [插件] </font>
            </p>
          </el-card>
        </div>
        <div v-if="item.children && item.children.length > 0">
          <template v-for="child in item.children">
            <div :key="child.name" :class="child.name" :ref="child.name">
              <p
                style="margin-top: 20px; padding-left: 25px; font-size: 16px"
                :id="'nav-' + child.name"
              >
                {{ child.label }}
              </p>
              <div
                class="card-list"
                v-if="child.examples && child.examples.length > 0"
              >
                <el-card
                  v-for="example in child.examples"
                  :key="example.name"
                  :class="selcard"
                  shadow="hover"
                  :body-style="{ padding: '0px' }"
                  @click="gotoEditor(example)"
                >
                  <div class="cardimg_">
                    <img
                      :src="getImgPath(item.name + '/' + child.name, example)"
                      @click="gotoEditor(item.name + '/' + child.name, example)"
                    />
                  </div>
                  <p>
                    {{ example.label
                    }}<font color="orange" v-if="example.isPlugin">
                      [插件]
                    </font>
                  </p>
                </el-card>
              </div>
            </div>
          </template>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ExampleList',
  data() {
    return {
      selcard: 'card',
    }
  },
  props: {
    examplesData: {
      type: Array,
      default() {
        return []
      },
    },
  },
  mounted() {
    var that = this
    that.changeitemwidth()
    window.onresize = () => {
      that.changeitemwidth()
    }
  },
  methods: {
    changeitemwidth() {
      var w = document.body.clientWidth
      if (w > 1680) {
        this.selcard = 'card card_c1'
      } else if (w > 1400) {
        this.selcard = 'card card_c2'
      } else if (w > 1200) {
        this.selcard = 'card card_c3'
      } else if (w > 800) {
        this.selcard = 'card card_c4'
      }else{
        this.selcard = 'card card_c5'
      }
    },
    getImgPath(folder, info) {
      return `images/menu/${folder}/${info.name}.${info.suffix || 'png'}`
    },
    gotoEditor(name, example) {
      window.open(
        `./#/editor?type=${name}&example=${example.name}&label=${example.label}`
      )
    },
  },
  created(){
  }
}
</script>

<style lang="scss">
.example-list {
  .el-divider {
    background-color: #0865ba !important;
  }
}
@media (max-width: 768px) {
  .example-list {
    .card-list {
      // display: flex !important;
      // flex-wrap: wrap;
      // justify-content: space-around;
      .card {
        margin: 15px 0px;
      }
    }
  }
}
.el-card {
  border: 2px solid #ebeef5;
}
</style>

<style lang="scss" scoped>
.example-list {
  .example-label {
    color: rgba(0, 0, 0, 0.6);
    font-size: 16px;
    font-weight: bold;
    margin-top: 20px;
    .icon-svg {
      width: 20px;
      height: 20px;
    }
  }
  .card-list {
    display: inline-table;
    width: 100%;
    // display: grid;
    // grid-template-columns: repeat(5, 20%);
    padding-left: 25px;
    .card {
      // max-width: 260px;
      width: 18%;
      // height: 230px;
      margin-right: 2%;
      margin-top: 15px;
      margin-bottom: 15px;
      cursor: pointer;
      float: left;
      .cardimg_ {
        position: relative;
        width: 100%;
        height: 0;
        padding-top: 95%;
      }
      img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        // height: 200px;
        border-width: 0px;
      }
      p {
        text-align: center;
        padding: 6px 0;
      }
    }
    .card_c1 {
      width: 15%;
      margin-right: 1%;
    }
    .card_c2 {
      width: 18.2%;
      margin-right: 1.2%;
    }
    .card_c3 {
      width: 23.3%;
      margin-right: 1%;
    }
    .card_c4 {
      width: 31.3%;
      margin-right: 1.3%;
    }
    .card_c5 {
      width: 47.2%;
      margin-right: 2%;
    }
  }
}
</style>
