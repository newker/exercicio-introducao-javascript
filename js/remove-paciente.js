var tabela = document.querySelector("#tabela-pacientes");
tabela.addEventListener("dblclick", function(event){
  //buscar qual td foi clicada (alvo - target) e remover o seu pai.
  event.target.parentNode.classList.add("fadeOut");

  setTimeout(function(){
    event.target.parentNode.remove();
  },500)
});
