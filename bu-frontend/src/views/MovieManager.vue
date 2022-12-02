<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p
          class="h3 fw-bold"
          :class="[
            `text-${baseTextContrast}`,
            `fs-${baseFontSize}`,
            `text-color: ${baseDaltonism.t3}`,
          ]"
        >
          Filme
          <router-link
            to="/movies/add"
            class="btn btn-sm"
            :class="[
              `btn-${baseBgContrast}`,
              `fs-${baseFontSize}`,
              `background-color: ${baseDaltonism.bg3}`,
            ]"
            ><i class="fa fa-plus-circle me-2"></i>Novo</router-link
          >
        </p>
        <p
          class="fst-italic"
          :class="[
            `text-${baseTextContrast}`,
            `fs-${baseFontSize}`,
            `text-color: ${baseDaltonism.t3}`,
          ]"
        >
          Adicione um novo filme de terror para curtir com seus amigos e
          familiares em uma noite macabra de terror e thriller com os piores
          vilões do cinema.
        </p>
        <form>
          <div class="row">
            <div class="col-md-6">
              <div class="row">
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Pesquisar Filme"
                  />
                </div>
                <div class="col">
                  <input
                    type="submit"
                    class="btn"
                    :class="[
                      `btn-${baseBgContrast}`,
                      `fs-${baseFontSize}`,
                      `background-color: ${baseDaltonism.bg1}`,
                    ]"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- Spinner -->
  <div v-if="loading">
    <div class="container">
      <div class="row">
        <div class="col">
          <SpinnerBar />
        </div>
      </div>
    </div>
  </div>

  <!-- ErrorMessage -->

  <div v-if="!loading && errorMessage">
    <div class="container mt-3">
      <div class="row">
        <div class="col">
          <p class="h4 text-danger fw-bold">{{ errorMessage }}</p>
        </div>
      </div>
    </div>
  </div>

  <div class="container py-3" v-if="movies.length > 0">
    <div class="row">
      <div
        class="col-md-3 mb-3 text-center"
        v-for="movie in movies"
        :key="movie"
      >
        <div class="col">
          <div
            class="card mb-4 rounded-3 shadow-sm"
            :class="[
              `bg-${baseBgContrast}`,
              `background-color: ${baseDaltonism.bg3}`,
            ]"
          >
            <div class="card-header py-3">
              <h4
                class="my-0 fw-normal"
                :class="[
                  `text-${baseTextContrast}`,
                  `fs-${baseFontSize}`,
                  `text-color: ${baseDaltonism.t4}`,
                ]"
              >
                {{ movie.attributes.title }}
              </h4>
            </div>
            <div class="card-body">
              <img
                class="bd-placeholder-img mb-4 contact-img"
                :src="movie.attributes.imgSrc"
              />
              <div class="d-flex justify-content-center align-items-center">
                <router-link
                  :to="`/movies/view/${movie.id}`"
                  class="btn btn-warning my-1"
                  title="Visualizar filme"
                  :class="[`background-color: ${baseDaltonism.bg1}`]"
                >
                  <i class="fa fa-eye"></i>
                </router-link>
                <router-link
                  :to="`/movies/edit/${movie.id}`"
                  class="btn btn-info my-1"
                  title="Editar filme"
                  :class="[`background-color: ${baseDaltonism.bg2}`]"
                >
                  <i class="fa fa-pen"></i>
                </router-link>
                <button
                  class="btn btn-danger my-1"
                  @click="clickDeleteMovie(movie.id)"
                  title="Deletar filme"
                  :class="[`background-color: ${baseDaltonism.bg3}`]"
                >
                  <i class="fa fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MovieService } from "@/services/MovieServices";
import SpinnerBar from "../components/SpinnerBar.vue";

export default {
  props: [
    "isTextContrast",
    "isBgContrast",
    "isFontSize",
    "isDaltonism",
    "isTypeDaltonism",
  ],
  name: "MovieManager",
  components: { SpinnerBar },
  data: function () {
    return {
      loading: false,
      movies: [],
      errorMessage: null,
    };
  },
  created: async function () {
    try {
      this.loading = true;
      let response = await MovieService.getAllMovies();
      this.movies = response.data.data;
      this.loading = false;
    } catch (error) {
      this.errorMessage = error;
      this.loading = false;
    }
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
  methods: {
    clickDeleteMovie: async function (movieId) {
      try {
        this.loading = true;
        let response = await MovieService.deleteMovie(movieId);
        if (response) {
          console.log("Deletado com sucesso");
          let response = await MovieService.getAllMovies();
          this.movies = response.data.data;
          this.loading = false;
        }
      } catch (error) {
        console.log("Deu ruim");
        this.errorMessage = error;
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped></style>
