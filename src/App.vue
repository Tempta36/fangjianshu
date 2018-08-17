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
      display:true,
      hash:window.location.hash
    }
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
