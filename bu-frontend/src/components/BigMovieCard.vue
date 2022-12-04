<template>
<div class="row">
        <div class="col-md-12">
          <div
            class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-white">
            <div class="col p-4 d-flex flex-column position-static">

              <strong class="d-inline-block mb-2 text-black-50">
                {{ title }}
            </strong>

              <h3 class="mb-0">
                {{ titleBr }}
            </h3>

              <div class="mb-4 text-muted">
                {{ description }}
              </div>

              <dl class="row">
                <dt class="col-sm-3">Gênero</dt>
                <dd class="col-sm-9">
                    {{ genre }}
                </dd>

                <dt class="col-sm-3">Estúdio</dt>
                <dd class="col-sm-9">
                    {{ studio }}
                </dd>

                <dt class="col-sm-3">Diretor</dt>
                <dd class="col-sm-9">
                    {{ director }}
                </dd>

                <dt class="col-sm-3">Ano</dt>
                <dd class="col-sm-9">
                    {{ year }}
                </dd>

                <dt class="col-sm-3">Duração</dt>
                <dd class="col-sm-9">
                    {{ duration }} min
                </dd>

                <dt class="col-sm-3">
                  Gostei <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                </dt>
                <dd class="col-sm-9">
                    {{ userLike }}
                </dd>

                <dt class="col-sm-3">
                  Não gostei
                  <i class="fa fa-thumbs-down" aria-hidden="true"></i>
                </dt>
                <dd class="col-sm-9">
                    {{ userNotLike }}
                </dd>

              </dl>
            </div>
            <div class="col-auto d-none d-lg-block">
              <img
                width="300"
                height="100%"
                :src="imgSrc"
                class="contact-img-big"
              />
            </div>
          </div>
        </div>
      </div>

</template>

<script>

    export default{
        name: 'BigMovieCard',
        props: ['title', 'titleBr', 'description', 'genre', 'studio', 'director', 'year', 'duration',
                'userLike', 'userNotLike', 'imgSrc']
    }

</script>