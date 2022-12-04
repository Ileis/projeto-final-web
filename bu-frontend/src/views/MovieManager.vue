<template>
  <div>
      <div class="container mt-3">

      <!-- Header -->
      <div class="row">
        <div class="col">
          <p class="h3 text-dark fw-bold">
            Filme

            <!-- Botão de adicionar filme somente quando está logado -->
            <router-link to="/movies/add" class="btn btn-dark btn-sm" v-show="store.logged"
              ><i class="fa fa-plus-circle me-2"></i>Novo</router-link
            >

          </p>
          <p class="fst-italic">
            Adicione um novo filme de terror para curtir com seus amigos e
            familiares em uma noite macabra de terror e thriller com os piores
            vilões do cinema.
          </p>

          <!-- <form>
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
          </form> -->

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

    <!-- Movie Cards -->
    <div class="container py-3" v-if="movies.length > 0">
      <div class="row">
        <div class="col-md-3 mb-3 text-center" v-for="movie in movies" :key="movie">

          <MovieCard
          :title="movie.attributes.title"
          :imgSrc="movie.attributes.imgSrc"
          :id="movie.id"
          :clickDeleteMovie="clickDeleteMovie"
          />

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MovieService } from "@/services/MovieServices";
import SpinnerBar from "../components/SpinnerBar.vue";
import MovieCard from "../components/MovieCard.vue";
import { userStore } from "../store/storeUser"
// import { use } from 'vue/types/umd';

export default {
  name: "MovieManager",
  components: { SpinnerBar , MovieCard},
  data: function () {

    const store = userStore();

    return {
      loading: false,
      movies: [],
      errorMessage: null,
      store
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
  methods: {
    clickDeleteMovie: async function (movieId, token) {
      try {
        this.loading = true;
        let response = await MovieService.deleteMovie(movieId, token);
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