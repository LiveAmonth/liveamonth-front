<template>
  <div class="card row justify-content-center py-3">
    <title-slot>
      <template #title>
        <h4 class="mb-2">회원정보 수정 : 비밀번호 재확인</h4>
        <p class="mb-2"><span>보안을 위해서</span> 회원님의 <span>비밀번호</span>를 다시한번 입력해주세요.</p>
        <p class="mb-2">개인정보 변경에서는 비밀번호 변경, 이메일 변경 등의 정보를 확인, 수정하실 수 있습니다.</p>
      </template>
    </title-slot>
    <form role="form" @submit.prevent="handleSubmit" class="my-3">
      <ErrorField :error="error"></ErrorField>
      <Input
          :label="$t('member.loginId')"
          v-model="username"
          :error="''"
          class="mt-3"
          :is-read-only="true"
      ></Input>
      <PasswordInput
          :label="$t('member.password')"
          v-model="password"
          :error="''"
      ></PasswordInput>
      <FormButton
          :label="$t('member.reCheck')"
          :is-pending="isPending"
      ></FormButton>
    </form>
  </div>
</template>

<script>
import TitleSlot from "@/components/slot/TitleSlot";
import {ref} from "vue";
import {useStore} from "vuex";
import Input from "@/components/slot/Input";
import PasswordInput from "@/components/slot/PasswordInput";
import FormButton from "@/components/slot/FormButton";
import ErrorField from "@/components/slot/ErrorField";
import {useReCheck} from "@/composables/login";
import {useRoute, useRouter} from "vue-router";

export default {
  name: "",
  components: {
    TitleSlot,
    ErrorField,
    Input,
    PasswordInput,
    FormButton
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    console.log(route.params.page);
    const username = ref(store.getters["auth/loggedInUser"].loginId);
    const password = ref("");
    const {error, reCheck, isPending, result} = useReCheck();
    const handleSubmit = async () => {
      await reCheck(username.value, password.value);
      if(result.value)  {
        await router.push({name: `MyPage.${route.params.page}`});
      }
    }
    return {
      username,
      password,
      handleSubmit,
      error,
      isPending,
      result
    }
  },
}

</script>

<style scoped>
</style>