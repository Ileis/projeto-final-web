<template>
    <div class="container mt-3 mb-3">
    <div class="row g-5 d-flex justify-content-center">
      <div class="col-md-7 col-lg-8">
        
        <h4 class="mb-3">Criar Conta</h4>
        
        <div class="card p-4">
          <form @submit.prevent="submitUser">

            <div class="row g-3">

              <div class="col-sm-12">
                <label>Nome de usuário</label>
                <input type="text" class="form-control" v-model="user.username" placeholder="Username"/>
              </div>

              <div class="col-sm-12">
                <label>Email</label>
                <input type="email" class="form-control" v-model="user.email" placeholder="Email"/>
              </div>

              <div class="col-12">
                <label>Senha</label>
                <input type="password" class="form-control" v-model="user.password" placeholder="Senha"/>
              </div>

              <!-- <div class="col-12">
                <label>Confirmar senha</label>
                <input type="password" class="form-control" v-model="user.passwordConfirm" placeholder="Confirmar senha"/>
              </div> -->

              <div>
                <button class="btn btn-primary">Sign up</button>
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

export default {
    name: "RegisterView",
    data: function(){
      return{
        user: {
          email: "",
          username: "",
          password: "",
          role: ""
        }
      }
    },
    methods: {
      submitUser: async function(){
        const userData = this.user;

        try{
          let response = await UserService.createUser(userData);
          if(response){
            return this.$router.push("/");
          }else{
            return this.$router.push("/user/register");
          }
        }catch(error){
          console.log(error);
        }
      }
    }
}
</script>