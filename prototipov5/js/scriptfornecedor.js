"use strict";
$('#cnpj').mask('00.000.000/0000-00');
$('#cep').mask('00000-000');
$('#celular').mask('(00) 00000-0000');

$('#form').submit(function (e) {
    // validação de senha
    if(e.submit){
        alert("Cadastrado com sucesso!");
    }
});