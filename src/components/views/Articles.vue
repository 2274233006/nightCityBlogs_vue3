<template>
  <div class="articles">
    <banner></banner>
    <div class="site-content animate">
      <!-- 文章目录 -->
<!--      <div id="article-menus">-->
<!--        <menu-tree :menus="menus" child-label="child"></menu-tree>-->
<!--      </div>-->
      <main class="site-main">
        <article class="hentry">
          <!-- 文章头部 -->
          <header class="entry-header">
            <!-- 标题输出 -->
            <h1 class="entry-title">看一遍闭着眼都会安装Lua了</h1>
            <hr>
            <div class="breadcrumbs">
              <div id="crumbs">最后更新时间：2020年04月21日</div>
            </div>
          </header>
          <!-- 正文输出 -->
          <div class="entry-content">
            <v-md-preview-html :html="html" preview-class="vuepress-markdown-body"></v-md-preview-html>
          </div>
          <!-- 文章底部 -->
          <section-title>
            <footer class="post-footer">
              <!-- 阅读次数 -->
              <div class="post-like">
                <i class="iconfont iconeyes"></i>
                <span class="count">685</span>
              </div>

              <div class="post-tags">
                <i class="iconfont iconcategory"></i>
                <router-link to="/">返回首页</router-link>
              </div>
            </footer>
          </section-title>

          <!--声明-->
          <div class="open-message">
            <p>声明：Gblog博客|版权所有，违者必究|如未注明，均为原创|本网站采用<a
                href="https://creativecommons.org/licenses/by-nc-sa/3.0/" target="_blank">BY-NC-SA</a>协议进行授权</p>
            <p>转载：转载请注明原文链接 - <a href="/public">看一遍闭着眼都会安装Lua了</a></p>
          </div>
          <!--评论-->
          <div class="comments">
            评论功能未开发
          </div>
        </article>
      </main>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/banner.vue'
import sectionTitle from '@/components/section-title.vue'
export default {
  name: 'articles',
  data() {
    return {
      html:"<h1>1111111111</h1>",
      showDonate: false,
    }
  },
  components: {
    Banner,
    sectionTitle,
  },
  methods: {

  },
  mounted() {
  },
}
</script>
<style scoped lang="less">
.site-content {
  position: relative;

  .site-main {
    padding: 80px 0 0 0;
  }
}

#article-menus {
  position: sticky;
  top: 0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, .1);
  border-radius: 3px;
  padding: 15px;
  width: 300px;
  transform: translateX(-120%) translateY(150px);
  font-size: 14px;
}

article.hentry {
  .entry-header {
    .entry-title {
      font-size: 23px;
      font-weight: 600;
      color: #737373;
      margin: 0.67em 0;

      &:before {
        content: "#";
        margin-right: 6px;
        color: #d82e16;
        font-size: 20px;
        font-weight: 600;
      }
    }

    hr {
      height: 1px;
      border: 0;
      background: #EFEFEF;
      margin: 15px 0;
    }

    .breadcrumbs {
      font-size: 14px;
      color: #D2D2D2;
      text-decoration: none;
      margin-bottom: 30px;
    }
  }

  .entry-content {
  }

  footer.post-footer {
    width: 100%;
    padding: 20px 10px;
    margin-top: 30px;
    height: 65px;
    position: relative;

    i {
      font-size: 18px;
      margin-right: 5px;
    }

    .post-like {
      float: right;
      margin: 7px 0 0 20px;
    }

    .post-share {
      float: right;
      list-style: none;
      margin-right: 20px;
    }

    .donate {
      float: left;
      line-height: 36px;
      border-radius: 100%;
      -webkit-border-radius: 100%;
      -moz-border-radius: 100%;
      border: 1px solid #2B2B2B;

      &:hover {
        border: 1px solid goldenrod;

        span {
          color: goldenrod;
        }
      }

      span {
        color: #2B2B2B;
        padding: 10px;
        position: relative;
        cursor: pointer;
      }

      .donate_inner {
        display: none;
        margin: 0;
        list-style: none;
        position: absolute;
        left: 80px;
        top: -40px;
        background: #FFF;
        padding: 10px;
        border: 1px solid #ddd;
        box-shadow: 0 2px 6px rgba(0, 0, 0, .08);
        border-radius: 3px;

        &.show {
          display: block;
        }

        li {
          float: left;
        }

        img {
          width: 100px;
        }

        p {
          text-align: center;
          font-size: 15px;
          color: #D2D2D2;
          line-height: 1rem;
        }
      }

      .donate_inner:after, .donate_inner:before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 45%;
        margin-left: -8px;
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
        border-right: 8px solid #fff;
      }

      .donate_inner:before {
        left: -1px;
        border-right: 8px solid #ddd;
      }

    }

    .post-tags {
      margin: 7px 0 0 20px;
      float: left;
      text-transform: uppercase;

      a:hover {
        color: #ff6d6d;
      }
    }
  }

  .open-message {
    margin: 50px 0;
    position: relative;
    background: #2B2B2B;
    padding: 10px 30px;
    border-radius: 3px;
    font-size: 14px;
    color: #fff;

    &:after {
      content: "";
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 10px solid #2B2B2B;
      position: absolute;
      top: -8px;
      left: 48%;
    }

    p {
      margin: 10px 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    a {
      color: #A0DAD0;
      padding: 0 5px;
    }
  }
}

@media (max-width: 1490px) {
  #article-menus {
    display: none;
  }
}

@media (max-width: 800px) {
  #article-menus {
    display: none;
  }
}
</style>
