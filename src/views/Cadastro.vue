<template>
    <div class=" center flex justify-center items-center ">
        
        <div id="contCad" class="bg-white w-96 h-96 ">
            <div id="cadastro">
        
            <form class="flex justify-center items-center flex-col forms" action="">
              <div class="input flex flex-col">
                <span class="spanstyle">Username</span>
                  <el-input  placeholder="Username"  class="inputs" v-model="Username"></el-input>

              </div>
              <div class="input flex  flex-col">
                <span class="spanstyle">Email</span>
                  <el-input type="email"  class="inputs" pattern=".+@globex\.com" placeholder="Email" v-model="Email"></el-input>

              </div>              
              <div class="input flex  flex-col " >
                <span class="spanstyle">Password</span>
                  <el-input type="password" class="inputs"  show-password="true" size="medium" autocomplete="off" placeholder="Password" v-model="Password"></el-input>

              </div>              
              <div class="input flex  flex-col">
                <div>
                  <span class="" style="color: white; font-weight: bold;">Password Confirmation</span>
                  
                </div>
                  <el-input type="password" class="inputs" show-password="true" autocomplete="off" placeholder="Password Confirmation" v-model="PasswordConfirmation"></el-input>
              </div>
              
            </form>
            <div class="flex justify-center items-center flex-col forms">
                <button  @click="registration()" class="btn " >Sign Up</button>
            
            </div>
              <RouterLink to="/Login" class="verde block text-xl  text-white bg-blue-700 rounded md:bg-transparent md:text-white-700 md:p-0 dark:text-white md:dark:text-white-500" style="margin-left: 6em; margin-top: -1em">Já tem uma conta?</RouterLink>
        </div>
        <div class="flex justify-center items-start flex-col forms" >
              <img  src="../static/sureluck-logo.png" style=" padding-left: 2%; margin-top: 11%; width: 45%;" alt="">
            </div>
        </div>

         
            
      </div>
    
      
    </template>
    
    <script>
     import axios, * as others from 'axios';
    export default {
       

        data() {
    
    return {
      Username: '',
      Email: '',
      Password: '',
      PasswordConfirmation: '',
    }
   
  },
  methods: {
    async registration(){
        if(this.Email != "" && this.Username != "" && this.Password != "" && this.PasswordConfirmation != ""){
            if(this.Password == this.PasswordConfirmation){

                const {data, status} = await axios({
                    method: "POST",
                    url: "http://127.0.0.1:8000/users/register",
                    data: {
                        name: this.Username,
                        email: this.Email,
                        password: this.Password
                    }}).catch((error) => {
                             alert("Erro")
                            return {
    
                                msg: "só um aviso foda"
                            };
                            });
                console.log(data)
                if (status === 200) {
                  this.$message({
                    message: "registered successfully",
                    type: "success",
                  });
                } else
                  this.$message({
                    message: "registered error",
                    type: "danger",
            });
                this.Email = "" 
                this.Username = "" 
                this.Password = ""  
                this.PasswordConfirmation = ""    
                
            }else{
                this.$message({
                    message: "passwords don't match",
                    type: "danger",
            });
            }
          }else{

            this.$message({
                    message: "there are missing fields",
                    type: "danger",
            });
        }
    }

  }
}
    
    </script>
    
    <style scoped>
        @import url('https://fonts.googleapis.com/css2?family=Mukta&family=Quicksand:wght@600&family=Rubik&display=swap');
    
        
    *{
        margin: 0;
        padding: 0;
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
.spanstyle{
        color: rgb(255, 255, 255);
        font-weight: bold;
       
    }
    
 

    body{
        width: 100%;
        height: 100vh;
        font-family: 'Mukta', sans-serif;
        background-color: #adaaa1;
    }
    #contCad {
      position: fixed;
        width: 60em;
        height: 40em;
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
        margin-left: 7.5em;
        top: 50%;
        left: 60%;
        transform: translate(-50%, -50%);
        background: #141C33;
        border-radius: 20px;
        padding: 20px;
         padding-right: 35px;
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