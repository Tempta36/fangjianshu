import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '../components/homepage.vue'
import Download from '../components/download.vue'
import SignIn from '../components/signIn.vue'
import SignUp from '../components/signUp.vue'
import WriteArticle from '../components/writeArticle.vue'
import Author from '../components/author'

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name:'homepage',
      component:HomePage
    },
    {
      path:'/download',
      name:'download',
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
    },
    {
      path:'/author',
      name:'author',
      component:Author
    }
  ]
})
