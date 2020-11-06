<template>
    <div class="sign-up">
      <h1>Crie uma nova conta</h1>
        <input
        type="text"
        placehouder="Email"
        v-model="email">
        <br>
        <input
        type="password"
        placehouder="Senha"
        v-model="senha">
        <br>
        <button @click="signUp">Registrar</button>
        <span>
            ou retorne ao
             <router-link to="/login">login. </router-link>
        </span>
    </div>
</template>

<script>

import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  name: 'signUp',
  data () {
    return {
      email: '',
      senha: ''
    }
  },
  methods: {
    signUp () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.senha).then(
        (user) => {
          this.$router.replace('home')
        },
        (err) => {
          alert('Aconteceu algo inesperado. ' + err.message)
        }
      )
    }
  }
}
</script>

<style scoped>

</style>
