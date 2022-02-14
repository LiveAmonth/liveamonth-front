<template>
  <div class="mb-0">
    <div class="card">
      <div class="row g-0 pt-4">
        <div class="col-md-3 p-2 text-center">
          <slot name="card-schedule">
            <v-calendar />
          </slot>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <user-profile-card>
              <template v-slot:card-nickname> 아무개 </template>
              <template v-slot:card-age> 12 </template>
            </user-profile-card>
            <div class="section-title sidebar-title mt-4">
              <h5>
                제목:
                <slot name="card-title">제목입니다.</slot>
              </h5>
            </div>
          </div>
        </div>
        <div class="card-footer text-center">
          <router-link tag="a" class="btn btn-primary btn-sm" to="#!"
            >해당 스케줄 더보기</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UserProfileCard from "@/components/UserProfileCard";

export default {
  name: "",
  components: {
    UserProfileCard,
  },
};
</script>

<style></style>
