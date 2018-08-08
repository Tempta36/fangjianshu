import Vue from 'vue'
import Router from 'vue-router'

import Main from '../components/main.vue'
import Download from '../components/download.vue'
import SignIn from '../components/signIn.vue'
import SignUp from '../components/signUp.vue'
import WriteArticle from '../components/writeArticle.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component:Main
    },
    {
      path:'/download',
      component:Download
    },
    {
      path:'/signIn',
      component:SignIn
    },
    {
      path:'/signUp',
      component:SignUp
    },
    {
      path:'/writeArticle',
      component:WriteArticle
    }
  ]
})
