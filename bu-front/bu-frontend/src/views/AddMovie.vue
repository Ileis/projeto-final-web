<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3">Adicionar Filme</p>
        <p class="fst-italic">
          Que tal adicionar um filme do gênero mais arrepiante que você poder
          encontrar?
        </p>
      </div>
    </div>
  </div>
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-3">
        <form @submit.prevent="submitCreate()">
          <div class="mb-2">
            <input
              v-model="movie.title"
              required
              type="text"
              class="form-control"
              placeholder="Title"
            />
          </div>
          <div class="mb-2">
            <input
              v-model="movie.titleBr"
              required
              type="text"
              class="form-control"
              placeholder="Titulo"
            />
          </div>
          <div class="mb-2">
            <input
              v-model="movie.imgSrc"
              required
              type="text"
              class="form-control"
              placeholder="Photo URL"
            />
          </div>
          <div class="mb-2">
            <input
              v-model="movie.description"
              required
              type="text"
              class="form-control"
              placeholder="Descrição"
            />
          </div>
          <div class="mb-2">
            <input
              v-model="movie.userLike"
              required
              type="text"
              class="form-control"
              placeholder="Usuários que gostaram"
            />
          </div>
          <div class="mb-2">
            <input
              v-model="movie.userNotLike"
              required
              type="text"
              class="form-control"
              placeholder="Usuários que não gostaram"
            />
          </div>
          <div class="mb-2">
            <input
              v-model="movie.studio"
              required
              type="text"
              class="form-control"
              placeholder="Estúdio"
            />
          </div>
          <div class="mb-2">
            <input
              v-model="movie.director"
              required
              type="text"
              class="form-control"
              placeholder="Diretor"
            />
          </div>
          <div class="mb-2">
            <input
              v-model="movie.year"
              required
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
            <input type="submit" class="btn btn-success" value="Criar" />
          </div>
        </form>
      </div>
      <div class="col-md-4">
        <img
          v-if="movie.imgSrc"
          :src="movie.imgSrc"
          alt=""
          class="contact-img-big"
        />
        <div v-else>
          <div class="card" style="width: 18rem">
            <div class="card-body">
              <h5 class="card-title">Capa do Filme</h5>
              <p class="card-text">Adicione a imagem do seu filme</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MovieService } from "@/services/MovieServices";

export default {
  name: "AddMovie",
  data: function () {
    return {
      movie: {
        title: "",
        titleBr: "",
        cover: "",
        imgSrc: "",
        description: "",
        userLike: "",
        userNotLike: "",
        studio: "",
        director: "",
        year: "",
        genreId: "",
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
        let response = await MovieService.createMovie(this.movie);
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

<style scoped></style>
