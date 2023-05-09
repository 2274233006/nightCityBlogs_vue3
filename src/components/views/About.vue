<template>
  <div class="about">
    <div class="site-content">
      <div class="content-warp">
        <div class="about-site about-info">
          <section-title><span>❤</span>关于博客</section-title>
          <div class="info-card">
            <p>博客前端基于github中的<a target="_blank" href="https://github.com/fengziye/Gblog"
                                        style="color: #ff6d6d;">Gblog</a>搭建（写CSS太难了呜呜呜）</p>
            <p>非常感谢<a target="_blank" href="https://gitee.com/fengziy" style="color: #ff6d6d;">fengziy</a>的开源支持
            </p>
            <p><a target="_blank" href="https://gitee.com/fengziy/Gblog" style="color: #ff6d6d;">Gitee仓库</a> | <a
                target="_blank" href="https://github.com/fengziye/Gblog" style="color: #ff6d6d;">Github仓库</a></p>
            <br>
            <p>基于这个模板做了一定修改，加入了登录注册、用户主页、后台管理等一些基础功能，集成了一言API，后台使用springBoot搭建,
              因为项目上线所以后端代码暂未开源</p>
          </div>
        </div>
        <div class="about-me about-info">
          <section-title id="Guestbook"><span>❤</span>给我留言</section-title>
          <div class="info-card">
            <div class="contactForm">
              <div class="form-item">
                <label for="mail">邮箱</label>
                <input class="v" type="email" name="mail" id="mail" v-model="email">
              </div>
              <div class="form-item">
                <label for="content">内容</label>
                <textarea class="v" id="content" name="content" v-model="text"></textarea>
              </div>
              <div class="form-item">
                <label></label>
                <button @click="leaveWord">提交</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import sectionTitle from '@/components/section-title.vue'

export default {
  name: "About",
  data() {
    return {
      list: [],
      email: "",
      text: "",
    }
  },
  components: {
    sectionTitle
  },
  methods: {
    leaveWord() {
      layer.load()
      if (this.email === "") {
        layer.closeAll("loading")
        layer.msg("邮箱不能为空", {icon: 2, time: 2000})
      } else if (!/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(this.email)) {
        layer.closeAll("loading")
        layer.msg("请输入正确的邮箱格式", {icon: 2, time: 2000})
      } else if (this.text === "") {
        layer.closeAll("loading")
        layer.msg("留言内容不能为空", {icon: 2, time: 2000})
      } else {
        this.$axios({
          method: 'POST',
          url: 'mail/leaveWord',
          data: "留言邮箱：" + this.email + "   " + "留言内容：" + this.text,
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          }
        }).then((res) => {
          layer.closeAll("loading")
          if (res.data.code === 200)
            layer.msg(res.data.msg, {icon: 1, time: 2000})
          else layer.msg(res.data.msg, {icon: 2, time: 2000})
        })
      }
    },
  }
}
</script>
<style scoped lang="less">
.about {
  padding-top: 40px;
}

.content-warp {
  margin-top: 80px;

  .about-info {
    margin: 30px 0;

    span {
      color: red;
      margin-right: 10px;
    }

    .info-card {
      min-height: 100px;
      padding: 20px;
      border-radius: 3px;
      margin: 30px 0 50px 0;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

      p {
        line-height: 1.7rem;
      }
    }
  }

  .contactForm {
    width: 100%;
    padding: 20px;

    .form-item {
      align-items: center;
      display: flex;

      &:not(:last-child) {
        margin-bottom: 20px;
      }

      label {
        width: 80px;
      }

      .v {
        min-height: 40px;
        line-height: 20px;
        border-radius: 3px;
        padding: 2px 10px;
        outline: none;
        border: 1px solid #8fd0cc;
        width: 100%;
        resize: vertical;
      }

      button {
        width: 100px;
        height: 40px;
        border-radius: 3px;
        outline: 0;
        border-style: none;
        cursor: pointer;
        background-color: #409eff;
        color: white;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
}

/*******/
@media (max-width: 800px) {
  .content-warp {
    margin-top: 0;
  }
}
</style>
