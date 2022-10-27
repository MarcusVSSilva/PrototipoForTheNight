/*"use strict";
let radioBtns = document.querySelectorAll("input[name='radio']");
let btn = document.querySelector("#go");
btn.addEventListener("click", function(){
    console.log();
});
let qtde = localStorage.getItem("value");
let conteudo = document.querySelector(".qtd");
let valor_resumo = document.querySelector(".valor_resumo");
let valor_ingresso = qtde * 70.00;
let divisao = document.querySelector(".divisao");

conteudo.innerHTML = qtde;
valor_resumo.innerHTML = `R$ ${(qtde * 70.00).toFixed(2)}`;
divisao.innerHTML = `R$ ${(valor_ingresso / 5).toFixed(2)}`;

let desconto_pix = document.querySelector(".valor_pix");
desconto_pix.innerHTML = `R$${(valor_ingresso - valor_ingresso * 0.15).toFixed(2)}`;

let valor_economize = document.querySelector(".valor_economize");
valor_economize.innerHTML = `R$${(valor_ingresso * 0.15).toFixed(2)}`*/