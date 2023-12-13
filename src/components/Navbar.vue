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
              <button @click="toggleDropdown"  class="verde z-50 block text-lg  py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-white-700 md:p-0 dark:text-white md:dark:text-white-500">
                {{ this.name }}
              </button>
              <ul v-show="isDropdownOpen"  v-if="isDropdownOpen"  ref="dropdown"  class="absolute z-50 left-1/2 transform -translate-x-1/2  rounded-md mt-3 bg-white flex flex-col items-center">
                <li class="flex flex-col items-center">
                  <h5 class="text-lg ">{{ this.name }}</h5>
                  <h6 class="text-sm text-muted">{{ this.status }}</h6>
                </li>
                <li class="separator "></li>
                <li class=" dropbtn ">
                  <button class="ml-1.5" @click="toggleperfil"> Perfil</button>
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
    <div id="background-overlay" v-show="perfil"></div>

    <div v-if="perfil" class="center z-50 flex justify-center items-center ">
        <div id="cadastro">
         <div class="flex justify-between items-center flex- forms" >
            <h1 class="text-4xl">Meu Perfil</h1>
           <button @click="toggleperfil" style="color: white; font-size: xx-large; border: white; border-radius: 25px; margin-right: 10px; font-family: 'Rubik', sans-serif">X</button>

         </div>
          <form class="flex justify-center items-center flex-col forms" action="">
            <div class="flex justify-center items-center forms flex-row">
              <div class="input flex  flex-col">
                <span class="spanstyle">Username</span>
                <el-input type="text" id="disable" class="inputs2 "  :disabled="isDisabled" pattern=".+@globex\.com" placeholder="Email" v-model="name"></el-input>
              </div>
            </div>
            <div class="flex justify-center items-center forms flex-row">
              <div class="input flex  flex-col " >
                <span class="spanstyle">Email</span>
                <el-input type="text" class="inputs2" disabled autocomplete="off" v-model="email"></el-input>
              </div>
            </div>
          </form>
          <div v-if="this.status == 'Prêmio'" class="flex justify-center items-center forms flex-row">
            <div class="input flex  flex-col " >
              <span class="spanstyle">Plano</span>
              <el-input type="text" class="inputs2" disabled autocomplete="off" v-model="status"></el-input>
            </div>
          </div>
          <div v-else class="flex justify-center items-center forms flex-row">
            <div class="input flex  flex-col " >
              <span class="spanstyle">Plano</span>
              <el-input type="text" class="inputs" disabled size="medium" autocomplete="off" v-model="status"></el-input>
            </div>
            <div class="input flex  flex-col " >
              <span class="spanstyle"><br></span>
              <button class="btn-inputs" @click="togglepag" :disabled="!isDisabled"  >Tornar Prêmio</button>
            </div>
          </div>
          <div v-if="alterarsenha" class="flex justify-center items-center forms flex-row">
            <div class="input flex  flex-col " >
              <span class="spanstyle">Nova Senha</span>
              <el-input type="password" class="inputs"  autocomplete="off" v-model="password1"></el-input>
            </div>
            <div class="input flex  flex-col " >
              <span class="spanstyle">Confirmar Senha</span>
              <el-input type="password" class="inputs"  autocomplete="off" v-model="password2"></el-input>
            </div>
          </div>
          <div v-if="!alterarsenha">
            <div v-if="isDisabled" class="flex justify-center items-center forms flex-row">
              <div  class="input flex  flex-col " >
                <span class="spanstyle"><br></span>
                <button @click="editperfil" class="btn-inputs" >Editar Perfil</button>
              </div>
              <div class="input flex  flex-col mb-5" >
                <span class="spanstyle"><br></span>
                <button @click="senha" class="btn-inputs" >Alterar Senha</button>
              </div>
            </div>
            <div v-else class="flex justify-center items-center forms flex-row">
              <div  class="input flex  flex-col " >
                <span class="spanstyle"><br></span>
                <button @click="Edit" class="btn-inputs" >Salvar Perfil</button>
              </div>
            </div>
          </div>
          <div v-else>
            <div class="flex justify-center items-center forms flex-row">
              <div  class="input flex  flex-col " >
                <span class="spanstyle"><br></span>
                <button @click="Edit" class="btn-inputs" >Alterar Senha</button>
              </div>
            </div>
          </div>
        </div>
    </div>
    <div id="background-overlay" v-show="pagamento"></div>
    <div v-if="pagamento" class="center z-50 flex justify-center items-center ">
      <div id="cadastro">
        <div class="flex justify-between items-center flex- forms" >
          <h1 v-if="!pagamentofeito" class="text-4xl mr-20">Torne-se Prêmio</h1>
          <h1 v-else class="text-4xl mr-20">Pagamento Realizado</h1>
          <button @click="togglepag" style="color: white; font-size: xx-large; border: white; border-radius: 25px; margin-right: 10px; font-family: 'Rubik', sans-serif">X</button>
        </div>
        <div class="flex justify-center items-center forms flex-col" >
          <h2 class="text-3xl mt-5 mb-3" style="color: white">PIX</h2>
          <img v-if="!pagamentofeito" src="../static/qrcode.png" class="max-h-60" alt="" sizes="" srcset="">
          <img v-else src="../static/pixfeito.png" class="max-h-52 mb-8" alt="" sizes="" srcset="">
        </div>
        <div v-if="!pagamentofeito" >
          <div class="flex justify-center items-center forms flex-row">
            <div  class="input flex  flex-col " >
              <span class="spanstyle"><br></span>
              <button @click="Edit" class="btn-inputs " style="" >Pagamento Efetuado</button>
            </div>
          </div>
        </div>
      </div>
    </div>


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
      admin:'',
      isDisabled: true,
      isDropdownOpen: false,
      alterarsenha: false,
      perfil: false,
      pagamento: false,
      pagamentofeito: false,
      password1 : '',
      password2: '',
    }
    }, mounted() {
    this.allData();

    document.addEventListener("click", this.closeDropdown);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.closeDropdown);
  },
  methods: {
    senha(){
      this.alterarsenha = !this.alterarsenha;
    },
    async Edit() {
      var sendofeitopagamento = false;
      var dataUser = {
        name: this.name,
        email: this.email,
      }
      if (this.pagamento) {
        sendofeitopagamento = true;

        this.pagamentofeito = true

        await new Promise(resolve => setTimeout(resolve, 3000));
        this.pagamento = false
        dataUser = {
          email: this.email,
          premio: true,
        }
      }


      if (this.alterarsenha){
        if(this.password1 == "" || this.password2 == ""  ){
          this.$message({
            message: "Senhas vazia não permitido",
            type: "danger",
          });
          this.alterarsenha = false
          return
        }
        if(this.password1 != this.password2){
          this.$message({
            message: "Senhas não coincidem",
            type: "danger",
          });
          return
        }
        dataUser = {
          email: this.email,
          password: this.password1,
        }
        this.password1 = ''
        this.password2 = ''
      }
      this.isDisabled= true
      this.alterarsenha= false
      const {data, status} = await axios({
        method: "PUT",
        url: "http://127.0.0.1:8000/users/register",
        data: dataUser
      }).catch((error) => {
        alert("Erro")
        return {
          msg: "só um aviso de erro"
        };
      });

      if (status === 200) {
        if(sendofeitopagamento){
          this.$message({
            message: "Pagamento Feito Com Sucesso",
            type: "success",
          });
        }else {
          this.$message({
            message: "Usuario editado com sucesso",
            type: "success",
          });
        }
        this.isDisabled= true
        this.allData();
      } else
        this.$message({
          message: "erro",
          type: "danger",
        });
        this.allData();

    },
    editperfil(){
      this.isDisabled= false
    },
    togglepag(){
      this.pagamento = !this.pagamento
      this.perfil = false

    },
    toggleperfil(){
      this.perfil = !this.perfil
      this.isDropdownOpen = false

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

        this.name = data.user.name;
        this.email = data.user.email
        this.admin = data.auth.admin
        if(data.auth.premio){
          this.status = "Prêmio"
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


.btn-inputs {

  color: #ffffff;
  border: solid #D98E04 2px;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 0.4em;
  margin-bottom: -1em;
  background-color: #000000;
  width: auto;
  height: 3em;
}
.btn-inputs:disabled {
  /* Estilos para quando o botão está desativado */
  opacity: 0.5; /* Por exemplo, reduz a opacidade quando desativado */
  cursor: not-allowed; /* Altera o cursor para "not-allowed" quando desativado */
  /* Adicione outros estilos desejados para o botão desativado aqui */
}
.btn-inputs:disabled:hover {
  /* Adicione os estilos desejados para o hover do botão desativado aqui */
  background-color: inherit; /* Por exemplo, mantenha a cor de fundo padrão durante o hover */
  color: inherit; /* Mantenha a cor do texto padrão durante o hover */
  /* Adicione outros estilos de hover desejados para o botão desativado aqui */
}


.btn-inputs:hover {
  background-color: #D98E04;

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
  padding-top: 0.3em;
  padding-bottom: 0.3em;
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
.inputs2 {
  border-radius: 5px;
  margin-top: 0.5em;
  margin-bottom: -1em;
  background-color: #000000;
  width: 34.5em;
  height: 3em;
}

.inputs {
  border-radius: 5px;
  margin-top: 0.5em;
  margin-bottom: -1em;
  background-color: #000000;
  width: auto;
  height: 3em;
    }
    .spanstyle{
        color: white;
        font-weight: bold;
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




    #cadastro{
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #141C33;
        border-radius: 20px;
        padding: 30px;
        width: auto;
        height: auto;
        align-items: center;
        color: #D98E04;
      z-index: 1000;
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

#background-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Camada semi-transparente */
  z-index: 999; /* Garante que está abaixo do elemento #cadastro */
}
</style>