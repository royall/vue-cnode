import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import TopicDetail from '@/components/TopicDetail'
import User from '@/components/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      redirect: '/topics'
    },
    {
      path: '/topics',
      name: 'Topics',
      component: Index
    },
    {
      path: '/topic/:id',
      name: 'TopicDetail',
      component: TopicDetail
    },
    {
      path: '/user/:loginname',
      name: 'User',
      component: User
    }
  ]
})
