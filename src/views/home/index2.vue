<template>
  <div class="home">
    <div class="banner">
      <img style="width: 100%" src="@/assets/images/bg.png" alt="" />
      <canvas
        id="cas"
        style="position: absolute; width: 100%; height: 100%"
      ></canvas>
      <aframeEarth
        style="position: absolute; width: 40%; height: 100%; right: 0"
      ></aframeEarth>
      <!-- <canvas
        id="cas2"
        style="position: absolute; width: 100%; height: 100%"
      ></canvas> -->
      <div class="bannercont">
        <p class="bannercont_tit">-- Web三维地图客户端程序开发平台</p>
      </div>
    </div>
    <div class="info">
      <div class="module">
        <div class="modulela">
          <div class="btit">
            <div class="module_tit">
              <h2>XLGlobe三维开发平台</h2>
            </div>
            <div class="module_cen">
              基于webGL的零客户端插件三维客户端开发平台，可快速构建跨浏览器、交互式的适应丰富应用场景的三维开放平台。
            </div>
          </div>
          <div class="bcen">
            <div class="functional">
              <li>
                <div class="content">
                  <div class="b_icon">
                    <img src="@/assets/images/Group1.png" class="icon" />
                  </div>
                  <div class="functionaltitle">快速性构建</div>
                </div>
              </li>
              <li>
                <div class="content">
                  <div class="b_icon">
                    <img src="@/assets/images/Group2.png" class="icon" />
                  </div>
                  <div class="functionaltitle">跨平台展示</div>
                </div>
              </li>
              <li>
                <div class="content">
                  <div class="b_icon">
                    <img
                      src="@/assets/images/Ipsum tristique.png"
                      class="icon"
                    />
                  </div>
                  <div class="functionaltitle">多行业应用</div>
                </div>
              </li>
            </div>
          </div>
        </div>
      </div>
      <div class="module modulelb">
        <div class="btit">
          <div class="module_tit">
            <h3>行业解决方案</h3>
          </div>
        </div>
        <div class="bcen">
          <!-- <el-carousel :interval="4000" type="card" height="530px"> -->
          <el-carousel :interval="4000" type="card">
            <el-carousel-item v-for="item in items" :key="item">
              <el-image :src="item.url" style="height: 100%"></el-image>
              <div class="card_label">
                <div class="card_label-tit">{{ item.name }}</div>
                <div class="card_label-cen">{{ item.label }}</div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="bbottom"></div>
      </div>
      <div class="module">
        <div class="module_desc">
          <div class="descon_cen">
            <div class="descon_cen_box descon_cen_box1 is-active">
              <div class="descon_cen_left">
                <div class="mbox_dtit">功能完善</div>
                <div class="desc">
                  平台提供了地图数据、要素模型、场景分析、可视化等各类完善的功能。
                  为开发者节省大量时间精力，并且根据开发者使用反馈，还在不断更新。
                  还为开发者遇见的问题提供连续的技术支持。
                </div>
              </div>
              <div class="descon_cen_right">
                <div class="box box1">
                  <div class="mbox_cenpage inner-1-box"></div>
                  <!-- <div class="mbox_cenpage inner-2-box"></div>
                  <div class="mbox_cenpage inner-3-box"></div>
                  <div class="mbox_cenpage inner-4-box"></div> -->
                </div>
              </div>
            </div>
            <div class="descon_cen_box descon_cen_box2">
              <div class="descon_cen_left" style="float: right">
                <div class="mbox_dtit" style="margin-left: 0">集成丰富</div>
                <div class="desc" style="margin-left: 0">
                  平台基于开源项目Cesium进行的二次开发，对Cesium使用进行的改造优化，
                  根据一般项目使用情况，集成了Echarts、Mapv、Heatmap、Turf等一些第三方常用的地图库或开源库。
                </div>
              </div>
              <div class="descon_cen_right" style="float: right">
                <div class="box box2">
                  <div class="mbox_cenpage inner-1-box"></div>
                </div>
              </div>
            </div>
            <div class="descon_cen_box descon_cen_box3">
              <div class="descon_cen_left">
                <div class="mbox_dtit">简单易学</div>
                <div class="desc">
                  平台入门简单，学习容易，文档完善。
                  api完整，提供有大量的示例演示，可轻松学习使用。
                  平台的内部构建适度灵活，接口使用简洁易用，合理解耦。
                </div>
              </div>
              <div class="descon_cen_right">
                <div class="box box3">
                  <div class="mbox_cenpage inner-1-box"></div>
                </div>
              </div>
            </div>
            <div class="descon_cen_box descon_cen_box4" style="border: none">
              <div class="descon_cen_left" style="float: right">
                <div class="mbox_dtit" style="margin-left: 0">轻量灵活</div>
                <div class="desc" style="margin-left: 0">
                  轻量级的Web端3D
                  GIS展示，无需安装插件、支持通用浏览器展示、无其它特殊依赖。
                  支持大量类型底图的加载，包括天地图、高德、百度、谷歌等在线地图，支持arcgis等各类OGC服务。
                </div>
              </div>
              <div class="descon_cen_right" style="float: right">
                <div class="box box4">
                  <div class="mbox_cenpage inner-1-box"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ly-foot></ly-foot>
  </div>
</template>
<script>
import LyFoot from '@/layout/LyFoot.vue'
import aframeEarth from '@/components/aframeEarth/index.vue'
export default {
  name: 'HomeIndex',
  components: {
    LyFoot,
    aframeEarth,
  },
  data() {
    return {
      items: [
        {
          url: require('@/assets/images/item/智慧园区.png'),
          name: '智慧园区',
          label:
            '通过GIS促使园区信息化统一管理，利用2、3D可视化技术的便捷性和空间展示、分析的优势，助力园区管理运控。',
        },
        {
          url: require('@/assets/images/item/智慧城管.png'),
          name: '智慧城管',
          label:
            '以新一代信息技术为支撑、辅助信息化城市建设和可持续创新，对城市进行科学化、精细化、智能化管理。',
        },
        {
          url: require('@/assets/images/item/智慧交通.png'),
          name: '智慧交通',
          label:
            '"智慧+交通"智慧赋能交通，促进交通体系高效运行；使交通具备互联、感知、分析、控制、预测能力。',
        },
      ],
      animateCSS: (element, animation, prefix = 'animate__') =>
        // We create a Promise and return it
        new Promise((resolve) => {
          const animationName = `${prefix}${animation}`
          const node = document.querySelector(element)

          node.classList.add(`${prefix}animated`, animationName)

          // When the animation ends, we clean the classes and resolve the Promise
          function handleAnimationEnd() {
            node.classList.remove(`${prefix}animated`, animationName)
            resolve('Animation ended')
          }

          node.addEventListener('animationend', handleAnimationEnd, {
            once: true,
          })
        }),
    }
  },
  mounted() {
    document
      .getElementsByClassName('home')[0]
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
    this.canvasfun()
  },
  methods: {
    canvasfun() {
      var num = 200
      var w = window.innerWidth
      var h = window.innerHeight
      var _x = 0
      var _y = 0
      var _z = 150
      var dtr = function (d) {
        return (d * Math.PI) / 180
      }

      var rnd = function () {
        return Math.sin((Math.floor(Math.random() * 360) * Math.PI) / 180)
      }

      var cam = {
        obj: {
          x: _x,
          y: _y,
          z: _z,
        },
        dest: {
          x: 0,
          y: 0,
          z: 1,
        },
        dist: {
          x: 0,
          y: 0,
          z: 200,
        },
        ang: {
          cplane: 0,
          splane: 0,
          ctheta: 0,
          stheta: 0,
        },
        zoom: 1,
        disp: {
          x: w / 2,
          y: h / 2,
          z: 0,
        },
        upd: function () {
          cam.dist.x = cam.dest.x - cam.obj.x
          cam.dist.y = cam.dest.y - cam.obj.y
          cam.dist.z = cam.dest.z - cam.obj.z
          cam.ang.cplane =
            -cam.dist.z /
            Math.sqrt(cam.dist.x * cam.dist.x + cam.dist.z * cam.dist.z)
          cam.ang.splane =
            cam.dist.x /
            Math.sqrt(cam.dist.x * cam.dist.x + cam.dist.z * cam.dist.z)
          cam.ang.ctheta =
            Math.sqrt(cam.dist.x * cam.dist.x + cam.dist.z * cam.dist.z) /
            Math.sqrt(
              cam.dist.x * cam.dist.x +
                cam.dist.y * cam.dist.y +
                cam.dist.z * cam.dist.z
            )
          cam.ang.stheta =
            -cam.dist.y /
            Math.sqrt(
              cam.dist.x * cam.dist.x +
                cam.dist.y * cam.dist.y +
                cam.dist.z * cam.dist.z
            )
        },
      }

      var trans = {
        parts: {
          sz: function (p, sz) {
            return {
              x: p.x * sz.x,
              y: p.y * sz.y,
              z: p.z * sz.z,
            }
          },
          rot: {
            x: function (p, rot) {
              return {
                x: p.x,
                y: p.y * Math.cos(dtr(rot.x)) - p.z * Math.sin(dtr(rot.x)),
                z: p.y * Math.sin(dtr(rot.x)) + p.z * Math.cos(dtr(rot.x)),
              }
            },
            y: function (p, rot) {
              return {
                x: p.x * Math.cos(dtr(rot.y)) + p.z * Math.sin(dtr(rot.y)),
                y: p.y,
                z: -p.x * Math.sin(dtr(rot.y)) + p.z * Math.cos(dtr(rot.y)),
              }
            },
            z: function (p, rot) {
              return {
                x: p.x * Math.cos(dtr(rot.z)) - p.y * Math.sin(dtr(rot.z)),
                y: p.x * Math.sin(dtr(rot.z)) + p.y * Math.cos(dtr(rot.z)),
                z: p.z,
              }
            },
          },
          pos: function (p, pos) {
            return {
              x: p.x + pos.x,
              y: p.y + pos.y,
              z: p.z + pos.z,
            }
          },
        },
        pov: {
          plane: function (p) {
            return {
              x: p.x * cam.ang.cplane + p.z * cam.ang.splane,
              y: p.y,
              z: p.x * -cam.ang.splane + p.z * cam.ang.cplane,
            }
          },
          theta: function (p) {
            return {
              x: p.x,
              y: p.y * cam.ang.ctheta - p.z * cam.ang.stheta,
              z: p.y * cam.ang.stheta + p.z * cam.ang.ctheta,
            }
          },
          set: function (p) {
            return {
              x: p.x - cam.obj.x,
              y: p.y - cam.obj.y,
              z: p.z - cam.obj.z,
            }
          },
        },
        persp: function (p) {
          return {
            x: ((p.x * cam.dist.z) / p.z) * cam.zoom,
            y: ((p.y * cam.dist.z) / p.z) * cam.zoom,
            z: p.z * cam.zoom,
            p: cam.dist.z / p.z,
          }
        },
        disp: function (p, disp) {
          return {
            x: p.x + disp.x,
            y: -p.y + disp.y,
            z: p.z + disp.z,
            p: p.p,
          }
        },
        steps: function (_obj_, sz, rot, pos, disp) {
          var _args = trans.parts.sz(_obj_, sz)
          _args = trans.parts.rot.x(_args, rot)
          _args = trans.parts.rot.y(_args, rot)
          _args = trans.parts.rot.z(_args, rot)
          _args = trans.parts.pos(_args, pos)
          _args = trans.pov.plane(_args)
          _args = trans.pov.theta(_args)
          _args = trans.pov.set(_args)
          _args = trans.persp(_args)
          _args = trans.disp(_args, disp)
          return _args
        },
      }

      ;(function () {
        'use strict'
        var threeD = function (param) {
          this.transIn = {}
          this.transOut = {}
          this.transIn.vtx = param.vtx
          this.transIn.sz = param.sz
          this.transIn.rot = param.rot
          this.transIn.pos = param.pos
        }

        threeD.prototype.vupd = function () {
          this.transOut = trans.steps(
            this.transIn.vtx,
            this.transIn.sz,
            this.transIn.rot,
            this.transIn.pos,
            cam.disp
          )
        }

        var Build = function () {
          this.vel = 0.04
          this.lim = 360
          this.diff = 200
          this.initPos = 100
          this.toX = _x
          this.toY = _y
          this.go()
        }

        Build.prototype.go = function () {
          this.canvas = document.getElementById('cas')
          this.canvas.width = window.innerWidth
          this.canvas.height = window.innerHeight
          this.$ = this.canvas.getContext('2d')
          this.$.globalCompositeOperation = 'source-over'
          this.varr = []
          this.dist = []
          this.calc = []

          for (var i = 0, len = num; i < len; i++) {
            this.add()
          }

          this.rotObj = {
            x: 0,
            y: 0,
            z: 0,
          }
          this.objSz = {
            x: w / 5,
            y: h / 5,
            z: w / 5,
          }
        }

        Build.prototype.add = function () {
          this.varr.push(
            new threeD({
              vtx: {
                x: rnd(),
                y: rnd(),
                z: rnd(),
              },
              sz: {
                x: 0,
                y: 0,
                z: 0,
              },
              rot: {
                x: 20,
                y: -20,
                z: 0,
              },
              pos: {
                x: this.diff * Math.sin((360 * Math.random() * Math.PI) / 180),
                y: this.diff * Math.sin((360 * Math.random() * Math.PI) / 180),
                z: this.diff * Math.sin((360 * Math.random() * Math.PI) / 180),
              },
            })
          )
          this.calc.push({
            x: 360 * Math.random(),
            y: 360 * Math.random(),
            z: 360 * Math.random(),
          })
        }

        Build.prototype.upd = function () {
          cam.obj.x += (this.toX - cam.obj.x) * 0.05
          cam.obj.y += (this.toY - cam.obj.y) * 0.05
        }

        Build.prototype.draw = function () {
          this.$.clearRect(0, 0, this.canvas.width, this.canvas.height)
          cam.upd()
          this.rotObj.x += 0.1
          this.rotObj.y += 0.1
          this.rotObj.z += 0.1

          for (var i = 0; i < this.varr.length; i++) {
            for (var val in this.calc[i]) {
              if (this.calc[i].hasOwnProperty(val)) {
                this.calc[i][val] += this.vel
                if (this.calc[i][val] > this.lim) this.calc[i][val] = 0
              }
            }

            this.varr[i].transIn.pos = {
              x: this.diff * Math.cos((this.calc[i].x * Math.PI) / 180),
              y: this.diff * Math.sin((this.calc[i].y * Math.PI) / 180),
              z: this.diff * Math.sin((this.calc[i].z * Math.PI) / 180),
            }
            this.varr[i].transIn.rot = this.rotObj
            this.varr[i].transIn.sz = this.objSz
            this.varr[i].vupd()
            if (this.varr[i].transOut.p < 0) continue
            var g = this.$.createRadialGradient(
              this.varr[i].transOut.x,
              this.varr[i].transOut.y,
              this.varr[i].transOut.p,
              this.varr[i].transOut.x,
              this.varr[i].transOut.y,
              this.varr[i].transOut.p * 2
            )
            this.$.globalCompositeOperation = 'lighter'
            g.addColorStop(0, 'hsla(255, 255%, 255%, 1)')
            g.addColorStop(0.5, 'hsla(' + (i + 2) + ',85%, 40%,1)')
            g.addColorStop(1, 'hsla(' + i + ',85%, 40%,.5)')
            this.$.fillStyle = g
            this.$.beginPath()
            this.$.arc(
              this.varr[i].transOut.x,
              this.varr[i].transOut.y,
              this.varr[i].transOut.p * 2,
              0,
              Math.PI * 2,
              false
            )
            this.$.fill()
            this.$.closePath()
          }
        }
        Build.prototype.anim = function () {
          window.requestAnimationFrame = (function () {
            return (
              window.requestAnimationFrame ||
              function (callback) {
                window.setTimeout(callback, 1000 / 60)
              }
            )
          })()
          var anim = function () {
            this.upd()
            this.draw()
            window.requestAnimationFrame(anim)
          }.bind(this)
          window.requestAnimationFrame(anim)
        }

        Build.prototype.run = function () {
          this.anim()

          window.addEventListener(
            'mousemove',
            function (e) {
              this.toX = (e.clientX - this.canvas.width / 2) * -0.8
              this.toY = (e.clientY - this.canvas.height / 2) * 0.8
            }.bind(this)
          )
          window.addEventListener(
            'touchmove',
            function (e) {
              e.preventDefault()
              this.toX = (e.touches[0].clientX - this.canvas.width / 2) * -0.8
              this.toY = (e.touches[0].clientY - this.canvas.height / 2) * 0.8
            }.bind(this)
          )
          window.addEventListener(
            'mousedown',
            function () {
              for (var i = 0; i < 100; i++) {
                this.add()
              }
            }.bind(this)
          )
          window.addEventListener(
            'touchstart',
            function (e) {
              e.preventDefault()
              for (var i = 0; i < 100; i++) {
                this.add()
              }
            }.bind(this)
          )
        }
        var app = new Build()
        app.run()
      })()
    },
    changecontpur(type) {
      document
        .getElementsByClassName('bt-contentpur is-active')[0]
        .classList.remove('is-active')
      document
        .getElementsByClassName('descon_cen_box is-active')[0]
        .classList.remove('is-active')
      switch (type) {
        case 1:
          document
            .getElementsByClassName('bt-contentpur')[0]
            .classList.add('is-active')

          document
            .getElementsByClassName('descon_cen_box1')[0]
            .classList.add('is-active')
          break
        case 2:
          document
            .getElementsByClassName('bt-contentpur')[1]
            .classList.add('is-active')
          document
            .getElementsByClassName('descon_cen_box2')[0]
            .classList.add('is-active')
          break
        case 3:
          document
            .getElementsByClassName('bt-contentpur')[2]
            .classList.add('is-active')
          document
            .getElementsByClassName('descon_cen_box3')[0]
            .classList.add('is-active')
          break
        case 4:
          document
            .getElementsByClassName('bt-contentpur')[3]
            .classList.add('is-active')
          document
            .getElementsByClassName('descon_cen_box4')[0]
            .classList.add('is-active')
          break
        default:
          break
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
  background-color: #000000;
  &::after {
    // content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: calc(100%);
    background: none;
  }
  scrollbar-width: none;
  &::-webkit-scrollbar {
    width: 0;
  }
  .banner {
    position: relative;
    width: 100%;
    // height: calc(100%);
    height: auto;
    background: url('@/assets/images/bg.png');
    background-size: 100% 100%;
    overflow: hidden;
    display: flex;
    .bannercont {
      position: absolute;
      top: 40%;
      left: 15%;
      // width: 100%;
      // height: 100%;
      // background: linear-gradient(
      //   45deg,
      //   rgba(255, 255, 255, 0),
      //   rgba(118, 232, 233, 0.32),
      //   30%,
      //   rgba(255, 255, 255, 0),
      //   50%,
      //   rgba(240, 197, 50, 0.2),
      //   70%,
      //   rgba(255, 255, 255, 0)
      // );
    }
    .bannercont_tit {
      color: #fff;
      font-size: 40px;
      overflow: hidden;
      font-weight: 600;
      letter-spacing: 3px;
    }
  }
  .functional {
    // height: 260px;
    // background: rgba(14, 20, 63, 0.66);
    display: flex;
    justify-content: center;
    li {
      // background-image: linear-gradient(90deg, #709092, #2d6a90);
      // background: rgba(14, 20, 63, 0.66);
      float: left;
      width: 33.3%;
      height: auto;
      list-style-type: none;
      .content {
        width: 100%;
        margin: 45px auto;
        .b_icon {
          width: 100%;
          height: auto;
          // margin: 0 0 0 5%;
          svg,
          img {
            width: 100%;
            // height: 100%;
          }
        }
        .functionaltitle {
          font-size: 18px;
          height: 22px;
          font-weight: 500;
          color: #333333;
          line-height: 24px;
          margin: 12px;
          text-align: center;
        }
      }
    }
  }
}

.info {
  padding: 20px 0;
  min-width: 500px;
  background-color: #f0f1f6;
}
.info .module {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  margin: 60px 0 0 0;
  // padding: 40px 25px;
  // max-width: 1200px;
  width: 100%;
  // border-bottom: 1px solid #cecece;
  // transform: translateX(-50%);
  .module_tit {
    text-align: center;
  }
  // .el-aside {
  // }

  // .el-main {
  //   background-color: #e9eef3;
  //   width: 39%;
  //   float: left;
  // }
  .module_desc {
    width: 100%;
    // padding: 0 0 0 50%;
    // margin: 0 0 0 -600px;
    .descont {
      width: 70%;
      margin-left: 15%;
      .bt-contentpur {
        height: 120px;
        text-align: center;
        cursor: pointer;
        &.is-active {
          background: linear-gradient(
            0deg,
            #a3caff 0%,
            rgba(255, 255, 255, 0) 100%
          );
          border-bottom: 2px solid #2a89ff;
          color: #2a89ff;
          svg path {
            fill: #2a89ff;
          }
        }
        .module_tit {
          margin-top: 20px;
        }
        .module_cen {
          margin-top: 20px;
        }
      }
    }
    .descon_cen {
      width: 100%;
      // height: 600px;
      position: relative;
      .descon_cen_box {
        width: 1200px;
        height: 450px;
        // position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        border-bottom: 2px solid #d1d1d1;
        // display: none;
        &.is-active {
          display: block;
        }
        .descon_cen_left {
          width: 50%;
          float: left;
          color: #333333;
          .mbox_dtit {
            width: 80%;
            float: left;
            margin: 20% 0 0 20%;
            font-size: 24px;
            // font-family: 黑体;
            font-weight: bold;
            line-height: 48px;
          }
          .desc {
            width: 80%;
            margin: 0 0 0 20%;
            float: left;
            font-size: 16px;
            // font-family: 黑体;
            line-height: 36px;
          }
        }
        .descon_cen_right {
          width: 50%;
          height: 100%;
          float: left;
          .box {
            width: 60%;
            height: 80%;
            position: relative;
            margin: 10% 20%;
          }
          .box1 {
            .inner-1-box {
              position: absolute;
              bottom: 0%;
              left: 0%;
              width: 100%;
              height: 100%;
              z-index: 7;
              background-size: 100% 100%;
              background-repeat: no-repeat;
              background-position: center;
              background-image: url(@/assets/images/home/T1/T1_b.png);
            }
            .inner-2-box {
              position: absolute;
              top: 313px;
              left: 80px;
              width: 28px;
              height: 43px;
              z-index: 7;
              background-size: 100% 100%;
              background-repeat: no-repeat;
              background-position: center;
              background-image: url(@/assets/images/home/T1/_Group_.png);
              animation: and1 4s linear infinite;
              -webkit-animation: and1 4s linear infinite; /* Safari and Chrome */
            }
            .inner-3-box {
              position: absolute;
              top: 307px;
              left: 474px;
              width: 33px;
              height: 50px;
              z-index: 7;
              background-size: 100% 100%;
              background-repeat: no-repeat;
              background-position: center;
              background-image: url(@/assets/images/home/T1/_Group_2.png);
              animation: and1 6s linear infinite;
              -webkit-animation: and1 6s linear infinite; /* Safari and Chrome */
            }
            .inner-4-box {
              position: absolute;
              top: 359px;
              left: 70px;
              width: 48px;
              height: 32px;
              z-index: 7;
              background-size: 100% 100%;
              background-repeat: no-repeat;
              background-position: center;
              background-image: url(@/assets/images/home/T1/z2.png);
              animation: boxana 4s linear infinite;
              -webkit-animation: boxana 4s linear infinite; /* Safari and Chrome */
            }

            @keyframes boxana {
              0% {
                top: 359px;
                left: 70px;
              }
              25% {
                top: 196px;
                left: 88px;
              }
              50% {
                top: 210px;
                left: 112px;
              }
              75% {
                top: 224px;
                left: 136px;
              }
              100% {
                top: 430px;
                left: 190px;
              }
            }
          }
          .box2 {
            .inner-1-box {
              position: absolute;
              bottom: 0%;
              left: 0%;
              width: 100%;
              height: 100%;
              z-index: 7;
              background-size: 100% 100%;
              background-repeat: no-repeat;
              background-position: center;
              background-image: url(@/assets/images/home/T2/T2_b.png);
            }
          }
          .box3 {
            .inner-1-box {
              position: absolute;
              bottom: 0%;
              left: 0%;
              width: 100%;
              height: 100%;
              z-index: 7;
              background-size: 100% 100%;
              background-repeat: no-repeat;
              background-position: center;
              background-image: url(@/assets/images/home/T3/T3_b.png);
            }
          }
          .box4 {
            .inner-1-box {
              position: absolute;
              bottom: 0%;
              left: 0%;
              width: 100%;
              height: 100%;
              z-index: 7;
              background-size: 100% 100%;
              background-repeat: no-repeat;
              background-position: center;
              background-image: url(@/assets/images/home/T4/T4_b.png);
            }
          }
        }
      }
    }
    .module_box {
      width: 590px;
      height: 550px;
      float: left;
      margin: 10px;
      background-color: #ffffff;
      box-shadow: #ccc 0px 0px 10px;
      .mbox_left {
        width: 15px;
        margin: 20px 10px;
        float: left;
        div {
          width: 15px;
          height: 120px;
          background-image: linear-gradient(-0deg, #0dccff, #4760ff);
        }
      }
      .mbox_tit {
        float: left;
        width: 510px;
        height: 120px;
        margin: 20px 0 0 20px;
        .mbox_dtit {
          font-size: 20px;
          // font-family: 黑体;
          font-weight: bold;
          line-height: 48px;
        }
        .desc {
          font-size: 14px;
          // font-family: 黑体;
          color: #333;
          line-height: 24px;
        }
      }
    }
    @keyframes and1 {
      0% {
        margin-top: -50px;
      }
      10% {
        margin-top: 0px;
      }
      15% {
        margin-top: -15px;
      }
      18% {
        margin-top: -20px;
      }
      20% {
        margin-top: -15px;
      }
      23% {
        margin-top: 0px;
      }
      100% {
        margin-top: 0px;
      }
    }
  }
}
.info .modulela {
  display: block;
  width: 1200px;
  .btit {
    padding: 30px;
    text-align: center;
    width: 100%;
    font-size: 24px;
    font-weight: bold;
    color: #333333;
    .module_tit {
    }
    .module_cen {
      font-size: 16px;
      margin-top: 20px;
      font-weight: 500;
    }
  }
  .bcen {
    width: 100%;
    // min-height: 500px;
  }
}
.info .modulelb {
  display: block;
  background: linear-gradient(0deg, #0f2651 0%, #030c1d 100%);
  margin: 0;
  .btit {
    padding: 60px;
    text-align: center;
    width: 100%;
    font-size: 32px;
    font-weight: bold;
    color: #fff;
  }
  .bcen {
    width: 70%;
    margin: 0 15%;
    // min-height: 500px;
    .card_label {
      position: absolute;
      color: #fff;
      font-size: 16px;
      top: 20%;
      text-align: center;
      width: 60%;
      left: 20%;
      .card_label-tit {
        font-size: 24px;
        margin: 12px;
      }
      .card_label-cen {
      }
    }
  }
  .el-carousel__container .el-carousel__item--card {
    opacity: 0.5;
  }
  .el-carousel__container .is-active {
    opacity: 1;
  }
  .bbottom {
    padding: 30px 0px;
    width: 100%;
  }
}
</style>
