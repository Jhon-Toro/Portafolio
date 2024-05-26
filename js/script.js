document.addEventListener("DOMContentLoaded", function() {
    const logo = document.getElementById("logo");
    const user = document.getElementById("user");
    const minibarra = document.querySelector(".nav-lateral");
    const spans = document.querySelectorAll("span");
    const circulo = document.querySelector(".circulo");
    const icono = document.getElementById("icono");
    const dark = document.querySelector(".modo-oscuro");
    const icono2 = document.querySelector(".toggle-menu");
    const menu = document.querySelectorAll(".menu");
    const main = document.querySelector("main");
    const body = document.body;




    minibarra.classList.toggle("mini-nav");
    menu.forEach(item => {
        item.addEventListener("click", () => {
            toggleMenu();
            flecha();
        });
    });

    function flecha() {
        if (icono.getAttribute("name") === "chevron-back-outline") {
            icono.setAttribute("name", "chevron-forward-outline");
        } else {
            icono.setAttribute("name", "chevron-back-outline");
        }
    }

    function darkmode() {
        body.classList.toggle("dark-mode");
        body.classList.toggle("dark-mode1"); 
        circulo.classList.toggle("prendido");

        const isDarkModeEnabled = body.classList.contains("dark-mode");
        localStorage.setItem("darkModeEnabled", isDarkModeEnabled);
    }

    const isDarkModeEnabled = localStorage.getItem("darkModeEnabled") === "true";
    if (isDarkModeEnabled) {
        darkmode();
    }

    dark.addEventListener("click", () => {
        darkmode();
    });

    function toggleMenu() {  
        minibarra.classList.toggle("mini-nav");
        spans.forEach((span) => {
            span.classList.toggle("oculto");
        });
        main.classList.toggle("min-main");
        if(window.innerWidth<=700){
            barraLateral.classList.add("mini-barra-lateral");
            main.classList.add("min-main");
            spans.forEach((span)=>{
                span.classList.add("oculto");
            })
        }
    }
    logo.addEventListener("click", () => {
        toggleMenu();
        flecha();
    });
    user.addEventListener("click", () => {
        toggleMenu();
        flecha();
    });
    icono2.addEventListener("click", () => {
        toggleMenu();
        flecha();
    });
    
});
