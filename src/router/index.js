import Vue from 'vue'
import Router from 'vue-router'
import StreamerCard from '@/components/StreamerCard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StreamerCard',
      component: StreamerCard
    }
  ]
})
