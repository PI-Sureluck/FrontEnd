<template>

    <div id="cadastro">
          <form  action="">
              <h2 class="titulo">CADASTRE-SE</h2>
              <div class="input1">
                  <input id="nome" name="nome" placeholder="Nome" type="text">
              </div>
              <div class="input1">
                  <input id="link" name="link" placeholder="Link" type="url">
              </div>
              <div class="input">
                  <input id="categoria" name="categoria" placeholder="Categoria" type="text">
              </div>
              <div id="button">
                  <button type="submit">CONFIRMAR</button>
              </div>
          </form>
      </div>
    
    </template>
    
    <script>
    
    </script>
    
    <style scoped>
        @import url('https://fonts.googleapis.com/css2?family=Mukta&family=Quicksand:wght@600&family=Rubik&display=swap');
    
    *{
        margin: 0;
        padding: 0;
    }
    
    body{
        width: 100%;
        height: 100vh;
        font-family: 'Mukta', sans-serif;
        background-color: #adaaa1;
    }
    
    #cadastro{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #FAF9F6;
        border-radius: 10px;
        padding: 60px;
        width: min-content;
        align-items: center;
        color: #1BCC23;
    }
    
    .titulo{
        font-size: 0.7cm;
        margin-bottom: 5%;
    }
    
    .input1{
        min-width: 200px;
        border-radius: 100px;
        border: 2px #1BCC23 solid;
        padding: 5px;
        margin: 10px 0px 12px -5px;
    }
    
    .input1 input{
        width: 88%;
        border: none;
        outline: none;
        font-family: 'Mukta', sans-serif;
        transform: translateX(5%);
        color: #000000;
        font-size: 15px;
    }
    
    .input{
        min-width: 250px;
        border-radius: 100px;
        border: 2px #1BCC23 solid;
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
    
    #button{
        margin-top: 20px;
        text-align: center;
    }
    
    #button button{
        font-family: 'Mukta', sans-serif;
        background: #1BCC23;
        width: 40%;
        height: 30px;
        border-radius: 100px;
        border: none;
        font-size: 16px;
        color: #FAF9F6;
        outline: none;
        cursor: pointer;
    }
    
    #button button:hover{
        background: #149b1b;
    }
    

    </style>