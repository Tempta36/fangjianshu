<template>
  <div id="app">
    <header-component v-show="display"></header-component>
    <div class="app-main">
      <router-view
                class="view"
                keep-alive
                transition
                transition-mode="out-in">
          </router-view>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue"

export default {
  name: 'App',
  components:{
    HeaderComponent
  },
  data(){
    return {
      display:true
    }
  },
  created(){
    sessionStorage.setItem('isLogin','false');
  },
  watch:{
    $route(to,from){
      if(to.path === '/signIn' || to.path === '/signUp'){
        this.display = false;
      }else {
        this.display = true;
      }
    }
  }
}
</script>

<style>

</style>
