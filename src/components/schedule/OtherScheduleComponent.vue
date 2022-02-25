<template>
  <div class="mb-0">
    <div class="card">
      <div class="row g-0 pt-4">
        <div class="col-md-3 p-2 text-center">
          <slot name="card-schedule"> </slot>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <slot name="profile-card"> </slot>
            <div class="section-title sidebar-title mt-4">
              <h5>
                {{ $t("home.title") }}
                <slot name="card-title">제목입니다.</slot>
              </h5>
            </div>
          </div>
        </div>
        <div class="card-footer text-center">
          <router-link tag="a" class="btn btn-primary btn-sm" to="#!">{{
            $t("home.moreSchedule")
          }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
};
</script>

<style scoped>
a {
  color: #ffffff;
  background: #135762;
  transition: all 0.1s ease-in-out;
  border: none;
}

a:hover {
  box-shadow: inset -3px -3px 5px rgb(255, 255, 255),
    inset 8px 0px 16px rgba(0, 0, 0, 0.1);
  color: #135762;
  background-color: #f3f3f3;
}
</style>
