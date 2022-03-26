<template>
  <div class="form-group">
    <label class="form-control-placeholder">{{ label }}</label>
    <input
        :value="modelValue"
        @input="onInput"
        :type="isVisibility ? 'text' : 'password'"
        class="form-control"
        :readonly="isReadOnly"
    >
    <i :class="isVisibility ?'bi-eye-slash-fill':'bi-eye-fill'"
       class="field-icon bi"
       @click="switchVisibility"
       style="cursor: pointer"
    ></i>
    <div v-if="error" class="text-red">
      {{ error }}
    </div>
  </div>
</template>

<script>
import {getCurrentInstance, ref} from "vue";


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
    isReadOnly: {
      type: Boolean,
      defaults: false
    }
  },
  setup() {
    const {emit} = getCurrentInstance();
    const onInput = (e) => {
      emit('update:modelValue', e.target.value);
    }
    const isVisibility = ref(false);
    const switchVisibility = () => {
      isVisibility.value = !isVisibility.value;
    }
    return {
      onInput,
      isVisibility,
      switchVisibility,
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

.field-icon {
  position: absolute;
  top: 35%;
  right: 15px;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  color: rgba(0, 0, 0, 0.3);
  margin-top: 15px;
  padding-top: 1rem;
}
</style>