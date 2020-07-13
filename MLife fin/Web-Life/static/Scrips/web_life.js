$(document).ready(nag);
$(document).ready(bar);
$(document).ready(arci);
$(document).ready(com);
$(document).ready(comp);
$(document).ready(manda);

function em(orca){
  console.log("orca vale: " + orca);
}

function manda(){
  $('.ele').click(function(){

    $('.manda').click();

  });
}

function comp(){
  $('.app').click(function() {  
     document.getElementById('comentarios').style.display = 'block';

  });
}




function com(){
$('.xca').click(function () {
  document.getElementById('comentarios').style.display = 'none';
});
}

var contador = 1;
// document.getElementById('LMF').style.display = 'block';
function nag(){
    $('.Bu').click(function () {

        if (contador == 1) {
          $('.Login_ML').fadeToggle();
         
    
          contador = 0;
        } else {
          $('.Login_ML').fadeToggle();
         
          contador = 1;
        }
    
    
      });
}

function bar(){
  $('.mm').click(function () {

    if (contador == 1) {
      $('.progress').fadeToggle();
     

      contador = 0;
    } else {
      $('.progress').fadeToggle();
     
      contador = 1;
    }


  });
}
var imgV = document.getElementById('fotoPerfil');
var Ruta = document.getElementById('ruta');
var estatus = document.getElementById('mm');
var icon = document.getElementById('Ucer');
var rut = Ruta.innerHTML;


if (rut == null) {

    imgV.src = "img/usuario.png";


} else if (rut != null) {
    imgV.src = rut;
    icon.src = rut;
    estatus.src = rut;

}

var portada = document.getElementById('portaS');
var plasmar = document.getElementById('portada');

var rutt = portada.innerHTML;


if (rutt != null) {
    plasmar.style.background = "url(/" + rutt + ") no-repeat top center";
    plasmar.style.backgroundSize = "cover";

}


function arci(){
  $('.pub').click(function(){

    $('.a').click();

  });

}






