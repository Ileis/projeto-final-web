<template>
  <NavBar />
  <router-view />
  <FooterBar />
</template>

<script>
import NavBar from "../src/components/NavBar.vue";
import FooterBar from "../src/components/FooterBar.vue";
export default {
  name: "App",
  components: { NavBar, FooterBar },
};
</script>

<style></style>
