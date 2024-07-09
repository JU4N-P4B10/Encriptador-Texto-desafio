function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
        .replace(/a/gi, "alt") //En esta parte del codigo coloque "alt" reemplazando al "ai"//
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    
    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto Encriptado con éxito";
        parrafo.textContent = "";
        muñeco.src="./img/icono.jpeg";
    }   
     else {
        tituloMensaje.textContent = "Ningun Mensaje Encontrado";
        parrafo.textContent = "Ingrese el texto que deseas encriptar o desencriptar";
        muñeco.src="./img/muñeco3.jpg";
        swal("Ooops!", "Debes ingresar algun texto", "Warning");
    }

}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");


    let textoCifrado = texto
        .replace(/alt/gi, "a") //En esta parte del codigo coloque "alt" reemplazando al "ai"//
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto Desencriptado con éxito";
        parrafo.textContent = "";
        muñeco.src="./img/muñeco2.1.jpg";
    }   
    else {
        tituloMensaje.textContent = "Ningun Mensaje Encontrado";
        parrafo.textContent = "Ingrese el texto que deseas encriptar o desencriptar";
        muñeco.src="./img/muñeco3.jpg";
        swal("Ooops!", "Debes ingresar algun texto", "Warning");
    }
    
}