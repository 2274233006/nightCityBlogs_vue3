<template>
  <div class="area">
    <div class="bg">

      <div class="wel">nightCity blogs</div>

      <div class="user">
        <div id="yonghu" style="">用&nbsp;&nbsp;户&nbsp;&nbsp;名</div>
        <el-popover
            placement="top-start"
            title="提示"
            :width="200"
            trigger="hover"
            content="请注意区分大小写">
          <template #reference>
            <input class="m-2" type="text" name="用户" v-model="username"/>
          </template>
        </el-popover>
      </div>

      <div class="email">
        <div id="yonghu">邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱</div>
        <el-popover
            placement="top-start"
            :width="250"
            trigger="click"
            content="填写用户名对应的邮箱">
          <template #reference>
            <input type="text" name="邮箱" v-model="email">
            <el-button type="primary" style="height: 45px;">获取验证码</el-button>
          </template>
        </el-popover>
      </div>

      <div class="verification">
        <div id="yonghu">验&nbsp;&nbsp;证&nbsp;&nbsp;码</div>
        <el-popover
            placement="top-start"
            :width="250"
            trigger="click"
            content="发你邮箱啦">
          <template #reference>
            <input type="text" name="验证码" v-model="verification">
          </template>
        </el-popover>
      </div>

      <div class="password" >
        <div id="yonghu">新&nbsp;&nbsp;密&nbsp;&nbsp;码</div>
        <el-popover
            placement="top-start"
            :width="250"
            trigger="click"
            content="8~16位数字或字母，区分大小写，不允许汉字哦，这次可别忘了">
          <template #reference>
            <input type="password" name="密码" v-model="newPassword"/>
          </template>
        </el-popover>
      </div>
      <div class="button">
        <el-button>获取验证码</el-button>
      </div>
      <el-button class="btn" type="primary">
        找回
      </el-button>
      <div class="reg">
        <el-link @click="login">返回登录页面</el-link>
      </div>
    </div>
  </div>
</template>


<script>
import store from "@/state";

export default {
  data() {
    return {
      username: "",//用户名
      newPassword: "",//新密码
      verification:"",//验证码
      email:""//邮箱
    };
  },
  methods: {
    //登录跳转
    login() {
      this.$router.push("/login");
    },
  },
  mounted() {
    localStorage.setItem('conceal',false)
    store.dispatch('init')
  }
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
.bg{
  width: 500px;
  height: 390px;
  background: #fff;
  position: relative;
  position:absolute;
  left:0px;
  top:0px;
  right:0px;
  bottom:0px;
  margin:auto;
  z-index: 1;
  box-shadow:0px 0px 50px rgba(0, 0, 0, 0.4);
  border-radius: 15px;
}
.area{
  height: 100vh;
  background-image: url("/public/login.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.password{
  position: absolute;
  top: 16.0rem;
  right: 3.5rem;
  display: flex;
}
.button{
  position: absolute;
  top: 9.5rem;
  right: 3.5rem;
  display: flex;
}
.verification{
  position: absolute;
  top: 12.8rem;
  right: 3.5rem;
  display: flex;
}
.email{
  position: absolute;
  top: 9.5rem;
  right: 3.5rem;
  display: flex;

}
.btn{
  position: absolute;
  top: 19.5rem;
  right: 3.5rem;
  width: 23.5rem;
  text-indent: 0rem;
}
.reg{
  position: absolute;
  top: 21.825rem;
  right: -3rem;
  width: 21.5rem;
  text-indent: 0rem;
}

.wel{
  width: 415px;
  height: 315px;
  color: #2d456b;
  font-size: 1.5rem;
  position: absolute;
  top: 2rem;
  padding-left: 150px;
}
input {
  border-bottom: 0.0625rem solid #2d456b;
  height: 2.5625rem;
  width: 18.8125rem;
  text-indent: 2.125rem;
  outline: none;
  border-top-width: 0px;
  border-top-style: solid;
  border-left-width: 0px;
  border-left-style: solid;
  border-right-width: 0px;
  border-right-style: solid;
}
.user{
  position: absolute;
  top: 6rem;
  right: 3.5rem;
  display: flex;

}
.rem input{
  width: 0.8125rem;
}
#yonghu{
  border-bottom:1px solid #2D456B;
  height: 41px;
  line-height: 41px;

}
@media (min-width:800px) and (max-width:1200px)

{
  .bg{
    width: 355px;
    height: 300px;
  }
  .wel{
    width: 355px;
  }
  .user{
    top: 5rem;
    right: 3.5rem;
  }
  .password{
    top: 8rem;
    right: 3.5rem;
  }
  input{

    width: 12rem;
  }
  .btn{
    top: 14rem;
    width: 15rem;
  }

}

</style>