import Vue from 'vue'
import VueRouter from 'vue-router'

import EmptyRouterView from  '../components/EmptyRouterView'

import Endwalker from  '../components/5EW/overview'
import EWilvl from  '../components/5EW/ilevel'
import EWpatch from  '../components/5EW/patch'

import Shadowbringers from  '../components/4SH/overview'
import SHilvl from  '../components/4SH/ilevel'
import SHpatch from  '../components/4SH/patch'

// import Endwalker from  '../components/5EW/overview'
// import EWilvl from  '../components/5EW/ilevel'
// import EWpatch from  '../components/5EW/patch'

// import Endwalker from  '../components/5EW/overview'
// import EWilvl from  '../components/5EW/ilevel'
// import EWpatch from  '../components/5EW/patch'




Vue.use(VueRouter)

const routes = [
  
  {
    path: '/shadowbringers',
    component: EmptyRouterView,
    children: [{
      name: 'shadowbringers',
      path: '',
      component: Shadowbringers
    }, {
      name: 'shadowbringers.ilevel',
      path: 'shadowbringers/ilevel',
      component: SHilvl
    }, {
      name: 'shadowbringers.patch',
      path: 'shadowbringers/patch',
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
      name: 'ilevel',
      path: 'ilevel',
      component: EWilvl
    }, {
      name: 'patch',
      path: 'patch',
      component: EWpatch
    }]
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  watch: {
    $route: function(current) {
      const route = this.$router.options.routes.find(route => route.path === current.path)

      if (route && Array.isArray(route.children)) {
        this.children = route.children
      } else if (route) {
        this.children = []
      }
    }
  }
})


export default router
