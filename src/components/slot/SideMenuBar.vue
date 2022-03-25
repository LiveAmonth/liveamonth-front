<template>
  <div v-for="middleMenu in menus" :key="middleMenu">
    <title-slot>
      <template #title><h4>{{ $t("myPage." + middleMenu.title + ".title") }}</h4></template>
    </title-slot>
    <ul>
      <li v-for="menu in middleMenu.contents" :key="menu">
        <a class="pl-3" @click="changeMenu(menu)">{{ $t("myPage." + middleMenu.title + "." + menu) }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import TitleSlot from "@/components/slot/TitleSlot";
import {useMyPage} from "@/composables/myPage";

export default {
  name: "side-menu-bar",
  components: {
    TitleSlot,
  },
  setup() {
    const {menus} = useMyPage();
    const changeMenu = (menu) => {
      console.log(menu);
    };
    return {
      menus,
      changeMenu,
    };
  },
};
</script>

<style></style>
