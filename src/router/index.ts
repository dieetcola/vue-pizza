import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
  type RouteLocationNormalizedLoaded
} from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PizzasView from '../views/PizzasView.vue'
import PizzaView from '../views/PizzaView.vue'
import ContactView from '../views/ContactView.vue'
import ContactFaqView from '../views/ContactFaqView.vue'
import ContactFormView from '../views/ContactFormView.vue'
import LoginView from '../views/LoginView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/pizzas',
    props: (route: RouteLocationNormalizedLoaded) => ({
      searchTerm: route.query?.search || ''
    }),
    children: [
      // nested dynamic route without parrent layout
      {
        path: ':id',
        name: 'pizza',
        component: PizzaView,
        props: true // pass the route.params object
      },
      //
      {
        path: '',
        name: 'pizzas',
        component: PizzasView
      }
    ]
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    // nested route with parrent layout
    children: [
      {
        path: 'faq',
        name: 'contact-faq',
        component: ContactFaqView
      },
      {
        path: 'form',
        name: 'contact-form',
        component: ContactFormView
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  }
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
