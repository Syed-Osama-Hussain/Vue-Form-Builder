import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import FormList from "@/components/FormList"

const routes = [
  {
    path: "/",
    name: "Dashboard",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Dashboard.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/forms",
    name: "FormList",
    component: FormList  
  },
  {
    path: "/form/:id",
    name: "FormDetail",
    component: FormList  
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
