<template>
  <nav class="navbar navbar-dark bg-dark navbar-expand-sm">
    <div class="container">

      <router-link to="/" class="navbar-brand">
        <i class="fa fa-mobile me-1"></i>BU</router-link
      >

      <!-- Botão de logar quando está deslogado e botão de deslogar quando está logado  -->
      <!-- a tela de login vai permitir o cadastro -->

      <router-link
        to="/user/login"
        class="btn btn-primary my-1 mx-1"
        v-show="true"
      >
      Login
      </router-link>

      <!-- <button v-if="false" class="btn btn-primary btn-sm">Log-in</button> -->
      <!-- <button v-else class="btn btn-danger btn-sm">Log-out</button> -->

    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped></style>
