import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import i18n from "./i18n";

axios.defaults.baseURL = "http://localhost:8080";
const app = createApp(App).use(i18n);
app.config.globalProperties.axios = axios;
app.config.globalProperties.t = i18n;

app.use(store).use(router).mount("#app");
