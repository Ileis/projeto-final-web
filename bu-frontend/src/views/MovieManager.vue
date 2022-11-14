<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-dark fw-bold">
          Filme
          <router-link to="/movies/add" class="btn btn-dark btn-sm"
            ><i class="fa fa-plus-circle me-2"></i>Novo</router-link
          >
        </p>
        <p class="fst-italic">
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
                  <input type="submit" class="btn btn-outline-dark" />
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
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
              <h4 class="my-0 fw-normal">{{ movie.title }}</h4>
            </div>
            <div class="card-body">
              <img
                class="bd-placeholder-img mb-4 contact-img"
                :src="movie.imgSrc"
              />
              <div class="d-flex justify-content-center align-items-center">
                <router-link
                  :to="`/movies/view/${movie.id}`"
                  class="btn btn-warning my-1"
                >
                  <i class="fa fa-eye"></i>
                </router-link>
                <router-link
                  :to="`/movies/edit/${movie.id}`"
                  class="btn btn-info my-1"
                >
                  <i class="fa fa-pen"></i>
                </router-link>
                <button
                  class="btn btn-danger my-1"
                  @click="clickDeleteMovie(movie.id)"
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
      this.movies = response.data;
      this.loading = false;
    } catch (error) {
      this.errorMessage = error;
      this.loading = false;
    }
  },
  methods: {
    clickDeleteMovie: async function (movieId) {
      try {
        this.loading = true;
        let response = await MovieService.deleteMovie(movieId);
        if (response) {
          let response = await MovieService.getAllMovies();
          this.movies = response.data;
          this.loading = false;
        }
      } catch (error) {
        this.errorMessage = error;
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped></style>
