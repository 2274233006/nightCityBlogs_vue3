<template>
  <div class="user">
    <!--  <router-link to="updateUsername">updateUsername</router-link>-->
    <!--  <router-link to="updateUsername">updateUsername</router-link>-->
    <!--  <button >exit111111111</button>-->
    <el-container>
      <el-aside class="header" width="120px">
        <el-menu class="user_menu">
          <el-button type="primary" icon="ArrowLeft" @click="this.$router.push('/')">返回首页</el-button>

          <el-menu-item index="1"
                        @click="this.$router.push('/userItem')">
            基本信息
          </el-menu-item>

          <el-menu-item index="2"
                        @click="this.$router.push('/updateUserItem')">
            修改信息
          </el-menu-item>

          <el-menu-item index="3"
                        @click="this.$router.push('/updateHeader')">
            修改头像
          </el-menu-item>
          <el-menu-item index="4"
                        @click="this.$router.push('/updateEmail')">
            修改邮箱
          </el-menu-item>
          <el-menu-item index="5"
                        @click="this.$router.push('/updatePassword')">
            修改密码
          </el-menu-item>
          <el-menu-item index="6"
                        @click="this.$router.push('/unsubscribe')">
            注销账号
          </el-menu-item>
          <el-button type="danger" icon="CloseBold" @click="logOut">退出登录</el-button>
        </el-menu>
      </el-aside>
      <el-main>
        <RouterView></RouterView>
      </el-main>

    </el-container>
  </div>

</template>

<script>
import store from "@/state";

export default {
  name: "index",
  mounted() {
    localStorage.setItem('conceal', false)
    store.dispatch('initConceal')
    this.verifyLogin()
  },
  methods: {
    verifyLogin(){
      this.$axios.post('user/verify',{
      }).then((res)=>{
        if(!res.data){
          layer.msg("token验证未通过，请重新登录",{icon:2,time:2000})
          setTimeout(()=>{
            this.$router.push('/login')
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
    },
    logOut() {
      localStorage.setItem('loginStatus', false)
      store.dispatch('initLoginStatus')
      localStorage.removeItem('userItem')
      this.$axios.post('user/logout', {}).then((res) => {
        if (res.data.code === 200) {
          layer.msg(res.data.msg, {icon: 1, time: 1000})
          setTimeout(() => {
            this.$router.push('/')
          })
        } else
          layer.msg(res.data.msg, {icon: 2, time: 1000})
        setTimeout(() => {
          this.$router.push('/')
        })
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

<style scoped>
.user {
  width: 140vh;
  height: 90vh;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

</style>