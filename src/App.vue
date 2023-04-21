<template>
  <div id="app" v-cloak>
    <layoutHeader></layoutHeader>
    <layoutBody></layoutBody>
    <layoutFooter></layoutFooter>
  </div>
</template>

<script>
import layoutHeader from '@/components/layout/layout-header.vue'
import layoutBody from '@/components/layout/layout-body.vue'
import layoutFooter from '@/components/layout/layout-footer.vue'
export default {
  components:{
    layoutHeader,
    layoutBody,
    layoutFooter
  },
  // mounted() {
  //   this.$axios.post('user/verify')
  // }
}
</script>
<style lang="less">
#app {
  font-size: 17px;
  color: #6f6f6f;
}
</style>