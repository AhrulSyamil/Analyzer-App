
const routes = [
  {
    path: "/",
    redirect: '/whatsapp',
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/whatsapp",
        name: "whatsapp",
        component: () => import("pages/Whatsapp.vue")
      },
    ]
  }, 

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
