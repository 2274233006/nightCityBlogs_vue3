<template>
    <el-col class="show">
      <el-card shadow="hover">
        <el-avatar  :size="170" :src="userItem.headPortrait" class="avetar"/>
        <br><br>
        <el-row :gutter="20">
          <el-col :span="6"><div class="grid-content ep-bg-purple" />
            <el-input placeholder="用户名"  v-model="username"></el-input>
          </el-col>
          <el-col :span="6"><div class="grid-content ep-bg-purple" />
            <el-cascader size="large" :options="options" v-model="selectedOptions">
            </el-cascader>
          </el-col>
          <el-col :span="6"><div class="grid-content ep-bg-purple" />
            <el-input placeholder="邮箱" disabled v-model="userItem.emailAddress"></el-input>
          </el-col>

          <el-col :span="6"><div class="grid-content ep-bg-purple" />
            <el-input placeholder="权限" disabled v-model="userItem.role"></el-input>
          </el-col>
        </el-row>
        <br>
        <el-button @click="updateItem">提交信息</el-button>
      </el-card>
    </el-col>
</template>

<script>

import { provinceAndCityData,CodeToText} from 'element-china-area-data'
import store from "@/state";

export default {
  name: "updateUserItem",
  data(){
    return{
      username:this.$store.state.userItem.username,
      address:this.$store.state.userItem.address,
      options: provinceAndCityData ,
      selectedOptions: [],
    }
  },
  computed: {
    userItem() {
      return this.$store.state.userItem
    },
    codeToText(){
      let province = CodeToText[this.selectedOptions[0]];
      let city = CodeToText[this.selectedOptions[1]];
      return province+city;
    }
  },
  methods:{
    updateItem(){
      if(this.username === ""){
        layer.msg('用户名不能为空',{icon:2,time:2000})
        return
      }else if(this.selectedOptions.length === 0){
        layer.msg('城市不能为空',{icon:2,time:2000})
        return
      }
      this.$axios.put('update/Item',{
        username:this.username,
        address:this.codeToText
      }).then((res)=>{
        if(res.data.code === 200){
          const userItem = JSON.stringify(res.data.data)
          localStorage.setItem('userItem', userItem)
          store.dispatch('initUserItem');
          layer.msg(res.data.msg,{icon:1,time:2000})
        }else if(res.data.code === 513){
          const userItem = JSON.stringify(res.data.data)
          localStorage.setItem('userItem', userItem)
          store.dispatch('initUserItem');
          layer.msg(res.data.msg,{icon:1,time:2000})
        }else if(res.data.code === 401){
          layer.msg(res.data.msg,{icon:2,time:2000})
          setTimeout(()=>{
            this.$router.push("/")
          },2000)
        }
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
</script>

<style>
.show{
  text-align: center;
}
</style>