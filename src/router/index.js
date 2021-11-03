import Vue from 'vue'
import VueRouter from 'vue-router'

import Endwalker from  '../components/5EW/overview'
import EWilvl from  '../components/5EW/ilevel'
import EWpatch from  '../components/5EW/patch'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
  },

  // {
  //   path: '/',
  //   name: 'Home',
  // },

  // {
  //   path: '/a-realm-reborn',
  //   name: 'Endwalker',
  // },

  // {
  //   path: '/endwalker',
  //   name: 'Endwalker',
  // },

  // {
  //   path: '/endwalker',
  //   name: 'Endwalker',
  // },

  {
    path: '/endwalker',
    name: 'Endwalker',
    component: Endwalker
  },
  {
    path: '/endwalker#ilevel',
    name: 'Endwalker ilevel Progression',
    component: EWilvl
  },
  {
    path: '/endwalker#patch',
    name: 'Endwalker Patch Progression',
    component: EWpatch
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
