<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3">Editar filme</p>
        <p class="fst-italic">
          Que tal editar o filme do gênero mais arrepiante que você poder
          encontrar?
        </p>
      </div>
    </div>
  </div>
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-3">
        <form @submit.prevent="updateSubmit()">
          <div class="mb-2">
            <input
              required
              v-model="movie.title"
              type="text"
              class="form-control"
              placeholder="Title"
            />
          </div>
          <div class="mb-2">
            <input
              required
              v-model="movie.titleBr"
              type="text"
              class="form-control"
              placeholder="Título"
            />
          </div>
          <div class="mb-2">
            <input
              required
              v-model="movie.imgSrc"
              type="text"
              class="form-control"
              placeholder="Photo URL"
            />
          </div>
          <div class="mb-2">
            <input
              required
              v-model="movie.description"
              type="text"
              class="form-control"
              placeholder="Descrição"
            />
          </div>
          <div class="mb-2">
            <input
              required
              v-model="movie.userLike"
              type="text"
              class="form-control"
              placeholder="Usuários que gostaram"
            />
          </div>
          <div class="mb-2">
            <input
              required
              v-model="movie.userNotLike"
              type="text"
              class="form-control"
              placeholder="Usuários que não gostaram"
            />
          </div>
          <div class="mb-2">
            <input
              required
              v-model="movie.studio"
              type="text"
              class="form-control"
              placeholder="Estúdio"
            />
          </div>
          <div class="mb-2">
            <input
              required
              v-model="movie.director"
              type="text"
              class="form-control"
              placeholder="Diretor"
            />
          </div>
          <div class="mb-2">
            <input
              required
              v-model="movie.year"
              type="text"
              class="form-control"
              placeholder="Ano"
            />
          </div>
          <div class="mb-2">
            <select
              required
              v-model="movie.genreId"
              class="form-control"
              v-if="genres.length > 0"
            >
              <option value="">Selecione o Gênero</option>
              <option :value="genre.id" v-for="genre of genres" :key="genre.id">
                {{ genre.name }}
              </option>
            </select>
          </div>
          <div class="mb-2">
            <input type="submit" class="btn btn-dark" value="Atualizar" />
          </div>
        </form>
      </div>
      <div class="col-md-4">
        <img :src="movie.imgSrc" alt="" class="contact-img" />
      </div>
    </div>
  </div>
</template>

<script>
import { MovieService } from "@/services/MovieServices";

export default {
  name: "EditMovie",
  data: function () {
    return {
      movieId: this.$route.params.movieId,
      loading: false,
      movie: {
        title: "",
        titleBr: "",
        cover: "",
        imgSrc: "",
        userLike: "",
        userNotLike: "",
        studio: "",
        director: "",
        year: "",
        genreId: "",
      },
      errorMessage: null,
      genres: [],
    };
  },
  created: async function () {
    try {
      this.loading = true;
      let response = await MovieService.getMovie(this.movieId);
      let genreResponse = await MovieService.getAllGenres();
      this.movie = response.data;
      this.genre = genreResponse.data;
      this.loading = false;
    } catch (error) {
      this.errorMessage = error;
      this.loading = false;
    }
  },
  methods: {
    updateSubmit: async function () {
      try {
        let response = await MovieService.updateMovie(this.movie, this.movieId);
        if (response) {
          return this.$router.push("/");
        } else {
          return this.$router.push(`/movies/edit/${this.movieId}`);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped></style>
