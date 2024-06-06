import type { RouteRecordRaw } from 'vue-router'

export const routes:RouteRecordRaw[] = [
  {
    path: "/",
    children: [
      {
        name: 'home',
        path: "",
        component: () => import('@/pages/demo/HomePage.vue'),
      },
    ],
  },
];
