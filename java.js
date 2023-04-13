function validarInput(input) {
    let caracteresEspeciales = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
    let mayusculas = /[A-Z]/g;
    let vacio = "";

    if (input.match(mayusculas) || input.match(caracteresEspeciales)) {
        alert("No se permiten caracteres especiales ni mayúsculas");
        return true;
    } else if (input == vacio) {
        alert("Ingrese un mensaje para encriptar");
        return true;
    } else {
        return false;
    }
}

let btnEncriptar = document.querySelector("#btn-encriptar");

btnEncriptar.addEventListener("click", function() {
    let inputTexto = document.querySelector("#input-texto").value;
    let textoIngresado = inputTexto;

    if (validarInput(textoIngresado) == false) {
        let encriptado = encriptarTexto(textoIngresado);
        let resultado = document.querySelector("#msg");
        document.querySelector("#input-texto").value = "";
        resultado.value = encriptado;
    } else {
        inputTexto = "";
    }
});

const reglasEncriptado = { "e": "enter", "i": "imes", "a": "ai", "o": "ober", "u": "ufat" };

function encriptarTexto(textoIngresado) {
    let encriptado = "";
    for (const obj in reglasEncriptado) {
        encriptado = textoIngresado.replaceAll(obj, reglasEncriptado[obj]);
        textoIngresado = encriptado;
    }
    return encriptado;
}

let btnCopiar = document.querySelector("#btn-copy");

btnCopiar.addEventListener("click", function() {
    let copiado = document.querySelector("#msg").value;
    navigator.clipboard.writeText(copiado);
    document.querySelector("#input-texto").value = "";
    document.querySelector("#msg").value = "";
});

let btnDesencriptar = document.querySelector("#btn-desencriptar");

btnDesencriptar.addEventListener("click", function() {
    let textoIngresado = document.querySelector("#input-texto").value;
    let desencriptado = desencriptarTexto(textoIngresado);

    let resultado = document.querySelector("#msg");
    resultado.value = desencriptado;
    document.querySelector("#input-texto").value = "";
});

function desencriptarTexto(textoIngresado) {
    let desencriptado = "";
    for (const obj in reglasEncriptado) {
        desencriptado = textoIngresado.replaceAll(reglasEncriptado[obj], obj);
        textoIngresado = desencriptado;
    }
    return desencriptado;
}
