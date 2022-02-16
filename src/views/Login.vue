<template>
  <div
    class="login set-bg"
    v-bind:style="{ backgroundImage: 'url(' + backgroundUrl + ')' }"
  >
    <section class="ftco-section login-section">
      <div class="container p-0 login-container">
        <div class="row justify-content-center pt-2 mb-5">
          <div class="col-md-10 text-center mt-3">
            <a href="/"><img :src="logoUrl" alt="" /></a>
          </div>
        </div>
        <div class="row justify-content-center p-0">
          <div class="col-md-10">
            <form class="form" @submit.prevent="handleSubmit">
              <!--              <div th:if="${#fields.hasGlobalErrors()}">-->
              <!--                <p class="field-error msg" th:each="err : ${#fields.globalErrors()}"-->
              <!--                   th:text="${err}">전체 오류 메시지</p>-->
              <!--              </div>-->
              <div class="form-group mt-3">
                <label class="form-control-placeholder" for="userId">{{
                  $t("login.signIn")
                }}</label>
                <input
                  id="userId"
                  type="text"
                  class="form-control"
                  v-model="username"
                />
                <div class="field-error msg" />
              </div>
              <div class="form-group">
                <label class="form-control-placeholder" for="password">{{
                  $t("login.password")
                }}</label>
                <input
                  id="password"
                  type="password"
                  class="form-control"
                  v-model="password"
                />
                <div class="field-error msg" />
              </div>
              <div class="form-group">
                <button v-if="!isPending"
                  class="form-control btn btn-primary rounded submit mt-3 px-3"
                >
                  {{ $t("login.signIn") }}
                </button>
                <button v-if="isPending"
                  class="form-control btn btn-primary rounded submit mt-3 px-3"
                        disabled
                >
                  Loading
                </button>
              </div>
            </form>

            <p class="text-lg-end col">
              <router-link tag="a" to="/user/findId" class="mx-2">{{
                $t("login.findId")
              }}</router-link>
              <router-link tag="a" to="/user/findPw">{{
                $t("login.findPw")
              }}</router-link>
            </p>

            <p class="text-center">
              {{ $t("login.notMember") }}
              <router-link tag="a" to="/user/signUp">{{
                $t("login.signUp")
              }}</router-link>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import useLogin from "@/composables/useLogin";
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  name: "",
  components: {},
  data() {
    return {
    };
  },
  setup() {
    const{ error, login, isPending} = useLogin()
    const store = new useStore()
    const router = useRouter()

    const username = ref('')
    const password = ref('')

    const handleSubmit = async () =>{
      await login(username.value, password.value)
      if(store.state.auth.status.loggedIn){
        router.push({name:'Home'})
      }
    }
    return {username, password, handleSubmit, error, isPending}
  },
  created() {},
  mounted() {},
  methods: {
    async login() {
      let loginData = {};
      loginData.userId = this.userId;
      loginData.password = this.password;
      console.log(loginData);
      await this.axios.post("/v1/api/login", JSON.stringify(loginData))
          .then((res) => {
            if (res.status === 200) {
              console.log(res.data);
              this.$router.push({ path: "/about" });
            }
        }
      );
    },
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

.form-group {
  position: relative;
}

.form-group label {
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1px;
  color: #135762;
}

.field-icon {
  position: absolute;
  top: 40%;
  right: 15px;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  color: rgba(0, 0, 0, 0.3);
  margin-top: 15px;
  padding-top: 1rem;
}

.form-control {
  height: 52px;
  background: #fff;
  color: #000;
  font-size: 16px;
  border-radius: 5px;
  -webkit-box-shadow: none;
  box-shadow: none;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.form-control::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: rgba(0, 0, 0, 0.3);
}

.form-control::-moz-placeholder {
  /* Firefox 19+ */
  color: rgba(0, 0, 0, 0.3);
}

.form-control:-ms-input-placeholder {
  /* IE 10+ */
  color: rgba(0, 0, 0, 0.3);
}

.form-control:-moz-placeholder {
  /* Firefox 18- */
  color: rgba(0, 0, 0, 0.3);
}

.form-control:focus,
.form-control:active {
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  border: 1px solid #135762;
}

textarea.form-control {
  height: inherit;
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

.btn {
  cursor: pointer;
  border-radius: 40px;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-size: 15px;
}

.btn:hover,
.btn:active,
.btn:focus {
  outline: none;
}

.btn.btn-primary {
  background: #135762;
  border: none;
  color: #fff;
  text-transform: uppercase;
  box-shadow: -6px -6px 5px rgba(228, 226, 226, 0.8), 3px 3px 10px;
}

.btn.btn-primary:hover {
  background: #fff1f1;
  color: #135762;
  box-shadow: inset -3px -3px 5px rgba(225, 225, 225, 0.5),
    inset 8px 0px 16px rgba(0, 0, 0, 0.1);
}
a,
a:hover {
  color: #135762;
}

.msg {
  color: red;
}
</style>
