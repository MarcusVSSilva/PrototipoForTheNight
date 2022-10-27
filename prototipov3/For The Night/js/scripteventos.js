"use strict";
/*function salvar(){
    for(let i = 1; i <= 3; i++){
        let data = document.querySelector(`.data${i}`).textContent;
        localStorage.setItem(`data${i}`, data);
        console.log(data);
        let cardd = document.querySelector(`.cardd${i}`);
        localStorage.setItem(`cardd${i}`, cardd);
        console.log(cardd);
    }
};
salvar();*/

let card1 = document.querySelector(".cardd1");
let card2 = document.querySelector(".cardd2");
let card3 = document.querySelector(".cardd3");

card1.addEventListener("click", function(){
    let data = document.querySelector(`.data1`).textContent;
    localStorage.setItem(`data1`, data);
});

card2.addEventListener("click", function(){
    let data = document.querySelector(`.data2`).textContent;
    localStorage.setItem(`data2`, data);
});

card3.addEventListener("click", function(){
    let data = document.querySelector(`.data3`).textContent;
    localStorage.setItem(`data3`, data);
});