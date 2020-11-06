<template>
    <div class="login">
        <h1>Login</h1>
        <input type="text"
          placeholder="Email"
          v-model="email">
        <br>
        <input type="password"
          placeholder="Senha"
          v-model="senha">
        <br>
        <div class="btn-login">
            <button @click="login">Login</button>
        </div>
        <p>
            Você não tem conta?
            <router-link to="/registrar">crie uma conta</router-link>
        </p>
    </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  name: 'login',
  data () {
    return {
      email: '',
      senha: ''
    }
  },
  methods: {
    login: function () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.senha).then(
        (user) => {
          this.$router.replace('home')
          alert('Bem Vindo')
        },
        (err) => {
          alert('Não foi possível realizar o login. ' + err.message)
        }
      )
      this.$router.replace('home')
    }
  }

}
</script>

<style scoped>
</style>
