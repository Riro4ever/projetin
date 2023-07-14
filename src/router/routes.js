import Sample from '../components/Sample.vue';
import Home from '../components/Home.vue';
import Velha from '../components/velha/Velha.vue'

const routes = [
    { 
      path: '/', 
      name: 'home', 
      component: Home 
    },
    { 
      path: '/sample', 
      name:'sample',
      component: Sample 
    },
    {
    path:'/velha',
    name: 'velha',
    component: Velha
  }
  ]

  export default routes;