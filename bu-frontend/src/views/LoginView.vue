<template>
        <div class="container mt-3 mb-3">
    <div class="row g-5 d-flex justify-content-center">
      <div class="col-md-7 col-lg-8">
        <h4 class="mb-3">Bem vindo</h4>
        <h4 class="mb-3">Login</h4>
        <div class="card p-4">
          <form @submit.prevent="submitLogin">

            <div class="row g-3">

                <div class="col-sm-12">
                    <label>Email</label>
                    <input type="email" class="form-control" v-model="user.identifier" placeholder="Email"/>
                </div>

                <div class="col-12">
                    <label>Senha</label>
                    <input type="password" class="form-control" v-model="user.password" placeholder="Senha"/>
                </div>

                <div class="col-align-self-center">
                    <button class="btn btn-primary">Login</button>
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

    import { UserService } from '@/services/MovieServices';
    import { userStore } from "../store/storeUser"

    export default{
        name: 'LoginView',
        data: function(){

            const store = userStore();

            return {
                user: {
                    identifier: "",
                    password: ""
                },
                store
            }
        },
        methods:{
            submitLogin: async function(){
                const userData = this.user;

                try{
                    let response = await UserService.loginUser(userData);
                    console.log(response);

                    if(response){

                        return this.$router.push("/");
                    }else{
                        return this.$router.push("user/login");
                    }
                }catch(error){
                    console.log(error);
                }
            }
        }
    }
</script>