<template>
  <div class="home">
    <banner isHome="true"></banner>
    <div class="site-content animate" v-if="classifyBoolean">
      {{ classify }}
      <!--通知栏-->

      <div class="notify">
        <quote></quote>
      </div>

      <!--聚焦动画-->
      <div class="top-feature">
        <section-title>
          <div style="display: flex;align-items: flex-end;">聚焦
            <small-ico></small-ico>
          </div>
        </section-title>

        <!--焦点图-->
        <div class="feature-content">
          <div class="feature-item" v-for="item in features" :key="item.title">
            <Feature :data="item"></Feature>
          </div>
        </div>
      </div>

      <!--文章列表-->
      <main class="site-main">
        <section-title>推荐</section-title>
        <div v-for="item in article">
          <post :post="item" :banner="banner(item)"></post>
        </div>
<!--        分页-->
        <el-pagination
            v-model:current-page="pagination"
            :page-size="20"
            background
            layout="prev, pager, next"
            :total="total"
            @click="this.getArticle()"
        />
      </main>
    </div>

    <div class="site-content animate" v-else>
      <main class="site-main">
        <div class="notify">
          <div class="search-result">
            <span >分类"{{ classify }}" 相关文章</span>
          </div>
        </div>
        <div v-for="item in categorizedItems">
          <post :post="item" :banner="banner(item)"></post>
        </div>
        <el-pagination
            v-model:current-page="pagination1"
            :page-size="20"
            background
            layout="prev, pager, next"
            :total="total1"
            @click="this.getArticle()"
        />
      </main>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/banner.vue'
import Feature from '@/components/feature.vue'
import sectionTitle from '@/components/section-title.vue'
import Post from '@/components/post.vue'
import SmallIco from '@/components/small-ico.vue'
import Quote from '@/components/quote.vue'
import store from "@/state";

export default {
  name: 'Home',
  data() {
    return {
      features: [],
      article:[],
      pagination: 1,//页码
      total: 1,
      pagination1: 1,//页码
      total1: 1,
    }
  },
  components: {
    Banner,
    Feature,
    sectionTitle,
    Post,
    SmallIco,
    Quote
  },
  mounted() {
    this.getFeatures();
    this.getArticle();
    this.verifyLogin()
    localStorage.setItem('conceal',true)
    store.dispatch('initConceal')

  },
  computed: {
    offset() {
      return 5 * (this.pagination - 1)
    },
    offset1() {
      return 5 * (this.pagination1 - 1)
    },
    categorizedItems(){

      return this.$store.state.categorizedItems
    },
    // 获取当前文章分类
    classify() {
      this.getCategorizedItems(this.$route.params.classification);
      return this.$route.params.classification
    },
    //用于判断是否显示相应区域
    classifyBoolean() {
      return this.$route.params.classification === undefined
    },

  },
  methods: {
    banner(item){
      if(item.banner === null){
        item.banner = 'https://nightcityblogs-1312951467.cos.ap-shanghai.myqcloud.com/logo.jpg'
        return item.banner
      }
      return item.banner
    },
    // token校验
    verifyLogin(){
      this.$axios.post('user/verify',{
      }).then((res)=>{
        if(!res.data){
          localStorage.setItem('loginStatus',false)
          store.dispatch('initLoginStatus');
        }else{
          localStorage.setItem('loginStatus',true)
          store.dispatch('initLoginStatus');
        }
      }).catch((error)=>{
        localStorage.setItem('loginStatus',false)
        store.dispatch('initLoginStatus');
          layer.msg(error.message,{icon:2,time:2000})
      })
    },
    //焦点图数据
    getFeatures() {
      this.$axios.get('article/getFocusArticle', {}).then((res) => {
        this.features = res.data.data
      })
    },
    getArticle(){
      this.$axios.get("article/all/"+this.offset,{
      }).then((res)=>{
        const number = res.data.msg
        this.total = number * 20 / 5
        this.article = res.data.data
      })
    },
    getCategorizedItems(classify){
      return this.$axios.get('article/categorizedItems/'+classify+"/"+this.offset1,{
      }).then((res)=>{
        const number = res.data.msg
        this.total1 = number * 20 / 5
        localStorage.setItem('categorizedItems', JSON.stringify(res.data.data))
        store.dispatch('initCategorizedItems');
      })
    },
  }
}
</script>
<style scoped lang="less">

.site-content {
  .notify {
    margin: 60px 0;
    border-radius: 3px;

    & > div {
      padding: 20px;
    }
  }


  .search-result {
    padding: 15px 20px;
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    border: 1px dashed #ddd;
    color: #828282;
  }
}

.top-feature {
  width: 100%;
  height: auto;
  margin-top: 30px;

  .feature-content {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    position: relative;

    .feature-item {
      width: 32.9%;
    }
  }
}

.site-main {
  padding-top: 80px;

  &.search {
    padding-top: 0;
  }
}

.more {
  margin: 50px 0;

  .more-btn {
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #ADADAD;
    border: 1px solid #ADADAD;
    border-radius: 20px;
    margin: 0 auto;
    cursor: pointer;

    &:hover {
      color: #8fd0cc;
      border: 1px dashed #8fd0cc;
    }
  }
}

/******/
@media (max-width: 800px) {
  .top-feature {
    display: none;
  }

  .site-main {
    padding-top: 40px;
  }

  .site-content {
    .notify {
      margin: 30px 0 0 0;
    }

    .search-result {
      margin-bottom: 20px;
      font-size: 16px;
    }
  }
}

/******/
</style>
