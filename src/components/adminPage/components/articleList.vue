<template>
  <el-table :data="articleList" style="width: 100%">
    <el-table-column prop="id" label="ID" width="60"/>
    <el-table-column prop="title" label="标题" width="120"/>
    <el-table-column prop="isTop" label="置顶" width="120"/>
    <el-table-column prop="isHot" label="热门" width="120"/>
    <el-table-column prop="commentsCount" label="评论数" width="120"/>
    <el-table-column prop="pubTime" label="发布时间" width="250"/>
    <el-table-column prop="summary" label="简介" width="150"/>
    <el-table-column prop="viewsCount" label="观看人数" width="120"/>
    <el-table-column fixed="classification" label="分类" width="120"/>
    <el-table-column fixed="right" label="管理" width="120">
      <!--删除修改-->
      <template #default="scope">
        <el-button link type="primary" size="small" @click="deleteUser(scope.row.title)">删除</el-button>
        <el-button link type="primary" size="small">
          <router-link to="/articleListItem" @click="saveArticle(scope.row)">
            修改
          </router-link>
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <!--分页-->
  <el-pagination
      v-model:current-page="pagination"
      :page-size="20"
      background
      layout="prev, pager, next"
      :total="total"
      @click="this.getArticleList()"
  />
</template>

<script>
//用户管理
import store from "@/state";
export default {
  name: "articleList",
  data() {
    return {
      articleList: [],
      pagination: 1,//页码
      total: 1,
      dialogVisible: false
    }
  },
  mounted() {
    this.getArticleList()
  },
  computed: {
    offset() {
      return 10 * (this.pagination - 1)
    }
  },
  methods: {
    saveArticle(article){
      const articleList = JSON.stringify(article)
      localStorage.setItem("articleList",articleList)
      store.dispatch("initArticleList")
    },
    getArticleList() {
      this.$axios.get('admin/getArticleList/' + this.offset, {}).then((res) => {
        const number = res.data.msg
        this.total = number * 20 / 10
        this.articleList = res.data.data
      })
    },

    deleteUser(title) {
      layer.msg('删除该用户？', {
        btn: ['确认', '取消'] //按钮
        , icon: 3
      }, () => {
        this.$axios.delete('admin/deleteArticle/' + title, {}).then((res) => {
          if (res.data.code === 500) {
            layer.msg(res.data.msg, {icon: 2, time: 2000})
            setTimeout(() => {
              this.$router.push('/')
            }, 2000)
          } else if (res.data.code === 200) {
            this.getArticleList()
            layer.msg('删除成功', {icon: 1, time: 2000});
          } else layer.msg(res.data.msg, {icon: 2, time: 2000});
        })
      });
    },
  }
}
</script>

<style scoped>

</style>