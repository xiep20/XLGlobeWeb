<template>
  <div class="cesium-examples">
    <el-container>
      <el-main class="mscroll">
        <!-- 卡片展示区域 -->
        <div v-if="!selectedCard" class="cards-container">
          <div class="cards-header">
            <h2>Cesium原生示例</h2>
            <p>选择您需要的功能模块，点击卡片查看详细内容</p>
          </div>
          <div class="cards-grid">
            <div
              v-for="(card, index) in cardsData"
              :key="index"
              class="card"
              @click="selectCard(card)"
            >
              <div class="card-image">
                <img :src="card.image" :alt="card.name" />
              </div>
              <div class="card-content">
                <h3 class="card-title">{{ card.name }}</h3>
                <div class="card-tags">
                  <el-tag
                    v-for="(tag, tagIndex) in card.tags"
                    :key="tagIndex"
                    size="small"
                    type="info"
                  >
                    {{ tag }}
                  </el-tag>
                </div>
                <p class="card-description">{{ card.description }}</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 内容展示区域 -->
        <div v-else class="content-container">
          <div class="content-header">
            <el-button 
              type="text" 
              icon="el-icon-arrow-left"
              @click="backToCards"
              class="back-button"
            >
              返回卡片列表
            </el-button>
            <h2>{{ selectedCard.name }}</h2>
          </div>
          <div class="content-body">
            <Devdoc :mdUrl="selectedCard.mdUrl" />
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Devdoc from '../../components/demodoc/Devdoc'
export default {
  name: 'cesiumExamples',
  components: { Devdoc },
  data() {
    return {
      url: 'cesiumDemo/menu.json',
      cardsData: [],
      selectedCard: null,
    }
  },
  watch: {},
  created() {
  },
  mounted() {
    this.getMenu()
  },
  methods: {
    getMenu(){
      if (this.$http && typeof this.$http.get === 'function') {
        this.$http
          .get(`${this.url}`)
          .then(res => {
            this.cardsData = res.data.cards || []
          })
          .catch(function(error) {
            console.error('Failed to load menu data:', error)
          })
      } else {
        console.error('$http not available in getMenu')
      }
    },
    selectCard(card) {
      // 跳转到编辑器页面，传递必要的参数
      this.selectedCard = card
    },
    backToCards() {
      this.selectedCard = null
    }
  }
}
</script>

<style lang="scss" scoped>
.cesium-examples {
  width: 100%;
  height: calc(100% - 61px);
  margin: 61px 0 0 0;
  overflow: hidden;
  overflow-y: auto;
}

.cards-container {
  padding: 20px;
}

.cards-header {
  text-align: center;
  margin-bottom: 30px;
  
  h2 {
    color: #2a89ff;
    margin-bottom: 10px;
    font-size: 28px;
  }
  
  p {
    color: #666;
    font-size: 16px;
  }
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

.card {
  background: #f3f3f3;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
}

.card-image {
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.card-content {
  padding: 20px;
}

.card-title {
  margin: 0 0 15px 0;
  color: #333;
  font-size: 18px;
  font-weight: 600;
}

.card-tags {
  margin-bottom: 15px;
  
  .el-tag {
    margin-right: 8px;
    margin-bottom: 5px;
  }
}

.card-description {
  color: #666;
  line-height: 1.6;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.content-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.content-header {
  padding: 20px;
  border-bottom: 1px solid #eee;
  background: #fff;
  display: flex;
  align-items: center;
  gap: 15px;
  position: fixed;
  top: 61px;
  left: 0;
  right: 0;
  z-index: 1000;
  
  .back-button {
    font-size: 16px;
    color: #2a89ff;
    
    &:hover {
      color: #409eff;
    }
  }
  
  h2 {
    margin: 0;
    color: #333;
    font-size: 24px;
  }
}

.content-body {
  flex: 1;
  overflow: auto;
  margin-top: 64px;
}

.mscroll {
  overflow-y: auto;
}
</style>
