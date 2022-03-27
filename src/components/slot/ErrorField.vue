<template>
  <div v-if="error!== ''">
    <p class="field-error msg">{{ error }}</p>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: String,
    },
  },
}

</script>
<style scoped>
.form-group label {
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1px;
  color: #135762;
}

.msg {
  color: red;
}
</style>