import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { createPinia} from "pinia"

// Pode colocar o auth, pinia e tudo mais aqui
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-vue/dist/bootstrap-vue.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./style.css";

createApp(App).use(store).use(router).use(createPinia()).mount("#app");
