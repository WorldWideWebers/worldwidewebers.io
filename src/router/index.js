import { createRouter, createWebHashHistory } from 'vue-router'
import Portfolio from '../components/Portfolio.vue'
import Documents from '../components/Documents.vue'

const routes = [
  {
    path: "/",
    name: "portfolio",
    component: Portfolio,
  },
  {
    path: "/documents",
    name: "documents",
    component: Documents,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router