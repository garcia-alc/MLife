$(document).ready(correr);


function correr() {
  $('.info_ML').hide();
  validar();
  main();
}



var contador = 1;

function main() {
  $('.ML').click(function () {

    if (contador == 1) {
      $('.Login_ML').fadeToggle();
      $('.info_ML').slideDown();

      contador = 0;
    } else {
      $('.Login_ML').slideToggle();
      $('.info_ML').slideToggle();
      contador = 1;
    }


  });

};


function validar() {

  $('.ss').click(function () {

    var contraseña = document.getElementById("contra").value;
    var comprovar = document.getElementById("seña").value;

    if (document.getElementById("name").value == "") {
      document.getElementById("name").focus();

    } else if (document.getElementById("lastname").value == "") {
      document.getElementById("lastname").focus();

    } else if (document.getElementById("email").value == "") {
      document.getElementById("email").focus();

    } else if (contraseña == "") {

      document.getElementById("contra").focus();

    } else if (comprovar == "") {
      document.getElementById("seña").focus();

    } else if (contraseña == comprovar) {
      /*

      document.getElementById("name").value = "";
      document.getElementById("lastname").value = "";
      document.getElementById("email").value = "";
      document.getElementById("contra").value = "";
      document.getElementById("seña").value = "";
*/

    } else {
      document.getElementById("contra").focus();
    }


  });
}







