<template>
  <div class="section-title sidebar-title mb-3">
    <h5>프로필</h5>
  </div>
  <div class="card border-0 px-0">
    <div class="row g-0 m-2">
      <div class="col-md-3">
        <div name="profile-image px-3">
          <img :src="profile" class="img-thumbnail img-circle mx-2" />
        </div>
      </div>
      <div class="col-md-9">
        <div class="card-body p-0">
          <div class="row">
            <p class="card-text col-md-4">닉네임: {{ cardInfo.loginId }}
            </p>
            <p class="card-text col-md-3">
              성별:
              <i v-bind:class="this.setGenderIcon('m')"></i>
            </p>
            <p class="card-text col-md-3">나이: 세</p>
          </div>
          <div class="row">
            <p class="card-text col-md-6">이메일 : </p>
            <p class="card-text col-md-3">
              조회수:
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "UserProfileCard",
  props:{
    cardInfo : Object
  },
  data() {
    return {
      profile: require("@/assets/img/default.jpg"),
    };
  },
  methods: {
    setGenderIcon(gender) {
      return gender === "M" ? "bi bi-gender-male" : "bi bi-gender-female";
    }
  }
};
</script>
<style scoped>
.img-circle {
  width: 50%;
  border-radius: 100%;
}
</style>
