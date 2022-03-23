import { ref } from "vue";
import { useStore } from "vuex";

/**
 * 1. 서버와 통신
 * 2. 로그인 성공 시 응답 값(토큰)을 받아 Local Storage에 저장
 * 3. vuex를 사용해 로그인 여부를 state에 저장
 *    -> 다른 컴포넌트에서 사용가능
 */
export const useLogin = () => {
  const store = useStore();
  const error = ref(null);
  const isPending = ref(false);

  const login = async (username, password) => {
    error.value = null;
    isPending.value = true;

    try {
      // auth.module.js에 있는 login action 실행.
      await store.dispatch("auth/login", { username, password });
      error.value = null;
      isPending.value = false;
    } catch (err) {
      error.value = "로그인 정보가 올바르지 않습니다.";
      isPending.value = false;
    }
  };

  return { error, login, isPending };
};
