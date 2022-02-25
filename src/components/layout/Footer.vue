<template>
  <div class="container">
    <footer class="pt-5">
      <div class="container">
        <div class="row text-white">
          <div class="col-md-3">
            <div class="fs-2">
              <router-link tag="a" to="/" class="align-content-md-center">
                <img alt="logo" :src="logoUrl" />
              </router-link>
              <p class="mt-3 text-white-50">{{ $t("footer.info") }}</p>
            </div>
          </div>

          <div class="col-2">
            <h5>{{ $t("footer.menu.link") }}</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2" v-for="menu in footerMenus" :key="menu">
                <router-link
                  tag="a"
                  to="/"
                  class="nav-li nk p-0 text-white-50"
                  >{{ $t("menu." + menu) }}</router-link
                >
              </li>
            </ul>
          </div>
          <div class="col-2">
            <h5>{{ $t("menu.tCustomerCenter") }}</h5>
            <ul class="nav flex-column">
              <li
                class="nav-item mb-2"
                v-for="menu in customerCenterMenus"
                :key="menu"
              >
                <router-link
                  tag="a"
                  to="/"
                  class="nav-link p-0 text-white-50"
                  >{{ $t("menu.customerCenter." + menu) }}</router-link
                >
              </li>
            </ul>
          </div>
          <div class="col-4">
            <form>
              <h5>{{ $t("footer.menu.news.letter") }}</h5>
              <p class="text-white-50">{{ $t("footer.menu.news.info") }}</p>
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
                <button class="btn btn-outline-light w-50" type="button">
                  {{ $t("footer.menu.news.subscribe") }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-between py-4 my-0 border-top">
        <p>&copy; 2021 Company, Inc. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "main-footer",
  data() {
    return {};
  },
  setup() {
    const store = useStore();
    const logoUrl = computed(() => {
      return store.state.footerLogo;
    });
    const customerCenterMenus = computed(() => {
      return store.state.customerCenterMenus;
    });
    const footerMenus = computed(() => {
      return store.state.footerMenus;
    });
    return { logoUrl, customerCenterMenus, footerMenus };
  },
};
</script>
<style lang="scss" scoped>
.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow: inset 0 0.5em 1.5em rgb(0 0 0 / 10%),
    inset 0 0.125em 0.5em rgb(0 0 0 / 15%);
}
</style>
