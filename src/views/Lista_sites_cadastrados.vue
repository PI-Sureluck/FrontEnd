<!-- Código apenas para teste. -->


<template>
  <div>
    <ul class="lista_sites_cadastrados">
      <li v-for="nome in nomes" :key="nome.id">{{ nome.nome }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nomes: [],
    };
  },
  created() {
    // Use axios ou fetch para buscar os nomes da API
    axios.get('/api/nomes') // Substitua pela rota correta da sua API
      .then(response => {
        this.nomes = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  },
};
</script>

<style>
.lista_sites_cadastrados {
  list-style-type: square;
  margin: 0;
  padding: 0;
}

.lista_sites_cadastrados li {
  margin-bottom: 10px;
  font-size: 16px;
  color: #333;
}
</style>
