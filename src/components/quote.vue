<template>
    <div class="quote">{{ hitokoto }}</div>
</template>

<script>
import axios from "axios";
    export default {
        name: "quote",
      data(){
          return{
            hitokoto:"",
            timer:''
          }
      },
      mounted() {
          this.getHitokoto()
      },
      methods:  {
        async getHitokoto(){
          axios.get('https://v1.hitokoto.cn/?c=d',{
            }).then((res)=>{
              this.hitokoto = res.data.hitokoto
            })
          }
      },
      beforeUnmount() {
        clearInterval(this.timer); // 在组件销毁时清除定时器
      }
    }
</script>

<style scoped>
.quote{
    border-left: 3px solid #ff6d6d;
    background-color: #FBFBFB;
    padding: 20px 20px;
    border-radius: 5px;
}
</style>
