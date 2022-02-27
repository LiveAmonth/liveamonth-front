import { createStore } from "vuex";
import { auth } from "./auth.module";
import { home } from "./home.module";
import { city } from "./city.module";
// import createPersistedState from "vuex-persistedstate";

const store = createStore({
  state() {
    return {
      logo: require("@/assets/img/logo.png"),
      footerLogo: require("@/assets/img/logo_footer.png"),
      loginBackground: require("@/assets/img/login_background.jpg"),
      defaultProfile: require("@/assets/img/default.jpg"),
      cityMenus: ["SE", "GN", "GJ", "BS", "YS", "JJ"],
      scheduleMenus: ["otherSchedule", "mySchedule"],
      customerCenterMenus: [
        "faq",
        "personalTerms",
        "termsAndConditions",
        "notice",
      ],
      footerMenus: ["city", "otherSchedule", "review"],
    };
  },
  modules: {
    auth,
    home,
    city,
  },
  // plugins: [
  //   createPersistedState({
  //     paths: [auth, home],
  //   }),
  // ],
});

export default store;
