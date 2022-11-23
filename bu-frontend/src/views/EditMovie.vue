<template>
  <div class="container mt-3 mb-3">
    <div class="row g-5 d-flex justify-content-center">
      <div class="col-md-7 col-lg-8">
        <h4 class="mb-3">Editar Filme</h4>
        <div class="card p-4">
          <form @submit.prevent="updateSubmit(movie)">
            <div class="row g-3">
              <div class="col-sm-6">
                <label class="form-label">Title</label>
                <input
                  v-model="movie.data.attributes.title"
                  required
                  type="text"
                  class="form-control"
                />
              </div>

              <div class="col-sm-6">
                <label class="form-label">Title - BR</label>
                <input
                  v-model="movie.data.attributes.titleBr"
                  required
                  type="text"
                  class="form-control"
                />
              </div>

              <div class="col-12">
                <label class="form-label">ImgSrc</label>
                <div class="input-group">
                  <input
                    v-model="movie.data.attributes.imgSrc"
                    required
                    type="text"
                    class="form-control"
                  />
                </div>
              </div>

              <div class="col-12">
                <label class="form-label">Description</label>
                <input
                  v-model="movie.data.attributes.description"
                  required
                  type="text"
                  class="form-control"
                />
              </div>

              <div class="col-12">
                <label class="form-label">Studio</label>
                <input
                  v-model="movie.data.attributes.studio"
                  required
                  type="text"
                  class="form-control"
                />
              </div>

              <div class="col-12">
                <label class="form-label">Director</label>
                <input
                  v-model="movie.data.attributes.director"
                  required
                  type="text"
                  class="form-control"
                />
              </div>

              <div class="col-12">
                <label class="form-label">Year</label>
                <input
                  v-model="movie.data.attributes.year"
                  required
                  type="text"
                  class="form-control"
                />
              </div>

              <div class="col-sm-6">
                <label class="form-label">Usuarios Likes</label>
                <input
                  v-model="movie.data.attributes.userLike"
                  type="text"
                  class="form-control"
                  required
                />
              </div>

              <div class="col-sm-6">
                <label class="form-label">Usuários Delikes</label>
                <input
                  v-model="movie.data.attributes.userNotLike"
                  required
                  type="text"
                  class="form-control"
                />
              </div>

              <div class="col-sm-6">
                <label for="country" class="form-label">Gênero</label>

                <input
                  v-model="movie.data.attributes.genre"
                  required
                  type="text"
                  class="form-control"
                />

                <!-- <select
                  class="form-select"
                  :placeholder="movie.genreId"
                  required
                  v-if="genres.length > 0"
                >
                  <option value="">Selecione o Gênero</option>
                  <option
                    v-model="genre.id"
                    v-for="genre of genres"
                    :key="genre.id"
                  >
                    {{ genre.name }}
                  </option>
                </select> -->
              </div>

              <div class="col-sm-6">
                <label class="form-label">Duração</label>
                <input
                  v-model="movie.data.attributes.duration"
                  required
                  type="text"
                  class="form-control"
                />
              </div>
            </div>

            <hr class="my-4" />

            <button
              class="w-100 btn btn-dark btn-lg"
              type="submit"
              value="Atualizar"
            >
              Atualizar filme
            </button>
          </form>
        </div>
      </div>
      <pre>{{ movie.data }}</pre>
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
          createdAt: "",
          updatedAt: "",
          publishedAt: "",
          genre: "",
        },
      },
      errorMessage: null,
      genres: [],
    };
  },
  created: async function () {
    try {
      this.loading = true;
      let response = await MovieService.getMovie(this.movieId);
      this.movie.data = response.data.data;
      // let genreResponse = await MovieService.getAllGenres();
      // this.genres = genreResponse.data;
      this.loading = false;
    } catch (error) {
      this.errorMessage = error;
      this.loading = false;
    }
  },
  methods: {
    updateSubmit: async function (any) {
      try {
        const newTitle = any.data.attributes.title;
        const newTitleBr = any.data.attributes.titleBr;
        const newImgSrc = any.data.attributes.imgSrc;
        const newDescription = any.data.attributes.description;
        const newUserLike = any.data.attributes.userLike;
        const newUserNotLike = any.data.attributes.userNotLike;
        const newStudio = any.data.attributes.studio;
        const newDirector = any.data.attributes.director;
        const newYear = any.data.attributes.year;
        const newDuration = any.data.attributes.duration;
        const newGenre = any.data.attributes.genre;

        const payload = {
          data: {
            title: newTitle,
            titleBr: newTitleBr,
            imgSrc: newImgSrc,
            description: newDescription,
            userLike: newUserLike,
            userNotLike: newUserNotLike,
            studio: newStudio,
            director: newDirector,
            year: newYear,
            duration: newDuration,
            genre: newGenre,
          },
        };

        let response = await MovieService.updateMovie(payload, this.movieId);

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
