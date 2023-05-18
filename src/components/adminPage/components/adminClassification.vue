<template>
  <el-table :data="classification" style="width: 100%">
    <el-table-column prop="id" label="ID" width="60"/>
    <el-table-column prop="classification" label="分类" width="150"/>
    <el-table-column prop="creatTime" label="创建时间" width="250"/>
    <el-table-column prop="updateTime" label="更新时间" width="250"/>
    <el-table-column fixed="right" label="管理" width="160">
      <!--删除修改-->
      <template #default="scope">
        <el-button link type="primary" size="small" @click="deleteClassification(scope.row.id)">删除</el-button>
        <el-button link type="primary" size="small">
          <router-link to="/adminClassificationItem" @click="SaveClassification(scope.row)">
            修改
          </router-link>
        </el-button>
        <el-button text @click="open" type="primary" size="small">新增</el-button>
      </template>
    </el-table-column>
  </el-table>
  <!--分页-->
  <el-pagination
      v-model:current-page="pagination"
      :page-size="20"
      background
      layout="prev, pager, next"
      :total="total"
      @click="this.getClassification()"
  />

</template>

<script>
//分类管理
import store from "@/state";
import {ElMessage, ElMessageBox} from 'element-plus';

export default {
  name: "adminClassification",
  data() {
    return {
      classification: [],
      pagination: 1,//页码
      total: 1,
    }
  },
  computed:{
    offset() {
      return 10 * (this.pagination - 1)
    }
  },
  mounted() {
    this.getClassification()
  },
  methods: {
    open() {
      ElMessageBox.prompt('分类名称', 'Tip', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
      })
          .then(({value}) => {
            this.$axios.post('classification/addClassification/'+value,{

            }).then((res)=>{
              if (res.data.code === 500) {
                layer.msg(res.data.msg, {icon: 2, time: 2000})
                setTimeout(() => {
                  this.$router.push('/')
                }, 2000)
              } else if (res.data.code === 200) {
                this.getClassification()
                layer.msg(res.data.msg, {icon: 1, time: 2000});
              } else layer.msg(res.data.msg, {icon: 2, time: 2000});
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
          })
    },
    getClassification() {
      this.$axios.get('classification/getAll/'+this.offset, {}).then((res) => {
        const number = res.data.msg
        this.total = number * 20 / 10
        this.classification = res.data.data
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
    SaveClassification(article) {
      const classification = JSON.stringify(article)
      localStorage.setItem("classification", classification)
      store.dispatch("initClassification")
    },
    deleteClassification(id) {
      layer.msg('删除该用户？', {
        btn: ['确认', '取消'] //按钮
        , icon: 3
      }, () => {
        this.$axios.delete('classification/deleteClassification/' + id, {}).then((res) => {
          if (res.data.code === 500) {
            layer.msg(res.data.msg, {icon: 2, time: 2000})
            setTimeout(() => {
              this.$router.push('/')
            }, 2000)
          } else if (res.data.code === 200) {
            this.getClassification()
            layer.msg('删除成功', {icon: 1, time: 2000});
          } else layer.msg(res.data.msg, {icon: 2, time: 2000});
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
      });
    },
  }
}
</script>

<style scoped>

</style>