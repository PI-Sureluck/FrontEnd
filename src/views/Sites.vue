<!-- Código apenas para teste. -->


<template>

    <div class="w-full flex justify-center content ">
      <!-- Table -->

      <div class="w-3/5  mt-3">
        <!-- HEADER -->
        <div class="">
          <div class="flex justify-between items-center pt-4 " >
            <h1 class="font pl-5"><b>Casas de Apostas</b></h1>
            <el-row :gutter="1">
              <div class="display-flex justify-end ">
                <el-button size="large" @click="dialogo = true">Registrar</el-button>
              </div>
            </el-row>
          </div>
          <!-- TABLE -->
          <div class="flex">

            <el-table empty-text="No websites Indexed"  :data="websites" v-loading="loading" >
              <el-table-column label="Logo" prop="logo" />
              <el-table-column label="Nome" prop="name" />
              <el-table-column label="Link" prop="link" />
              <el-table-column align="right">
                  <template #default="scope">
                    <el-button size="large" @click="EditDialog(websites[scope.$index].id)"
                      >Edit</el-button
                    >
                    <el-button
                    size="large"
                      type="danger"
                      @click="Delete(websites[scope.$index].id)"
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
    v-model="dialogo"
    width="30%"

  >
    <template #footer>
      <div class="flex justify-start items-center flex-col">
        <h1 class="font  " ><b>Register WebSites</b></h1>
      </div>
      <div class="flex justify-start items-center flex-col">

        <form class="" action="">
          <div class="pt-3">
            <a class="spanstyle">Logo</a>
            <el-input type="text"  class="inputs"  size="large" placeholder="Logo" v-model="logo"></el-input>

          </div>
          <div class="pt-3">
            <a class="spanstyle">Name</a>
            <el-input type="text"  class="inputs"  size="large" placeholder="Name" v-model="name"></el-input>

          </div>
          <div class="pt-3" >
            <a class="spanstyle">Link</a>
            <el-input type="text" class="inputs"  show-link="true"  size="large" autocomplete="off" placeholder="link" v-model="link"></el-input>

          </div>

        </form>
      </div>
      <div class="flex justify-center items-center flex-col forms">
                <button  @click="registration()" class="btn " >Register</button>

            </div>
    </template>
  </el-dialog>

  <el-dialog
    v-model="dialogoedit"
    width="30%"

  >
    <template #footer>
      <div class="flex justify-start items-center flex-col">
        <h1 class="font  " ><b>Editar Casas de Apostas</b></h1>
      </div>
      <div class="flex justify-start items-center flex-col">

        <form class="" action="">
          <div class="pt-3">
            <a class="spanstyle">Logo</a>
            <el-input type="text"  class="inputs"  size="large" placeholder="Logo" v-model="logo"></el-input>

          </div>
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
import Navbar from '../components/Navbar.vue'
import axios, * as others from 'axios';
export default {


   data() {

    return {
      hover: false,
      dialogo: false,
      dialogoedit: false,
      name: "",
      link: "",
      websites: [],
      idSite: 0,


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
        const {data, status} = await axios.get('http://127.0.0.1:8000/sites/site/')
        console.log(data)
        if(status == 200){

          this.websites = data.sites
          console.log(this.websites)
        }else{
          this.websites = []


        }
      } catch (error) {
        throw error;
      }
    },
    async registration(){
        if(this.name != "" && this.link != ""){

                const {data, status} = await axios({
                    method: "POST",
                    url: "http://127.0.0.1:8000/sites/site/",
                    data: {
                        name: this.name,
                        link: this.link,
                        logo: '',
                        xpath: '',
                    }}).catch((error) => {
                             alert("Erro")
                            return {
                                msg: "só um aviso de erro"
                            };
                            });
                console.log(data)
                if (status === 200) {
                  this.$message({
                    message: "Website registered successfully",
                    type: "success",
                  });
                } else
                  this.$message({
                    message: "Website registered error",
                    type: "danger",
            });
                this.name = ""
                this.link= ""
                this.dialogo= false
                setTimeout(location.reload(), 5000);
          }else{
            this.$message({
                    message: "there are missing fields",
                    type: "danger",
            });

        }
    },
    async Delete(id) {
      try {
          console.log(id)
        const { data, status } = await axios({
          method: "DELETE",
          url: "http://127.0.0.1:8000/sites/site/" + id,
        });
        if (status === 200) {
          this.$message({
            message: "website successfully deleted",
            type: "success",
          });
        } else
          this.$message({
            message: "error when deleting website",
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
    async EditDialog(id){
       this.dialogoedit = true
       this.idSite = id
       console.log("testteee" + id)
    },
    async Edit(){
      console.log("testteee" + this.idSite)

                const {data, status} = await axios({
                    method: "PUT",
                    url: "http://127.0.0.1:8000/sites/site/" + this.idSite,
                    data: {
                        name: this.name,
                        link: this.link,
                        logo: '',
                        xpath: '',
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

.content {
  padding-bottom: 60px; /* Ajuste o valor para corresponder à altura do seu rodapé */
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