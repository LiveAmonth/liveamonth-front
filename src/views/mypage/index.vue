<template>
  <!--  <my-page-profile></my-page-profile>-->
  <side-menu-bar v-if="!isPending"></side-menu-bar>
  <div>여기에 메인 컨텐츠가 와야함..</div>
</template>

<script>
// import MyPageProfile from "@/components/mypage/MyPageProfile";
import SideMenuBar from "@/components/slot/SideMenuBar";
import { useMyPage } from "@/composables/myPage";

export default {
  name: "my-page",
  components: {
    // MyPageProfile,
    SideMenuBar,
  },
  setup() {
    const { error, isPending, getMyPageMenus } = useMyPage();
    getMyPageMenus();
    return {
      error,
      isPending,
    };
  },
};
</script>

<style></style>
