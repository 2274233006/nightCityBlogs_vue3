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
            console.log(value)
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
            })
          })
    },
    getClassification() {
      this.$axios.get('classification/getAll/'+this.offset, {}).then((res) => {
        const number = res.data.msg
        this.total = number * 20 / 10
        this.classification = res.data.data
      })
    },
    SaveClassification(article) {
      console.log(article)
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
        })
      });
    },
  }
}
</script>

<style scoped>

</style>