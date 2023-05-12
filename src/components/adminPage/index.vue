<template>
  <div class="common-layout">
    <el-container>
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
                <el-menu-item index="1-3" @click="this.$router.push('/webData')">
                  站点数据
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
        <el-main>
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
  methods: {},
  mounted() {
    localStorage.setItem('conceal', false)
    store.dispatch('initConceal')
  }
}
</script>

<style scoped>
.el-menu {
  text-align: center;
  height: 100vh;
}

</style>