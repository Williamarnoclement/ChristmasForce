import Home from '@/views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'Home',
        component: Home
    }
  ]
})