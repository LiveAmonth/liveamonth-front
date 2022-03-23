import { useStore } from "vuex";
import { computed, ref } from "vue";

export const useMyPage = () => {
  const store = useStore();
  const error = ref(null);
  const isPending = ref(false);
  const menus = computed(() => store.getters["myPage/myPageMenus"]);

  const getMyPageMenus = async () => {
    isPending.value = true;

    try {
      await store.dispatch("myPage/getMyPageMenus");
      isPending.value = false;
    } catch (err) {
      error.value = "메뉴 정보를 가져올 수 없습니다.";
      isPending.value = false;
    }
  };

  return {
    error,
    isPending,
    menus,
    getMyPageMenus,
  };
};
