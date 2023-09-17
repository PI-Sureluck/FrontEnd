<template>
    <header>
        <div class="navbars">
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
    <div class="dropdown">
      <button class="dropbtn">Conta</button>
        <div class="dropdown-content">
          <a href="/cadastro">Cadastro de usuário</a>
          <a href="/cadastro-casa-de-aposta">Cadastro de casa de aposta</a>
      </div>
    </div>
    </header>
</template>

<script>
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
.navbars a {
  float: left;
  color: #1BCC23;;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 18px;
}

.navbars a:hover {
  background-color: hsla(160, 100%, 37%, 0.2);
  color: #1BCC23;
}

.dropbtn {
  background-color: transparent;
  overflow: hidden;
  color:#1BCC23;
  cursor: pointer;
  border: none;
  outline: none;
  font-family: 'Rubik', sans-serif;
  font-size: 18px;
}

.dropdown {
  display: inline-block;
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

</style>