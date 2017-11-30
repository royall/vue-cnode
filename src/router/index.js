import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index'
import TopicDetail from '../components/TopicDetail'
import User from '../components/User'
import UserIndex from '../components/UserIndex'
import Collections from '../components/Collections'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {path: '/topics'}
    },
    {
      path: '/topics',
      redirect: {path: '/topics/all', query: {page: 1}}
    },
    {
      path: '/topics/:tab',
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
      component: User,
      children:[
        {
          path:'',
          name:'UserIndex',
          component:UserIndex
        },
        {
          path:'collections',
          name:'Collections',
          component:Collections
        }
      ]
    }
  ]
})
