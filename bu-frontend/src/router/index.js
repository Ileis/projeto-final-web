import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MovieManager from "../views/MovieManager.vue";
import AddMovie from "../views/AddMovie.vue";
import EditMovie from "../views/EditMovie.vue";
import ViewMovie from "../views/ViewMovie.vue";
import DevelopView from "../views/DevelopView.vue";
import PageNotFound from "../views/PageNotFound.vue";
import RegisterView from "@/views/RegisterView.vue";
import LoginView from "@/views/LoginView.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/movies",
    component: HomeView,
  },
  {
    path: "/movies",
    name: "MovieManager",
    component: MovieManager,
  },
  {
    path: "/movies/add",
    name: "AddMovie",
    component: AddMovie,
  },
  {
    path: "/movies/edit/:movieId",
    name: "EditMovie",
    component: EditMovie,
  },
  {
    path: "/movies/view/:movieId",
    name: "ViewMovie",
    component: ViewMovie,
  },
  {
    path: "/dev",
    name: "DevelopView",
    component: DevelopView,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "PageNotFound",
    component: PageNotFound,
  },
  {
    path: "/user/register",
    name: "RegisterView",
    component: RegisterView,
  },
  {
    path: "/user/login",
    name: "LoginView",
    component: LoginView,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
