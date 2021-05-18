<template>
  <div>
    <h1>Login</h1>
    <div class="card w-50 mx-auto mt-5 p-5">
      <div class="form-group mb-5">
        <label class="pb-3">Usuario</label>
        <input type="email" class="form-control" v-model="user" />
      </div>
      <div class="form-group pb-3">
        <label class="pb-3">Contraseña</label>
        <input type="password" class="form-control" v-model="pass" />
      </div>
      <div>
        <button @click="login()" class="btn btn-primary">Ingresar</button>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Login",
  data() {
    return {
      user: "",
      pass: "",
    };
  },
  methods: {
    async login() {
      const usuario = this.user;
      const contraseña = this.pass;
      try {
        const req = await firebase
          .auth()
          .signInWithEmailAndPassword(usuario, contraseña);
          this.$router.push("/")
         
        console.log(req);
      } catch (error) {
        if(error.code === "auth/invalid-email") return alert("Su dirección de email no está registrada");
        if(error.code === "auth/wrong-password") return alert("Su contraseña no existe");
        //   console.log(error);
        // //   console.log();
          
      }
    },
  },
};
</script>