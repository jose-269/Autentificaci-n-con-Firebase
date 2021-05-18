import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";
import router from "@/router/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: "",
    pass: "",
  },
  mutations: {
    updateUser(state, payload) {
      state.user = payload;
    },
    updatePass(state, payload) {
      state.pass = payload;
    },
    async login(state) {
      try {
        const req = await firebase
          .auth()
          .signInWithEmailAndPassword(state.user, state.pass);
        console.log(req);
        router.push("/");
      } catch (error) {
        if (error.code === "auth/invalid-email")
          return alert("Su dirección de email no está registrada");
        if (error.code === "auth/wrong-password")
          return alert("Su contraseña no existe");
      }
    },
  },
});
