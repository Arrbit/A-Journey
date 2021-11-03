import Vue from 'vue'
import VueRouter from 'vue-router'

import EmptyRouterView from  '../components/EmptyRouterView'
import PageNotFound from  '../components/PageNotFound'

import Endwalker from  '../components/5EW/overview'
import EWilvl from  '../components/5EW/ilevel'
import EWpatch from  '../components/5EW/patch'

import Shadowbringers from  '../components/4SH/overview'
import SHilvl from  '../components/4SH/ilevel'
import SHpatch from  '../components/4SH/patch'

import Stormblood from  '../components/3SB/overview'
import SBilvl from  '../components/3SB/ilevel'
import SBpatch from  '../components/3SB/patch'

import Heavensward from  '../components/2HW/overview'
import HWilvl from  '../components/2HW/ilevel'
import HWpatch from  '../components/2HW/patch'

import ARealmReborn from  '../components/1ARR/overview'
import ARRilvl from  '../components/1ARR/ilevel'
import ARRpatch from  '../components/1ARR/patch'

Vue.use(VueRouter)

const routes = [
  { path: "*", component: PageNotFound },
  {
    path: '/a-realm-reborn',
    component: EmptyRouterView,
    children: [{
      name: 'a-realm-reborn',
      path: '',
      component: ARealmReborn
    }, {
      name: 'a-realm-reborn.ilevel',
      path: 'ilevel',
      component: ARRilvl
    }, {
      name: 'a-realm-reborn.patch',
      path: 'patch',
      component: ARRpatch
    }]
  },
  
  {
    path: '/heavensward',
    component: EmptyRouterView,
    children: [{
      name: 'heavensward',
      path: '',
      component: Heavensward
    }, {
      name: 'heavensward.ilevel',
      path: 'ilevel',
      component: HWilvl
    }, {
      name: 'heavensward.patch',
      path: 'patch',
      component: HWpatch
    }]
  },

  {
    path: '/stormblood',
    component: EmptyRouterView,
    children: [{
      name: 'stormblood',
      path: '',
      component: Stormblood
    }, {
      name: 'stormblood.ilevel',
      path: 'ilevel',
      component: SBilvl
    }, {
      name: 'stormblood.patch',
      path: 'patch',
      component: SBpatch
    }]
  },
  
  {
    path: '/shadowbringers',
    component: EmptyRouterView,
    children: [{
      name: 'shadowbringers',
      path: '/shadowbringers',
      component: Shadowbringers
    }, {
      name: 'shadowbringers.ilevel',
      path: 'ilevel',
      component: SHilvl
    }, {
      name: 'shadowbringers.patch',
      path: 'patch',
      component: SHpatch
    }]
  },

  {
    path: '/',
    component: EmptyRouterView,
    children: [{
      name: 'endwalker',
      path: '',
      component: Endwalker
    }, {
      name: 'endwalker.ilevel',
      path: 'ilevel',
      component: EWilvl
    }, {
      name: 'endwalker.patch',
      path: 'patch',
      component: EWpatch
    }]
  },

    {
      path: '/endwalker',
      component: EmptyRouterView,
      children: [{
        name: 'endwalker',
        path: '',
        component: Endwalker
      }, {
        name: 'endwalker.ilevel',
        path: 'ilevel',
        component: EWilvl
      }, {
        name: 'endwalker.patch',
        path: 'patch',
        component: EWpatch
      }]
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})


export default router
