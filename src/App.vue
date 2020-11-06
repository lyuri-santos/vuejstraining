
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">Sobre</router-link> |
      <router-link to="/login">Entrar</router-link> |
      <router-link to="/register">Registre-se</router-link>|
      <router-link to="/conversor">Conversor</router-link>
    </div>
    <br>
    <p>Lista de Palhetas</p>
    <br>
    <div id="nav">
      <router-link to="/palheta01">Palheta01</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>

#nav {
   font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#p {
   align-items: center;
}
</style>
