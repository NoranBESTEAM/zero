// import { createRouter, createWebHistory } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import TracksView from '../views/TracksView.vue'
import LessonsView from '../views/LessonsView.vue'
import LevelsView from '../views/LevelsView.vue'
import LevelSliderView from '../views/LevelSliderView.vue'
import MissionSliderView from '../views/MissionSliderView.vue'
import CompetitionsView from '../views/CompetitionsView.vue'
import JourneyView from '../views/JourneyView.vue'
import OurPlatformsView from '../views/OurPlatformsView.vue'
import ReadableContentView from '../views/ReadableContentView.vue'
import SignUpView from '../views/SignUpView.vue'
import SignInView from '../views/SignInView.vue'
import NotificationView from '../views/NotificationView.vue'
import ProfileView from '../views/profile/ProfileView.vue'
import ChangePasswordView from '../views/profile/ChangePasswordView.vue'
import SupportView from '../views/profile/SupportView.vue'
import SettingView from '../views/profile/SettingView.vue'
import ProfileScoreView from '../views/profile/ProfileScoreView.vue'
import ProfileTeamView from '../views/profile/ProfileTeamView.vue'
import ProfileTeamMembersView from '../views/profile/ProfileTeamMembersView.vue'
import ProfileEventsView from '../views/profile/ProfileEventsView.vue'
import ProfileTimeView from '../views/profile/ProfileTimeView.vue'
import ProfileWalletView from '../views/profile/ProfileWalletView.vue'

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
    path: '/lessons',
    name: 'lessons',
    component: LessonsView
  },
  {
    path: '/levels',
    name: 'levels',
    component: LevelsView
  },
  {
    path: '/level_slider',
    name: 'level_slider',
    component: LevelSliderView
  },
  {
    path: '/mission_slider',
    name: 'mission_slider',
    component: MissionSliderView
  },
  {
    path: '/competitions',
    name: 'competitions',
    component: CompetitionsView
  },
  {
    path: '/journey',
    name: 'journey',
    component: JourneyView
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
    path: '/sign-up',
    name: 'sign-up',
    component: SignUpView
  },
  {
    path: '/sign-in',
    name: 'login',
    component: SignInView
  },
  {
    path: '/notification',
    name: 'notification',
    component: NotificationView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  },
  {
    path: '/change-password',
    name: 'change-password',
    component: ChangePasswordView
  },
  {
    path: '/support',
    name: 'support',
    component: SupportView
  },
  {
    path: '/settings',
    name: 'settings',
    component: SettingView
  },
  {
    path: '/profile-score',
    name: 'profile-score',
    component: ProfileScoreView
  },
  {
    path: '/profile-team',
    name: 'profile-team',
    component: ProfileTeamView
  },
  {
    path: '/team-members',
    name: 'team-members',
    component: ProfileTeamMembersView
  },
  {
    path: '/profile-events',
    name: 'profile-events',
    component: ProfileEventsView
  },
  {
    path: '/profile-time',
    name: 'profile-time',
    component: ProfileTimeView
  },
  {
    path: '/profile-wallet',
    name: 'profile-wallet',
    component: ProfileWalletView
  },
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
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
