var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
  //objeto javascript responsável por fazer a requisição Http.
  var xhr = new XMLHttpRequest();

  //método http utilizado e qual servidor será acessado
  xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");

  //colocando o evento para escutar a resposta quando chegar
  xhr.addEventListener("load", function() {

    var erroAjax = document.querySelector("#erro-ajax");

        if(xhr.status == 200){
          erroAjax.classList.add("invisivel");
          var resposta = xhr.responseText;
          var pacientes = JSON.parse(resposta);

          pacientes.forEach(function(paciente){
            adicionaPacienteNaTabela(paciente);
          })
        }else{
          erroAjax.classList.remove("invisivel");
        }

    });

  //enviando a requisição
  xhr.send();



})
