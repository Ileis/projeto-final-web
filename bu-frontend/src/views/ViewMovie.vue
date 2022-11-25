<template>
  <div class="container">
    <div class="container mt-3">
      <div class="row">
        <div class="col">
          <p class="h3">Detalhes do Filme</p>
          <p class="fst-italic">
            Confira mais detalhes sobre o seu filme favorito!
          </p>
        </div>
        <div class="col d-flex justify-content-end">
          <div class="row mt-3">
            <div class="col">
              <router-link to="/" class="btn btn-dark"
                ><i class="fa fa-arrow-alt-circle-left me-2"></i
                >Voltar</router-link
              >
            </div>
          </div>
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

    <!-- <div class="container" v-if="!loading && isDone()"> -->

    <div class="container">
      <!-- MovieCard -->
      <div class="row">
        <div class="col-md-12">
          <div
            class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-white"
          >
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-black-50">{{
                movie.attributes.title
              }}</strong>
              <h3 class="mb-0">{{ movie.attributes.titleBr }}</h3>
              <div class="mb-4 text-muted">
                {{ movie.attributes.description }}
              </div>

              <dl class="row">
                <dt class="col-sm-3">Gênero</dt>
                <dd class="col-sm-9">{{ movie.attributes.genre }}</dd>

                <dt class="col-sm-3">Estúdio</dt>
                <dd class="col-sm-9">{{ movie.attributes.studio }}</dd>

                <dt class="col-sm-3">Diretor</dt>
                <dd class="col-sm-9">{{ movie.attributes.director }}</dd>

                <dt class="col-sm-3">Ano</dt>
                <dd class="col-sm-9">{{ movie.attributes.year }}</dd>

                <dt class="col-sm-3">Duração</dt>
                <dd class="col-sm-9">{{ movie.attributes.duration }} min</dd>

                <dt class="col-sm-3">
                  Gostei <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                </dt>
                <dd class="col-sm-9">{{ movie.attributes.userLike }}</dd>

                <dt class="col-sm-3">
                  Não gostei
                  <i class="fa fa-thumbs-down" aria-hidden="true"></i>
                </dt>
                <dd class="col-sm-9">{{ movie.attributes.userNotLike }}</dd>
              </dl>
            </div>
            <div class="col-auto d-none d-lg-block">
              <img
                width="300"
                height="100%"
                :src="movie.attributes.imgSrc"
                class="contact-img-big"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Comment -->
      <div class="row" v-if="comments.length > 0">
        <div class="col-md-12" v-for="comment in comments" :key="comment">
          <div class="card mb-4" v-if="checkComments(comment, movieId)">
            <div class="card-header">ID: #{{ comment.id }}</div>
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <p>{{ comment.attributes.comment }}</p>
                <footer>
                  <button
                    type="submit"
                    class="btn btn-dark"
                    v-on:click="isLikeComment(comment)"
                  >
                    <i class="fa fa-heart" v-if="comment.attributes.liked"></i>
                    <i
                      class="fa fa-heartbeat"
                      v-if="!comment.attributes.liked"
                    ></i>
                  </button>
                  <button
                    class="btn btn-info my-1"
                    @click="openCloseModalEdit(comment.attributes, comment.id)"
                  >
                    <i class="fa fa-pen"></i>
                  </button>
                  <button
                    class="btn btn-danger my-1"
                    @click="clickDeleteComment(comment.id)"
                  >
                    <i class="fa fa-trash"></i>
                  </button>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      <!-- AddComment -->
      <div class="row mt-3">
        <div class="col">
          <button class="btn btn-dark" @click="openCloseModal()">
            <i class="fa fa-plus-circle me-2"></i>Novo
          </button>
        </div>
      </div>

      <!-- AddModal -->
      <div
        class="modal fade show bg-secondary bg-opacity-25"
        id="exampleModalLong"
        tabindex="-1"
        role="dialog"
        v-if="visibleAdd"
        style="display: block"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <form @submit.prevent="submitComment()">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Adicionar comentário
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  @click="openCloseModal()"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <label class="form-label">Insira seu comentário</label>
                <input
                  type="text"
                  v-model="comment.data.comment"
                  required
                  class="form-control"
                />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  @click="openCloseModal()"
                >
                  Fechar
                </button>
                <button
                  type="submit"
                  class="btn btn-primary"
                  value="Criar"
                  data-dismiss="modal"
                  @submit="openCloseModal()"
                >
                  Adicionar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <!-- EditModal -->
      <div
        class="modal fade show bg-secondary bg-opacity-25"
        id="exampleModalLong2"
        tabindex="-1"
        role="dialog"
        v-if="visibleEdit"
        style="display: block"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <form @submit.prevent="updateComment(editComment)">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Editar comentário
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  @click="onlyCloseModal()"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <label class="form-label">Edite seu comentário</label>
                <input
                  type="text"
                  v-model="editComment.comment"
                  required
                  class="form-control"
                />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  @click="onlyCloseModal()"
                >
                  Fechar
                </button>
                <button
                  type="submit"
                  class="btn btn-primary"
                  value="Atualizar"
                  data-dismiss="modal"
                  @submit="openCloseModalEdit()"
                >
                  Atualizar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MovieService, CommentService } from "@/services/MovieServices";
import SpinnerBar from "@/components/SpinnerBar.vue";

export default {
  name: "ViewMovie",
  components: { SpinnerBar },
  data: function () {
    return {
      movieId: this.$route.params.movieId,
      commentId: "",
      loading: false,
      visibleAdd: false,
      visibleEdit: false,
      movie: {},
      errorMessage: null,
      genre: {},
      comments: [],
      comment: {
        data: {
          movieId: this.$route.params.movieId,
          comment: "",
          liked: false,
        },
      },
      editComment: {
        movieId: this.$route.params.movieId,
        comment: "",
        liked: false,
      },
    };
  },
  created: async function () {
    try {
      this.loading = true;
      let response = await MovieService.getMovie(this.movieId);
      let commentsResponse = await CommentService.getAllComments();
      this.movie = response.data.data;
      this.comments = commentsResponse.data.data;
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
    isLikeComment: function (comment) {
      let invertLiked = !comment.liked;
      comment.liked = invertLiked;
    },
    openCloseModal: function () {
      this.visibleAdd = !this.visibleAdd;
    },
    openCloseModalEdit: function (comment, commentId) {
      this.editComment.movieId = comment.movieId;
      this.editComment.comment = comment.comment;
      this.editComment.liked = comment.liked;
      this.commentId = commentId;
      this.visibleEdit = !this.visibleEdit;
    },
    onlyCloseModal: function () {
      this.visibleEdit = !this.visibleEdit;
    },
    submitComment: async function () {
      try {
        let response = await CommentService.createComment(this.comment);
        if (response) {
          let response = await CommentService.getAllComments();
          this.comments = response.data.data;
          this.openCloseModal();
          return this.$router.push(`/movies/view/${this.movieId}`);
        } else {
          return this.$router.push("/movies");
        }
      } catch (error) {
        console.log(error);
      }
    },
    updateComment: async function (attComment) {
      try {
        const newMovieId = attComment.movieId;
        const newComment = attComment.comment;
        const newLiked = false;

        const payload = {
          data: {
            movieId: newMovieId,
            comment: newComment,
            liked: newLiked,
          },
        };
        let response = await CommentService.updateComment(
          payload,
          this.commentId
        );

        // Ele tem que limpar
        this.editComment = {
          movieId: this.$route.params.movieId,
          comment: "",
          liked: false,
        };

        this.commentId = "";

        if (response) {
          let response = await CommentService.getAllComments();
          this.comments = response.data.data;
          this.onlyCloseModal();
          return this.$router.push(`/movies/view/${this.movieId}`);
        } else {
          return this.$router.push("/movies");
        }
      } catch (error) {
        console.log(error);
      }
    },
    clickDeleteComment: async function (commentId) {
      try {
        this.loading = true;
        let response = await CommentService.deleteComment(commentId);
        if (response) {
          let response = await CommentService.getAllComments();
          this.comments = response.data.data;
          this.loading = false;
        }
      } catch (error) {
        this.errorMessage = error;
        this.loading = false;
      }
    },
    checkComments(comment, movieId) {
      if (comment.attributes.movieId == movieId) {
        return true;
      }
      return false;
    },
    checkEditComments(comment, movieId, commentId) {
      if (comment.data.attributes.movieId == movieId) {
        if (comment.data.id == commentId) {
          return true;
        }
        return false;
      }
      return false;
    },
  },
  computed: {},
};
</script>

<style scoped></style>
