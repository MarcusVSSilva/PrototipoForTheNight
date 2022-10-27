"use strict";
const url = "../comprar.html";
const btn = document.querySelector("#btn_comprar");

function openInNewTab(url) {
    const win = window.open(url,'_blank');
}
btn.addEventListener("click", () =>{
    openInNewTab(url);
});

function updateSelect(){
    let valor = document.querySelector(".ipt_ing");
    let select = document.querySelector(".numero_qtd");
    let optionValue = select.options[select.selectedIndex];

    let value = optionValue.value;
    localStorage.setItem("value", value);

    for (let i = 1; i <= 4; i++){
        if (value == i) {
            valor.value = (70.00 * i).toFixed(2);
        }
    }
}

updateSelect();