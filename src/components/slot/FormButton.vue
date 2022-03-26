<template>
  <div class="form-group">
    <button
        v-if="!isPending"
        class="form-control btn btn-primary rounded submit mt-3 px-3"
    >
      {{ label }}
    </button>
    <button
        v-if="isPending"
        class="form-control btn btn-primary rounded submit mt-3 px-3"
        disabled
    >
      Loading
    </button>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    isPending: {
      type: Boolean,
      required: true
    },
  },
  setup() {
    return {}
  }
}

</script>
<style scoped>
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

</style>