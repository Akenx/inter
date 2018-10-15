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
    }
  ]
})

