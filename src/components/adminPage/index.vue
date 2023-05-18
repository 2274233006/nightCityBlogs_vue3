<template>
  <div class="common-layout">
    <el-container >
      <el-container>
        <el-aside width="150px">
          <el-scrollbar>
            <el-menu :default-openeds="['1', '3']" class="el-menu">
              <el-menu-item-group>
                <el-menu-item index="1" @click="this.$router.push('/adminHome')">
                  主页
                </el-menu-item>
                <el-menu-item index="1-2" @click="this.$router.push('/adminUser')">
                  用户管理
                </el-menu-item>
                <el-menu-item index="1-4" @click="this.$router.push('/publishArticle')">
                  发布文章
                </el-menu-item>
                <el-menu-item index="1-5" @click="this.$router.push('/articleList')">
                  文章列表
                </el-menu-item>
                <el-menu-item index="1-6" @click="this.$router.push('/adminClassification')">
                  分类管理
                </el-menu-item>
                <el-menu-item index="1-7" @click="this.$router.push('/adminComment')">
                  评论管理
                </el-menu-item>
                <br><br>
              </el-menu-item-group>
              <el-button @click="this.$router.push('/')" type="primary">返回首页</el-button>
            </el-menu>
          </el-scrollbar>
        </el-aside>
        <el-main >
          <RouterView></RouterView>
        </el-main>
      </el-container>

    </el-container>
  </div>
</template>

<script>
import store from "@/state";

export default {
  name: "index",
  methods: {
    verification(){
      layer.load()
      this.$axios.post('admin/verification',{
      }).then((res)=>{
        if(res.data.code === 200){
          layer.closeAll('loading')
          layer.msg("账户鉴权成功",{icon:1,time:2000})
        }else{
          this.$router.push('/')
          layer.closeAll('loading')
        }
      }).catch(function (error) {
        layer.load();
        if (error.response) {
          // 请求成功发出且服务器也响应了状态码，但状态代码超出了 2xx 的范围
          setTimeout(()=>{
            layer.closeAll('loading');
            layer.msg("请求出错！ "+error.message,{icon:2,time:2000})
          },1000)
        } else if (error.request) {
          // 请求已经成功发起，但没有收到响应
          // `error.request` 在浏览器中是 XMLHttpRequest 的实例，
          // 而在node.js中是 http.ClientRequest 的实例
          console.log(error.message);
          setTimeout(()=>{
            layer.closeAll('loading');
            layer.msg("请求出错！ "+error.message,{icon:2,time:2000})
          },1000)
        } else {
          // 发送请求时出了点问题
          console.log('Error', error.message);
          setTimeout(()=>{
            layer.closeAll('loading');
            layer.msg("请求出错！ "+error.message,{icon:2,time:2000})
          },1000)
        }
      });
    }
  },
  mounted() {
    localStorage.setItem('conceal', false)
    store.dispatch('initConceal')
    this.verification()
  },

}
</script>

<style scoped>
.el-menu {
  text-align: center;
  height: 100vh;
}

</style>