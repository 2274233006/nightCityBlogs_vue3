<template>
  <el-table :data="userItem" style="width: 100%">
    <el-table-column prop="id" label="ID" width="60"/>
    <el-table-column prop="userName" label="用户名" width="120"/>
    <el-table-column prop="role" label="权限" width="120"/>
    <el-table-column prop="password" label="密码" width="120"/>
    <el-table-column prop="emailAddress" label="邮箱" width="250"/>
    <el-table-column prop="creatTime" label="创建时间" width="250"/>
    <el-table-column prop="updateTime" label="更新时间" width="250"/>
    <el-table-column prop="address" label="地址" width="250"/>
    <el-table-column fixed="right" label="管理" width="120">
      <!--删除修改-->
      <template #default="scope">
        <el-button link type="primary" size="small" @click="deleteUser(scope.row.userName)">删除</el-button>
        <el-button link type="primary" size="small">
          <router-link to="/adminUserItem" @click="saveUserItem(scope.row)">
            修改
          </router-link>
        </el-button>
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
      @click="this.getUserItem()"
  />
</template>

<script>
//用户管理
import store from "@/state";
export default {
  name: "adminUser",
  data() {
    return {
      userItem: [],
      pagination: 1,//页码
      total: 1,
      dialogVisible: false
    }
  },
  mounted() {
    this.getUserItem()
  },
  computed: {
    offset() {
      return 10 * (this.pagination - 1)
    }
  },
  methods: {
    saveUserItem(userItem){
      const userItemOne = JSON.stringify(userItem)
      localStorage.setItem("userItemOne",userItemOne)
      store.dispatch("initUserItemOne")
    },
    getUserItem() {
      this.$axios.get('admin/getUser/' + this.offset, {}).then((res) => {
        const number = res.data.msg
        this.total = number * 20 / 10
        this.userItem = res.data.data
      })
    },
    deleteUser(userName) {
      layer.msg('删除该用户？', {
        btn: ['确认', '取消'] //按钮
        , icon: 3
      }, () => {
        this.$axios.delete('admin/deleteUser/' + userName, {}).then((res) => {
          if (res.data.code === 500) {
            layer.msg(res.data.msg, {icon: 2, time: 2000})
            setTimeout(() => {
              this.$router.push('/')
            }, 2000)
          } else if (res.data.code === 200) {
            this.getUserItem()
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