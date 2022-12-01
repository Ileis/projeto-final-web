<template>
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
              <h4 class="my-0 fw-normal">{{ title }}</h4>
            </div>
            <div class="card-body">
              <img
                class="bd-placeholder-img mb-4 contact-img"
                :src="imgSrc"
              />
              <div class="d-flex justify-content-center align-items-center">
                <router-link
                  :to="`/movies/view/${id}`"
                  class="btn btn-warning my-1 mx-1"
                >
                  <i class="fa fa-eye"></i>
                </router-link>
                <router-link
                  :to="`/movies/edit/${id}`"
                  class="btn btn-info my-1 mx-1"
                >
                  <i class="fa fa-pen"></i>
                </router-link>
                <button
                  class="btn btn-danger my-1 mx-1"
                  @click="clickDeleteMovie(id)"
                >
                  <i class="fa fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
</template>

<script>

    export default{
        name: 'MovieCard',
        props:['title','imgSrc', 'img', 'id', 'clickDeleteMovie']
    }
</script>