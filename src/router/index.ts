import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../layouts/MainLayout.vue'),
      redirect: 'home',
      children: [{
        path: 'home',
        name: 'Home',
        component: () => import('../views/HomeView.vue'),
      }, {
        path: 'reports',
        name: 'Reports',
        component: () => import('../views/ReportsView.vue'),
      }, {
        path: 'insights',
        name: 'Insights',
        component: () => import('../views/InsightsView.vue'),
      }, {
        path: 'actions',
        name: 'Actions',
        component: () => import('../views/ActionsView.vue'),
      }]
    },
    {
      path: '/auth',
      component: () => import('../layouts/AuthLayout.vue'),
      redirect: { name: 'Login' },
      children: [{
        path: 'login',
        name: 'Login',
        component: () => import('../views/LoginView.vue'),
      }],
    }
  ]
})

export default router
