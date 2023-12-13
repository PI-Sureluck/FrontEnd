<template>
  <div>
    <nav class="border-gray-200 bg fic">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" class="flex justify-normal">
          <span class="self-center text-4xl font-semibold whitespace-nowrap text-white">Sure</span>
          <span class="self-center verdelogo text-4xl font-semibold whitespace-nowrap text-white">Luck</span>
        </a>
        <div class="hidden w-full md:block md:w-auto mt-2 mb-2" id="navbar">
          <ul class="font-medium content-center flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li class="mr-1">
              <router-link to="/" class="verde block text-xl py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-white-700 md:p-0 dark:text-white md:dark:text-white-500">Home</router-link>
            </li>
            <li v-if="admin === true" class="mr-1">
              <router-link to="/Sites" class="verde block text-xl py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-white-700 md:p-0 dark:text-white md:dark:text-white-500">Casas de Aposta</router-link>
            </li>
            <li v-if="admin === true" class="mr-1">
              <router-link to="/Users" class="verde block text-xl py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-white-700 md:p-0 dark:text-white md:dark:text-white-500">Usuários</router-link>
            </li>

            <li class="relative">
              <button @click="toggleDropdown" class="verde block text-lg  py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-white-700 md:p-0 dark:text-white md:dark:text-white-500">
                {{ this.name }}
              </button>
              <ul v-show="isDropdownOpen"  v-if="isDropdownOpen"  ref="dropdown"  class="absolute z-50 left-1/2 transform -translate-x-1/2  rounded-md mt-3 bg-white flex flex-col items-center">
                <li class="flex flex-col items-center">
                  <h5 class="text-lg ">{{ this.name }}</h5>
                  <h6 class="text-sm text-muted">{{ this.status }}</h6>
                </li>
                <li class="separator "></li>
                <li class=" dropbtn ">
                  <button class="" @click="toggleperfil">Perfil</button>
                </li>
                <li class="separator "></li>
                <li class=" dropbtn rounded-b">
                  <button @click="clearJwtCookieAndReload" class="" >Logout</button>
                </li>
              </ul>
            </li>


          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import { RouterLink } from 'vue-router';
import axios from "axios";
import Cookies from 'js-cookie';



const dialogVisible = true



export default {

  data() {
    return {
      name:'',
      email:'',
      status:'',

      isDropdownOpen: false,
      perfil: false,

    }
    }, mounted() {
    this.allData();
    document.addEventListener("click", this.closeDropdown);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.closeDropdown);
  },
  methods: {
    toggleperfil(){
      this.perfil = !this.perfil
      console.log("teste btn perfil")
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    closeDropdown() {
      if (!this.$el.contains(event.target)) {
        this.isDropdownOpen = false;
      }
    },
    clearJwtCookieAndReload() {
  // Limpar o cookie JWT
  Cookies.remove('jwt');

  // Recarregar a página
  window.location.reload(true);
  },
    getAuthToken() {
          const cookies = document.cookie.split('; ');
          const jwtCookie = cookies.find(cookie => cookie.startsWith('jwt='));
          console.log(jwtCookie)
          return jwtCookie ? jwtCookie.split('=')[1] : null;
        },

    async allData() {
      try {
        const token = this.getAuthToken();

        const response = await axios.get('http://127.0.0.1:8000/users/User', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        const data = response.data;

        this.name = data.user.name.charAt(0).toUpperCase() + data.user.name.slice(1);
        this.email = data.user.email
        if(data.auth.premio){
          this.status = "Premio"
        }else {
          this.status = "Padrão"
        }
        console.log('Dados recebidos:', response.data);
      } catch (error) {
        console.error('Erro durante a solicitação:', error);
      }
    }
  }
}



</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Mukta&family=Quicksand:wght@600&family=Rubik&display=swap');
.navbars {
  background-color: transparent;
  overflow: hidden;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
  font-family: 'Rubik', sans-serif;
}

.fic{
  z-index: 10;
}

.btn {

  font-family: Arial;
  margin-right: -15px;
  color: #ffffff;
  font-size: 15px;
  padding: 10px 18px 10px 18px;
  border: solid #D98E04 2px;
  text-decoration: none;
}

.btn:hover {
  background-color: #D98E04;
  font-size: 15px;
  padding: 10px 18px 10px 18px;

}
.navbars a {
  float: left;
  color: #4ef3ff;;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 18px;
}

.navbars a:hover {
  background-color: hsla(160, 100%, 37%, 0.2);
  color: #4ef3ff;
}

.dropbtn {
  background-color: transparent;
  color: #000000;
  width: 100%;
  padding-left: 2em;
  padding-right: 2em;
  cursor: pointer;
  border: none;
  outline: none;
  font-size: 18px;
}

.dropbtn:hover {
  background-color: #eeeeee;

  cursor: pointer;
  border: none;
  outline: none;
  font-size: 18px;
}







.bg {
  background-color: #171627;
}

.verde:hover{
  color: #D98E04;
}
.verdelogo{
  color: #D98E04;
}
.inputs {
  border-radius: 5px;
  margin-top: 0.5em;
  margin-bottom: -1em;
  background-color: #000000;
  width: 400px;
  height: 3em;
    }
    .spanstyle{
        color: white;
        font-weight: bold;
    }


    input,
select {
  padding: 5px 10px;
  border-radius: 5px;
  width: 300px;
}
    .btn {

    font-family: Arial;

    color: #ffffff;
    font-size: 0.5cm;
    padding: 10px 50px 10px 50px;
    margin-top: 2em;
    border: solid #D98E04 2px;
    text-decoration: none;
    }



    .btn:hover {
    background-color: #D98E04;
    font-size: 0.5cm;
    padding: 10px 50px 10px 50px;

}


.btn1 {

    font-family: Arial;
    border-radius: 1em;
    color: #ffffff;
    font-size: 0.4cm;
    margin: 0.5cm;
    padding: 8px 30px 8px 30px;
    border: solid #D98E04 2px;
    text-decoration: none;
    }

    .btn1:hover {
    background-color: #D98E04;
    font-size: 0.4cm;
    padding: 8px 30px 8px 30px;

}



    body{
        width: 100%;
        height: 100vh;
        font-family: 'Mukta', sans-serif;
        background-color: #adaaa1;
    }
    #contCad {
        width: 60em;
        height: 30em;
        border-radius: 30px;
        background-color: #283352;
    }
    .center{
        position: absolute;
        top: 5em; bottom: 0;
        left: 0; right: 0;
        margin: auto;
    }


    #cadastro{
        position: absolute;
        top: 50%;
        left: 60%;
        transform: translate(-50%, -50%);
        background: #141C33;
        border-radius: 20px;
        padding: 30px;
        width: auto;
        height: auto;
        align-items: center;
        color: #D98E04;
    }



    .input{
        min-width: 250px;
        border-radius: 100px;
        padding: 6px;
        margin: 10px 0px 12px -5px;
    }

    .input input{
        width: 88%;
        border: none;
        outline: none;
        font-family: 'Mukta', sans-serif;
        transform: translateX(5%);
        color: #000000;
        font-size: 15px;
    }


    .links {
        background-color: transparent;
        overflow: hidden;
        margin-top: 20px;
        margin-bottom: -20px;
    }
    .links a {
        float: center;
        padding: 50px;
        text-decoration: none;
        font-size: 15px;
    }

.separator {
  width: 100%;
  height: 1px;
  background-color: #ccc;
}

</style>