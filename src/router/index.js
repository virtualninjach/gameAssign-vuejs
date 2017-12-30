import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import NewGame from '@/components/newGame'
import EditGame from '@/components/EditGame'

import ViewGame from '@/components/viewGame'
import helloworld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/new',
      name: 'new-game',
      component: NewGame
    },
    {
      path: '/edit/:game_id',
      name: 'edit-game',
      component: EditGame
    },
    {
      path: '/:game_id',
      name: 'view-game',
      component: ViewGame
    },
    {
      path: '/helloworld',
      name: 'hello-world',
      component: helloworld
    }
  ]
})
