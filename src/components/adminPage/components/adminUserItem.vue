<template>
  <el-card shadow="hover">
    <el-row :gutter="20">

      <el-col :span="6">
        <div class="grid-content ep-bg-purple"/>
        <el-form-item label="用户名">
          <el-input v-model="userItemOne.userName"/>
        </el-form-item>
      </el-col>

      <el-col :span="6">
        <div class="grid-content ep-bg-purple"/>
        <el-form-item label="密码">
          <el-input v-model="userItem.password"/>
        </el-form-item>
      </el-col>

      <el-col :span="6">
        <div class="grid-content ep-bg-purple"/>
        <el-form-item label="用户权限">
          <el-select v-model="userItem.role" :placeholder="userItem.role">
            <el-option label="admin" value="admin"/>
            <el-option label="user" value="user"/>
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>
    <br>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content ep-bg-purple"/>
        <el-form-item label="邮&emsp;箱">
          <el-input v-model="userItem.emailAddress"/>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <div class="grid-content ep-bg-purple"/>
        <el-form-item label=" 城市">
          <el-input v-model="userItem.address"/>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <div class="grid-content ep-bg-purple"/>
        <el-form-item label="头像URL">
          <el-input v-model="userItem.headPortrait"/>
        </el-form-item>
      </el-col>
    </el-row>
    <br>
    <el-button type="primary" @click="this.$router.push('/adminUser')">返回上页</el-button>
    <el-button type="primary" @click="submit">提交更改</el-button>
  </el-card>
</template>

<script>
export default {
  name: "adminUserItem",
  data() {
    return {
      userItem: {}

    }
  },
  computed: {
    userItemOne() {
      return this.$store.state.userItemOne
    }
  },
  methods: {

    submit() {
      if (this.userItem.userName !== ""
          && this.userItem.password !== ""
          && this.userItem.role !== ""
          && this.userItem.emailAddress !== ""
          && this.userItem.headPortrait !== ""
          && this.userItem.address !== ""){
        this.$axios.put("admin/updateUser", {
          id: this.userItem.id,
          userName: this.userItem.userName,
          password: this.userItem.password,
          role: this.userItem.role,
          emailAddress: this.userItem.emailAddress,
          headPortrait: this.userItem.headPortrait,
          address: this.userItem.address,
        }).then((res)=>{
          if(res.data.code === 200){
            layer.msg(res.data.msg,{icon:1,time:2000})
          }else if(res.data.code === 501){
            layer.msg(res.data.msg,{icon:2,time:2000})
            setTimeout(()=>{
              this.$router.push('/')
            },2000)
          }
        })
      }else layer.msg("填写信息不全",{icon:2,time:2000})
    }
  },
  mounted() {
    this.userItem = this.$store.state.userItemOne
  }
}
</script>

<style scoped>

</style>