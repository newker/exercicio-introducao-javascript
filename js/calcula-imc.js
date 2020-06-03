//seleciona o primeiro paciente da tabela atraves do id do primeiro tr e guarda da variavel paciente.
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
  var paciente = pacientes[i];
  //a partir da variavel paciente selecionamos a td peso e a altura atraves de seus marcadores de classes e guardamos em suas respectivas variáveis.
  var tdPeso = paciente.querySelector(".info-peso");
  var tdAltura = paciente.querySelector(".info-altura");

  //capturamos o conteúdo de cada td através do atributo textContent.
  var peso = tdPeso.textContent;
  var altura = tdAltura.textContent;

  var alturaEhValida = validaAltura(altura);
  var pesoEhValido = validaPeso(peso);

  if(!pesoEhValido){
    tdPeso.textContent = "Peso inválido!";
    pesoEhValido = false;
    paciente.classList.add("paciente-invalido");
  }

  if(!alturaEhValida){
    tdAltura.textContent = "Altura inválida!";
    alturaEhValida = false;
    paciente.classList.add("paciente-invalido");
  }

  if(alturaEhValida && pesoEhValido){
    //cálculo do imc
    var imc = calculaImc(peso, altura);
    //selecionando o td imc e guardando na variável tdImc
    var tdImc = paciente.querySelector(".info-imc");
    //atribuindo o imc calculado para o conteúdo da tdImc.
    tdImc.textContent = imc;
  }else{
     tdImc.textContent = "Altura e/ou peso inválidos!";
  }
}

function validaPeso(peso){
  if(peso > 0 && peso < 1000){
    return true;
  }else{
    return false;
  }
}

function validaAltura(altura){
  if(altura > 0 && altura <= 3.00){
    return true;
  }else{
    return false;
  }
}

function calculaImc(peso, altura){
  var imc = 0;
  imc = peso / (altura * altura)
  return imc.toFixed(2);
}
