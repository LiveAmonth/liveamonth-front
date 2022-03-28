<template>
  <my-page-profile></my-page-profile>
  <section class="blog-section spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 p-0">
          <div class="feature-property-left">
            <side-menu-bar
                v-if="!isPending"
                @click="getMenu"
            >
            </side-menu-bar>
          </div>
        </div>
        <div class="col-lg-9" id="body">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MyPageProfile from "@/components/mypage/MyPageProfile";
import SideMenuBar from "@/components/slot/SideMenuBar";
import {useMyPage} from "@/composables/myPage";
import {useRouter} from "vue-router";

export default {
  name: "my-page",
  components: {
    MyPageProfile,
    SideMenuBar,
  },
  setup() {
    const {error, isPending, getMyPageMenus} = useMyPage();
    const router = useRouter();
    getMyPageMenus();
    const getMenu = (menu = "modify") => {
      if(menu==="modify" || menu === "drop"){
        router.push({name: 'MyPage.reCheck', params: { page: menu }});
      }else{
        router.push({name: `MyPage.${menu}`});
      }
    }
    return {
      error,
      getMenu,
      isPending,
    };
  },
};
</script>

<style></style>
