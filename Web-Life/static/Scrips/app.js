$(document).ready(llamar);
$(document).ready(cambiar);



function cambiar() {
    $('.im2').click(function () {
        console.log("funciona");

        $('.as').click();

    });
};



function llamar() {
    $('.im').click(function () {
        console.log("funciona");

        $('.as').click();

    });
};


function correr() {
    var imageUploader = document.getElementById('inmg-uploader');
    var imgV = document.getElementById('visual');
    var Ruta = imageUploader.value;
    var extPermitidos = /(.png|.jpg)$/i;

    document.getElementById('1').style.display = 'none';
    document.getElementById('2').style.display = 'block';
    document.getElementById('2').style.position = 'absolute';
    document.getElementById('3').style.display = 'block';
    document.getElementById('3').style.float = 'right';
    document.getElementById('3').style.position = 'absolute';
    document.getElementById('2').style.top = '5%';
    document.getElementById('3').style.top = '5%';
    document.getElementById('2').style.right = '60%';
    document.getElementById('3').style.right = '20%';

    if (!extPermitidos.exec(Ruta)) {
        alert('Selecciona una imagen');
        imageUploader = 0;
        return false;
    }
    else {
        if (imageUploader.files && imageUploader.files[0]) {
            var visor = new FileReader();
            visor.onload = function (e) {
                imgV.src = e.target.result;
                

            };
            visor.readAsDataURL(imageUploader.files[0]);
        }
    }

}


