$(document).ready(nag);

$(document).ready(arci);

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
var imgV = document.getElementById('fotoPerfil');
var Ruta = document.getElementById('ruta');
var icon = document.getElementById('Ucer');
var rut = Ruta.innerHTML;
console.log(rut);

if (rut == null) {

    imgV.src = "img/usuario.png";


} else if (rut != null) {
    imgV.src = rut;
    icon.src = rut;
}

var portada = document.getElementById('portaS');
var plasmar = document.getElementById('portada');

var rutt = portada.innerHTML;
console.log(rutt);

if (rutt != null) {
    plasmar.style.background = "url(/" + rutt + ") no-repeat top center";
    plasmar.style.backgroundSize = "cover";

}


function arci(){
  $('.pub').click(function(){

    $('.a').click();

  });

}





