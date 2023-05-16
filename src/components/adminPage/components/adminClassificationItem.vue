<template>
  <el-card shadow="hover">
    <el-row :gutter="20">

      <el-col :span="6">
        <div class="grid-content ep-bg-purple"/>
        <el-form-item label="id">
          <el-input v-model="classificationItem.id" disabled/>
        </el-form-item>
      </el-col>

      <el-col :span="6">
        <div class="grid-content ep-bg-purple"/>
        <el-form-item label="分类">
          <el-input v-model="classificationItem.classification"/>
        </el-form-item>
      </el-col>


    </el-row>
    <br>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content ep-bg-purple"/>
        <el-form-item label="创建时间">
          <el-input v-model="classificationItem.creatTime" disabled/>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <div class="grid-content ep-bg-purple"/>
        <el-form-item label="更新时间">
          <el-input v-model="classificationItem.updateTime" disabled/>
        </el-form-item>
      </el-col>
    </el-row>
    <br>
    <el-button type="primary" @click="this.$router.push('/adminClassification')">返回上页</el-button>
    <el-button type="primary" @click="submit">提交更改</el-button>
  </el-card>
</template>

<script>
export default {
  name: "adminClassificationItem",
  data() {
    return {
      classificationItem: {}
    }
  },
  computed: {
    classificationOne() {
      console.log(this.$store.state.classification)
      return this.$store.state.classification
    }
  },
  methods: {
    submit() {
      console.log(this.$store.state.classification.classification)
      if (this.classificationItem.classification!==""){
        this.$axios.put("classification/updateClassification", {
          id: this.classificationOne.id,
          classification:JSON.parse(localStorage.getItem('classification')).classification,
          newClassification:this.classificationItem.classification
        }).then((res)=>{
          if(res.data.code === 200){
            layer.msg(res.data.msg,{icon:1,time:2000})
          }else if(res.data.code === 501){
            layer.msg(res.data.msg,{icon:2,time:2000})
            setTimeout(()=>{
              this.$router.push('/')
            },2000)
          }else layer.msg(res.data.msg,{icon:2,time:2000})
        })
      }else layer.msg("填写信息不全",{icon:2,time:2000})
    }
  },
  mounted() {
    this.classificationItem = this.$store.state.classification
  }
}
</script>

<style scoped>

</style>