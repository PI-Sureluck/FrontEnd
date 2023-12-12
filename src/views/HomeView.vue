<template>

  <div class="container" style="  margin: 0 auto; width: 80%;">
    <div class="row justify-content-center align-content-center">
      <div class="col-md-8">
        <div class="relative  sm:rounded-lg w-full">
          <!--head-->
          <!--
          <div class="flex items-center justify-between pb-4 py-4 p-10">
            <div>
              <button @click="toggleDropdown" class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                <svg class="w-3 h-3 text-gray-500 dark:text-gray-400 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
                        </svg>
                    Last 30 days
                    <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
                </button>
                <div v-show="showDropdown" class="z-10 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                    <ul class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioButton">
                        <li>
                            <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                <input id="filter-radio-example-1" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="filter-radio-example-1" class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last day</label>
                            </div>
                        </li>
                        <li>
                            <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                <input checked="" id="filter-radio-example-2" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="filter-radio-example-2" class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last 7 days</label>
                            </div>
                        </li>
                        <li>
                            <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                <input id="filter-radio-example-3" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="filter-radio-example-3" class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last 30 days</label>
                            </div>
                        </li>
                        <li>
                            <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                <input id="filter-radio-example-4" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="filter-radio-example-4" class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last month</label>
                            </div>
                        </li>
                        <li>
                            <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                <input id="filter-radio-example-5" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="filter-radio-example-5" class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last year</label>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <label for="table-search" class="sr-only">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input type="text" id="table-search" class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items">
            </div>
        </div>

        -->
          <!--cards-->
          <div class="py-10 pl-20 ">
            <div v-if="this.aposta != null" class="grid grid-cols-1 grid-rows-50 gap-x-0.5 gap-y-8 md:grid-cols-2">

              <div class="pb-5" v-for="(aposta, index) in aposta" :key="index">
                <div
                    class="block rounded-lg bg-white dark:bg-neutral-700 custom-card">

                  <div
                      class="text-left font-bold uppercase border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50 header-card">
                    {{ aposta.name.replace('vs', " vs ") }}
                  </div>
                  <div class="flex justify-between p-6">
                    <h5
                        class="p-2 text-xl font-medium italic leading-tight text-neutral-800 dark:text-neutral-50 " style="margin-top: 30px">
                      {{ aposta.teamA }} <p> </p><p> </p> <p> </p>  {{ aposta.teamB }}
                    </h5>
                    <p class="border-dashed border-2 rounded-md p-2 pl-2 text-base text-neutral-600 dark:text-neutral-200 odds-layout" style="font-size: small; width: auto " >
                      {{ aposta.siteA }} <p></p>
                      {{ aposta.bet1 }}
                      <hr class="my-2">
                      {{ aposta.siteB }} <p></p>
                      {{ aposta.bet2 }}

                    </p>
                  </div>
                  <div
                      class="flex justify-between border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50 footer-card">

                    <el-input size="small" class="leading-tight input-calcular"
                              v-model="aposta.valor"
                        placeholder="Please input"
                        :formatter="(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                        :parser="(value) => value.replace(/\$\s?|(,*)/g, '')"
                    />
                    <label class="text-right block">
                      <label class="font-bold mb-2">{{ aposta.teamA }} </label> =
                      R${{ parseFloat(aposta.valor * (aposta.porcent1 / 100)).toFixed(2) }}<p></p>
                      <label class="font-bold mb-2">{{ aposta.teamB }} </label> =
                      R${{ parseFloat(aposta.valor * (aposta.porcent2 / 100)).toFixed(2) }}<p></p>
                      <label class="font-bold mb-2">PROFIT </label> =
                      R${{ parseFloat((parseFloat(aposta.valor * (aposta.porcent1 / 100)).toFixed(2) * aposta.bet1)  - aposta.valor ).toFixed(2) }}
                    </label>
                  </div>
                </div>
              </div>

            </div>
            <div  v-else>
              <h1 class="display-1 text-center font-weight-bold" >NÂO A SUREBET DISPONÍVEL </h1>
            </div>
          </div>
        </div>


      </div>
    </div>
  </div>



</template>

<script>

import axios, * as others from 'axios';
import {onMounted, ref} from 'vue';


export default {



  data() {
    const input = ref('')

    return {
      showDropdown: false,
      dialogo: false,
      valor: '100',
      aposta: null,
      user: null

    }

  },
  mounted() {
    this.allData();
    this.verificaLogin();

  },

  methods: {
    getAuthToken() {
      const cookies = document.cookie.split('; ');
      const jwtCookie = cookies.find(cookie => cookie.startsWith('jwt='));
      console.log(jwtCookie)
      return jwtCookie ? jwtCookie.split('=')[1] : null;
    },
    async verificaLogin() {

      try {

        const token = this.getAuthToken();
        const response = await axios.get('http://127.0.0.1:8000/users/User', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        const data = response.data;
        this.user = response.data;

      } catch (error) {
        this.$router.push('/Login')
        console.error('Erro durante a solicitação:', error);
      }
    },
    async allData() {

      try {
        const {data, status} = await axios.get('http://127.0.0.1:8000/sites/surebets/')
        console.log(data)

        if (data.status === 200) {
          this.aposta = [];
          for (var i = 0; i < data.surebets.length; i++) {
            const bet1 = data.surebets[i].TimeA.Odd;
            const bet2 = data.surebets[i].TimeB.Odd;
            const res = (1 / bet1) + (1 / bet2);
            const averageOdds = (1 / res) * 100;

            if (this.user.auth.premio == true) {
              var sure = {
                name: data.surebets[i].TimeA.Event.Name,
                date: '03 nov 2023',
                teamA: data.surebets[i].TimeA.Time,
                teamB: data.surebets[i].TimeB.Time,
                bet1: bet1,
                bet2: bet2,
                porcent1: data.surebets[i].TimeA.Porcent,
                porcent2: data.surebets[i].TimeB.Porcent,
                siteA: data.surebets[i].TimeA.Site.Name,
                siteB: data.surebets[i].TimeB.Site.Name,
                valor: 100.00,
              };
              this.aposta.push(sure);

            }else{ if (averageOdds <= 121.0) {
                var sure = {
                  name: data.surebets[i].TimeA.Event.Name,
                  date: '03 nov 2023',
                  teamA: data.surebets[i].TimeA.Time,
                  teamB: data.surebets[i].TimeB.Time,
                  bet1: bet1,
                  bet2: bet2,
                  porcent1: data.surebets[i].TimeA.Porcent,
                  porcent2: data.surebets[i].TimeB.Porcent,
                  siteA: data.surebets[i].TimeA.Site.Name,
                  siteB: data.surebets[i].TimeB.Site.Name,
                  valor: 100.00,
                };
                this.aposta.push(sure);
              }
            }
          }
      }else{
        this.aposta = null

        }
      } catch (error) {
        throw error;
      }
    },


    toggleDropdown() {
      this.showDropdown = !this.showDropdown;


    }
  }
}
</script>


<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Mukta&family=Quicksand:wght@600&family=Rubik&display=swap');



* {
  margin: 0;
  padding: 0;
}

body {
  width: 100%;
  height: 100vh;
  font-family: 'Mukta', sans-serif;
  background-color: #adaaa1;
}


.custom-card {
  font-family: 'Mukta', sans-serif;
  max-width: 650px;

  background-color: #283352;
  color: #ffffff;

}

.header-card {
  background-color: #141C33;
  color: #ffffff;
  border-radius: 8px;
}

.footer-card {
  background-color: #D98E04;
  color: #ffffff;
  border-radius: 8px;

}

.input-calcular {
  max-width: 210px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-left: 5px;
}

.odds-layout {
  background-color: #141C33;
  width: 100px;
  text-align: center;
  letter-spacing: 2px;
  border: transparent;
}
</style>