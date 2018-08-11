function Enviar(){
  var nome = document.getElementById("txt-name");
  //Se valor da variável nome for diferente de vazio
  if(nome.value !="") {
  //Mostrar mensagem com nome
    alert("obrigado"+nome.value+", mas esta área está em desenvolvimento");
  } else {
    //mostrar mensagem genérica
    alert("obrigado, mas esta área está em desenvolvimento" );
  }
}
