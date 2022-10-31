<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3">Detalhes do Filme</p>
        <p class="fst-italic">
          Confira mais detalhes sobre o seu filme favorito!
        </p>
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
  <div class="container" v-if="!loading && isDone()">
    <div class="row align-items-center">
      <div class="col-md-4">
        <img :src="movie.imgSrc" alt="" class="contact-img-big" />
      </div>
      <div class="col-md-6">
        <ul class="list-group">
          <li class="list-group-item">
            Title: <span class="fw-bold">{{ movie.title }}</span>
          </li>
          <li class="list-group-item">
            Título: <span class="fw-bold">{{ movie.titleBr }}</span>
          </li>
          <li class="list-group-item">
            Descrição: <span class="fw-bold">{{ movie.description }}</span>
          </li>
          <li class="list-group-item">
            Usuários que gostaram:
            <span class="fw-bold">{{ movie.userLike }}</span>
          </li>
          <li class="list-group-item">
            Usuários que não gostaram:
            <span class="fw-bold">{{ movie.userNotLike }}</span>
          </li>
          <li class="list-group-item">
            Estúdio: <span class="fw-bold">{{ movie.studio }}</span>
          </li>
          <li class="list-group-item">
            Diretor: <span class="fw-bold">{{ movie.director }}</span>
          </li>
          <li class="list-group-item">
            Ano: <span class="fw-bold">{{ movie.year }}</span>
          </li>
          <li class="list-group-item">
            Gênero: <span class="fw-bold">{{ genre.name }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <router-link to="/" class="btn btn-dark"
          ><i class="fa fa-arrow-alt-circle-left me-2"></i>Voltar</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { MovieService } from "@/services/MovieServices";
import SpinnerBar from "@/components/SpinnerBar.vue";

export default {
  name: "ViewMovie",
  components: { SpinnerBar },
  data: function () {
    return {
      movieId: this.$route.params.movieId,
      loading: false,
      movie: {},
      errorMessage: null,
      genre: {},
    };
  },
  created: async function () {
    try {
      this.loading = true;
      let response = await MovieService.getMovie(this.movieId);
      let genreResponse = await MovieService.getGenre(response.data);
      this.movie = response.data;
      this.genre = genreResponse.data;
      this.loading = false;
    } catch (error) {
      this.errorMessage = error;
      this.loading = false;
    }
  },
  methods: {
    isDone: function () {
      return (
        Object.keys(this.movie).length > 0 && Object.keys(this.genre).length > 0
      );
    },
  },
};
</script>

<style scoped></style>
