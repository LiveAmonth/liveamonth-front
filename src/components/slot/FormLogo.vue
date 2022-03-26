<template>
  <img :src="formLogo" alt=""/>
</template>

<script>
import {computed} from "vue";
import {useStore} from "vuex";

export default {
  setup() {
    const store = useStore();
    const formLogo = computed(() => {
      return store.state.logo;
    });
    return {formLogo};
  }
}

</script>