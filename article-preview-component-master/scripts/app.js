// Elementos del DOM
const article = document.querySelector(".article");
const btn = document.querySelector(".btn");
// Elementos HTML Creados
const share = document.createElement("DIV");
const triangulo = document.createElement("DIV");
const parrafo = document.createElement("P");
const icnFb = document.createElement("IMG");
const icnTw = document.createElement("IMG");
const icnPn = document.createElement("IMG");
const btnShare = document.createElement("BUTTON");

// Parrafo del DIV Share
parrafo.textContent = "Share";
// icon Facebook
icnFb.src = "images/icon-facebook.svg"
icnFb.alt = "Icono facebook";
// icon Twiteer
icnTw.src = "images/icon-twitter.svg";
icnTw.alt = "Icono Twitter";
// icon pinterest
icnPn.src = "images/icon-pinterest.svg"
icnPn.alt = "Icono Pinterest";

share.classList.add("share"); //Esta clase aplica siempre
triangulo.classList.add("triangulo"); //Para desktop
share.appendChild(triangulo); //Para desktop
share.appendChild(parrafo);
share.appendChild(icnFb);
share.appendChild(icnTw);
share.appendChild(icnPn);

function shareSetSize() {
    if(document.body.clientWidth >= 768) {
        share.classList.remove("shareMobile");
        share.appendChild(triangulo); //Agrega las clases para el modal share en Desktop
        share.classList.add("shareDesktop");
    }
    else {
        triangulo.remove();
        share.classList.remove("shareDesktop");
        share.classList.add("shareMobile");
    }
}
window.addEventListener("DOMContentLoaded", ( ) => {
    shareSetSize();
});
window.addEventListener("resize", ( e ) => {
    shareSetSize();
});
btn.addEventListener("click", () => {
   if(document.querySelector(".share")) { //La clase existe, btn fue apretado y lo borra
        share.remove();
    }
    else {
        article.appendChild(share); //La clase no existe, la agrega
    }
});


