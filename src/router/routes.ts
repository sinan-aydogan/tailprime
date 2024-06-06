import type { RouteRecordRaw } from 'vue-router'

interface IRouteFilesImport {
  [key: string]:  {
    routes: RouteRecordRaw[]
  }
}

let routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: 'home',
    component: () => import('@/pages/demo/HomePage.vue'),
  },
];

const modules:IRouteFilesImport = import.meta.glob("./modules/*.ts",  { eager: true });
for (const path in modules) {
  routes = [...routes, ...modules[path].routes];
}

routes.push({
  path: "/:catchAll(.*)*",
  component: () => import('@/pages/errors/NotFound404.vue'),
});

console.log(routes)

export default routes;