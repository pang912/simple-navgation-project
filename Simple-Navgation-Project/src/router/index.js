import { createRouter, createWebHashHistory} from 'vue-router'

const routes = [
  // {
  //   path: '/',
  //   redirect: '/app'
  // },
  {
    path: '/home',
    name: 'home',
    component: () => import('../components/Home.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router