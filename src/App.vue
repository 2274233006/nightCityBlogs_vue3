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
import store from "@/state";
export default {
  components:{
    layoutHeader,
    layoutBody,
    layoutFooter
  },
  computed:{
    ...mapState(['conceal'])
  },
  methods:{

  },
  mounted() {
    this.$axios.post('user/verify',{

    }).then((res)=>{
      if(!res.data){
        localStorage.setItem('loginStatus',false)
        store.dispatch('initLoginStatus');
      }
      else {
        localStorage.setItem('loginStatus',true)
        store.dispatch('initLoginStatus');
      }

    })
  }
}
</script>
<style lang="less">
#app {
  font-size: 17px;
  color: #6f6f6f;
}
</style>