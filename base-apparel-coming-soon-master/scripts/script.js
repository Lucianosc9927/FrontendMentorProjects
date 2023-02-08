const input = document.querySelector("#input");
const boton = document.querySelector("#button");
const formulario = document.querySelector("#formulario__content");
let email = "";

// eventos
input.addEventListener("input", leerTexto);
boton.addEventListener("click", checkInput);

function leerTexto(e) {
    email = e.target.value;
}
function checkInput(e) {
    e.preventDefault();
    // validar formulario
    if(!email.includes("@") || email === "") {
        mostrarError();
    }
}

function mostrarError() {
    // icono de error
    const imgError = document.createElement("IMG");
    imgError.src = "/images/icon-error.svg";
    imgError.alt = "error icon";
    imgError.classList.add("imgError");
    // mensaje de error
    const textError = document.createElement("P");
    textError.textContent = "! Please provide a valid email ¡";
    textError.classList.add("text-error");
    // modificando el border del input
    input.classList.add("border-error");
    // agregandolo al html
    formulario.appendChild(imgError);
    formulario.appendChild(textError);
    formulario.classList.add("animation");
    setTimeout(() => {
        imgError.remove();
        textError.remove();
        input.classList.remove("border-error");
        formulario.classList.remove("animation");
    }, 2000);
}

