

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
            :type="inputStatus"
            name="密码"
            v-model="password"/>
      </div>
      <div class="fg">
        <div style="font-size: 12px; margin-top: 11px">
          <el-link @click="forget">忘记密码</el-link>
        </div>
      </div>
      <div class="rem">
        <el-icon v-if="!rem" @click="remStatus"><View /></el-icon>
        <el-icon v-if="rem" @click="remStatus"><Hide /></el-icon>
      </div>
      <el-button class="btn" type="primary" @click="login">
        登录
      </el-button>
      <div class="reg">
        <el-link @click="registered">没账号还不注册</el-link>
      </div>
    </div>
  </div>
</template>




<script>
import store from "@/state";
import {mapState} from "vuex";
export default {
  data() {
    return {
      username: "",
      password: "",
      rem:true,
      inputStatus:"password"
    };
  },
  computed:{
    ...mapState(['userItem']),
  },
  methods: {
    remStatus(){
      if(this.rem){
        this.rem = false
        this.inputStatus ="text"
      }else {
        this.rem = true
        this.inputStatus ="password"
      }
    },
    //登录
    async login() {
      if(this.username == ""){
        layer.msg('用户名不能为空',{icon:2,time:1000})
        return
      }else if(this.password == ""){
        layer.msg('密码不能为空',{icon:2,time:1000})
      }
      else{
        await this.loginCheck();
      }
    },
    //注册
    registered() {
      this.$router.push("/registered")
    },
    //忘记密码
    forget() {
      this.$router.push("/forget")
    },
    //登录
    async loginCheck(){
      await this.$axios.post('user/login',{
        username:this.username,
        password:this.password
      }).then((res)=>{
        layer.load();
        if(res.data.code === 200) {
          // localStorage中需要存储json
          const userItem = JSON.stringify(res.data.data)
          localStorage.setItem('token',res.data.data.token)

          localStorage.setItem('userItem', userItem)
          store.dispatch('initUserItem');

          localStorage.setItem('loginStatus',true)
          store.dispatch('initLoginStatus');
          setTimeout(()=>{
            this.$router.push('/')
            layer.closeAll('loading');
            layer.msg('登录成功！',{icon:1,time:2000})
          },1000)
        }else{
          setTimeout(()=>{
            layer.closeAll('loading');
            layer.msg('登录失败！'+" "+res.data.msg,{icon:2,time:2000})
          },1000)
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
  },
  mounted() {
    localStorage.setItem('conceal', false)
    store.dispatch('initConceal')
  },
};
</script>


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

.area {
  height: 100vh;
  background-image: url("/public/login.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

.bg {
  width: 415px;
  height: 320px;
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
  top: 14.6rem;
  right: 3.5rem;
  /* border: none; */
  /* color: #fff; */
  width: 20.3rem;
  /* text-align: center; */
  /* background-color: #2D456B; */
  text-indent: 0rem;
}

.reg {
  position: absolute;
  top: 17.2rem;
  right: 3.6rem;
  /* border: none; */
  /* color: #fff; */
  width: 13.6rem;
  /* text-align: center; */
  /* background-color: #2D456B; */
  text-indent: 0rem;
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
  text-indent: 1rem;
  outline: none;
  border-top-width: 0px;
  border-top-style: solid;
  border-left-width: 0px;
  border-left-style: solid;
  border-right-width: 0px;
  border-right-style: solid;
}

.user {
  position: absolute;
  top: 6rem;
  right: 3.5rem;
  display: flex;
}

.rem {
  position: absolute;
  top: 10.5rem;
  right: 3.7rem;
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