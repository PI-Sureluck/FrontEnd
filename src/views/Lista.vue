<template>
<div class="w-full flex justify-center ">
    <div class="w-3/5  mt-3">
        <div class="">
          <div class="flex justify-between items-center pt-4 " >
            <h1 class="font pl-5"><b>Casas de aposta</b></h1>
          </div>
        </div>
        </div>
</div>
    <div class="flex items-center justify-between pb-4 py-4 p-10">  
<div class="w-full flex justify-center">
  <div class="relative sm:rounded-lg w-full max-w-4xl">
    <table class="w-full relative flex">
        <tbody>
            <tr>
                <tr v-for="(lista_sites, i) in lista_sites" :key="'i'">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <img class="w-10 h-10 rounded-full" src="">
                </th>
                  <button class="px-5 py-6">{{ lista_sites.name }}</button>
                </tr>
              </tr>
        </tbody>
    </table>
</div>
    </div>
</div>
               



    </template>
    
<script>
    import axios, * as others from 'axios';
    export default {
       

        data() {
    
    return {
      lista_sites: []

    }
   
  },
  mounted(){
    axios.get('http://127.0.0.1:5173/Sites/')
      .then(response => this.lista_sites = response.data)
  }
}
    
</script>
  
  
<style scoped>
*{
        margin: 0;
        padding: 0;
        }
.font {
  font-weight: 500;
  font-size: 40px;
  margin-bottom: 0.1em;
}


</style>
    