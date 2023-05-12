<template>
  <el-table :data="userItem" style="width: 100%">
    <el-table-column prop="userName" label="用户名" width="120" />
    <el-table-column prop="role" label="权限" width="120" />
    <el-table-column prop="password" label="密码" width="120" />
    <el-table-column prop="emailAddress" label="邮箱" width="250" />
    <el-table-column prop="creatTime" label="创建时间" width="250" />
    <el-table-column prop="updateTime" label="更新时间" width="250" />
    <el-table-column prop="address" label="地址" width="250" />
    <el-table-column fixed="right" label="管理" width="120">
      <template #default>
        <el-button link type="primary" size="small" >删除</el-button>
        <el-button link type="primary" size="small" >修改</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
//用户管理
export default {
  name: "adminUser",
  data(){
    return{
      userItem:""
    }
  },
  mounted() {
    this.getUserItem()
  },
  methods:{
    getUserItem(){
      this.$axios.get('admin/getUser',{

      }).then((res)=>{
        this.userItem = res.data.data
      })
    }
  }
}
</script>

<style scoped>

</style>