<template>
  <div>
    <h1>Login</h1>
    <div class="card w-50 mx-auto mt-5 p-5">
      <div class="form-group mb-5">
        <label class="pb-3">Usuario</label>
        <input type="email" class="form-control" v-model="usuario" />
      </div>
      <div class="form-group pb-3">
        <label class="pb-3">Contraseña</label>
        <input type="password" class="form-control" v-model="password" />
      </div>
      <div>
        <button @click="login()" class="btn btn-primary">Ingresar</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "Login",

  methods: {
    ...mapMutations(["login", "updateUser", "updatePass"]),
  },
  computed: {
    usuario: {
      get() {
        return this.user;
      },
      set(value) {
        this.updateUser(value);
      },
    },
    password: {
      get() {
        return this.pass;
      },
      set(value) {
        this.updatePass(value);
      },
    },
    ...mapState(["user", "pass"]),
  },
};
</script>
