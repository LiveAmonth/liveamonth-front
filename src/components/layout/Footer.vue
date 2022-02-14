<template>
  <div class="container">
    <footer class="pt-5">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="fs-2">
              <router-link tag="a" to="/" class="align-content-md-center">
                <img alt="logo" :src="logoUrl"/>
              </router-link>
              <p class="mt-3">{{ $t("footer.info") }}</p>
            </div>
          </div>

          <div class="col-2">
            <h5>{{ $t("footer.menu.link") }}</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2" v-for="link in menuLinks" :key="link">
                <a href="#!" class="nav-link p-0 text-muted">{{ link }}</a>
              </li>
            </ul>
          </div>
          <div class="col-2">
            <h5>{{ $t("menu.customerCenter") }}</h5>
            <ul class="nav flex-column">
              <li
                  class="nav-item mb-2"
                  v-for="link in customerCenterLinks"
                  :key="link"
              >
                <a href="#!" class="nav-link p-0 text-muted">{{ link }}</a>
              </li>
            </ul>
          </div>
          <div class="col-4">
            <form>
              <h5>{{ $t("footer.menu.news.letter") }}</h5>
              <p>{{ $t("footer.menu.news.info") }}</p>
              <div class="d-flex w-100 gap-2">
                <label for="newsletter1" class="visually-hidden"
                >Email address</label
                >
                <input
                    id="newsletter1"
                    type="text"
                    class="form-control"
                    placeholder="Email address"
                />
                <button class="btn btn-outline-dark w-50" type="button">
                  {{ $t("footer.menu.news.subscribe") }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-between py-4 my-0 border-top">
        <p>&copy; 2021 Company, Inc. All rights reserved.</p>
        <ul class="list-unstyled d-flex">
          <li class="ms-3">
            <a class="link-dark" href="#">
              <svg class="bi" width="24" height="24">
                <use xlink:href="#twitter"/>
              </svg>
            </a>
          </li>
          <li class="ms-3">
            <a class="link-dark" href="#">
              <svg class="bi" width="24" height="24">
                <use xlink:href="#instagram"/>
              </svg>
            </a>
          </li>
          <li class="ms-3">
            <a class="link-dark" href="#">
              <svg class="bi" width="24" height="24">
                <use xlink:href="#facebook"/>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "main-footer",
  data() {
    return {
      logoUrl: require("@/assets/img/logo.png"),
      menuLinks: [
        this.$t("menu.city"),
        this.$t("menu.otherSchedule"),
        this.$t("menu.review"),
        this.$t("login.signUp"),
      ],
      customerCenterLinks: [
        this.$t("customerCenter.faq"),
        this.$t("customerCenter.personalTerms"),
        this.$t("customerCenter.termsAndConditions"),
        this.$t("customerCenter.notice"),
      ],
    };
  },
};
</script>
<style lang="scss">
.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, .1);
  border: solid rgba(0, 0, 0, .15);
  border-width: 1px 0;
  box-shadow: inset 0 0.5em 1.5em rgb(0 0 0 / 10%), inset 0 0.125em 0.5em rgb(0 0 0 / 15%);
}
</style>
