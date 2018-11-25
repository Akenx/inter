import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
 
//懒加载
function loadView(view) {
  return () => import(`@/views/${view}.vue`)
}

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: loadView('Home')
    },
    {
      path: '/get',
      name: 'get',
      component: loadView('Get')
    },
    {
      path: '/post',
      name: 'post',
      component: loadView('Post')
    },
    {
      path: '/put',
      name: 'put',
      component: loadView('Put')
    },
    {
      path: '/delete',
      name: 'delete',
      component: loadView('Delete')
    },
    {
      path: '/test',
      name: 'test',
      component: loadView('Test')
    },
    {
      path: '/register',
      name: 'register',
      component: loadView('Register')
    },
    {
      path: '/login',
      name: 'login',
      component: loadView('Login')
    },
    {
      path: '/ask',
      name: 'ask',
      component: loadView('Ask')
    },
    {
      path: '/notice',
      name: 'notice',
      component: loadView('Notice')
    },
    {
      path: '/upload',
      name: 'upload',
      component: loadView('Upload')
    },
    {
      path: '/answer',
      name: 'answer',
      component: loadView('Answer')
    },
  ]
})

