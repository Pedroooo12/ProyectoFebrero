"use strict"
window.addEventListener('load', () => {
    const iconoMenu = document.querySelector(".icono-menu");

    const menu = document.querySelector("#menu");

    const main = document.querySelector(".main");

    const header = document.querySelector(".header");

    iconoMenu.addEventListener("click", (e) => {

        //Alternamos estilos para el menu y body.
        menu.classList.toggle("active");

        if( menu.classList.toggle("active") == true){
            menu.classList.toggle("active");
            header.style.marginBottom = "250px";
            header.style.transition = "all 350ms linear";
        }else{
            menu.classList.toggle("active");
            header.style.marginBottom = "0px";
        }
    })
});