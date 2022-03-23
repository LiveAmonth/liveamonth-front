import { createStore } from "vuex";
import modules from "@/store/modules";

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
        "notice"
      ],
      footerMenus: ["city", "otherSchedule", "review"]
    };
  },
  modules,
});

export default store;
