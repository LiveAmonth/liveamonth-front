<template>
  <div class="form-group">
    <label class="form-control-placeholder">{{ label }}</label>
    <input
        :value="modelValue"
        @input="onInput"
        type="text"
        class="form-control"
        :readonly="isReadOnly"
    >
    <div v-if="error" class="text-red">
      {{ error }}
    </div>
  </div>
</template>

<script>
import {getCurrentInstance} from "vue";


export default {
  props: {
    label: {
      type: String,
      required: true
    },
    error: {
      type: String,
      required: true
    },
    modelValue: {
      type: String,
      required: true
    },
    isReadOnly:{
      type: Boolean,
      defaults: false
    }
  },
  setup() {
    const {emit} = getCurrentInstance();
    const onInput = (e) => {
      emit('update:modelValue', e.target.value);
    }
    return {
      onInput
    }
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

</style>