"use strict";
let btn = document.querySelector("#btn_comprar");
let id_evento = document.querySelector("#id_evento");
btn.addEventListener("click", function(){
    localStorage.setItem('id_evento', id_evento.textContent);
});
