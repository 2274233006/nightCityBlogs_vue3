<script>
import {mapMutations} from "vuex";
import store from "@/state";

export default {
  data() {
    return {
      username: "",
      password: "",
      rem: "", //boolean值，选中为true
    };
  },
  methods: {
    //登录跳转
    login() {
      this.$router.push("/");
    },
    // //登录验证
    // async LoginCheck() {
    //   //判断用户名&密码是否为空
    //   if (this.username === "") {
    //     layer.msg("用户名不能为空", {icon: 5});
    //   }
    //   else if (this.password === "") {
    //     layer.msg("密码不能为空", {icon: 5});
    //   }
    //   //执行axios请求，通过返回值判断该用户是否填写正确
    //   else {
    //     await this.axiosLogin();
    //     if (this.List.username != this.username) {
    //       layer.msg("用户不存在", {icon: 5});
    //     } else if (this.List.password != this.password) {
    //       layer.msg("密码错误", {icon: 5});
    //     } else {
    //       //跳转到主页（router）
    //       layer.msg("登录成功", {icon: 1});
    //       setTimeout(() => {
    //         this.$router.push("/home/home");
    //       }, 1500);
    //     }
    //   }
    // },
    // //同步请求，根据用户名查询是否存在
    // async axiosLogin() {
    //   await this.$axios({
    //     method: "get",
    //     url: "http://localhost:1010/user/" + this.username,
    //   }).then((res) => {
    //     this.List = res.data;
    //   });
    // }.
  },
  mounted() {
    localStorage.setItem('conceal',false)
    store.dispatch('init')
  }
};
</script>

<template>
  <div class="area">
    <div class="bg">
      <div class="wel">nightCity blogs</div>
      <div class="user">
        <div id="yonghu" style="">用&nbsp;&nbsp;户&nbsp;名</div>
        <!-- el-popover: elementUI提示框  -->
        <el-popover
            placement="top-start"
            title="提示"
            :width="200"
            trigger="hover"
            content="请注意区分大小写"
        >
          <template #reference>
            <input class="m-2" type="text" name="用户" v-model="username"/>
          </template>
        </el-popover>
      </div>
      <div class="password">
        <div id="yonghu">密&emsp;&emsp;码</div>
        <input
            type="password"
            name="密码"
            v-model="password"
            @keyup.enter=""
        />
      </div>
      <!-- 通过v-model绑定rem传递Boolean值判定是否记忆 -->
      <div class="rem">
        <el-checkbox v-model="rem" label="记住密码" size="large"/>
      </div>
      <div class="fg">
        <div style="font-size: 12px; margin-top: 11px">
          <el-link>忘记密码</el-link>
        </div>
      </div>
      <el-button class="btn" type="primary" @click="login">
        登录
      </el-button>
      <div class="reg">
        <el-link>没账号还不注册</el-link>
      </div>
    </div>
  </div>

</template>

<style scoped>
* {
  font-family: "微软雅黑";
  font-size: 16px;
  border: 0;
  padding: 0;
  margin: 0;
  color: #666;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;

}

body {
  width: 100%;
  background-size: 100%;
}
.area{
  height: 100vh;
  background-image: url("/public/login.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.bg {
  width: 415px;
  height: 337px;
  background: #fff;
  position: relative;
  position: absolute;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  margin: auto;
  z-index: 1;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.4);
  border-radius: 15px;
}

.password {
  position: absolute;
  top: 9.5rem;
  right: 3.5rem;
  display: flex;
}

.btn {
  position: absolute;
  top: 16rem;
  right: 3.5rem;
  /* border: none; */
  /* color: #fff; */
  width: 18.825rem;
  /* text-align: center; */
  /* background-color: #2D456B; */
  text-indent: 0rem;
}

.reg {
  position: absolute;
  top: 18.5rem;
  right: 3.5rem;
  /* border: none; */
  /* color: #fff; */
  width: 18.825rem;
  /* text-align: center; */
  /* background-color: #2D456B; */
  text-indent: 0rem;
}

.img {
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: -1;
}

.wel {
  width: 415px;
  height: 35px;
  color: #2d456b;
  font-size: 1.5rem;
  position: absolute;
  top: 2rem;
  text-align: center;
}

input {
  border-bottom: 0.0625rem solid #2d456b;
  height: 2.5625rem;
  width: 15.8125rem;
  text-indent: 3.125rem;
  outline: none;
}

.user {
  position: absolute;
  top: 6rem;
  right: 3.5rem;
  display: flex;
}

.rem {
  position: absolute;
  top: 12.5rem;
  right: 18.7rem;
  border: none;
  color: #323333;
}

.rem input {
  width: 0.8125rem;
}

.fg {
  position: absolute;
  top: 12.3rem;
  right: 3.3rem;
  border: none;
  color: #323333;
}

#yonghu {
  border-bottom: 1px solid #2d456b;
  height: 41px;
  line-height: 41px;
}

#reb {
  margin-top: -33px;
  margin-left: 20px;
  font-size: 11px;
}

@media (min-width: 800px) and (max-width: 1200px) {
  .bg {
    width: 355px;
    height: 300px;
  }

  .wel {
    width: 355px;
  }

  .user {
    top: 5rem;
    right: 3.5rem;
  }

  .password {
    top: 8rem;
    right: 3.5rem;
  }

  input {
    width: 12rem;
  }

  .rem {
    top: 11rem;
    right: 14.3rem;
  }

  .fg {
    top: 11rem;
    right: 3.5rem;
  }

  .btn {
    top: 14rem;
    width: 15rem;
  }
}
</style>