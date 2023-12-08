<!-- Código apenas para teste. -->


<template>
    <Navbar />
    <div class="w-full flex justify-center ">
      <!-- Table -->

      <div class="w-3/5  mt-3">
        <!-- HEADER -->
        <div class="">
          <div class="flex justify-between items-center pt-4 " >
            <h1 class="font pl-5"><b>Usuário</b></h1>
          </div>
          <!-- TABLE -->
          <div class="flex">
            <el-table empty-text="No Users Indexed"  :data="Users" v-loading="loading" >
              <el-table-column label="Nome" prop="name" />
              <el-table-column label="Email" prop="email" />
              <el-table-column align="right">
                  <template #default="scope">
                    <el-button
                    size="large"
                      type="danger"
                      @click="Delete(Users[scope.$index].id)"
                      >Deletar</el-button
                    >
                  </template>
                </el-table-column>
             
            </el-table>
          </div>
        </div>
      </div>
    </div>
    
  

  <el-dialog
    v-model="dialogoedit"
    width="30%"
    
  >
    <template #footer>
      <div class="flex justify-start items-center flex-col">
        <h1 class="font  " ><b>Edit Users</b></h1>
      </div>
      <div class="flex justify-start items-center flex-col">

        <form class="" action="">
          <div class="pt-3">
            <a class="spanstyle">Nome</a>
            <el-input type="text"  class="inputs"  size="large" placeholder="Name" v-model="name"></el-input>
            
          </div>              
          <div class="pt-3" >
            <a class="spanstyle">Link</a>
            <el-input type="text" class="inputs"  show-link="true"  size="large" autocomplete="off" placeholder="link" v-model="link"></el-input>
            
          </div>              
          
        </form>
      </div>
      <div class="flex justify-center items-center flex-col forms">
                <button  @click="Edit()" class="btn " >Edit</button>
            
            </div>
    </template>
  </el-dialog>

    
</template>

<script>
import axios, * as others from 'axios';
import Navbar from '../components/Navbar.vue'

export default {
  

   data() {

    return {
      hover: false,
      dialogo: false,
      dialogoedit: false,
      name: "",
      email: "",
      Users: [],
      idSite: 0,
      pageReloaded: false

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

      } catch (error) {
        this.$router.push('/Login')
        console.error('Erro durante a solicitação:', error);
      }
    },
    async allData() {

      try {
        const {data, status} = await axios.get('http://127.0.0.1:8000/users/register')
        console.log(data)
        if(status == 200){
          
          this.Users = data.users
          console.log(this.Users)
        }else{
          this.Users = []
         

        }
      } catch (error) {
        throw error;
      }
    },
   
    async Delete(id) {
      try {
          console.log(id)
        const { data, status } = await axios({
          method: "DELETE",
          url: "http://127.0.0.1:8000/users/register/" + id,
        });
        if (status === 200) {
          this.$message({
            message: "User successfully deleted",
            type: "success",
          });
        } else
          this.$message({
            message: "error when deleting User",
            type: "danger",
          });
          this.name = "" 
          this.link= "" 
          this.dialogo= false
          location.reload()
          

  
      } catch (error) {
        throw error;
      }
    },
    //Exemplo do site de edit
    async EditDialog(id){
       this.dialogoedit = true
       this.idSite = id
       console.log("testteee" + id)
    },
    async Edit(){
      console.log("testteee" + this.idSite)
            
                const {data, status} = await axios({
                    method: "PUT",
                    url: "http://127.0.0.1:8000/sites/register" + this.idSite,
                    data: {
                        name: this.name,
                        email: this.email,
                        password: '',
                    }}).catch((error) => {
                             alert("Erro")
                            return {
                                msg: "só um aviso de erro"
                            };
                            });
                console.log(data)
                if (status === 200) {
                  this.$message({
                    message: "Website Edit successfully",
                    type: "success",
                  });
                } else
                  this.$message({
                    message: "Website Edit error",
                    type: "danger",
            });
                this.name = "" 
                this.link= "" 
                this.dialogo= false
                setTimeout(location.reload(), 5000);
           
        }
    },


  }


</script>

<style>
.font {
  font-weight: 500;
  font-size: 40px;
  margin-bottom: 0.1em;
}





.spanstyle{
        color: rgb(0, 0, 0);
        font-weight: bold;
        margin-right: 100%;
    }
    
.new-btn:hover {
  background-color: transparent;
  color: #222;
}


  .el-table .success-row {
    background: #4e8232;
  }


  .btn {
    
    font-family: Arial;

    color: #000000;
    font-size: 0.5cm;
    padding: 10px 50px 10px 50px;
    margin-top: 1em;
    border: solid #D98E04 2px;
    text-decoration: none;
    margin-bottom: 2.5em;
    }

  

    .btn:hover {
    background-color: #D98E04;
    font-size: 0.5cm;
    padding: 10px 50px 10px 50px;
    
}

</style>