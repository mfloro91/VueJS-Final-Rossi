import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FormularioView from '../views/FormularioView.vue'
import BibliotecaView from '../views/BibliotecaView.vue'
import MetricasView from '../views/MetricasView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/formulario',
      name: 'formulario',
      component: FormularioView,
    },
    {
      path: '/biblioteca',
      name: 'biblioteca',
      component: BibliotecaView,
    },
    {
      path: '/metricas',
      name: 'metricas',
      component: MetricasView,
    },
  ],
})

export default router
