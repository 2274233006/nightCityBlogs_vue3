<template>
<h1>分类管理</h1>
  <el-table :data="classification" style="width: 100%">
    <el-table-column prop="id" label="ID" width="60"/>
    <el-table-column prop="classification" label="分类" width="150"/>
    <el-table-column prop="creatTime" label="创建时间" width="250"/>
    <el-table-column prop="updateTime" label="更新时间" width="250"/>
    <el-table-column fixed="right" label="管理" width="120">
      <!--删除修改-->
      <template #default="scope">
        <el-button link type="primary" size="small" @click="deleteUser(scope.row.userName)">删除</el-button>
        <el-button link type="primary" size="small">
          <router-link to="/adminUserItem" @click="saveUserItem(scope.row)">
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
      @click="this.getUserItem()"
  />

</template>

<script>
//分类管理
export default {
  name: "adminClassification",
  data(){
    return{
      classification:[]
    }
  },
  mounted() {
    this.getClassification()
  },
  methods:{
    getClassification(){
      this.$axios.get('classification/getAll',{
      }).then((res)=>{
        this.classification = res.data.data
      })
    }

  }
}
</script>

<style scoped>

</style>