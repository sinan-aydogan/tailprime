import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
import routes from "./routes";

const createHistory = import.meta.env.SSR ? createMemoryHistory : createWebHistory;

const router = createRouter({
  history: createHistory(import.meta.env.BASE_URL),
  routes
})

export default router
