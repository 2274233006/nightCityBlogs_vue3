<template>
  <div class="user">
    <!--  <router-link to="updateUsername">updateUsername</router-link>-->
    <!--  <router-link to="updateUsername">updateUsername</router-link>-->
    <!--  <button >exit111111111</button>-->
    <el-container>
      <el-aside class="header" width="120px">
        <el-menu class="user_menu">
          <el-button type="primary" icon="ArrowLeft">返回首页</el-button>

          <el-menu-item index="1"
                        @click="this.$router.push('/userItem')">
            基本信息
          </el-menu-item>

          <el-menu-item index="2"
                        @click="this.$router.push('/updateUserItem')">
            修改信息
          </el-menu-item>

          <el-menu-item index="3">修改头像</el-menu-item>
          <el-menu-item index="4">修改邮箱</el-menu-item>
          <el-menu-item index="5">修改密码</el-menu-item>
          <el-menu-item index="6">注销账号</el-menu-item>
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
  },
  methods: {
    logOut() {
      localStorage.setItem('loginStatus', false)
      store.dispatch('initLoginStatus')
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
      })
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