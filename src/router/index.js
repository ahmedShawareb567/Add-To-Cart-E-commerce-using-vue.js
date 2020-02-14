import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Login from "../views/login.vue";
import Register from "../views/register.vue";
import ErrorPage from "../views/404.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      title: "Home",
      requireAuth: true
    }
  },
  {
    path: "/about/:id",
    name: "about",
    component: About,
    meta: {
      title: "About"
    }
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      title: "Login",
      requireVisitor: true
    }
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: {
      title: "Register",
      requireVisitor: true
    }
  },
  {
    path: "*",
    component: ErrorPage,
    meta: {
      title: "404"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
/*
//DEFINE BEFORE EACH Guard
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!auth.loggedIn()) {
      next({
        path: "/Login"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});
*/
//DEFINING TITLE
router.afterEach(to => {
  document.title = to.meta.title;
});

export default router;
