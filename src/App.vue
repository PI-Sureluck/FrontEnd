<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
console.log("teste foda dmsi")

import Footer from './components/FooterSure.vue'
</script>

<template>

  <Navbar v-if="$route.path !== '/Cadastro' && $route.path !== '/Login'&& $route.path !== '/login'" />
  <RouterView />


</template>



<style>
  body {
  min-height: 100vh;
  background: #e1dfdf;

  transition:
    color 0.5s,
    background-color 0.5s;
  line-height: 1.6;
  font-family:
    Inter,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    sans-serif;
  font-size: 15px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
