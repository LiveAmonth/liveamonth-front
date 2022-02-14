<template>
  <div class="section-title sidebar-title mb-3">
    <h5>프로필</h5>
  </div>
  <div class="card border-0 px-0">
    <div class="row g-0 m-2">
      <div class="col-md-3">
        <slot name="profile-image px-3">
          <img :src="defaultProfile" class="img-thumbnail img-circle mx-2">
        </slot>
        <div class="card-text pt-2 px-1">
          <i class="bi bi-eye px-1"></i> :<span class="px-1"><slot name="view-count">00</slot></span>
          <i class="bi bi-hand-thumbs-up px-1"></i>: <slot name="like-count">00</slot>
        </div>
      </div>
      <div class="col-md-9">
        <div class="card-body">
          <div class="row">
            <p class="card-text col-md-4">닉네임: <slot name="card-nickname">Default</slot></p>
            <p class="card-text col-md-3" >성별: <slot name="card-gender"><i class="bi bi-gender-male"></i></slot></p>
            <p class="card-text col-md-3" >나이: <slot name="card-age">00</slot>세</p>
          </div>
          <div class="row">
            <p class="card-text">이메일 : <slot name="card-email">OOOO@OOOO.OOO</slot></p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  name: 'UserProfileCard',
  data(){
    return{
      defaultProfile: require("@/assets/img/default.jpg")
    }
  }
}
</script>
<style scoped>
.img-circle{
  width: 50%;
  border-radius: 100%;
}
</style>