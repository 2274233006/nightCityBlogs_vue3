
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
            v-model="password"
            @keyup.enter=""
        />
      </div>
      <div class="password2" >
        <div id="yonghu" >确认密码</div>
        <el-popover
            placement="top-start"
            :width="250"
            trigger="click"
            content="请确保与先前输入一致">
          <template #reference>
            <input :type="inputStatus" name="密码" v-model="notarizePassword"/>
          </template>
        </el-popover>
      </div>
      <div class="email" >
        <div id="yonghu" >邮&emsp;&emsp;箱</div>
        <el-popover
            placement="top-start"
            :width="250"
            trigger="click"
            content="确保邮箱地址格式正确且可用">
          <template #reference>
            <input type="text" name="密码" v-model="email" />
          </template>
        </el-popover>
      </div>
      <div class="button">
        <el-button>get验证码</el-button>
      </div>
      <div class="rem">
        <el-icon v-if="!rem" @click="remStatus"><View /></el-icon>
        <el-icon v-if="rem" @click="remStatus"><Hide /></el-icon>
      </div>
      <div class="emailAuthCode" >
        <div id="yonghu" >邮箱验证</div>
        <el-popover
            placement="top-start"
            :width="250"
            trigger="click"
            content="或者应该可能发你邮箱啦">
          <template #reference>
            <input type="text" name="验证码" v-model="verification"/>
          </template>
        </el-popover>
      </div>
      <!-- 通过v-model绑定rem传递Boolean值判定是否记忆 -->
      <el-button class="btn" type="primary">
        注册
      </el-button>
      <div class="reg">
        <el-link @click="login">有账号快去登录</el-link>
      </div>
    </div>
  </div>

</template>


<script>
import store from "@/state";

export default {
  data() {
    return {
      username: "",
      password: "",
      notarizePassword:"",//确认密码
      email:"",
      verification:"",//验证码
      rem:true,
      inputStatus:"password"

    };
  },
  methods: {
    //登录跳转
    login() {
      this.$router.push("/login");
    },
    registered(){
      this.$router.push("/registered")
    },
    remStatus(){
      if(this.rem){
        this.rem = false
        this.inputStatus ="text"
      }else {
        this.rem = true
        this.inputStatus ="password"
      }
    },
  },
  mounted() {
    localStorage.setItem('conceal',false)
    store.dispatch('initConst')
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
  height: 445px;
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
  top: 9.5rem;
  right: 3.5rem;
  display: flex;
}
.password2{
  position: absolute;
  top: 12.8rem;
  right: 3.5rem;
  display: flex;
}
.email{
  position: absolute;
  top: 16.1rem;
  right: 3.5rem;
  display: flex;
}
.button{
  position: absolute;
  top: 16.1rem;
  right: 3.5rem;
  display: flex;
}
.emailAuthCode{
  position: absolute;
  top: 19.6rem;
  right: 3.5rem;
  display: flex;
}
.btn{
  position: absolute;
  top: 23.1rem;
  right: 3.5rem;
  /* border: none; */
  /* color: #fff; */
  width: 25.5rem;
  /* text-align: center; */
  /* background-color: #2D456B; */
  text-indent: 0rem;
}
.reg{
  position: absolute;
  top: 25.7rem;
  right: -2rem;
  /* border: none; */
  /* color: #fff; */
  width: 22rem;
  /* text-align: center; */
  /* background-color: #2D456B; */
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
  width: 20.8125rem;
  text-indent: 1rem;
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
.rem {
  position: absolute;
  top: 10.5rem;
  right: 3.7rem;
  border: none;
  color: #323333;
}
.rem input{
  width: 0.8125rem;
}
.fg{
  position: absolute;
  top: 12.5rem;
  right: 3.3rem;
  border: none;
  color: #323333;
}
#yonghu{
  border-bottom:1px solid #2D456B;
  height: 41px;
  line-height: 41px;

}
#reb{
  margin-top: -33px;
  margin-left: 20px;
  font-size: 11px;
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
  .rem{
    top: 11rem;
    right: 14.3rem;
  }
  .fg{
    top: 11rem;
    right: 3.5rem;
  }
  .btn{
    top: 14rem;
    width: 15rem;
  }

}

</style>