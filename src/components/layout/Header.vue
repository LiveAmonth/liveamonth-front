<template>
  <header class="header-section">
    <div class="hs-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-2">
            <div class="logo">
              <router-link tag="a" :to="{ name: 'Home' }"
                ><img :src="logoUrl" alt=""
              /></router-link>
            </div>
          </div>
          <div class="col-lg-10">
            <div class="ht-widget pt-4" v-if="!loggedIn">
              <router-link tag="a" to="/login" class="hw-btn"
                >{{ $t("member.login") }}
              </router-link>
              <router-link tag="a" to="/sign-up" class="hw-btn"
                >{{ $t("member.signUp") }}
              </router-link>
            </div>
            <div class="ht-widget pt-4" v-else>
              <a
                type="button"
                @click="logout"
                class="hw-btn text-decoration-none"
              >
                {{ $t("member.logout") }}
              </a>
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
                  <router-link
                    tag="a"
                    :to="{
                      name: 'City',
                      params: { name: 'SE' },
                    }"
                    >{{ $t("menu.city") }}
                  </router-link>
                </li>
                <li>
                  <router-link tag="a" to="/"
                    >{{ $t("menu.schedule") }}
                  </router-link>
                  <ul class="dropdown">
                    <li
                      v-for="scheduleMenu in scheduleMenus"
                      :key="scheduleMenu"
                    >
                      <router-link tag="a" to="/"
                        >{{ $t("menu." + scheduleMenu) }}
                      </router-link>
                    </li>
                  </ul>
                </li>
                <li>
                  <router-link tag="a" to="/"
                    >{{ $t("menu.review") }}
                  </router-link>
                </li>
                <li>
                  <router-link tag="a" to="/my-page"
                    >{{ $t("menu.myPage") }}
                  </router-link>
                </li>
                <li>
                  <router-link tag="a" to="/"
                    >{{ $t("menu.tCustomerCenter") }}
                  </router-link>
                  <ul class="dropdown">
                    <li
                      v-for="customerCenterMenu in customerCenterMenus"
                      :key="customerCenterMenu"
                    >
                      <router-link tag="a" to="/"
                        >{{ $t("menu.customerCenter." + customerCenterMenu) }}
                      </router-link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <div class="col-lg-3">
            <div class="hn-social">
              <p v-if="loggedIn">
                {{ $t("hello.name", { user: loggedInName }) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "main-header",
  data() {
    return {};
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const cityMenus = computed(() => {
      return store.state.cityMenus;
    });
    const customerCenterMenus = computed(() => {
      return store.state.customerCenterMenus;
    });
    const scheduleMenus = computed(() => {
      return store.state.scheduleMenus;
    });
    const loggedIn = computed(() => {
      return store.state.auth.status.loggedIn;
    });
    const loggedInName = computed(() => {
      return store.state.auth.user.name;
    });
    const logoUrl = computed(() => {
      return store.state.logo;
    });

    const logout = async () => {
      await store.dispatch("auth/logout");
      if (!store.state.auth.status.loggedIn) {
        await router.push({ name: "Home" });
      }
    };
    return {
      logoUrl,
      cityMenus,
      scheduleMenus,
      customerCenterMenus,
      loggedIn,
      logout,
      loggedInName,
    };
  },
};
</script>
<style scoped>
.hs-nav {
}
</style>
