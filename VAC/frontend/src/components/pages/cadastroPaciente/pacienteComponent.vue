<template>
  <div id="app">
    <!-- header -->
    <header>
        <!-- navbar -->
        <div class="navbar-fixed">
           <nav class="navbar navbar-expand-sm bg-light navbar-light">
             <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link color-inherit purple-hover" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Profissional</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="VAC\frontend\vacina.html">Vacina</a>
      </li>    
    </ul>
  </div>  
</nav>
        </div>
    </header>
  
  <form >
  <div class="container-fluid col-8">
    <br>
    <h2>Registo de Profissional</h2>
    <br>
    <div class="form-group col-md-12 form-horizontal row">
      <label  class=" control-label" for="pwd">Nome:</label>
      <input type="text" class="form-control" id="nome" placeholder="Enter name" name="nome">
    </div>
    <div class="form-group col-md-12 form-horizontal row">
      <label  class=" control-label" for="pwd">CPF:</label>
      <input type="text" class="form-control" id="cpf" placeholder="Enter password" name="cpf">
    </div>
    <div class="form-group col-md-12 form-horizontal row">
      <label  class=" control-label" for="pwd">Telefone:</label>
      <input type="phone" class="form-control" id="phone" placeholder="Telephone" name="phone">
    </div>
    <div class="form-group col-md-12 form-horizontal row"> 
      <label class=" control-label" for="email">Email:</label>
      <input type="email" class="form-control" id="email" placeholder="@example.com" name="email">
    </div>
    <div class="form-group col-md-12 form-horizontal row">
    <div class="form-group col-md-8 form-horizontal row">
      <label  class=" control-label" for="pwd">Número do registro:</label>
      <input type="text" class="form-control" id="pwd" placeholder="Enter password" name="pswd">
    </div>
    <div class="form-group col-md-1 form-horizontal row">

    </div>
    <div class="form-group col-md-4 form-horizontal row">
      <label  class=" control-label" for="pwd">Data de validade:</label>
      <input type="date" class="form-control" id="data" placeholder="" name="data">
    </div>
    </div>
    <div class="form-group col-md-12 form-horizontal row">
      <label  class=" control-label" for="pwd">Logradouro:</label>
      <input type="password" class="form-control" id="pwd" placeholder="Rua josé Castro" name="pswd">
    </div>

  
    <button type="submit" class="btn  btn-purple ">cadastro</button>
  </div>
  </form>
</div>

</template>

<script>
export default {
  name: "App",
  data() {
    return {
      msg: "vaii",
    };
  },
};
</script>

<style>
#app {
  font-family: "montserra";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color:#bf80ff;
}
</style>
