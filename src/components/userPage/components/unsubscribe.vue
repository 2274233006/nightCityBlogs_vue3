<template>
  <el-col class="show">
    <el-card shadow="hover">
      <el-row :gutter="20">
        <el-col :span="6"><div class="grid-content ep-bg-purple" />
          <el-input placeholder="当前账户密码" v-model="password"></el-input>
        </el-col>

        <el-col :span="6"><div class="grid-content ep-bg-purple" />
          <el-input placeholder="当前账户邮箱" v-model="emailAddress"></el-input>
        </el-col>
        <el-button @click="verification">获取验证码</el-button>
        <el-col :span="6"><div class="grid-content ep-bg-purple" />
          <el-input placeholder="验证码" v-model="authCode"></el-input>
        </el-col>
        <el-button  type="primary" @click="unsubscribe">提交信息</el-button>
      </el-row>
      <br>
    </el-card>
    <br>
  </el-col>
</template>

<script>
export default {
  name: "unsubscribe",
  data(){
    return{
      password:"",
      emailAddress:"",
      authCode:""
    }
  },
  computed:{
    userItem(){
      return this.$store.state.userItem
    }
  },
  methods:{
    verification(){
      layer.load();
      if(this.emailAddress === this.userItem.emailAddress){
        this.$axios.post('mail/userSendTextMail/'+this.emailAddress,{
        }).then((res)=>{
          if(res.data.code === 200){
            layer.closeAll('loading');
            layer.msg(res.data.msg,{icon:1,time:2000})
          }else{
            layer.closeAll('loading');
            layer.msg(res.data.msg,{icon:2,time:2000})
          }
        })
      }else{
        layer.closeAll('loading');
        layer.msg("填写的邮箱与当前账户邮箱不符合",{icon:2,time:2000})
      }
    },
    unsubscribe(){
      if(this.authCode === ""){
        layer.msg("验证码不能为空",{icon:2,time:2000})
      }else if(this.emailAddress === ""){
        layer.msg("邮箱不能为空",{icon:2,time:2000})
      }else if(!/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(this.emailAddress)){
        layer.msg("请输入正确的邮箱格式",{icon:2,time:2000})
      }else{
        this.$axios.post("update/unsubscribe",{
          username:this.userItem.username,
          password:this.password,
          authCode:this.authCode
        }).then((res)=>{
          if(res.data.code === 200){
            layer.msg(res.data.msg,{icon:1,time:2000})
            setTimeout(()=>{
              this.$router.push("/login")
            },2000)
          }else if(res.data.code === 501){
            layer.msg(res.data.msg,{icon:2,time:2000})
            setTimeout(()=>{
              this.$router.push("/login")
            },2000)
          }else layer.msg(res.data.msg,{icon:2,time:2000})
        })
      }
    }
  }
}
</script>

<style scoped>

</style>