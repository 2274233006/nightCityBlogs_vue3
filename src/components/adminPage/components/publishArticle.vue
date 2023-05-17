<template>
  <div class="container">
    <div class="editor">
      <v-md-editor v-model="contents" height="800px"></v-md-editor>
    </div>
    <div class="card">
      <el-card shadow="hover">
        <el-row>
          <el-col>
            <el-form-item label="标题" >
              <el-input v-model="title"/>
            </el-form-item>
            <el-form-item label="简介" >
              <el-input type="textarea" v-model="summary"/>
            </el-form-item>
            <el-form-item label="分类">
              <el-select v-model="classificationOne">
                <div v-for="item in classification">
                  <el-option :label="item.classification" :value="item.classification"/>
                </div>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col>
            <el-switch
                v-model="isFocus"
                class="ml-2"
                style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
            />&emsp;设置为焦点文章
          </el-col>

          <br>
          <el-button type="primary" @click="publishArticle">发布</el-button>
        <el-upload
            class="avatar-uploader"
            :action=banner
            :show-file-list="false"
            :headers='headerObj'
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <el-icon v-else class="avatar-uploader-icon">
            <Plus/>
          </el-icon>
          上传图片，需在文章发布后上传
        </el-upload>
        </el-row>
        <br><br><br><br><br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br><br><br><br><br>
        <br>
      </el-card>
    </div>
  </div>
</template>

<script>
//发布文章
import store from "@/state";

export default {
  name: "publishArticle",
  data() {
    return {
      imageUrl: '',
      contents: "",//文章内容
      title: "",//标题
      summary: "",//文章简介
      classification: [],//分类
      classificationOne:"",
        isFocus:"false",
      headerObj:{
        satoken:localStorage.getItem('token')
      }
    }
  },
  computed:{
    banner(){
      return "http://localhost:1010/admin/uploadImg/"+this.title
    }
  },
  mounted() {
    this.getClassification();
  },
  methods:{
    getClassification(){
      this.$axios.get('classification/getAll',{
      }).then((res)=>{
        this.classification = res.data.data
      })
    },
    publishArticle(){
      if(this.contents!==""&&this.title!==""&&this.summary!==""&&this.classification!==""){
        this.$axios.put('admin/publishArticle',{
          title:this.title,
          summary:this.summary,
          contents:this.contents,
          classification:this.classificationOne,
          isFocus:this.isFocus
        }).then((res)=>{
          if(res.data.code === 200){
            layer.msg(res.data.msg,{icon:1,time:2000})
          }else if(res.data.code === 501){
            layer.msg(res.data.msg,{icon:2,time:2000})
            setTimeout(()=>{
              this.$router.push("/")
            },2000)
          }else layer.msg(res.data.msg,{icon:2,time:2000})
        })
      }else layer.msg("文章信息不全",{icon:2,time:2000})
    },
    handleAvatarSuccess(res, file) {
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
.container {
  display: flex;
}

.editor {
  /*flex: 1;*/
  width: 400vh;
}

.card {
  margin-left: 10px;
  width: 100%;
  height: 100%;
}

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