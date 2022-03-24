<template>
  <my-page-profile></my-page-profile>
  <section class="blog-section spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 p-0">
          <div class="feature-property-left">
            <side-menu-bar v-if="!isPending"></side-menu-bar>
          </div>
        </div>
        <div class="col-lg-9" id="body">
          <div>여기에 메인 컨텐츠가 와야함..</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MyPageProfile from "@/components/mypage/MyPageProfile";
import SideMenuBar from "@/components/slot/SideMenuBar";
import {useMyPage} from "@/composables/myPage";

export default {
  name: "my-page",
  components: {
    MyPageProfile,
    SideMenuBar,
  },
  setup() {
    const {error, isPending, getMyPageMenus} = useMyPage();
    getMyPageMenus();
    return {
      error,
      isPending,
    };
  },
};
</script>

<style></style>
