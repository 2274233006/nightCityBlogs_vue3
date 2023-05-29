<div style="filter: grayscale(100%)">
<div align="center">
<img src="https://nightcityblogs-1312951467.cos.ap-shanghai.myqcloud.com/logo.jpg"/ >
<h1>nightCityBlogs</h1>
<h3>致力于促进技术交流和知识共享</h3>
</div>

### 功能特点

- 🥳 前后端免费开源可商用
- 😏集成redis
- 😃前端使用Vue3+create-vue搭建，后端使用SpringBoot+maven搭建，项目结构简单明了
- 😍集成腾讯云COS对象存储
- 😻小白一塌糊涂的屎山代码（这是特色）

### 技术栈——前端

- 简介

  基于Vue3搭建，页面样式取自开源项目[https://github.com/fengziye/Gblog](https://github.com/fengziye/Gblog)，接入后端，使用elementPlus，axios，vuex，vue-router完善项目，具体技术栈如下：

  Vue3、elementPlus、axios、v-md-editor（markdown编辑器）、highlight.js、vuex、vue3-layer、vue-router、MD5加密

### 作品展示

首页

![](https://nightcityblogs-1312951467.cos.ap-shanghai.myqcloud.com/README/home.png)

登录

![](https://nightcityblogs-1312951467.cos.ap-shanghai.myqcloud.com/README/login.png)

文章展示

![](https://nightcityblogs-1312951467.cos.ap-shanghai.myqcloud.com/README/article.png)

用户信息页

![](https://nightcityblogs-1312951467.cos.ap-shanghai.myqcloud.com/README/useradmin.png)

后台管理

![](https://nightcityblogs-1312951467.cos.ap-shanghai.myqcloud.com/README/admin1.png)

![](https://nightcityblogs-1312951467.cos.ap-shanghai.myqcloud.com/README/admin2.png)
### 安装和使用

请先安装Node.js 16.18.1（或更高版本） 下载链接：https://nodejs.org/zh-cn/download  安装完成后可在cmd中测试：``node -v``

本项目使用npm进行管理（用其他包管理工具的不慌，node自带）

1. 克隆项目到本地

   ```cmd
   git clone https://gitee.com/NightCityDemo/nightCityBlogs.git
   ```

2. 安装项目依赖（前端）

   ```cmd
   npm install
   ```

3. 打开项目文件夹，修改src/http/index中的baseURL为springboot的接口URL，后端项目地址点这儿 —>https://gitee.com/NightCityDemo/nightcityblogs_spring-boot

   ```js
   import axios from "axios";
    const instance = axios.create({
        baseURL: '更改为自己的URL，如下',
        // baseURL: 'http://localhost:1010/',
        timeout:10000,
    instance.interceptors.request.use....
    });
   ```

4. 启动项目前确保你已经部署完后端springBoot的程序以及Mysql、redis、同源策略等

   ```cmd
   # 启动项目
   npm run dev
   
   ```

5. 打包

   ```cmd
   npm run build
   # 打包后测试
   npm run preview
   ```

#### 文件结构

- node_modules  ——  项目依赖
- public  ——  图片资源
- src  —— 主要代码
  - assets  —— css
  - components  ——  vue组件
    - adminPage ——  后台管理
    - layout  ——  整体布局
    - login  ——  登录、注册、忘记密码
    - userPage  ——  用户信息页
    - views —— 导航栏中的主要组件
  - http  —— axios封装
  - router  ——  路由
  - state  ——  vuex

### 贡献指南

- 主要贡献者：[fengziye](https://github.com/fengziye)，[Gblog](https://github.com/fengziye/Gblog)   前端大部分代码基于这个博客模板，在样式方面基本没有修改，在这里也非常感谢fengziye提供的开源项目，写CSS真的太折磨人了
- CSDN、博客园、知乎、腾讯云开发者平台等多个平台的bug解决方案，也为我提供了很大的帮助，面向百度编程就是我

### 常见问题（FAQ）

1、项目启动跨域问题

我这里在前端没有做处理，在springboot中使用了``@CrossOrigin``注解解决跨域问题，具体如下：

```java
@CrossOrigin(origins = "vue访问地址", allowCredentials = "true")
```

​        将这里的地址替换为你的地址，就是你启动vue项目时访问的那个地址，这里应该是封装一个拦截类使用的，但写这个项目的时候临近期末，时间比较赶，就使用了这种适配性不太好的方法，后期我会更新仓库上传新的代码，当然您肯定有更好的解决方法

2、npm安装依赖报错

​        可能是npm安装的时候有问题，用管理员启动cmd就好了，我的是这样（对不起我是个笨比）

3、获取验证码时超时

​        这是本系统的一个痛点，虽然不常发生但是有几率，重新获取几遍试试，因为后端发邮件的类编写的有问题，发的慢了前端就报超时了，如果你有更好的解决方法，跪求教教我呜呜呜

4、network error

​        后端程序出问题或者网络问题，加油，自行排查，你可以的

#### 联系方式

前端项目部署较为简单，but我是个刚入行的新人，难免有出bug的地方，还请各位大佬见谅😭，非常欢迎大佬提出宝贵建议和意见，我的邮箱地址，看到一定会回复，再次感谢！

- 2274233006@qq.com
- Z1312f73@outlook.com

#### 开源协议

本项目使用[MIT](https://gitee.com/NightCityDemo/nightCityBlogs/blob/master/LICENSE)协议
