<template>
  <div>
    <div class="formatImg">
      <div
        class="formatText"
        :class="[`text-${baseBgContrast}`, `text-color: ${baseDaltonism.t2}`]"
      >
        Entre em Contato
      </div>
    </div>
  </div>
  <div class="container mt-4">
    <div class="row">
      <div
        class="card"
        :class="[
          `bg-${baseBgContrast}`,
          `background-color: ${baseDaltonism.bg3}`,
        ]"
      >
        <div class="card-body">
          <div class="card-title">
            <h1
              :class="[
                `text-${baseTextContrast}`,
                `fs-${baseFontSize}`,
                `text-color: ${baseDaltonism.t3}`,
              ]"
            >
              Contato
            </h1>
          </div>
          <ul
            :class="[
              `text-${baseTextContrast}`,
              `fs-${baseFontSize}`,
              `text-color: ${baseDaltonism.t3}`,
            ]"
          >
            <li>Av. Vicente monteggia, 926</li>
            <li>Cavalhada - 91740-290</li>
            <li>Porto Alegre - RS, Brasil</li>
            <li>Fone: 51 99405-9951</li>
            <li>Instagram: @buterror</li>
            <li>E-mail: contato@buterror.com</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "isTextContrast",
    "isBgContrast",
    "isFontSize",
    "isTypeDaltonism",
    "isDaltonism",
  ],
  name: "ContactView",
  data: function () {
    return {};
  },
  computed: {
    baseTextContrast() {
      return this.isTextContrast;
    },
    baseBgContrast() {
      return this.isBgContrast;
    },
    baseFontSize() {
      return this.isFontSize;
    },
    baseDaltonism() {
      if (this.isTypeDaltonism == "protanopia") {
        return this.isDaltonism.isProtanopia;
      } else if (this.isTypeDaltonism === "deuteranopia") {
        return this.isDaltonism.isDeuteranopia;
      } else if (this.isTypeDaltonism === "tritanopia") {
        return this.isDaltonism.isTritanopia;
      } else {
        return {};
      }
    },
  },
};
</script>

<style scope>
.formatImg {
  width: 100%;
  height: 400px;
  background-size: cover;
  background-image: url("https://wallpaperaccess.com/full/235855.jpg");
}
.formatText {
  width: 600px;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.2);
  color: #fff;
  text-align: center;
  top: 100px;
  left: 89px;
  font-size: 72px;
}
</style>
