"use strict";
// máscaras dos inputs
$("#cpf").mask("000.000.000-00");
$("#cel").mask("(00) 00000-0000");
 
// variáveis
let password = document.querySelector("#senha");
let confirm_password = document.querySelector("#confirmar-senha");

let success_box = document.querySelector("#register");
let error_box = document.querySelector("#register-error");

let btn_fechar = document.querySelector("#btn_close_success");
let btn_fechar2 = document.querySelector("#btn_close_error");

// Validar formulário
$('#form').submit(function (e) {
    // validação de senha
    if(password.value != confirm_password.value){
        e.preventDefault();
        alert("Senhas diferentes");
    }else{
        alert("Cadastrado com sucesso!");
    }
});

