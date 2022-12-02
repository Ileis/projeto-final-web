<template>
  <div class="formatImg2">
    <div
      class="formatText2"
      :class="[`text-${baseBgContrast}`, `text-color: ${baseDaltonism.t2}`]"
    >
      O que somos?
    </div>
  </div>
  <div class="container mt-4">
    <div class="row">
      <div class="col">
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
                  `text-color: ${baseDaltonism.t1}`,
                ]"
              >
                Sobre
              </h1>
              <p
                :class="[
                  `text-${baseTextContrast}`,
                  `fs-${baseFontSize}`,
                  `text-color: ${baseDaltonism.t1}`,
                ]"
              >
                O que é Bu? BU é uma rede social global para discussão e
                descoberta de filmes de terror populares. Use-o como um diário
                para registrar e compartilhar sua opinião sobre os filmes
                enquanto os assiste ou apenas para acompanhar os filmes que você
                viu no passado. Mostre seus favoritos em sua página de perfil.
                Avalie, analise e marque os filmes à medida que os adiciona.
                Encontre e siga seus amigos para ver o que eles estão gostando.
                Mantenha uma lista de filmes que você gostaria de ver e crie
                listas.
              </p>
            </div>
          </div>
        </div>

        <div
          class="card mt-4"
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
                  `text-color: ${baseDaltonism.t1}`,
                ]"
              >
                Por que é chamado BU?
              </h1>
              <p
                :class="[
                  `text-${baseTextContrast}`,
                  `fs-${baseFontSize}`,
                  `text-color: ${baseDaltonism.t1}`,
                ]"
              >
                O conceito BU tem como a prática de realizar a brincadeira de
                doces ou travessuras, na qual as crianças vestidas de monstros,
                criaturas e personagens assustam a vizinhaça. Geralmente isso é
                feito utilizando frases como, 'Boo' para realizar esses sustos.
                BU é nomeado por nosso amor pelo o filme de terror e por essa
                brincadeira com o seu nome antecessor. Aqui está um pouco da
                história.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container mt-4">
    <div class="row">
      <div class="col-4">
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
                  `text-color: ${baseDaltonism.t1}`,
                ]"
              >
                Missão
              </h1>
            </div>
            <p
              :class="[
                `text-${baseTextContrast}`,
                `fs-${baseFontSize}`,
                `text-color: ${baseDaltonism.t1}`,
              ]"
            >
              Promover, através de dados de filmes, o compartilhamento entre os
              filmes de terror aos cinematográficos amantes do espanto.
            </p>
          </div>
        </div>
      </div>
      <div class="col-4">
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
                  `text-color: ${baseDaltonism.t1}`,
                ]"
              >
                Visão
              </h1>
            </div>
            <p
              :class="[
                `text-${baseTextContrast}`,
                `fs-${baseFontSize}`,
                `text-color: ${baseDaltonism.t1}`,
              ]"
            >
              Ser reconhecida como uma empresa parceira na interação e
              compartilhamento de filmes de terror.
            </p>
          </div>
        </div>
      </div>
      <div class="col-4">
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
                  `text-color: ${baseDaltonism.t1}`,
                ]"
              >
                Valores
              </h1>
            </div>
            <ul
              class="list-unstyled"
              :class="[
                `text-${baseTextContrast}`,
                `fs-${baseFontSize}`,
                `text-color: ${baseDaltonism.t1}`,
              ]"
            >
              <li>Amizade</li>
              <li>Compartilhar</li>
              <li>Dados</li>
              <li>Espanto</li>
              <li>Feedbacks</li>
            </ul>
          </div>
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
  name: "AboutView",
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
.formatImg2 {
  width: 100%;
  height: 400px;
  background-size: cover;
  background-image: url("https://c4.wallpaperflare.com/wallpaper/788/639/815/dark-film-halloween-horror-wallpaper-preview.jpg");
}
.formatText2 {
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
