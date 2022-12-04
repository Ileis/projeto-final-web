import { defineStore } from "pinia"

export const userStore = defineStore("usuario", {
    state: () => {
        return {
            user: {
                email: "",
                username: "visitante",
                role: "Public"
              },
              jwt: "",
              logged: false
        }
    },
    getters: {
        getUsername(){
            return this.user.username;
        },
        getUserRole(){
            return this.user.role;
        },
        isLogged(){
            return this.logged;
        },
        getUserEmail(){
            return this.user.email;
        },
        getUserJwt(){
            return this.jwt;
        }
    },
    actions: {
        setUser(email, username, jwt,role = "Authenticated"){
            this.user.email = email;
            this.user.username = username;
            this.user.role = role;
            this.jwt = jwt;
            this.logged = true;
        },
        logOutUser(){
            this.user.email = "";
            this.user.username = "Visitante";
            this.user.role = "Public";
            this.jwt = "";
            this.logged = false;
        }
    },
})