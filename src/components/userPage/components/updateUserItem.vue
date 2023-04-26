<template>
    <el-col class="show">
      <el-card shadow="hover">
        <el-avatar shape="square" :size="150" :src="url" class="avetar"/>
        <br><br>
        <el-row :gutter="20">
          <el-col :span="6"><div class="grid-content ep-bg-purple" />
            <el-input placeholder="用户名" ></el-input>
          </el-col>
          <el-col :span="6"><div class="grid-content ep-bg-purple" />
            <el-input placeholder="城市" ></el-input>
          </el-col>
          <el-col :span="6"><div class="grid-content ep-bg-purple" />
            <el-input placeholder="邮箱" disabled ></el-input>
          </el-col>
          <el-col :span="6"><div class="grid-content ep-bg-purple" />
            <el-input placeholder="权限" disabled ></el-input>
          </el-col>
        </el-row>
        <br>
        <el-button>提交信息</el-button>
      </el-card>
    </el-col>
</template>

<script>
export default {
  name: "updateUserItem"
}
</script>

<style>
.show{
  text-align: center;
}
</style>