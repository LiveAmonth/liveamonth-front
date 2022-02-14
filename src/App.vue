<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css">
  <div id="app">
    <div id="header">
      <Header/>
    </div>
    <router-view/>
    <div id="footer">
      <Footer/>
    </div>
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import "@/assets/css/style.css";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>
