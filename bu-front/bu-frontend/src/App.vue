<template>
  <NavBar />
  <router-view />
</template>

<script>
import NavBar from "../src/components/NavBar.vue";
export default {
  name: "App",
  components: { NavBar },
};
</script>

<style></style>
