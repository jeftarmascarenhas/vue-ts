import Vue from 'vue'
import Router from 'vue-router'
import Todo from './views/Todo.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'todo',
      component: Todo
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ],
  mode: 'history',
  base: '/',
})
