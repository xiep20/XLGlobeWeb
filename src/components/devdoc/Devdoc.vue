<template>
  <div class="devdocpage" ref="devdocpage" :loading="loading">
    <markdown-it-vue
      class="md-body"
      :content="content"
      :options="options"
      v-show="ismarkdown"
    />
    <iframe
      :src="url"
      frameborder="0"
      class="rightiframe"
      :style="{ height: iframeH + 'px' }"
      ref="dociframe"
      v-show="url != ''"
    ></iframe>
  </div>
</template>
<script>
import MarkdownItVue from 'markdown-it-vue'
import 'markdown-it-vue/dist/markdown-it-vue.css'

export default {
  name: 'DevdocIndex',
  components: {
    MarkdownItVue,
  },
  data() {
    return {
      loading: false,
      url: '',
      content: '',
      ismarkdown: false,
      iframeH: '300',
      options: {
        markdownIt: {
          html: true,
          linkify: true,
        },
        linkAttributes: {
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        },
        katex: {
          throwOnError: false,
          errorColor: '#cc0000',
        },
        icons: 'font-awesome',
        githubToc: {
          tocFirstLevel: 2,
          tocLastLevel: 3,
          tocClassName: 'toc',
          anchorLinkSymbol: '',
          anchorLinkSpace: false,
          anchorClassName: 'anchor',
          anchorLinkSymbolClassName: 'octicon octicon-link',
        },
      },
    }
  },
  props: {
    noselitem: {
      type: String,
      default: '1',
    },
  },
  mounted() {
    this.iframeH = this.$refs.devdocpage.clientHeight
  },

  watch: {
    noselitem: {
      handler(newval, oldval) {
        let _this = this
        this.loading = true
        if (newval.length !== 0) {
          var ist = false,
            isc = false
          switch (newval) {
            case '1':
            case '1-1':
            case '1-1-1':
              this.url = 'doc/devguide/start.md'
              break
            case '1-1-2':
              this.url = 'doc/devguide/helloworld.md'
              break
            case '1-2':
            case '1-2-1':
              this.url = 'doc/createMap/control.md'
              break
            case '1-2-2':
              this.url = 'doc/createMap/map.md'
              break
            case '1-2-3':
              this.url = 'doc/createMap/3dtiles.md'
              break
            case '1-3':
            case '1-3-1':
              this.url = 'doc/sceneSetting/setcolor.md'
              break
            case '1-3-2':
              this.url = 'doc/sceneSetting/cameraAngle.md'
              break
            case '1-3-3':
              this.url = 'doc/sceneSetting/sceneEffects.md'
              break
            case '1-4':
            case '1-4-1':
              this.url = 'doc/mapDraw/draw.md'
              break
            case '1-4-2':
              this.url = 'doc/mapDraw/tooltip.md'
              break
            case '1-5-1':
              this.url = 'doc/measure/measure.md'
              break
            case '2-1':
              this.url = 'doc/api/Map.html'
              isc = true
              break
            case '2-1-2':
              this.url = 'doc/api/Map.html?#pparameters'
              isc = true
              break
            case '2-2':
              this.url = 'doc/api/Contro.html?#NavigationControl'
              isc = true
              break
            case '2-2-2':
              this.url = 'doc/api/Contro.html?#GeolocateControl'
              isc = true
              break
            case '2-3-1':
              this.url = 'doc/api/Overlay.html?#Marker'
              isc = true
              break
            case '2-3-2':
              this.url = 'doc/api/Overlay.html?#MapvLayer'
              isc = true
              break
            case '2-3-3':
              this.url = 'doc/api/Overlay.html?#DynamicI'
              isc = true
              break
            case '2-3-4':
              this.url = 'doc/api/Overlay.html?#AGSImagery'
              isc = true
              break
            case '2-3-5':
              this.url = 'doc/api/Overlay.html?#AGSTileImagery'
              isc = true
              break
            case '2-3-6':
              this.url = 'doc/api/Overlay.html?#BingMapsImagery'
              isc = true
              break
            case '2-3-7':
              this.url = 'doc/api/Overlay.html?#BaiduImagery'
              isc = true
              break
            case '2-3-8':
              this.url = 'doc/api/Overlay.html?#ETP'
              isc = true
              break
            case '2-3-9':
              this.url = 'doc/api/Overlay.html?#GaodeImagery'
              isc = true
              break
            case '2-3-10':
              this.url = 'doc/api/Overlay.html?#GoogleETP'
              isc = true
              break
            case '2-3-11':
              this.url = 'doc/api/Overlay.html?#GoogleImagery'
              isc = true
              break
            case '2-3-12':
              this.url = 'doc/api/Overlay.html?#GridImagery'
              isc = true
              break
            case '2-3-13':
              this.url = 'doc/api/Overlay.html?#imageImagery'
              isc = true
              break
            case '2-3-14':
              this.url = 'doc/api/Overlay.html?#MapboxImagery'
              isc = true
              break
            case '2-3-15':
              this.url = 'doc/api/Overlay.html?#MapboxStyleImagery'
              isc = true
              break
            case '2-3-16':
              this.url = 'doc/api/Overlay.html?#OSMImagery'
              isc = true
              break
            case '2-3-17':
              this.url = 'doc/api/Overlay.html?#SingleImagery'
              isc = true
              break
            case '2-3-18':
              this.url = 'doc/api/Overlay.html?#TMSImagery'
              isc = true
              break
            case '2-3-19':
              this.url = 'doc/api/Overlay.html?#TiandituImagery'
              isc = true
              break
            case '2-3-20':
              this.url = 'doc/api/Overlay.html?#TiandituTerrain'
              isc = true
              break
            case '2-3-21':
              this.url = 'doc/api/Overlay.html?#TileCoordinatesImagery'
              isc = true
              break
            case '2-3-22':
              this.url = 'doc/api/Overlay.html?#TileImagery'
              isc = true
              break
            case '2-3-23':
              this.url = 'doc/api/Overlay.html?#VRTheWorldTerrain'
              isc = true
              break
            case '2-3-24':
              this.url = 'doc/api/Overlay.html?#WMSImagery'
              isc = true
              break
            case '2-3-25':
              this.url = 'doc/api/Overlay.html?#WMTSImagery'
              isc = true
              break
            case '2-3-26':
              this.url = 'doc/api/Overlay.html?#XYZImagery'
              isc = true
              break
            case '2-3-27':
              this.url = 'doc/api/Overlay.html?#createImagery'
              isc = true
              break
            case '2-3-28':
              this.url = 'doc/api/Overlay.html?#createLayer'
              isc = true
              break
            case '2-3-29':
              this.url = 'doc/api/Overlay.html?#createTerrain'
              isc = true
              break
            case '2-3-30':
              this.url = 'doc/api/Overlay.html?#layerTerrain'
              isc = true
              break
            case '2-3-31':
              this.url = 'doc/api/Overlay.html?#_FeatureGridImagery'
              isc = true
              break
            case '2-4':
              this.url = 'doc/api/Analysis.html#measureVolume'
              isc = true
              break
            case '2-4-1':
              this.url = 'doc/api/Analysis.html#measureVolume'
              isc = true
              break
            case '2-4-2':
              this.url = 'doc/api/Analysis.html#Profile'
              isc = true
              break
            case '2-4-3':
              this.url = 'doc/api/Analysis.html#SubmergenceAnalysis'
              isc = true
              break
            case '2-4-4':
              this.url = 'doc/api/Analysis.html#analysisBuffer'
              isc = true
              break
            case '2-4-5':
              this.url = 'doc/api/Analysis.html#bufferAnalysis'
              isc = true
              break
            case '2-4-6':
              this.url = 'doc/api/Analysis.html#contour'
              isc = true
              break
            case '2-4-7':
              this.url = 'doc/api/Analysis.html#excavateTerrain'
              isc = true
              break
            case '2-4-8':
              this.url = 'doc/api/Analysis.html#falling'
              isc = true
              break
            case '2-4-9':
              this.url = 'doc/api/Analysis.html#lookAround'
              isc = true
              break
            case '2-4-10':
              this.url = 'doc/api/Analysis.html#skyline'
              isc = true
              break
            case '2-4-11':
              this.url = 'doc/api/Analysis.html#sunlight'
              isc = true
              break
            case '2-4-12':
              this.url = 'doc/api/Analysis.html#tilesClip'
              isc = true
              break
            case '2-4-13':
              this.url = 'doc/api/Analysis.html#undergroundmode'
              isc = true
              break
            case '2-4-14':
              this.url = 'doc/api/Analysis.html#video'
              isc = true
              break
            case '2-4-15':
              this.url = 'doc/api/Analysis.html#viewshed'
              isc = true
              break
            case '2-4-16':
              this.url = 'doc/api/Analysis.html#visibility'
              isc = true
              break
            case '2-5':
            case '2-5-1':
              this.url = 'doc/api/DataSource.html#DrawSector'
              break
            case '2-5-2':
              this.url = 'doc/api/DataSource.html#EFMP'
              break
            case '2-5-3':
              this.url = 'doc/api/DataSource.html#Entity'
              break
            case '2-5-4':
              this.url = 'doc/api/DataSource.html#LoadCorridor'
              break
            case '2-5-5':
              this.url = 'doc/api/DataSource.html#LoadCzml'
              break
            case '2-5-6':
              this.url = 'doc/api/DataSource.html#LoadGeojson'
              break
            case '2-5-7':
              this.url = 'doc/api/DataSource.html#LoadGif'
              break
            case '2-5-8':
              this.url = 'doc/api/DataSource.html#LoadKml'
              break
            case '2-5-9':
              this.url = 'doc/api/DataSource.html#LoadWFS'
              break
            case '2-5-10':
              this.url = 'doc/api/DataSource.html#LoadWMS'
              break
            case '2-5-11':
              this.url = 'doc/api/DataSource.html#LoadWMTS'
              break
            case '2-5-12':
              this.url = 'doc/api/DataSource.html#OSMBuilding'
              break
            case '2-5-13':
              this.url = 'doc/api/DataSource.html#PTMLP'
              break
            case '2-5-14':
              this.url = 'doc/api/DataSource.html#RPMP'
              break
            case '2-5-15':
              this.url = 'doc/api/DataSource.html#ShpVector'
              break
            case '2-5-16':
              this.url = 'doc/api/DataSource.html#DHP'
              break
            case '2-5-17':
              this.url = 'doc/api/DataSource.html#activeLine'
              break
            case '2-5-18':
              this.url = 'doc/api/DataSource.html#barChart'
              break
            case '2-5-19':
              this.url = 'doc/api/DataSource.html#customPrimitive'
              break
            case '2-5-20':
              this.url = 'doc/api/DataSource.html#divPoint'
              break
            case '2-5-21':
              this.url = 'doc/api/DataSource.html#dynamicWall'
              break
            case '2-5-22':
              this.url = 'doc/api/DataSource.html#flowLine'
              break
            case '2-5-23':
              this.url = 'doc/api/DataSource.html#geojsonToTile'
              break
            case '2-5-24':
              this.url = 'doc/api/DataSource.html#globeBuilding'
              break
            case '2-5-25':
              this.url = 'doc/api/DataSource.html#globePM'
              break
            case '2-5-26':
              this.url = 'doc/api/DataSource.html#haloLine'
              break
            case '2-5-27':
              this.url = 'doc/api/DataSource.html#loadHtml'
              break
            case '2-5-28':
              this.url = 'doc/api/DataSource.html#loadWKT'
              break
            case '2-5-29':
              this.url = 'doc/api/DataSource.html#pointCluster'
              break
            case '2-5-30':
              this.url = 'doc/api/DataSource.html#rampWall'
              break
            case '2-5-31':
              this.url = 'doc/api/DataSource.html#road'
              break
            case '2-5-32':
              this.url = 'doc/api/DataSource.html#sector'
              break
            case '2-5-33':
              this.url = 'doc/api/DataSource.html#shinePoint'
              break
            case '2-5-34':
              this.url = 'doc/api/DataSource.html#spreadWall'
              break
            case '2-5-35':
              this.url = 'doc/api/DataSource.html#textEntity'
              break
            case '2-6':
            case '2-6-1':
              this.url = 'doc/api/Scene.html?#BookmarkWidget'
              break
            case '2-6-2':
              this.url = 'doc/api/Scene.html?#CameraFlight'
              break
            case '2-6-3':
              this.url = 'doc/api/Scene.html?#DownloadImg'
              break
            case '2-6-4':
              this.url = 'doc/api/Scene.html?#FlyLineEdit'
              break
            case '2-6-5':
              this.url = 'doc/api/Scene.html?#HistoryCamera'
              break
            case '2-6-6':
              this.url = 'doc/api/Scene.html?#KeyboardRoam'
              break
            case '2-6-7':
              this.url = 'doc/api/Scene.html?#LimitCamera'
              break
            case '2-6-8':
              this.url = 'doc/api/Scene.html?#RoamLineWidget'
              break
            case '2-6-9':
              this.url = 'doc/api/Scene.html?#Roaming'
              break
            case '2-6-10':
              this.url = 'doc/api/Scene.html?#Rotate'
              break
            case '2-6-11':
              this.url = 'doc/api/Scene.html?#SkyBox'
              break
            case '2-6-12':
              this.url = 'doc/api/Scene.html?#sceneEffects'
              break
            case '2-6-12-1':
              this.url = 'doc/api/Scene.html?#CircleScanSystem'
              break
            case '2-6-12-2':
              this.url = 'doc/api/Scene.html?#ParticalSystem'
              break
            case '2-6-12-3':
              this.url = 'doc/api/Scene.html?#ParticleSystemEx'
              break
            case '2-6-12-4':
              this.url = 'doc/api/Scene.html?#WaterReflection'
              break
            case '2-6-12-5':
              this.url = 'doc/api/Scene.html?#brightness'
              break
            case '2-6-12-6':
              this.url = 'doc/api/Scene.html?#nightness'
              break
            case '2-6-12-7':
              this.url = 'doc/api/Scene.html?#weatherEffects'
              break
            case '2-7':
            case '2-7-1':
              this.url = 'doc/api/Model.html?#Buildflowline'
              isc = true
              break
            case '2-7-2':
              this.url = 'doc/api/Model.html?#load3DTiles'
              isc = true
              break
            case '2-7-3':
              this.url = 'doc/api/Model.html?#loadGltf'
              isc = true
              break
            case '2-7-4':
              this.url = 'doc/api/Model.html?#modelStoreWidget'
              isc = true
              break
            case '2-7-5':
              this.url = 'doc/api/Model.html?#tileMonomer'
              isc = true
              break
            case '2-8-1':
              this.url = 'doc/utils/dragbox/dragbox.md'
              isc = true
              break
            case '2-8-2':
              this.url = 'doc/utils/popup/popup.md'
              isc = true
              break
            case '2-8-4':
              this.url = 'doc/utils/tooltip/tooltip.md'
              isc = true
              break
            case '2-8-5':
              this.url = 'doc/utils/cjquery/cjquery.html'
              isc = true
              break
            case '2-8-7-1':
              this.url = 'doc/utils/latlng/latlng.html'
              isc = true
              break
            case '2-8-7-2':
              this.url = 'doc/utils/latlng/latlng.html#aroundPoint'
              isc = true
              break
            case '2-8-7-3':
              this.url = 'doc/utils/latlng/latlng.html#formatPositon'
              isc = true
              break
            case '2-8-7-4':
              this.url = 'doc/utils/latlng/latlng.html#getCameraView'
              isc = true
              break
            case '2-8-7-5':
              this.url = 'doc/utils/latlng/latlng.html#getCenter'
              isc = true
              break
            case '2-8-7-6':
              this.url = 'doc/utils/latlng/latlng.html#getCurrentMousePosition'
              isc = true
              break
            case '2-8-7-7':
              this.url = 'doc/utils/latlng/latlng.html#getExtent'
              isc = true
              break
            case '2-8-7-8':
              this.url = 'doc/utils/latlng/latlng.html#getViewBounds'
              isc = true
              break
            case '2-8-7-9':
              this.url = 'doc/utils/latlng/latlng.html#windingPoint'
              isc = true
              break
            case '2-8-9':
              this.url = 'doc/utils/pointconvert/pointconvert.html'
              isc = true
              break
            case '2-8-10':
              this.url = 'doc/utils/tooltip/tooltip.md'
              isc = true
              break
            case '2-8-11-1':
              this.url = 'doc/utils/util/util.html'
              isc = true
              break
            case '2-8-11-2':
              this.url = 'doc/utils/util/util.html#createModel'
              isc = true
              break
            case '2-8-11-3':
              this.url = 'doc/utils/util/util.html#extend'
              isc = true
              break
            case '2-8-11-4':
              this.url = 'doc/utils/util/util.html#floatObj'
              isc = true
              break
            case '2-8-11-5':
              this.url = 'doc/utils/util/util.html#formatDegree'
              isc = true
              break
            case '2-8-11-6':
              this.url = 'doc/utils/util/util.html#getEllipsoid'
              isc = true
              break
            case '2-8-11-7':
              this.url = 'doc/utils/util/util.html#getJSON'
              isc = true
              break
            case '2-8-11-8':
              this.url = 'doc/utils/util/util.html#getRequest'
              isc = true
              break
            case '2-8-11-9':
              this.url = 'doc/utils/util/util.html#getRequestByName'
              isc = true
              break
            case '2-8-11-10':
              this.url = 'doc/utils/util/util.html#getTerrainProvider'
              isc = true
              break
            case '2-8-11-11':
              this.url = 'doc/utils/util/util.html#isDotInPolygon'
              isc = true
              break
            case '2-8-11-12':
              this.url = 'doc/utils/util/util.html#isNumber'
              isc = true
              break
            case '2-8-11-13':
              this.url = 'doc/utils/util/util.html#isPCBroswer'
              isc = true
              break
            case '2-8-11-14':
              this.url = 'doc/utils/util/util.html#isString'
              isc = true
              break
            case '2-8-11-15':
              this.url = 'doc/utils/util/util.html#onSegment'
              isc = true
              break
            case '2-8-11-16':
              this.url = 'doc/utils/util/util.html#WithinBbox'
              isc = true
              break
            case '2-8-11-17':
              this.url = 'doc/utils/util/util.html#WithinPolygon'
              isc = true
              break
            case '2-8-11-18':
              this.url = 'doc/utils/util/util.html#terrainPolyline'
              isc = true
              break
            case '2-8-11-19':
              this.url = 'doc/utils/util/util.html#webglreport'
              isc = true
              break
            case '2-9-1':
              this.url = 'doc/visualization/RJHeatMap.md'
              isc = true
              break
            case '2-9-3':
              this.url = 'doc/visualization/windy.md'
              isc = true
              break
            case '2-9-4':
              this.url = 'doc/visualization/drawKriging.md'
              isc = true
              break
            case '2-9-5':
              this.url = 'doc/visualization/video.md'
              isc = true
              break
            case '2-10-1':
              this.url = 'doc/echarts/echarts.md'
              isc = true
              break
            case '2-10-1-1':
              this.url = 'doc/echarts/echarts.md'
              isc = true
              break
            case '2-10-1-2':
              this.url = 'doc/echarts/colorModifyHSL.md'
              isc = true
              break
            case '2-10-2':
              this.url = 'doc/mapv/mapv.md'
              isc = false
              break
            case '2-10-2-1':
              this.url = 'doc/mapv/mapv.md'
              isc = true
              break
            case '2-10-2-2':
              this.url = 'doc/mapv/DataSet.md'
              isc = true
              break
            case '2-10-2-3':
              this.url = 'doc/mapv/getCenterByCityName.md'
              isc = true
              break
            case '2-10-2-4':
              this.url = 'doc/mapv/getDataSet.md'
              isc = true
              break
            case '2-10-2-5':
              this.url = 'doc/mapv/getPoints.md'
              isc = true
              break
            case '2-10-2-6':
              this.url = 'doc/mapv/utilForceEdgeBundling.md'
              isc = true
              break
            case '2-10-4':
              this.url = 'doc/other/GeoJsonDataSource.md'
              isc = true
              break
            case '2-10-5':
              this.url = 'doc/other/PointOnMode.md'
              isc = true
              break
            case '2-10-6-1':
              this.url = 'doc/service/baiduQueryWidget.md'
              isc = true
              break
            case '2-10-6-2':
              this.url = 'doc/service/gaodePoiQuery.md'
              isc = true
              break
            case '3-1':
              this.url = 'doc/document/index.html'
              isc = true
              break
            default:
              this.url = 'doc/error.html'
              break
          }
          setTimeout(() => {
            var tiframe = this.$refs.dociframe
            if (this.url.indexOf('.md') > 0) {
              if (this.$http && typeof this.$http.get === 'function') {
                this.$http
                  .get(`${this.url}`)
                  .then((res) => {
                    this.url = ''
                    this.content = `${res.data}`
                    this.ismarkdown = true
                  })
                  .catch((e) => {
                    console.error('Failed to load markdown:', e)
                  })
              } else {
                console.error('$http not available')
              }
            } else if (this.url.indexOf('.html') > 0) {
              let frameH = tiframe.contentWindow.document.body.scrollHeight + 50
              tiframe.height = frameH
              this.iframeH = frameH
              this.content = ''
              this.ismarkdown = false
            } else {
              this.url = ''
              this.content = ''
              this.ismarkdown = false
            }
          }, 800)
          if (document.getElementsByClassName('el-main').length > 0) {
            document.getElementsByClassName('el-main')[0].scrollTop = 0
          }
          setTimeout(() => {
            this.loading = false
          }, 1000)
        }
      },
      immediate: true,
    },
  },
}
</script>
<style scoped>
.devdocpage {
  width: 100%;
  /* max-width: 90%; */
  min-height: 100%;
  /* margin-left: 5%; */
  text-align: left;
}
.markdown-body {
  width: 85%;
  margin: 0 0 0 5%;
}
.rightiframe {
  width: 100%;
  padding: 0;
  min-height: 100%;
  height: 100%;
}
</style>
