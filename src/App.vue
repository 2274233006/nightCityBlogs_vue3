<template>
  <div id="app" v-cloak>
    <layoutHeader v-if="conceal"></layoutHeader>
    <layoutBody></layoutBody>
    <layoutFooter v-if="conceal"></layoutFooter>
  </div>
</template>

<script>
import layoutHeader from '@/components/layout/layout-header.vue'
import layoutBody from '@/components/layout/layout-body.vue'
import layoutFooter from '@/components/layout/layout-footer.vue'
import { mapState } from 'vuex'
export default {
  components:{
    layoutHeader,
    layoutBody,
    layoutFooter
  },
  computed:{
    ...mapState(['conceal'])
  }
}
</script>
<style lang="less">
#app {
  font-size: 17px;
  color: #6f6f6f;
}
</style>