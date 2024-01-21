// import { createRouter, createWebHistory } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import TracksParentView from '../views/TracksParentView.vue'
import TracksView from '../views/TracksView.vue'
import LessonsView from '../views/LessonsView.vue'
import LevelsView from '../views/LevelsView.vue'
import LevelSliderView from '../views/LevelSliderView.vue'
import MissionSliderView from '../views/MissionSliderView.vue'
import competitionsParentView from '../views/CompetitionsParentView.vue'
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
    component: HomeView,
    meta:{
      title: 'Home',
    }
  },
  {
    path: "/tracks/",
    name: "tracks_parent",
    component: TracksParentView,
    children:[
      {
        path: 'tracks',
        name: 'tracks',
        component: TracksView,
        meta:{
          title: 'Tracks',
        }
      },
      {
        path: 'lessons',
        name: 'lessons',
        component: LessonsView,
        meta:{
          title: 'Tracks',
        }
      },
      {
        path: 'levels',
        name: 'levels',
        component: LevelsView,
        meta:{
          title: 'Tracks',
        }
      },
      {
        path: 'level_slider/:number',
        name: 'level_slider',
        component: LevelSliderView,
        props: true,
        meta:{
          title: 'Tracks',
        }
      },
      {
        path: 'mission_slider/:number',
        name: 'mission_slider',
        component: MissionSliderView,
        props: true,
        meta:{
          title: 'Tracks',
        }
      },
    ]
  },
  {
    path: "/competitions/",
    name: "competitions_parent",
    component: competitionsParentView,
    children:[
      {
        path: 'competitions',
        name: 'competitions',
        component: CompetitionsView,
        meta:{
          title: 'Competitions',
        }
      },
      {
        path: 'journey',
        name: 'journey',
        component: JourneyView,
        meta:{
          title: 'Competitions',
        }
      },
    ]
  },
  {
    path: '/our-platforms',
    name: 'our-platforms',
    component: OurPlatformsView,
    meta:{
      title: 'OurPlatforms',
    }
  },
  {
    path: '/readable-content',
    name: 'readable-content',
    component: ReadableContentView,
    meta:{
      title: 'ReadableContent',
    }
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: SignUpView,
    meta:{
      title: 'SignUp',
    }
  },
  {
    path: '/sign-in',
    name: 'login',
    component: SignInView,
    meta:{
      title: 'LogIn',
    }
  },
  {
    path: '/notification',
    name: 'notification',
    component: NotificationView,
    meta:{
      title: 'Notification',
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    meta:{
      title: 'Profile',
    }
  },
  {
    path: '/change-password',
    name: 'change-password',
    component: ChangePasswordView,
    meta:{
      title: 'ChangePassword',
    }
  },
  {
    path: '/support',
    name: 'support',
    component: SupportView,
    meta:{
      title: 'Support',
    }
  },
  {
    path: '/settings',
    name: 'settings',
    component: SettingView,
    meta:{
      title: 'Settings',
    }
  },
  {
    path: '/profile-score',
    name: 'profile-score',
    component: ProfileScoreView,
    meta:{
      title: 'HighScores',
    }
  },
  {
    path: '/profile-team',
    name: 'profile-team',
    component: ProfileTeamView,
    meta:{
      title: 'AddTeam',
    }
  },
  {
    path: '/team-members',
    name: 'team-members',
    component: ProfileTeamMembersView,
    meta:{
      title: 'AddTeam',
    }
  },
  {
    path: '/profile-events',
    name: 'profile-events',
    component: ProfileEventsView,
    meta:{
      title: 'Events',
    }
  },
  {
    path: '/profile-time',
    name: 'profile-time',
    component: ProfileTimeView,
    meta:{
      title: 'TimeOnSite',
    }
  },
  {
    path: '/profile-wallet',
    name: 'profile-wallet',
    component: ProfileWalletView,
    meta:{
      title: 'MyWallet',
    }
  },
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {

  // https://www.youtube.com/watch?v=W6qpsmkuJ8c

  if(to.meta.title !== undefined){
    document.title = `${process.env.VUE_APP_TITLE} | ${to.meta.title}`;
  } else {
    if(to.name !== null){
      document.title = `${process.env.VUE_APP_TITLE} | ${to.name}`;
    } else{
      document.title = `${process.env.VUE_APP_TITLE}`;
    }
  }

  next();
});

export default router
