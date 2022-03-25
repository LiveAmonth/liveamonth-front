<template>
  <div class="section-title sidebar-title mb-3">
    <h5>{{ $t("home.profile") }}</h5>
  </div>
  <div class="card border-0 px-0">
    <div class="row g-0 m-2">
      <div class="col-md-3">
        <div name="profile-image px-3">
          <img
            v-if="image == null"
            :src="defaultImg"
            class="img-thumbnail img-circle mx-2"
          />
          <img v-else :src="image" class="img-thumbnail img-circle mx-2" />
        </div>
      </div>
      <div class="col-md-9">
        <div class="card-body p-0">
          <div class="row">
            <p class="card-text col-md-4">
              {{ $t("member.nickname") }}: {{ nickname }}
            </p>
            <p class="card-text col-md-3">
              {{ $t("member.gender.title") }}:
              {{ $t(`member.gender.${gender}`) }}

            </p>
            <p class="card-text col-md-3">
              {{ $t("member.age.start") }}: {{ age }}{{ $t("member.age.end") }}
            </p>
          </div>
          <div class="row">
            <p class="card-text col-md-6">
              {{ $t("member.email") }} : {{ email }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "UserProfileCard",
  props: {
    nickname: String,
    age: Number,
    email: String,
    image: String,
    gender: String,
  },
  setup() {
    const store = useStore();
    const defaultImg = computed(() => {
      return store.state.defaultProfile;
    });

    return { defaultImg };
  },
  methods: {
    setGenderIcon(gender) {
      return gender === "M" ? "bi bi-gender-male" : "bi bi-gender-female";
    },
  },
};
</script>
<style scoped>
.img-circle {
  width: 50%;
  border-radius: 100%;
}
</style>
