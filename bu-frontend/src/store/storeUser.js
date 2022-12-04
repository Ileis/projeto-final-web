import { defineStore } from "pinia"

export const userStore = defineStore("usuario", {
    state: () => {
        return {
            user: {
                email: "",
                username: "Visitante",
                role: "Public"
              },
              jwt: "",
              logado: false
        }
    }
})