<template>
  <div class="mb-0">
    <div class="card">
      <div class="row g-0 pt-4">
        <div class="col-md-6">
          <div class="card-body">
            <slot name="card">
            </slot>
          </div>
        </div>
        <div class="col-md-5">
          <div class="card-body">
            <div class="section-title sidebar-title">
              <h5> 제목:
                <slot name="cardTitle">제목입니다.</slot>
              </h5>
            </div>
            <p class="card-text">
              <slot name="cardPreview"> 게시글 미리보기 내용</slot>
            </p>
          </div>
        </div>
        <div class="card-footer text-center">
          <router-link tag="a" class="btn btn-primary btn-sm" to="#!">해당 게시글 더보기
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "",
  components: {
  },
  data() {
    return {};
  }
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
