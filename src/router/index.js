import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import StreamerCard from '@/components/StreamerCard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/streamerCard',
      name: 'StreamerCard',
      component: StreamerCard
    }
  ]
})
