export const routes = [
  {
    path: "/:catchAll(.*)",
    redirect: "404",
  },
  {
    path: "/",
    component: () => import("@/layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("@/views/MainView.vue"),
        name: "MainView",
      },
    ],
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/ErrorView.vue"),
  },
];
