<template>
<div>

<nav class="border-gray-200 bg fic ">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/" class="flex justify-normal ">
        <span class="self-center text-4xl font-semibold #171626whitespace-nowrap text-white">Sure</span>
        <span class="self-center verdelogo text-4xl font-semibold #171626whitespace-nowrap text-white">Luck</span>
    </a>
    <div class="hidden w-full md:block md:w-auto mt-2 mb-2" id="navbar">
      <ul class="font-medium content-center flex flex-col p-4  md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li class="mr-1">
          <RouterLink to="/" class="verde block text-xl py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-white-700 md:p-0 dark:text-white md:dark:text-white-500">Home</RouterLink>
        </li>   
        <li class="mr-1" >
          <RouterLink to="/Sites" class="verde block text-xl py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-white-700 md:p-0 dark:text-white md:dark:text-white-500">Casas de Aposta</RouterLink>
        </li>
        <li class=" mr-1">
          <RouterLink to="/Login" class=" btn" @click="dialogVisible = true" >Sign In</RouterLink>
        </li>
        <li class="mr-1">
          <RouterLink to="/Cadastro" class="btn" >Sign Up</RouterLink>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

</div>
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
  overflow: hidden;
  color:#4ef3ff;
  padding: 2rem;
  cursor: pointer;
  border: none;
  outline: none;
  font-family: 'Rubik', sans-serif;
  font-size: 18px;
}

.dropdown {
  display: block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #FAF9F6;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  font-family: 'Rubik', sans-serif;
  font-size: 13px;
}

.dropdown-content a:hover {background-color: hsla(160, 100%, 37%, 0.2)}

.dropdown:hover .dropdown-content {
  display: block;
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


</style>