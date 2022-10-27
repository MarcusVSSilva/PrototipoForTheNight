"use strict";
const pix = document.querySelector("#pix");
const visa = document.querySelector("#visa");
const boleto = document.querySelector("#boleto");
const mastercard = document.querySelector("#mastercard");

function atualizar(){
    if(pix.checked == true){
        console.log("pix");
    }

    if(boleto.checked == true){
        console.log("boleto");
    }

    if(visa.checked == true){
        console.log("visa");
    }

    if(mastercard.checked == true){
        let master = document.querySelector(".payment-data");
        master.classList.remove("inactive");
    }else if(mastercard.checked == false){
        let master = document.querySelector(".payment-data");
        master.classList.add("inactive");
    }
}
setInterval(atualizar, 500);