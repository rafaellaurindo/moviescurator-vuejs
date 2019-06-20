import Vue from 'vue'
import Router from 'vue-router'

import Likeds from '@/components/Movies/Likeds'
import UnLikeds from '@/components/Movies/UnLikeds'
import UnCurateds from '@/components/Movies/UnCurateds'

Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'UnCurateds',
      component: UnCurateds
    },
    {
      path: '/likeds',
      name: 'Likeds',
      component: Likeds
    },
    {
      path: '/non-linkeds',
      name: 'UnLikeds',
      component: UnLikeds
    }
  ]
})