import Home from '@/views/Home.vue'
import Activites from '@/views/Activites.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
      path: '/activites',
      name: 'Activités',
      component: Activites
  }
  ]
})