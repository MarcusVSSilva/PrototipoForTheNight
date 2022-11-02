"use strict";

// Variáveis
let email = document.querySelector("#email");
let senha = document.querySelector("#senha");

if(email == 'admin@admin' && senha == 'admin'){
    window.location.href = "http://localhost:3000/admin";
}