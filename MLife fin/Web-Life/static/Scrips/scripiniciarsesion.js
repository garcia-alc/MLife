$(document).ready(validar_usuario);




function validar_usuario(){
var correo = document.getElementById("email").value;
var contr = document.getElementById("con").value;

    $('.entrar').click(function(){

        if(document.getElementById("email").value == ""){
            document.getElementById("email").focus();
        }else if(document.getElementById("con").value == ""){
            document.getElementById("con").focus();

        }else if(correo != "" && contr != ""){
            document.getElementById("email") = "";
            document.getElementById("con") = "";
        }

    });
}