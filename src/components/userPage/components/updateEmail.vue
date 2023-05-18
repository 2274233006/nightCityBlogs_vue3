<template>
  <el-col class="show">
    <el-card shadow="hover">
      <el-row :gutter="20">
        <el-col :span="6"><div class="grid-content ep-bg-purple" />
          <el-input placeholder="原邮箱" disabled v-model="userItem.emailAddress"></el-input>
        </el-col>
        <el-button @click="verification">获取验证码</el-button>
        <el-col :span="6"><div class="grid-content ep-bg-purple" />
          <el-input placeholder="验证码"  v-model="authCode"></el-input>
        </el-col>
        <el-col :span="6"><div class="grid-content ep-bg-purple" />
          <el-input placeholder="新邮箱"  v-model="newEmail"></el-input>
        </el-col>
        <el-button @click="updateEmail" type="primary">提交信息</el-button>
      </el-row>
      <br>
    </el-card>
    <br>
  </el-col>
</template>

<script>

import store from "@/state";

export default {
  name: "updateEmail",
  data(){
    return{
      authCode:"",
      newEmail:""
    }
  },
  computed:{
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
    updateEmail(){
      if(this.authCode === ""){
        layer.msg("验证码不能为空",{icon:2,time:2000})
      }else if(this.newEmail === ""){
        layer.msg("新邮箱不能为空",{icon:2,time:2000})
      }else if(!/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(this.newEmail)){
        layer.msg("请输入正确的邮箱格式",{icon:2,time:2000})
      }else{
        this.$axios.put('/update/Email',{
          authCode: this.authCode,
          newEmail: this.newEmail
        }).then((res)=> {
          if (res.data.code === 200) {
            const userItem = JSON.stringify(res.data.data)
            localStorage.setItem('userItem', userItem)
            store.dispatch('initUserItem');
            layer.msg(res.data.msg, {icon: 1, time: 2000})
          } else
            layer.msg(res.data.msg, {icon: 2, time: 2000})
        }).catch(function (error) {
          layer.load();
          if (error.response) {
            // 请求成功发出且服务器也响应了状态码，但状态代码超出了 2xx 的范围
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
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
    }
  }
}
</script>

<style>
.show{
  text-align: center;
}
</style>