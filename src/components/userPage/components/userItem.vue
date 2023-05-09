<template>
  <div class="useritem">
    <el-col :span="40" class="show">
      <el-card shadow="hover">
        <el-avatar  :size="170" :src="userItem.headPortrait" class="avetar"/>
        <el-descriptions title="个人信息" size="large" direction="horizontal" :column=2 class="desc">
          <el-descriptions-item label="用户名" align="center" label-align="center">{{ userItem.username }}
          </el-descriptions-item>

          <el-descriptions-item label="邮箱" align="center" label-align="center">
            {{userItem.emailAddress}}
          </el-descriptions-item>
          <el-descriptions-item label="权限" align="center" label-align="center">{{ userItem.role }}
          </el-descriptions-item>
          <el-descriptions-item label="所处城市 " align="center" label-align="center"
          >{{ userItem.address }}
          </el-descriptions-item>
        </el-descriptions>
      </el-card>
    </el-col>
  </div>
</template>

<script>
export default {
  name: "userItem",
  data() {
    return {
    }
  },
  computed: {
    userItem() {
      return this.$store.state.userItem
    }
  }
}
</script>


<style scoped>
.useritem {
  width: 100%;
  height: 100%;
}

.show {
  width: 100%;
  height: 100%;
  text-align: center;
}
</style>
