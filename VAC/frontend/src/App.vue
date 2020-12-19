<template>
  <div id="app">
     <div id="vacina">
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
        <a class="nav-link" href="#">Vacina</a>
      </li>    
    </ul>
  </div>  
</nav>
        </div>
    </header>
  
  
  <div style="background-color:">
    <div class="container-fluid col-8">
    <br>
    <h2>Cadastro de vacina</h2>
    <br>
    <div class="form-group col-md-12 form-horizontal row">
      <label  class=" control-label" for="pwd">Nome:</label>
      <input type="text" class="form-control" id="nome" placeholder="Enter name" name="nome">
    </div>
    <div class="form-group col-md-12 form-horizontal row">
      <label  class=" control-label" for="pwd">Composto:</label>
      <input type="text" class="form-control" id="cpt" placeholder="Informe o composto" name="cpt">
    </div>
    <div class="form-group col-md-12 form-horizontal row">
      <label  class=" control-label" for="pwd">Fabricante:</label>
      <input type="text" class="form-control" id="fbr" placeholder="fabricante" name="fabricante">
    </div>
    
    <div class="form-group col-md-12 form-horizontal row">
    <div class="form-group col-md-3 form-horizontal row">
       <label  class=" control-label" for="pwd">Lote de fabricação:</label>
       <input type="text" class="form-control" id="lote" placeholder="" name="lote">
    </div>
    
    <div class="form-group col-md-1 form-horizontal row"></div>

    <div class="form-group col-md-3 form-horizontal row">
      <label  class=" control-label" for="pwd">Data de validade:</label>
      <input type="date" class="form-control" id="data" placeholder="" name="data">
    </div>
    <div class="form-group col-md-1 form-horizontal row"></div>
    <div class="form-group col-md-3 form-horizontal row">
      <label  class=" control-label" for="pwd">quantidade:</label>
      <input type="number" class="form-control" id="qtd" placeholder="" name="qtd">
    </div>
    </div>
       

    	<div class="form-group col-md-12 ">
					
    
    <button type="submit" class="btn btn-secondary" >cadastrar</button></div></div>
   
  
  </div>
     </div></div>


   
  

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
