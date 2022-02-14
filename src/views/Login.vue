<template>
  <div class="login set-bg" v-bind:style="{ backgroundImage: 'url(' + this.backgroundUrl + ')' }">
    <section class="ftco-section login-section">
      <div class="container p-0 login-container">
        <div class="row justify-content-center pt-2 mb-5">
          <div class="col-md-10 text-center mt-3">
            <a href="/"><img :src="logoUrl" alt=""/></a>
          </div>
        </div>
        <div class="row justify-content-center p-0">
          <div class="col-md-10">
            <form role="form" action="/login" method="post">
              <!--              <div th:if="${#fields.hasGlobalErrors()}">-->
              <!--                <p class="field-error msg" th:each="err : ${#fields.globalErrors()}"-->
              <!--                   th:text="${err}">전체 오류 메시지</p>-->
              <!--              </div>-->
              <div class="form-group mt-3">
                <label class="form-control-placeholder" for="userID"
                >아이디</label
                >
                <input type="text" class="form-control" id="userID"/>
                <div class="field-error msg"/>
              </div>
              <div class="form-group">
                <label class="form-control-placeholder" for="password"
                >비밀번호</label
                >
                <input type="password" id="password" class="form-control"/>
                <span
                    id="password-field"
                    class="fa fa-fw fa-eye field-icon"
                ></span>
                <div class="field-error msg"/>
              </div>
              <div class="form-group">
                <button
                    type="submit"
                    class="form-control btn btn-primary rounded submit mt-3 px-3"
                >
                  로그인
                </button>
              </div>
            </form>
            <div class="form-group d-md-flex">
              <div class="w-50 text-left">
                <label class="checkbox-wrap checkbox-primary mb-0"
                >[[#{login.remember}]]
                  <input type="checkbox" name="userCookie" checked/>
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="w-50 text-md-right">
                <a href="/findId" class="underline-text">아이디 찾기</a>
              </div>

              <div class="w-50 text-md-right">
                <a href="/findPw" class="underline-text">비밀번호 찾기</a>
              </div>
            </div>

            <p class="text-center">
              아직 회원이 아니신가요?
              <a href="/user/signUp" class="underline-text">회원가입</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "",
  components: {},
  data() {
    return {
      logoUrl: require("@/assets/img/logo.png"),
      backgroundUrl: require("@/assets/img/login_background.jpg")
    };
  },
  setup() {
  },
  created() {
  },
  mounted() {
  },
  methods: {}
,
}
;
</script>

<style scoped>
.login-container {
  background: white;
  width: 600px;
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

.msg {
  color: red;
}
</style>
