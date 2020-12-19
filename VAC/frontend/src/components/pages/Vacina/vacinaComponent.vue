<template>
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
  
  <form >
  <div style="background-color:">
    <br>
    <h2>Registo de Profissional</h2>
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
      <label class=" control-label" for="email">Quantidade:</label>
      <input type="number" class="form-control" id="qtd" placeholder="" name="quantidade">
    </div>
    <div class="form-group col-md-12 form-horizontal row">
    <div class="form-group col-md-8 form-horizontal row">
      <label  class=" control-label" for="pwd">Lote de fabricação:</label>
      <input type="text" class="form-control" id="pwd" placeholder="" name="pswd">
    </div>
    <div class="form-group col-md-3 form-horizontal row">
      <label  class=" control-label" for="pwd">Data de validade:</label>
      <input type="date" class="form-control" id="data" placeholder="dd/mm/aaaa" name="data">
    </div>
    </div>

    <button type="submit" class="btn  btn-purple ">cadastrar</button>
  </div>
  </form>
</div>

</template>

<script>
export default {
  name: "App",
  data() {
    return {
    };
  },
};
</script>

<style>
#vacina{
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
