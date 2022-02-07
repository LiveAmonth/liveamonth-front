<template>
  <div id="app">
    <div id="header">
      <Header />
    </div>
    <router-view />
    <div id="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style></style>
