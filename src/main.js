import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import i18n from "./i18n";
import VCalendar from "v-calendar";

const app = createApp(App).use(i18n);
app.config.globalProperties.t = i18n;
app.use(VCalendar, {});
app.use(store).use(router);
app.mount("#app");
