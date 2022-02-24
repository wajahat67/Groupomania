//import { resolveDirective } from "vue";
import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";



// Le store fait office de middleware pour gérer les différentes actions de l'utilisateur, il permet entre autre de stocker des informations qui pourront être récupérées ou modifiées --------------------------
const store = createStore({
  plugins: [createPersistedState()], // Ce plugin va permettre de garder le state intact si la page est rafraîchie

  state: { // Etat initial du store
    status: "",
    user: {},
    users: [],
    posts: [],
    post: {},

    message: "",
  },

  

  
});

export default store;
