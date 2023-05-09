<template>
  <el-col class="show">
    <el-card shadow="hover">
      <el-row :gutter="20">
        <el-col :span="6"><div class="grid-content ep-bg-purple" />
          <el-input placeholder="原密码" v-model="password"></el-input>
        </el-col>
        <el-col :span="6"><div class="grid-content ep-bg-purple" />
          <el-input placeholder="新密码" v-model="newPassword"></el-input>
        </el-col>
        <el-col :span="6"><div class="grid-content ep-bg-purple" />
          <el-input placeholder="确认密码" v-model="notarizePassword"></el-input>
        </el-col>
      </el-row>
      <br>
      <el-row :gutter="20">
        <el-col :span="6"><div class="grid-content ep-bg-purple" />
          <el-input placeholder="邮箱" disabled v-model="userItem.emailAddress"></el-input>
        </el-col>
        <el-button @click="verification">获取验证码</el-button>
        <el-col :span="6"><div class="grid-content ep-bg-purple" />
          <el-input placeholder="验证码" v-model="authCode"></el-input>
        </el-col>
        <el-button type="primary" @click="updatePassword">提交信息</el-button>
      </el-row>

    </el-card>
    <br>
  </el-col>
</template>

<script>
export default {
  name: "updatePassword",
  data(){
    return{
      password:"",//原密码
      newPassword:"",//新密码
      notarizePassword:"", //确认密码
      authCode:""//验证码
    }
  },
  computed: {
    userItem() {
      return this.$store.state.userItem
    },
  },
  methods:{
    verification(){
      layer.load();
      this.$axios.post('mail/userSendTextMail/'+this.userItem.emailAddress,{
      }).then((res)=>{
        if(res.data.code === 200){
          layer.closeAll('loading');
          layer.msg(res.data.msg,{icon:1,time:2000})
        }else{
          layer.closeAll('loading');
          layer.msg(res.data.msg,{icon:2,time:2000})
        }
      })
    },
    updatePassword(){
      this.$axios.put('update/updatePassword',{
        password:this.password,
        newPassword:this.newPassword,
        authCode:this.authCode,
        username:this.userItem.username
      }).then((res)=>{
        const code = res.data.code
        if(code === 200){
          layer.msg(res.data.msg,{icon:1,time:2000})
          setTimeout(()=>{
            this.$router.push("/login")
          },2000)
        }else if(code === 500){
          layer.msg(res.data.msg,{icon:2,time:2000})
        }else if(code === 501){
          layer.msg(res.data.msg,{icon:2,time:2000})
          setTimeout(()=>{
            this.$router.push("/login")
          },2000)
        }
      })
    }
  }
}
</script>

<style scoped>

</style>