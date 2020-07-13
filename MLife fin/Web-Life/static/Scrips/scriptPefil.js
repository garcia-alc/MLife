$(document).ready(arci);
$(document).ready(hola);
$(document).ready(resubir);
$(document).ready(cancelar);
$(document).ready(enviar);


function arci(){
        $('.pub').click(function(){
      
          $('.a').click();
      
        });
      
      }
      


function enviar() {
        $('.subir3').click(function () {
                $('.enviar').click();
        });
}

function cancelar() {
        $('.subir4').click(function () {
                document.getElementById('emergente').style.display = "none";
        });
}

function resubir() {
        $('.subir2').click(function () {
                $('.archivador').click();
        });
}

function hola() {
        $('.subir').click(function () {
                $('.archivador').click();

                // document.getElementById('emergente').style.display = "block";
        });
}


function correr() {
        var imgV = document.getElementById('visualizador');
        var imageUploader = document.getElementById('archivador');
        var Ruta = imageUploader.value;
        var extPermitidos = /(.png|.jpg)$/i;

        if (!extPermitidos.exec(Ruta)) {
                alert('Selecciona una imagen');
                imageUploader = 0;
                return false;
        }
        else {
                if (imageUploader.files && imageUploader.files[0]) {
                        var visor = new FileReader();
                        visor.onload = function (e) {
                                imgV.style.background = "url(" + e.target.result + ") no-repeat top center";
                                imgV.style.backgroundSize = "cover";
                                imgV.style.hover = 'black';
                                document.getElementById('emergente').style.display = "block";
                        };
                        visor.readAsDataURL(imageUploader.files[0]);
                }
        }
}

var perfil = document.getElementById('perfil');
var mostrar = document.getElementById('mostrarP');
var ruta = perfil.innerHTML;
console.log(ruta);

if (ruta == null) {

        mostrar.src = "img/usuario.png";


} else if (ruta != null) {
        mostrar.src = "../" + ruta;
}

var portada = document.getElementById('portada');
var plasmar = document.getElementById('visual');
var rut = portada.innerHTML;

if (rut == null) {

        plasmar.style.background = "black no-repeat top center";
        plasmar.style.backgroundSize = "cover";
        plasmar.style.hover = 'black';


} else if (rut != null) {
        plasmar.style.background = "url( ../" + rut + ") no-repeat top center";
        plasmar.style.backgroundSize = "cover";
        plasmar.style.hover = 'black';
}


var Ruta = document.getElementById('perfil');
var icon = document.getElementById('Ucer');
var rut = Ruta.innerHTML;
console.log(rut);

if (rut == null) {

    icon.src = "img/usuario.png";


} else if (rut != null) {
   
    icon.src = "../" +rut;
}



