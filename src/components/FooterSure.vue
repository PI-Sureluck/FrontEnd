<template>
  <footer class="bg-light text-center text-lg-start footerSure">
    <!-- Copyright -->
    <div class="text-center p-2" style="background-color: #141C33; color: white">
      © 2023 Copyright:
      <a class="text-dark" href="https://mdbootstrap.com/">SureLuck</a>
    </div>
    <!-- Copyright -->
  </footer>
</template>

<script>
import { RouterLink } from 'vue-router';


const dialogVisible = true



export default {

  data() {
    return {


    }},
  methods: {

  }
}



</script>

<style scoped>
.footerSure {
  background-color: #141C33;
  color: white;
  z-index: 2;
  text-align: center;
  padding: 10px 0; /* Espaçamento interno no rodapé */
  width: 100%;
  bottom: 0;
}
</style>