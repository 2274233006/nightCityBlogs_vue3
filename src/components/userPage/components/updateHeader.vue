<template>
  <el-upload
      class="avatar-uploader"
      action="http://localhost:1010/update/uploadImg"
      :show-file-list="false"
      :headers='headerObj'
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
    <img v-if="imageUrl" :src="imageUrl" class="avatar">
    <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
  </el-upload>
  点击+号选择文件自动上传,如果基本信息页面没有变化就刷新一下
</template>

<script>
import store from "@/state";

export default {
  name: "updateHeader",
  data() {
    return {
      imageUrl: '',
      headerObj:{
        satoken:localStorage.getItem('token')
      }
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      console.log(res)
      this.imageUrl = URL.createObjectURL(file.raw);
      if(res.code === 200){
        const userItem = JSON.stringify(res.data)
        localStorage.setItem('userItem', userItem)
        store.dispatch('initUserItem');
        layer.msg(res.msg,{icon:1,time:2000})
      }else if(res.code === 501){
        layer.msg(res.msg,{icon:2,time:2000})
        setTimeout(()=>{
          this.$router.push("/")
        },2000)
      }else layer.msg(res.msg,{icon:2,time:2000})

    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
  }
}
</script>

<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>