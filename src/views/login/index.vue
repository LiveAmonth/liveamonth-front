<template>
  <div
      class="login set-bg"
      v-bind:style="{ backgroundImage: 'url(' + backgroundUrl + ')' }"
  >
    <section class="ftco-section login-section">
      <div class="container p-0 login-container">
        <div class="row justify-content-center pt-2 mb-5">
          <div class="col-md-10 text-center mt-3">
            <FormLogo></FormLogo>
          </div>
        </div>
        <div class="row justify-content-center p-0">
          <div class="col-md-10">
            <form class="form" @submit.prevent="handleSubmit">
              <ErrorField :error="error"></ErrorField>
              <Input
                  :label="$t('member.loginId')"
                  v-model="username"
                  :error="''"
                  class="mt-3"
              ></Input>
              <PasswordInput
                  :label="$t('member.password')"
                  v-model="password"
                  :error="''"
              >
              </PasswordInput>
              <FormButton
                  :label="$t('member.login')"
                  :is-pending="isPending"
              >
              </FormButton>
            </form>

            <p class="text-lg-end col">
              <router-link tag="a" to="/find-id" class="mx-2"
              >{{ $t("member.findId") }}
              </router-link>
              <router-link tag="a" to="/find-pw"
              >{{ $t("member.findPw") }}
              </router-link>
            </p>

            <p class="text-center">
              {{ $t("member.notMember") }}
              <router-link tag="a" to="/sign-up"
              >{{ $t("member.signUp") }}
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {useLogin} from "@/composables/login";
import {computed, ref} from "vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import Input from "@/components/slot/Input";
import PasswordInput from "@/components/slot/PasswordInput";
import FormButton from "@/components/slot/FormButton";
import ErrorField from "@/components/slot/ErrorField";
import FormLogo from "@/components/slot/FormLogo";

export default {
  name: "Login",
  components: {
    FormLogo,
    ErrorField,
    Input,
    PasswordInput,
    FormButton
  },
  setup() {
    const {error, login, isPending} = useLogin();
    const store = new useStore();
    const router = useRouter();

    const username = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      await login(username.value, password.value);
      if (store.getters["auth/isLoggedIn"]) {
        await router.push({name: "Home"});
      }
    };

    const backgroundUrl = computed(() => {
      return store.state.loginBackground;
    });

    return {
      backgroundUrl,
      username,
      password,
      handleSubmit,
      error,
      isPending
    };
  },
};
</script>

<style scoped>
.login {
  height: 900px;
}

.login-container {
  background: white;
  width: 30%;
  padding-top: 40%;
  box-shadow: rgba(19, 87, 98, 0.4) 5px 5px, rgba(19, 87, 98, 0.3) 10px 10px,
  rgba(19, 87, 98, 0.2) 15px 15px, rgba(19, 87, 98, 0.1) 20px 20px,
  rgba(19, 87, 98, 0.05) 25px 25px;
  border-radius: 10px;
}

.login-section {
  background: none;
  overflow: auto;
  padding: 7em 0;
}

.login-wrap .icon span {
  color: #fff;
}


/* Hide the browser's default checkbox */
.checkbox-wrap input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkbox-primary input:checked ~ .checkmark:after {
  color: #135762;
}

a,
a:hover {
  color: #135762;
}
</style>
