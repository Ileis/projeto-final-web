<template>
  <div :class="variant">
    <NavBar
      @contrast="onContrast()"
      @plus-font="onPlusFont()"
      @minus-font="onMinusFont()"
      @protanopia="onProtanopia()"
      @deuteranopia="onDeuteranopia()"
      @tritanopia="onTritanopia()"
      :isFontSize="isFontSize"
      isTextContrast="white"
      isNavContrast="dark"
    />
    <router-view
      :isTextContrast="variantText"
      :isBgContrast="variantBg"
      :isFontSize="isFontSize"
      :isTypeDaltonism="isTypeDaltonism"
    />
    <FooterBar />
  </div>
</template>

<script>
import NavBar from "../src/components/NavBar.vue";
import FooterBar from "../src/components/FooterBar.vue";
export default {
  name: "App",
  components: { NavBar, FooterBar },
  data() {
    return {
      isFontSize: 6,
      isContrast: true,
      variant: "color-body-primary",
      variantBg: "",
      variantText: "",
      isTypeDaltonism: "",
    };
  },
  methods: {
    onContrast() {
      console.log(this.isContrast);
      this.isContrast = !this.isContrast;
      this.isTypeDaltonism = "auto";
      if (this.isContrast) {
        this.variantBg = "dark";
        this.variantText = "white";
        this.variant = "color-body-contrast";
      } else {
        (this.variantBg = ""),
          (this.variantText = ""),
          (this.variant = "color-body-primary");
      }
    },
    onPlusFont() {
      if (this.isFontSize === 1) {
        this.isFontSize = 1;
      } else {
        this.isFontSize--;
      }
    },
    onMinusFont() {
      if (this.isFontSize === 6) {
        this.isFontSize = 6;
      } else {
        this.isFontSize++;
      }
    },
    onProtanopia() {
      this.variant = "dal-prota-bg4";
      this.isTypeDaltonism = "protanopia";
    },
    onDeuteranopia() {
      this.variant = "dal-deute-bg4";
      this.isTypeDaltonism = "deuteranopia";
    },
    onTritanopia() {
      this.variant = "dal-trita-bg4";
      this.isTypeDaltonism = "tritanopia";
    },
  },
};
</script>

<style></style>
