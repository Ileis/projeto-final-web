<template>
  <div class="container mt-3 mb-3">
    <div class="row g-5 d-flex justify-content-center">
      <div class="col-md-7 col-lg-8">
        <h4 class="mb-3">Editar Filme</h4>
        <div class="card p-4">
          <form @submit.prevent="updateSubmit()">
            <div class="row g-3">
              <div class="col-sm-6">
                <label class="form-label">Title</label>
                <input
                  v-model="movie.title"
                  required
                  type="text"
                  class="form-control"
                />
              </div>

              <div class="col-sm-6">
                <label class="form-label">Title - BR</label>
                <input
                  v-model="movie.titleBr"
                  required
                  type="text"
                  class="form-control"
                />
              </div>

              <div class="col-12">
                <label class="form-label">ImgSrc</label>
                <div class="input-group">
                  <input
                    v-model="movie.imgSrc"
                    required
                    type="text"
                    class="form-control"
                  />
                </div>
              </div>

              <div class="col-12">
                <label class="form-label">Description</label>
                <input
                  v-model="movie.description"
                  required
                  type="text"
                  class="form-control"
                />
              </div>

              <div class="col-12">
                <label class="form-label">Studio</label>
                <input
                  v-model="movie.studio"
                  required
                  type="text"
                  class="form-control"
                />
              </div>

              <div class="col-12">
                <label class="form-label">Director</label>
                <input
                  v-model="movie.director"
                  required
                  type="text"
                  class="form-control"
                />
              </div>

              <div class="col-12">
                <label class="form-label">Year</label>
                <input
                  v-model="movie.year"
                  required
                  type="text"
                  class="form-control"
                />
              </div>

              <div class="col-sm-6">
                <label class="form-label">Usuarios Likes</label>
                <input
                  v-model="movie.userLike"
                  type="text"
                  class="form-control"
                  required
                  placeholder="Usuários que gostaram"
                />
              </div>

              <div class="col-sm-6">
                <label class="form-label">Usuários Delikes</label>
                <input
                  v-model="movie.userNotLike"
                  required
                  type="text"
                  class="form-control"
                  placeholder="Usuários que não gostaram"
                />
              </div>

              <div class="col-md-5">
                <label for="country" class="form-label">Gênero</label>
                <select
                  class="form-select"
                  v-model="movie.genreId"
                  required
                  v-if="genres.length > 0"
                >
                  <option value="">Selecione o Gênero</option>
                  <option
                    :value="genre.id"
                    v-for="genre of genres"
                    :key="genre.id"
                  >
                    {{ genre.name }}
                  </option>
                </select>
              </div>
            </div>

            <hr class="my-4" />

            <button
              class="w-100 btn btn-dark btn-lg"
              type="submit"
              value="Criar"
            >
              Adicionar filme
            </button>
          </form>
        </div>
      </div>
      <!-- <div class="col-md-5 col-lg-4 order-md-last">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-dark">You Movie Cover</span>
        </h4>
        <img
          src="https://i.pinimg.com/236x/71/f4/5a/71f45a3fed194f01a61336a62b1dc481--horrorfilms-freddy-krueger.jpg"
          alt=""
          width="236"
          height="384"
        />
      </div> -->
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
      this.genres = genreResponse.data;
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

<style scope></style>
