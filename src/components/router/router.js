import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Home/Home.vue'
import Anime from '../Anime/Anime.vue'
import Game from '../Game/Game.vue'

const routes = [
  {path:'/', redirect:'/home'},
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path:'/anime',
    name:'anime',
    component:Anime,
  },
  {
    path:'/game',
    name:'game',
    component:Game,
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
