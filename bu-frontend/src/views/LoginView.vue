<template>
        <div class="container mt-3 mb-3">
    <div class="row g-5 d-flex justify-content-center">
      <div class="col-md-7 col-lg-8">
        <h4 class="mb-3">Login</h4>
        <div class="card p-4">
          <form @submit.prevent="">

            <div class="row g-3">

              <div class="col-sm-12">
                <label class="form-label">Email</label>
                <input
                  v-model="user.email"
                  required
                  type="text"
                  class="form-control"
                  placeholder="Email"
                />
              </div>

              <div class="col-12">
                <label class="form-label">Senha</label>
                <input
                  v-model="user.senha"
                  required
                  type="text"
                  class="form-control"
                  placeholder="Senha"
                />
              </div>

              <div class="col-12">
                <label class="form-label">Registrar uma nova conta</label>
                <div>
                  <router-link
                  to="/user/register"
                  class="btn btn-secondary my-1 mx-1"
                  v-show="true"
                  >
                  Register
                  </router-link>
                </div>
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default{
        name: 'LoginView',
        data: function(){
            return {
                user: {

                }
            }
        },
        
    }
</script>