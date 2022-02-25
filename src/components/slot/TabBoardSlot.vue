<template>
  <div class="pd-text">
    <div class="pd-board">
      <div class="tab-board">
        <ul class="nav nav-tabs" role="tablist">
          <slot name="tab-button-1"></slot>
          <slot name="tab-button-2"></slot>
          <slot name="tab-button-3"></slot>
        </ul>
        <!-- Tab Contents -->
        <div class="tab-content" id="nav-tabContent">
          <slot name="tab-content-1"></slot>
          <slot name="tab-content-2"></slot>
          <slot name="tab-content-3"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      simpleData: "",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>

<style></style>
