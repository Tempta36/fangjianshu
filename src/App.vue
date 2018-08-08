<template>
  <div id="app">
    <header-component></header-component>
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
