import { createRouter, createWebHistory } from "vue-router";
import Landing from "../views/Landing.vue";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import Default from "../views/Home/Default.vue";
import ClassForm from "../views/Home/ClassForm.vue";
import Attendance from "../views/Home/Attendance.vue";

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    children: [
      { path: "", component: Default },
      { path: "create/class", component: ClassForm },
      { path: ":id", component: Attendance },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
