import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import TracksView from '../views/TracksView.vue'
import CompetitionsView from '../views/CompetitionsView.vue'
import OurPlatformsView from '../views/OurPlatformsView.vue'
import ReadableContentView from '../views/ReadableContentView.vue'
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/tracks',
    name: 'tracks',
    component: TracksView
  },
  {
    path: '/competitions',
    name: 'competitions',
    component: CompetitionsView
  },
  {
    path: '/our-platforms',
    name: 'our-platforms',
    component: OurPlatformsView
  },
  {
    path: '/readable-content',
    name: 'readable-content',
    component: ReadableContentView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: SignUpView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

/* router.beforeEach((to,from,next)=>{

  if (to.name != null){
    document.title = `${process.env.VUE_APP_TITLE} - ${to.name}`;
  } else{
    document.title = `${process.env.VUE_APP_TITLE}`;
  }
  
  next();

}); */

export default router
