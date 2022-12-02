import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MovieManager from "../views/MovieManager.vue";
import AddMovie from "../views/AddMovie.vue";
import EditMovie from "../views/EditMovie.vue";
import ViewMovie from "../views/ViewMovie.vue";
import DevelopView from "../views/DevelopView.vue";
import PageNotFound from "../views/PageNotFound.vue";
import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";

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
    props: {
      isTextContrast: "dark",
      isBgContrast: "gray",
      isFontSize: 5,
      isTypeDaltonism: "deuteranopia",
      isDaltonism: {
        isDeuteranopia: {
          t1: "dal-deute-t1",
          t2: "dal-deute-t2",
          t3: "dal-deute-t3",
          t4: "dal-deute-t4",
          bg1: "dal-deute-bg1",
          bg2: "dal-deute-bg2",
          bg3: "dal-deute-bg3",
          bg4: "dal-deute-bg4",
        },
        isProtanopia: {
          t1: "dal-prota-t1",
          t2: "dal-prota-t2",
          t3: "dal-prota-t3",
          t4: "dal-prota-t4",
          bg1: "dal-prota-bg1",
          bg2: "dal-prota-bg2",
          bg3: "dal-prota-bg3",
          bg4: "dal-prota-bg4",
        },
        isTritanopia: {
          t1: "dal-trita-t1",
          t2: "dal-trita-t2",
          t3: "dal-trita-t3",
          t4: "dal-trita-t4",
          bg1: "dal-trita-bg1",
          bg2: "dal-trita-bg2",
          bg3: "dal-trita-bg3",
          bg4: "dal-trita-bg4",
        },
      },
    },
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
    path: "/about",
    name: "AboutView",
    component: AboutView,
    props: {
      isTextContrast: "dark",
      isBgContrast: "gray",
      isFontSize: 5,
      isTypeDaltonism: "protanopia",
      isDaltonism: {
        isDeuteranopia: {
          t1: "dal-deute-t1",
          t2: "dal-deute-t2",
          t3: "dal-deute-t3",
          t4: "dal-deute-t4",
          bg1: "dal-deute-bg1",
          bg2: "dal-deute-bg2",
          bg3: "dal-deute-bg3",
          bg4: "dal-deute-bg4",
        },
        isProtanopia: {
          t4: "dal-prota-t1",
          t2: "dal-prota-t2",
          t3: "dal-prota-t3",
          t1: "dal-prota-t4",
          bg1: "dal-prota-bg1",
          bg2: "dal-prota-bg2",
          bg3: "dal-prota-bg3",
          bg4: "dal-prota-bg4",
        },
        isTritanopia: {
          t1: "dal-trita-t1",
          t2: "dal-trita-t2",
          t3: "dal-trita-t3",
          t4: "dal-trita-t4",
          bg1: "dal-trita-bg1",
          bg2: "dal-trita-bg2",
          bg3: "dal-trita-bg3",
          bg4: "dal-trita-bg4",
        },
      },
    },
  },
  {
    path: "/contact",
    name: "ContactView",
    component: ContactView,
    props: {
      isTextContrast: "dark",
      isBgContrast: "gray",
      isFontSize: 5,
      isTypeDaltonism: "protanopia",
      isDaltonism: {
        isDeuteranopia: {
          t1: "dal-deute-t1",
          t2: "dal-deute-t2",
          t3: "dal-deute-t3",
          t4: "dal-deute-t4",
          bg1: "dal-deute-bg1",
          bg2: "dal-deute-bg2",
          bg3: "dal-deute-bg3",
          bg4: "dal-deute-bg4",
        },
        isProtanopia: {
          t4: "dal-prota-t1",
          t2: "dal-prota-t2",
          t3: "dal-prota-t3",
          t1: "dal-prota-t4",
          bg1: "dal-prota-bg1",
          bg2: "dal-prota-bg2",
          bg3: "dal-prota-bg3",
          bg4: "dal-prota-bg4",
        },
        isTritanopia: {
          t1: "dal-trita-t1",
          t2: "dal-trita-t2",
          t3: "dal-trita-t3",
          t4: "dal-trita-t4",
          bg1: "dal-trita-bg1",
          bg2: "dal-trita-bg2",
          bg3: "dal-trita-bg3",
          bg4: "dal-trita-bg4",
        },
      },
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "PageNotFound",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
