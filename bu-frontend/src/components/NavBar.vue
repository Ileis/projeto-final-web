<template>
  <nav class="navbar navbar-dark bg-dark navbar-expand-sm">
    <div class="container">

      <router-link to="/" class="navbar-brand">
        <i class="fa fa-mobile me-1"></i>BU</router-link
      >

      <span class="">Bem vindo, {{store.getUsername}}!</span>


      <!-- Botão de logar quando está deslogado e botão de deslogar quando está logado  -->
      <!-- a tela de login vai permitir o cadastro -->

      <router-link
        to="/user/login"
        class="btn btn-primary my-1 mx-1"
        v-if="!store.logged">
          Login
      </router-link>

      <button v-else class="btn btn-danger" @click="store.logOutUser">Sair</button>


      <!-- <button v-if="false" class="btn btn-primary btn-sm">Log-in</button> -->

    </div>
  </nav>
</template>

<script>

import { userStore } from "../store/storeUser"

export default {
  name: "NavBar",
  data(){

    const store = userStore();

    return{
      store
    }
  }
};
</script>

<style scoped>
span{
  color: white;
}
</style>
