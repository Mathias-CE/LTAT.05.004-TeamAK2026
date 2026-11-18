import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupView from '../views/SignupView.vue'


//route table, each object pairs with an URL path
const routes = [
  { path: '/', component: HomeView }, //main page
  { path: '/signup', component: SignupView },
]

export default createRouter({ //builds router object
  history: createWebHistory(), //keep urls in address bar without hash
  routes, //pass route table
})
