import {ref} from "vue";
import {useStore} from "vuex";
import AuthService from "@/services/user.service";

/**
 * 1. 서버와 통신
 * 2. 로그인 성공 시 응답 값(토큰)을 받아 Local Storage에 저장
 * 3. vuex를 사용해 로그인 여부를 state에 저장
 *    -> 다른 컴포넌트에서 사용가능
 */
export const useLogin = () => {
    const store = useStore();
    const error = ref("");
    const isPending = ref(false);

    const login = async (username, password) => {
        error.value = "";
        isPending.value = true;

        // auth.module.js에 있는 login action 실행.
        await store.dispatch("auth/login", {username, password}).then(
            () => {
                error.value = "";
                isPending.value = false;
            }
        ).catch(
            (err) => {
                console.log(err);
                error.value = "아이디 또는 비밀번호가 일치하지 않습니다.";
                isPending.value = false;
            }
        )
    };

    return {error, login, isPending};
};

export const useReCheck = () => {
    const error = ref("");
    const isPending = ref(false);
    const result = ref(false);
    const reCheck = async (username, password) => {
        error.value = "";
        isPending.value = true;
        result.value = false;

        await AuthService.reCheckPassword(username, password).then(
            () => {
                error.value = "";
                isPending.value = false;
                result.value = true;
            }
        ).catch(
            (err) => {
                console.log(err);
                error.value = "비밀번호가 일치하지 않습니다.";
                isPending.value = false;
                result.value = false;
            }
        )
    };

    return {error, reCheck, isPending, result};
}
