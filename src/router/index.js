import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Release1 from '../views/ReleaseI.vue'
import Release2 from '../views/ReleaseII.vue'
import Release3 from '../views/ReleaseIII.vue'
import Release4 from '../views/ReleaseIV.vue'
import Release5 from '../views/ReleaseV.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/release1',
    name: 'release1',
    component: Release1
  },
  {
    path: '/release2',
    name: 'release2',
    component: Release2
  },
  {
    path: '/release3',
    name: 'release3',
    component: Release3
  },
  {
    path: '/release4',
    name: 'release4',
    component: Release4
  },
  {
    path: '/release5',
    name: 'release5',
    component: Release5
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
