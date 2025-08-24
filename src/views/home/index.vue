<template>
  <div class="home">
    <div class="banner">
      <img style="width: 100%" :src="require('@/assets/images/bg.png')" alt />
      <canvas id="cas" style="position: absolute; width: 100%; height: 100%"></canvas>
      <!-- <canvas
        id="cas2"
        style="position: absolute; width: 100%; height: 100%"
      ></canvas>-->
      <div class="bannercont">
        <p class="bannercont_tit">Web三维地图客户端程序开发平台</p>
        <a href="/XLGlobeBase/" style="margin: 50px 0px; display: block; position: relative; width: fit-content;">
          <img :src="require('@/assets/images/home/jichukuangjia.png')" style="display: block;" />
          <span style="
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            color: #fff;
            font-size: 22px;
            font-weight: bold;
            letter-spacing: 6px;
            white-space: nowrap;
            pointer-events: none;
            text-shadow: 0 2px 8px #7ecbfa, 0 0 2px #fff;
          ">
            三维基础平台
          </span>
        </a>
      </div>
    </div>
    <div class="info">
      <div class="module">
        <div class="modulela">
          <div class="btit">
            <div class="module_tit">
              <h2>XLGlobe三维开发平台</h2>
            </div>
            <div class="module_cen">基于webGL的零客户端插件三维客户端开发平台，可快速构建跨浏览器、交互式的适应丰富应用场景的三维开放平台。</div>
          </div>
          <div class="bcen">
            <div class="functional">
              <li>
                <div class="content">
                  <div class="b_icon b_icon_1">
                    <!-- <img src="@/assets/images/Group1.png" class="icon" /> -->
                    <div class="b_icon-box inner-1-box"></div>
                    <div class="b_icon-box inner-2-box"></div>
                    <div class="b_icon-box inner-3-box"></div>
                    <div class="b_icon-box inner-4-box"></div>
                  </div>
                  <div class="functionaltitle">快速性构建</div>
                </div>
              </li>
              <li>
                <div class="content">
                  <div class="b_icon b_icon_2">
                    <!-- <img src="@/assets/images/Group2.png" class="icon" /> -->
                    <div class="b_icon-box inner-1-box"></div>
                    <!-- <div class="b_icon-box inner-2-box"></div>
                    <div class="b_icon-box inner-3-box"></div>-->
                  </div>
                  <div class="functionaltitle">跨平台展示</div>
                </div>
              </li>
              <li>
                <div class="content">
                  <div class="b_icon b_icon_3">
                    <!-- <img src="@/assets/images/Ipsum tristique.png" class="icon" /> -->
                    <div class="b_icon-box inner-1-box"></div>
                    <div class="b_icon-box inner-2-box"></div>
                    <div class="b_icon-box inner-3-box"></div>
                    <div class="b_icon-box inner-4-box"></div>
                  </div>
                  <div class="functionaltitle">多行业应用</div>
                </div>
              </li>
            </div>
          </div>
        </div>
      </div>
      <div class="module">
        <div class="module_desc">
          <div class="descont">
            <el-row :gutter="0" style="width: 1200px">
              <el-col :span="6">
                <div class="bt-contentpur is-active" @click="changecontpur(1)">
                  <div class="module_tit">
                    <svg
                      t="1608273434609"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="1574"
                      width="48"
                      height="48"
                    >
                      <path
                        d="M418.496 645.344L259.04 554.592a32 32 0 0 0-31.68 55.616l159.456 90.752a32 32 0 0 0 31.68-55.616z"
                        p-id="1575"
                        fill="#bfbfbf"
                      />
                      <path
                        d="M790.208 379.808a32 32 0 0 0-31.616-55.648L508.8 466.336 259.04 324.192a32 32 0 0 0-31.68 55.616l253.344 144.16V832a32 32 0 1 0 64 0V522.688c0-0.992-0.48-1.856-0.576-2.848l246.08-140.032z"
                        p-id="1576"
                        fill="#bfbfbf"
                      />
                      <path
                        d="M880.288 232.48L560.192 45.12a95.648 95.648 0 0 0-96.64 0L143.68 232.48A96.64 96.64 0 0 0 96 315.904v397.664c0 34.784 18.624 66.88 48.736 84l320 181.92a95.52 95.52 0 0 0 94.496 0l320-181.92a96.576 96.576 0 0 0 48.768-84V315.904a96.64 96.64 0 0 0-47.712-83.424zM864 713.568c0 11.584-6.208 22.304-16.256 28l-320 181.92a31.776 31.776 0 0 1-31.488 0l-320-181.92a32.192 32.192 0 0 1-16.256-28V315.904c0-11.456 6.048-22.048 15.904-27.808l319.872-187.36a31.84 31.84 0 0 1 32.192 0l320.128 187.392c9.856 5.728 15.904 16.32 15.904 27.776v397.664z"
                        p-id="1577"
                        fill="#bfbfbf"
                      />
                      <path
                        d="M778.656 453.952L629.312 542.08c-20.608 12.16-37.344 38.944-37.344 59.808v176.416c0 20.864 16.704 27.904 37.344 15.744l149.344-88.128C799.264 693.76 816 666.976 816 646.112V469.696c0-20.864-16.704-27.904-37.344-15.744z"
                        p-id="1578"
                        fill="#bfbfbf"
                      />
                    </svg>
                  </div>
                  <div class="module_cen">
                    <span>功能完善</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="bt-contentpur" @click="changecontpur(2)">
                  <div class="module_tit">
                    <svg
                      t="1608273648625"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="8733"
                      width="48"
                      height="48"
                    >
                      <path
                        d="M867.617973 724.031015V299.953881L509.440013 87.864115 151.262054 299.953881v424.077134L509.440013 936.115661l358.17796-212.084646z m59.683527-482.997784c12.257216 7.265242 19.896216 20.730771 19.896215 35.332934v471.252566c0 14.520244-7.639 27.985773-19.896215 35.327815l-397.965271 235.585323A39.536432 39.536432 0 0 1 509.440013 1024a39.536432 39.536432 0 0 1-19.896215-5.468131L91.578527 782.951666c-12.257216-7.347161-19.896216-20.812691-19.896215-35.332935V276.366165c0-14.602163 7.639-28.067693 19.896215-35.327814L489.543798 5.447907a39.055155 39.055155 0 0 1 39.792431 0l397.965271 235.580204zM336.062364 365.591937l173.403249 102.655461 173.32133-102.655461c19.01558-11.34074 43.366172-4.654056 54.348515 14.934961 11.059142 19.501978 4.536296 44.472087-14.561204 55.730908l-173.32133 102.655461v205.310922c0 22.517642-17.827746 40.795946-39.787311 40.795946-22.046604 0-39.792431-18.278304-39.792431-40.795946v-205.310922l-173.398129-102.655461c-19.0207-11.263941-25.548666-36.22893-14.561204-55.730908 10.982342-19.507098 35.327815-26.111863 54.348515-14.934961z"
                        fill="#bfbfbf"
                        p-id="8734"
                      />
                    </svg>
                  </div>
                  <div class="module_cen">
                    <span>集成丰富</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="bt-contentpur" @click="changecontpur(3)">
                  <div class="module_tit">
                    <svg
                      t="1608274103697"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="20246"
                      width="48"
                      height="48"
                      data-spm-anchor-id="a313x.7781069.0.i4"
                    >
                      <path
                        d="M256 170.666667a85.333333 85.333333 0 1 1-85.333333 85.333333 85.333333 85.333333 0 0 1 85.333333-85.333333m0-42.666667a128 128 0 1 0 128 128 128 128 0 0 0-128-128zM768 170.666667a85.333333 85.333333 0 1 1-85.333333 85.333333 85.333333 85.333333 0 0 1 85.333333-85.333333m0-42.666667a128 128 0 1 0 128 128 128 128 0 0 0-128-128zM256 682.666667a85.333333 85.333333 0 1 1-85.333333 85.333333 85.333333 85.333333 0 0 1 85.333333-85.333333m0-42.666667a128 128 0 1 0 128 128 128 128 0 0 0-128-128zM768 682.666667a85.333333 85.333333 0 1 1-85.333333 85.333333 85.333333 85.333333 0 0 1 85.333333-85.333333m0-42.666667a128 128 0 1 0 128 128 128 128 0 0 0-128-128z"
                        p-id="20247"
                        fill="#bfbfbf"
                      />
                      <path
                        d="M512 362.666667a231.68 231.68 0 0 1-164.693333-70.613334l30.72-29.44a185.173333 185.173333 0 0 0 267.946666 0l30.72 29.44A231.68 231.68 0 0 1 512 362.666667zM645.973333 761.386667a185.173333 185.173333 0 0 0-267.946666 0l-30.72-29.44a227.413333 227.413333 0 0 1 329.386666 0zM731.946667 676.693333a227.413333 227.413333 0 0 1 0-329.386666l29.44 30.72a185.173333 185.173333 0 0 0 0 267.946666zM292.053333 676.693333l-29.44-30.72a185.173333 185.173333 0 0 0 0-267.946666l29.44-30.72a227.413333 227.413333 0 0 1 0 329.386666z"
                        p-id="20248"
                        fill="#bfbfbf"
                      />
                    </svg>
                  </div>
                  <div class="module_cen">
                    <span>简单易学</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="bt-contentpur" @click="changecontpur(4)">
                  <div class="module_tit">
                    <svg
                      t="1608274239214"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="20893"
                      width="48"
                      height="48"
                    >
                      <path
                        d="M226.220218 352.842473c-11.906327-91.042909 7.847564-156.020364 54.150982-184.608582 47.699782-29.3888 117.424873-14.214982 194.681018 42.793891C548.528873 264.685382 623.131927 349.090909 682.9056 449.442909l10.398255 18.013091c56.003491 96.991418 93.556364 197.241018 104.457309 283.331491 11.915636 91.0336-7.838255 156.020364-54.141673 184.599273-47.699782 29.3888-117.424873 14.214982-193.880436-41.397528-73.467345-53.6576-148.061091-138.072436-207.853382-238.415127l-10.398255-18.0224C274.683345 539.173236 237.130473 438.923636 226.220218 352.842473zM645.678545 477.184c-55.323927-89.860655-119.789382-165.739055-185.120581-213.280582-59.727127-43.817891-110.834036-57.800145-143.117964-39.172654-30.235927 19.195345-42.3936 69.715782-33.224145 139.245381 10.873018 75.496727 44.1344 165.915927 94.6176 253.34691l9.039127 15.6672c55.323927 89.851345 119.798691 165.729745 185.120582 213.271272 59.727127 43.817891 110.843345 57.800145 143.117963 39.163346 30.235927-19.195345 42.3936-69.706473 33.233455-139.236073-10.128291-74.202764-43.380364-164.603345-94.6176-253.346909l-9.048437-15.657891z"
                        fill="#bfbfbf"
                        p-id="20894"
                      />
                      <path
                        d="M528.002327 751.010909h-20.796509c-116.801164-1.601164-227.197673-23.998836-310.402327-60.797673-86.397673-38.4-134.404655-91.201164-132.803491-147.195345 1.601164-54.402327 47.997673-104.001164 132.803491-139.198836 80.002327-33.596509 185.604655-51.2 297.602327-51.2h20.796509c116.801164 1.601164 227.197673 23.998836 310.402328 60.797672 87.998836 38.4 135.996509 91.201164 134.404654 147.195346-1.601164 54.402327-47.997673 104.001164-132.803491 139.198836-80.002327 33.596509-185.604655 51.2-299.203491 51.2zM491.706182 398.717673c-102.474473 0-197.399273 16.402618-266.714764 44.730182-64.791273 26.838109-102.465164 62.622255-103.973236 98.39709 0 37.2736 37.673891 74.5472 105.481309 104.364219 73.839709 32.795927 171.780655 50.688 277.261964 53.676218h18.078254c100.9664 0 195.8912-16.402618 266.714764-44.730182 64.791273-26.838109 102.465164-62.622255 103.973236-98.397091 0-37.2736-37.673891-74.5472-105.481309-104.364218-73.839709-32.795927-171.780655-50.688-277.261964-53.676218H491.706182zM616.448 168.317673c0 52.801164 43.203491 94.403491 94.403491 94.403491 52.801164 0 94.403491-43.203491 94.403491-94.403491 0-52.801164-43.203491-94.403491-94.403491-94.403491-52.810473 0-94.403491 41.602327-94.403491 94.403491"
                        fill="#bfbfbf"
                        p-id="20895"
                      />
                      <path
                        d="M741.906618 302.713018c1.424291 18.180655 0.856436 38.623418-2.131782 61.272437-10.873018 75.496727-44.1344 165.915927-94.6176 253.346909l-9.039127 15.6672c-55.323927 89.851345-119.798691 165.729745-185.120582 213.271272-59.727127 43.817891-110.843345 57.800145-143.117963 39.163346-30.235927-19.195345-42.3936-69.706473-33.233455-139.236073 10.128291-74.202764 43.380364-164.603345 94.6176-253.346909l9.048436-15.657891c55.323927-89.860655 119.789382-165.739055 185.120582-213.280582a362.952145 362.952145 0 0 1 32.535273-21.429527l-26.363345-45.6704c-6.823564 4.421818-13.702982 9.094982-20.666182 14.2336C475.471127 264.685382 400.868073 349.090909 341.0944 449.442909l-10.398255 18.013091c-56.003491 96.991418-93.556364 197.241018-104.457309 283.331491-11.915636 91.0336 7.838255 156.020364 54.141673 184.599273 47.699782 29.3888 117.424873 14.214982 193.880436-41.397528 73.467345-53.6576 148.061091-138.072436 207.853382-238.415127l10.398255-18.0224c56.804073-98.378473 94.356945-198.628073 105.2672-284.709236 3.118545-23.849891 3.928436-45.7728 2.783418-65.852509l-58.656582 15.723054z"
                        fill="#bfbfbf"
                        p-id="20896"
                      />
                    </svg>
                  </div>
                  <div class="module_cen">
                    <span>轻量灵活</span>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="descon_cen">
            <div class="descon_cen_box descon_cen_box1 is-active">
              <div class="descon_cen_left">
                <div class="mbox_dtit">功能完善</div>
                <div class="mbox-line"></div>
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
                  <div class="mbox_cenpage inner-4-box"></div>-->
                </div>
              </div>
            </div>
            <div class="descon_cen_box descon_cen_box2">
              <div class="descon_cen_left">
                <div class="mbox_dtit">集成丰富</div>
                <div class="mbox-line"></div>
                <div class="desc">
                  平台基于开源项目Cesium进行的二次开发，对Cesium使用进行的改造优化，
                  根据一般项目使用情况，集成了Echarts、Mapv、Heatmap、Turf等一些第三方常用的地图库或开源库。
                </div>
              </div>
              <div class="descon_cen_right">
                <div class="box box2">
                  <div class="mbox_cenpage inner-1-box"></div>
                </div>
              </div>
            </div>
            <div class="descon_cen_box descon_cen_box3">
              <div class="descon_cen_left">
                <div class="mbox_dtit">简单易学</div>
                <div class="mbox-line"></div>
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
            <div class="descon_cen_box descon_cen_box4">
              <div class="descon_cen_left">
                <div class="mbox_dtit">轻量灵活</div>
                <div class="mbox-line"></div>
                <div class="desc">
                  轻量级的Web端3D
                  GIS展示，无需安装插件、支持通用浏览器展示、无其它特殊依赖。
                  支持大量类型底图的加载，包括天地图、高德、百度、谷歌等在线地图，支持arcgis等各类OGC服务。
                </div>
              </div>
              <div class="descon_cen_right">
                <div class="box box4">
                  <div class="mbox_cenpage inner-1-box"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="module modulelb">
        <div class="btit">
          <div class="module_tit">
            <h3>功能示例</h3>
          </div>
        </div>
        <div class="bcen">
          <el-carousel :interval="4000" type="card" height="500px">
            <el-carousel-item v-for="item in items" :key="item">
              <el-image :src="item"></el-image>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="bbottom"></div>
      </div>-->
      <!-- <div class="module modulelb">
        <div class="btit">
          <div class="module_tit">
            <h3>行业解决方案</h3>
          </div>
        </div>
        <div class="bcen">
          <el-carousel :interval="4000" type="card">
            <el-carousel-item
              v-for="(item, index) in items"
              :key="index"
              @click.native="toItem(item)"
            >
              <el-image :src="item.url" style="height: 100%"></el-image>
              <div class="card_label">
                <div class="card_label-tit">{{ item.name }}</div>
                <div class="card_label-cen">{{ item.label }}</div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="bbottom"></div>
      </div>-->
    </div>
    <ly-foot></ly-foot>
  </div>
</template>
<script>
import LyFoot from '@/layout/LyFoot'
export default {
  name: 'HomeIndex',
  components: {
    LyFoot
  },
  data() {
    return {
      items: [
        {
          url: require('@/assets/images/item/智慧园区.png'),
          name: '智慧园区',
          label:
            '通过GIS促使园区信息化统一管理，利用2、3D可视化技术的便捷性和空间展示、分析的优势，助力园区管理运控。'
        },
        {
          url: require('@/assets/images/item/智慧城管.png'),
          name: '智慧城管',
          label:
            '以新一代信息技术为支撑、辅助信息化城市建设和可持续创新，对城市进行科学化、精细化、智能化管理。'
        },
        {
          url: require('@/assets/images/item/智慧交通.png'),
          name: '智慧交通',
          label:
            '“智慧+交通”智慧赋能交通，促进交通体系高效运行；使交通具备互联、感知、分析、控制、预测能力。'
        }
        // require('@/assets/images/pt4.gif'),
        // require('@/assets/images/pt5.gif'),
        // require('@/assets/images/pt6.gif'),
      ],
      animateCSS: (element, animation, prefix = 'animate__') =>
        // We create a Promise and return it
        new Promise((resolve, reject) => {
          const animationName = `${prefix}${animation}`
          const node = document.querySelector(element)

          node.classList.add(`${prefix}animated`, animationName)

          // When the animation ends, we clean the classes and resolve the Promise
          function handleAnimationEnd() {
            node.classList.remove(`${prefix}animated`, animationName)
            resolve('Animation ended')
          }

          node.addEventListener('animationend', handleAnimationEnd, {
            once: true
          })
        })
    }
  },
  mounted() {
    document
      .getElementsByClassName('home')[0]
      .addEventListener('scroll', function() {
        var scrollTop = this.pageYOffset || this.scrollTop
        if (scrollTop >= 50) {
          document.getElementsByClassName('ly-head')[0].className =
            'ly-head bg-head-show'
        } else {
          document.getElementsByClassName('ly-head')[0].className =
            'ly-head bg-head-hide'
        }
      })
    // this.canvasfun()
    this.initCanvas()
    this.render()
    window.onresize = function() {
      this.initCanvas()
      this.render()
      // this.canvasfun()
    }
  },
  methods: {
    toItem(item) {
      this.$router.push('/application?item=' + item.name)
    },
    initCanvas() {
      // this.canvas = document.body.querySelector('canvas')
      this.canvas = document.getElementById('cas')
      this.ctx = this.canvas.getContext('2d')
      this.W = this.canvas.width = window.innerWidth
      this.H = this.canvas.height = (window.innerWidth / 1920) * 700
      this.pixels = []

      for (var x = -400; x < 400; x += 10) {
        //x轴距离
        for (var z = -250; z < 250; z += 10) {
          //Y轴距离
          this.pixels.push({ x: x, y: 100, z: z })
        }
      }

      // var into = document.createElement('canvas')
      // var ctx2 = into.getContext('2d')
      // into.width = this.W
      // into.height = this.H
      // var img = new Image()
      // img.src = require('@/assets/images/bg.png')
      // var this_ = this
      // img.onload = function () {
      //   ctx2.drawImage(img, 0, 0, this_.W, this_.H)
      //   this_.pattern = this_.ctx.createPattern(into, 'repeat')
      //   // this_.pattern = this_.ctx.createPattern(img, 'no-repeat')
      //   this_.drawFrame()
      // }
      this.drawFrame()
    },
    drawFrame(ts) {
      // (function drawFrame(ts) {
      requestAnimationFrame(this.drawFrame, this.canvas)
      this.ctx.fillStyle = '#f0f0f000' // '#030512'
      // this.ctx.fillStyle = this.pattern
      this.ctx.fillRect(0, 0, this.W, this.H)
      this.render(ts)
      // })();
    },
    render(ts) {
      // let W = this.W,H = this.H,pixel = this.pixel;
      this.ctx.clearRect(0, 0, this.W, this.H)
      if (window.aa == 1) {
        return
      }
      let imageData = this.ctx.getImageData(0, 0, this.W, this.H)
      let len = this.pixels.length
      let fov = 250 //视觉距离
      let pixel, scale, x2d, y2d, c

      for (var i = 0; i < len; i++) {
        pixel = this.pixels[i]
        scale = fov / (fov + pixel.z)
        x2d = pixel.x * scale + this.W / 2
        y2d = pixel.y * scale + this.H / 1.5
        if (x2d >= 0 && x2d <= this.W && y2d >= 0 && y2d <= this.H) {
          c = (Math.round(y2d) * imageData.width + Math.round(x2d)) * 4
          imageData.data[c] = 17
          imageData.data[c + 1] = 122 //rgb颜色
          imageData.data[c + 2] = 181
          imageData.data[c + 3] = 255
        }
        pixel.z -= 0.4
        pixel.y = this.H / 14 + Math.sin((i / len) * 15 + ts / 450) * 10 //幅度
        if (pixel.z < -fov) pixel.z += 2 * fov
      }
      this.ctx.putImageData(imageData, 0, 0)
    },
    canvasfun() {
      var canvas = document.getElementById('cas')
      var ctx = canvas.getContext('2d')
      var rgb = '150' // 线条颜色值
      var extendDis = 5 // 可超出的画布边界
      var lineDis = 100 // 连线距离

      lineDis *= lineDis
      canvas.width = window.innerWidth
      canvas.height = (window.innerWidth / 1920) * 700

      var RAF = (function() {
        return (
          window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function(callback) {
            window.setTimeout(callback, 1000 / 60)
          }
        )
      })()

      // 鼠标活动时，获取鼠标坐标
      var warea = { x: null, y: null }

      window.onmousemove = function(e) {
        e = e || window.event

        warea.x = e.clientX - canvas.offsetLeft
        warea.y = e.clientY - canvas.offsetTop
      }

      window.onmouseout = function(e) {
        warea.x = null
        warea.y = null
      }

      // 添加粒子
      // x，y为粒子坐标，xa, ya为粒子xy轴加速度，max为连线的最大距离
      var dots = []
      for (var i = 0; i < 150; i++) {
        var x = Math.random() * (canvas.width + 2 * extendDis) - extendDis
        var y = Math.random() * (canvas.height + 2 * extendDis) - extendDis
        var xa = (Math.random() * 2 - 1) / 1.5
        var ya = (Math.random() * 2 - 1) / 1.5

        dots.push({
          x: x,
          y: y,
          xa: xa,
          ya: ya
        })
      }

      // 延迟100秒开始执行动画，如果立即执行有时位置计算会出错
      setTimeout(function() {
        animate()
      }, 100)

      // 每一帧循环的逻辑
      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        bubDrawLine([warea].concat(dots))

        RAF(animate)
      }

      /**
       * 逐个对比连线
       * @param ndots
       */
      function bubDrawLine(ndots) {
        var ndot

        dots.forEach(function(dot) {
          move(dot)

          // 循环比对粒子间的距离
          for (var i = 0; i < ndots.length; i++) {
            ndot = ndots[i]

            if (dot === ndot || ndot.x === null || ndot.y === null) continue

            var xc = dot.x - ndot.x
            var yc = dot.y - ndot.y

            // 如果x轴距离或y轴距离大于max,则不计算粒子距离
            if (xc > ndot.max || yc > lineDis) continue

            // 两个粒子之间的距离
            var dis = xc * xc + yc * yc

            // 如果粒子距离超过max,则不做处理
            if (dis > lineDis) continue

            // 距离比
            var ratio

            // 如果是鼠标，则让粒子向鼠标的位置移动
            if (ndot === warea && dis < 20000) {
              dot.x -= xc * 0.01
              dot.y -= yc * 0.01
            }

            // 计算距离比
            ratio = (lineDis - dis) / lineDis

            // 粒子间连线
            ctx.beginPath()
            ctx.lineWidth = ratio / 2
            ctx.strokeStyle = 'rgba(' + rgb + ', ' + rgb + ', ' + rgb + ', 1'
            ctx.moveTo(dot.x, dot.y)
            ctx.lineTo(ndot.x, ndot.y)
            ctx.stroke()
          }

          // 将已经计算过的粒子从数组中删除
          ndots.splice(ndots.indexOf(dot), 1)
        })
      }

      /**
       * 粒子移动
       * @param dot
       */
      function move(dot) {
        dot.x += dot.xa
        dot.y += dot.ya

        // 遇到边界将加速度反向
        dot.xa *=
          dot.x > canvas.width + extendDis || dot.x < -extendDis ? -1 : 1
        dot.ya *=
          dot.y > canvas.height + extendDis || dot.y < -extendDis ? -1 : 1

        // 绘制点
        ctx.fillStyle = 'rgba(' + rgb + ', ' + rgb + ', ' + rgb + ', 1'
        ctx.fillRect(dot.x - 0.5, dot.y - 0.5, 1, 1)
      }
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
    }
  }
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
    background: url('~@/assets/images/bg.png');
    background-size: 100% 100%;
    overflow: hidden;
    display: flex;
    .bannercont {
      position: absolute;
      top: 36%;
      right: 32%;
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
        text-align: center;
        .b_icon {
          width: 400px;
          height: 250px;
          position: relative;
          .b_icon-box {
            position: absolute;
            bottom: 0%;
            left: 0%;
            width: 100%;
            height: 100%;
            z-index: 7;
            background-size: 100% 100%;
            background-repeat: no-repeat;
            background-position: center;
          }
          // svg,
          // img {
          //   width: 100%;
          // }
        }
        .b_icon_1 {
          .inner-1-box {
            background-image: url('~@/assets/images/home/快速性构建/底座.png');
          }
          .inner-2-box {
            background-image: url('~@/assets/images/home/快速性构建/电脑1.png');
          }
          .inner-3-box {
            background-image: url('~@/assets/images/home/快速性构建/电脑2.png');
            animation: boxana2 5s linear infinite;
            -webkit-animation: boxana2 5s linear infinite; /* Safari and Chrome */
          }
          .inner-4-box {
            width: 19px;
            height: 46px;
            left: 25%;
            top: 54%;
            background-image: url('~@/assets/images/home/快速性构建/机器人.png');
            animation: boxana1 5s linear infinite;
            -webkit-animation: boxana1 5s linear infinite; /* Safari and Chrome */
          }
        }
        .b_icon_2 {
          .inner-1-box {
            // background-image: url('../../assets/images/home/跨平台展示/底座1.png');
            background-image: url('~@/assets/images/home/跨平台展示/跨平台展示.gif');
          }
          .inner-2-box {
            background-image: url('~@/assets/images/home/跨平台展示/光柱.png');
            width: 86px;
            height: 105px;
            left: 39.5%;
            top: 9.8%;
          }
          .inner-3-box {
            background-image: url('~@/assets/images/home/跨平台展示/雪花.png');
            width: 87px;
            height: 107px;
            left: 39%;
            top: 9%;
            animation: boxana6 5s linear infinite;
            -webkit-animation: boxana6 5s linear infinite; /* Safari and Chrome */
          }
        }
        .b_icon_3 {
          .inner-1-box {
            background-image: url('~@/assets/images/home/多行业应用/底座2.png');
          }
          .inner-2-box {
            background-image: url('~@/assets/images/home/多行业应用/定位.png');
            width: 19px;
            height: 27px;
            left: 58%;
            top: 19%;
            animation: boxana4 3s linear infinite;
            -webkit-animation: boxana4 3s linear infinite; /* Safari and Chrome */
          }
          .inner-3-box {
            background-image: url('~@/assets/images/home/多行业应用/设置.png');
            width: 25px;
            height: 30px;
            left: 43%;
            top: 19%;
            animation: boxana5 3s linear infinite;
            -webkit-animation: boxana5 3s linear infinite; /* Safari and Chrome */
          }
          .inner-4-box {
            background-image: url('~@/assets/images/home/多行业应用/小车.png');
            width: 21px;
            height: 16px;
            left: 24%;
            top: 56%;
            animation: boxana3 5s linear infinite;
            -webkit-animation: boxana3 5s linear infinite; /* Safari and Chrome */
          }
        }
        @keyframes boxana1 {
          0% {
            left: 25%;
            top: 54%;
          }
          66% {
            left: 38%;
            top: 39%;
          }
          100% {
            left: 45%;
            top: 50%;
          }
        }
        @keyframes boxana2 {
          0% {
            opacity: 0;
          }
          40% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
        @keyframes boxana3 {
          0% {
            left: 24%;
            top: 56%;
          }
          100% {
            left: 49%;
            top: 78%;
          }
        }
        @keyframes boxana4 {
          0% {
            left: 58%;
            top: 10%;
          }
          40% {
            left: 58%;
            top: 19%;
            transform: rotateZ(30deg);
          }

          60% {
            left: 58%;
            top: 19%;
            transform: rotateZ(-30deg);
          }

          70% {
            left: 58%;
            top: 19%;
            transform: rotateZ(15deg);
          }
          80% {
            left: 58%;
            top: 19%;
            transform: rotateZ(0deg);
          }
          100% {
          }
        }
        @keyframes boxana5 {
          0% {
            left: 43%;
            top: 9%;
          }
          40% {
            left: 43%;
            top: 19%;
          }

          50% {
            left: 43%;
            top: 15%;
          }

          60% {
            left: 43%;
            top: 19%;
          }
          70% {
            left: 43%;
            top: 17%;
          }
          80% {
            left: 43%;
            top: 19%;
          }
          100% {
          }
        }
        @keyframes boxana6 {
          0% {
            top: 6%;
          }
          100% {
            top: 10%;
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
  padding: 20px 0 0;
  min-width: 500px;
  // background-color: #f0f1f6;
  background-color: #ffffff;
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
      display: flex;
      justify-content: center;
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
      height: 600px;
      position: relative;
      background: linear-gradient(0deg, #0f2651 0%, #030c1d 100%);
      .descon_cen_box {
        width: 1200px;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        display: none;
        &.is-active {
          display: block;
        }
        .descon_cen_left {
          width: 50%;
          float: left;
          color: #fff;
          .mbox_dtit {
            width: 80%;
            float: left;
            margin: 35% 0 0 0;
            font-size: 24px;
            // font-family: 黑体;
            font-weight: bold;
            line-height: 48px;
          }
          .mbox-line {
            float: left;
            margin: 15px 100px 15px 0;
            width: 57px;
            height: 3px;
            background-color: #fff;
          }
          .desc {
            width: 80%;
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
            width: 100%;
            height: 100%;
            // margin: 0px 0 0 20px;
            position: relative;
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
              background-image: url('~@/assets/images/home/功能完善.gif');
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
              background-image: url('~@/assets/images/home/集成丰富.gif');
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
              background-image: url('~@/assets/images/home/简单易学.gif');
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
              background-image: url('~@/assets/images/home/轻量灵活.gif');
            }
          }
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
  background-color: #1c1f24;
  margin: 0;
  .btit {
    padding: 60px 0;
    text-align: center;
    width: 100%;
    font-size: 32px;
    font-weight: bold;
    color: #fff;
  }
  .bcen {
    width: 100%;
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
