<template>
    <div id="layout-body">
      <!--主要页面路由入口-->
      <RouterView></RouterView>
      <!--点击上滑-->
        <back-top></back-top>
    </div>
</template>

<script>
    import backTop from '@/components/back-top.vue'
    export default {
        data(){
          return{
              minHeight: 600
          }
        },
        components: {
          backTop
        }
    }
</script>

<style scoped>
#layout-body{
    /* header = 80px */
    min-height: -moz-calc(100vh - 80px);
    min-height: -webkit-calc(100vh - 80px);
    min-height: calc(100vh - 80px);
}
</style>
