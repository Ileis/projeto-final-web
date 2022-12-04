<template>
  <div class="container mt-3 mb-3">
    <template v-if="store.logged">
      <div class="row g-5 d-flex justify-content-center" >
      <div class="col-md-7 col-lg-8">
        <h4 class="mb-3">Adicionar Filme</h4>
        <div class="card p-4">
          <form @submit.prevent="submitCreate()">
            <div class="row g-3">
              <div class="col-sm-6">
                <label class="form-label">Title</label>
                <input
                  v-model="movie.data.title"
                  required
                  type="text"
                  class="form-control"
                />
              </div>

              <div class="col-sm-6">
                <label class="form-label">Title - BR</label>
                <input
                  v-model="movie.data.titleBr"
                  required
                  type="text"
                  class="form-control"
                />
              </div>

              <div class="col-12">
                <label class="form-label">ImgSrc</label>
                <div class="input-group">
                  <input
                    v-model="movie.data.imgSrc"
                    required
                    type="text"
                    class="form-control"
                  />
                </div>
              </div>

              <div class="col-12">
                <label class="form-label">Description</label>
                <input
                  v-model="movie.data.description"
                  required
                  type="text"
                  class="form-control"
                />
              </div>

              <div class="col-12">
                <label class="form-label">Studio</label>
                <input
                  v-model="movie.data.studio"
                  required
                  type="text"
                  class="form-control"
                />
              </div>

              <div class="col-12">
                <label class="form-label">Director</label>
                <input
                  v-model="movie.data.director"
                  required
                  type="text"
                  class="form-control"
                />
              </div>

              <div class="col-12">
                <label class="form-label">Year</label>
                <input
                  v-model="movie.data.year"
                  required
                  type="text"
                  class="form-control"
                />
              </div>

              <div class="col-sm-6">
                <label class="form-label">Usuarios Likes</label>
                <input
                  v-model="movie.data.userLike"
                  type="text"
                  class="form-control"
                  required
                  placeholder="Usuários que gostaram"
                />
              </div>

              <div class="col-sm-6">
                <label class="form-label">Usuários Delikes</label>
                <input
                  v-model="movie.data.userNotLike"
                  required
                  type="text"
                  class="form-control"
                  placeholder="Usuários que não gostaram"
                />
              </div>

              <!-- <div class="col-sm-6">
                <label class="form-label">Gênero</label>
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
              </div> -->

              <div class="col-sm-6">
                <label class="form-label">Duração</label>
                <input
                  v-model="movie.data.duration"
                  required
                  type="text"
                  class="form-control"
                  placeholder="Duração"
                />
              </div>

              <div class="col-sm-6">
                <label class="form-label">Gênero</label>
                <input
                  v-model="movie.data.genre"
                  required
                  type="text"
                  class="form-control"
                  placeholder="Gênero"
                />
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
    </template>

    <template v-else>
      <div class="row g-5 d-flex justify-content-center">
        <div class="col-md-7 col-lg-8">
          <h1>O usuário precisa estar logado para adicionar filmes.</h1>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { MovieService } from "@/services/MovieServices";
import { userStore } from "../store/storeUser";

export default {
  name: "AddMovie",
  data: function () {
    return {
      store: userStore(),
      movie: {
        data: {
          title: "",
          titleBr: "",
          imgSrc: "",
          description: "",
          userLike: "",
          userNotLike: "",
          studio: "",
          director: "",
          year: "",
          duration: "",
          genre: "",
        },
      },
      genres: [],
    };
  },
  created: async function () {
    try {
      let response = await MovieService.getAllGenres();
      this.genres = response.data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    submitCreate: async function () {
      try {
        let response = await MovieService.createMovie(this.movie, this.store.jwt);
        if (response) {
          return this.$router.push("/");
        } else {
          return this.$router.push("/movies/add");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scope></style>
