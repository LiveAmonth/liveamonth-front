<template>
  <header class="header-section">
    <div class="hs-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-2">
            <div class="logo">
              <router-link tag="a" to="/"><img :src="logoUrl" alt=""/></router-link>
            </div>
          </div>
          <div class="col-lg-10">
            <div class="ht-widget pt-4">
              <router-link tag="a" to="/" class="hw-btn">{{$t("login.signUp")}}</router-link>
              <router-link tag="a" to="/" class="hw-btn">{{$t("login.signIn")}}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="hs-nav">
      <div class="container">
        <div class="row">
          <div class="col-lg-9">
            <nav class="nav-menu">
              <ul class="mb-0">
                <li>
                  <router-link tag="a" to="/city?menu=SE">{{ $t("menu.city") }}</router-link>
                  <ul class="dropdown">
                    <li v-for="cityMenu in this.cityMenus" :key="cityMenu">
                      <router-link tag="a" to="/">{{ cityMenu }}</router-link>
                    </li>
                  </ul>
                </li>
                <li>
                  <router-link tag="a" to="/">{{ $t("menu.schedule") }}</router-link>
                  <ul class="dropdown">
                    <li v-for="scheduleMenu in this.scheduleMenus" :key="scheduleMenu">
                      <router-link tag="a" to="/">{{ scheduleMenu }}</router-link>
                    </li>
                  </ul>
                </li>
                <li>
                  <router-link tag="a" to="/">{{ $t("menu.review") }}</router-link>
                </li>
                <li>
                  <router-link tag="a" to="/myPage">{{ $t("menu.myPage") }}</router-link>
                </li>
                <li>
                  <router-link tag="a" to="/">{{ $t("menu.customerCenter") }}</router-link>
                  <ul class="dropdown">
                    <li v-for="customerCenterMenu in this.customerCenterMenus" :key="customerCenterMenu">
                      <router-link tag="a" to="/">{{ customerCenterMenu }}</router-link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <div class="col-lg-3">
            <div class="hn-social">
              <!--                        <p th:text="#{hello.name}" th:if="${user}"></p>-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "main-header",
  data() {
    return {
      logoUrl: require("@/assets/img/logo.png"),
      cityMenus: [
        this.$t("city.name.SE"),
        this.$t("city.name.GN"),
        this.$t("city.name.GJ"),
        this.$t("city.name.BS"),
        this.$t("city.name.YS"),
        this.$t("city.name.JJ"),
      ],
      scheduleMenus: [
        this.$t("menu.otherSchedule"),
        this.$t("menu.mySchedule"),
      ],
      customerCenterMenus: [
        this.$t("customerCenter.faq"),
        this.$t("customerCenter.personalTerms"),
        this.$t("customerCenter.termsAndConditions"),
        this.$t("customerCenter.notice"),
      ]
    };
  },
};
</script>
<style>
</style>
