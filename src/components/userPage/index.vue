<template>
<!--<button>updateUsername</button>-->
  <router-link to="updateUsername">updateUsername</router-link>
<button @click="logOut">exit</button>
   <hr>
  <RouterView></RouterView>
</template>

<script>
import store from "@/state";


export default {
  name: "index.vue",
  mounted() {
    localStorage.setItem('conceal', false)
    store.dispatch('initConceal')
  },
  methods:{
    logOut(){
      localStorage.setItem('loginStatus', false)
      store.dispatch('initLoginStatus')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>