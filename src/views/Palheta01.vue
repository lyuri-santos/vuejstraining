<template>
<div class=" teste px-4 px-xl-5 pb-5 pt-5 position-relative">
  <div class="v-page-stylesheet">
    <div class="v-content ma-2 pa-2">
          <h1>Header</h1>
          <hr>
          <h1>Wizards</h1>
          <a class="v-wizard-main__step col"></a>
          <hr>
          <h1>Fonts</h1>
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>
          <p>ParaGraph</p>
          <br>
        <hr>
        <section class="mb-5">
          <h2 class = "mb-4">
            Colors
          </h2>
        </section>
        <hr>
        <Button />
      </div>
    </div>
</div>

</template>
<script>
import Button from 'primevue/button'
export default {
  name: 'app',
  components: {
    Button
  }
}
</script>

<style>
    .TESTE{
      background-color:#f2f2f2;
      /* -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: left;
      color: #2c3e50;

      justify-content: left;
      align-items: left; */

    }

    body {
      font-family: Lato, sans-serif;
      margin: 0;
      line-height: 1;
    }
    h1{
      font-size: 30px;
      margin-bottom: 35px;
    }
    h1,
    h2 {
      font-weight: 300;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6{
      line-height: 1.2;
    }

    ::after, ::before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
:root {
    --blue: #007bff;
    --indigo: #6610f2;
    --purple: #6f42c1;
    --pink: #e83e8c;
    --red: #dc3545;
    --orange: #fd7e14;
    --yellow: #ffc107;
    --green: #28a745;
    --teal: #20c997;
    --cyan: #17a2b8;
    --white: #fff;
    --gray: #6c757d;
    --gray-dark: #343a40;
    --primary: #007bff;
    --secondary: #6c757d;
    --success: #28a745;
    --info: #17a2b8;
    --warning: #ffc107;
    --danger: #dc3545;
    --light: #f8f9fa;
    --dark: #343a40;
    --breakpoint-xs: 0;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
    --font-family-sans-serif: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    --font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
}
</style>
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;
// }

// #nav a {
//   font-weight: bold;
//   color: #2c3e50;
// }

// #nav a.router-link-exact-active {
//   color: #42b983;
