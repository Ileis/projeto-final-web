<template>
  <nav :class="baseNavContrast">
    <div class="container">
      <router-link
        to="/"
        class="nav-brand text-decoration-none"
        :class="[`fs-${isFontSize}`, `text-${baseContrast}`]"
      >
        <i class="fa fa-mobile me-1"></i>BU</router-link
      >

      <router-link
        to="/about"
        class="nav-brand text-decoration-none"
        :class="[`fs-${isFontSize}`, `text-${baseContrast}`]"
      >
        <i class="fa fa-info-circle me-1"></i>SOBRE
      </router-link>

      <router-link
        to="/contact"
        class="nav-brand text-decoration-none"
        :class="[`fs-${isFontSize}`, `text-${baseContrast}`]"
      >
        <i class="fa fa-phone me-1"></i>CONTATO
      </router-link>

      <span class="" :class="[`fs-${isFontSize}`, `text-${baseContrast}`]"
        >Bem vindo, {{ store.getUsername }}!</span
      >

      <div class="dropdown">
        <button :class="baseBtnContrast" @click.stop.prevent="toggle()">
          Acessibilidade
        </button>
        <div v-show="isOpen">
          <ul class="list-unstyled">
            <li>
              <button :class="baseBtnContrast" @click="plusFont()">A +</button>
            </li>
            <li>
              <button :class="baseBtnContrast" @click="minusFont()">A -</button>
            </li>
            <li>
              <button :class="baseBtnContrast" @click="onContrast()">
                Claro/Escuro
              </button>
            </li>
            <li>
              <button :class="baseBtnContrast" @click="onProtanopia()">
                Protanopia
              </button>
            </li>
            <li>
              <button :class="baseBtnContrast" @click="onDeuteranopia()">
                Deuteranopia
              </button>
            </li>
            <li>
              <button :class="baseBtnContrast" @click="onTritanopia()">
                Tritanopia
              </button>
            </li>
          </ul>
        </div>
      </div>

      <router-link
        to="/user/login"
        class="btn btn-primary my-1 mx-1"
        v-if="!store.logged"
      >
        Login
      </router-link>

      <button v-else class="btn btn-danger" @click="store.logOutUser">
        Sair
      </button>
    </div>
  </nav>
</template>

<script>
import { userStore } from "../store/storeUser";

export default {
  props: ["isTextContrast", "isNavContrast", "isFontSize"],
  name: "NavBar",
  data() {
    const store = userStore();

    return {
      store,
      isOpen: false,
    };
  },
  computed: {
    baseContrast() {
      return this.isTextContrast;
    },
    baseNavContrast() {
      return [
        "navbar",
        "navbar-expand-sm",
        `navbar-${this.isNavContrast}`,
        `bg-${this.isNavContrast}`,
      ];
    },
    baseBtnContrast() {
      return ["btn", "text-decoration-none", `text-${this.isTextContrast}`];
    },
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
    plusFont() {
      this.$emit("plus-font");
    },
    minusFont() {
      this.$emit("minus-font");
    },
    onContrast() {
      this.$emit("contrast");
    },
    onProtanopia() {
      this.$emit("protanopia");
    },
    onDeuteranopia() {
      this.$emit("deuteranopia");
    },
    onTritanopia() {
      this.$emit("tritanopia");
    },
    onFontSize() {
      this.isFontSize;
    },
  },
};
</script>

<style scoped>
span {
  color: white;
}
</style>
