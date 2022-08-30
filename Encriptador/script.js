const ingresaTexto = document.querySelector(".ingresaTexto")
const mensaje = document.querySelector(".mensaje")

function botonEncriptar(){
    const textoEncriptado = encriptar(ingresaTexto.value)
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    ingresaTexto.value = "";
}

function encriptar(fraseEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    fraseEncriptada = fraseEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(fraseEncriptada.includes(matrizCodigo[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return fraseEncriptada;
}

function botonDesencriptar(){
    const textoDesencriptado = desencriptar(ingresaTexto.value)
    mensaje.value = textoDesencriptado;
    mensaje.style.backgroundImage = "none";
    ingresaTexto.value = "";
}

function desencriptar(fraseDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    fraseDesencriptada = fraseDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(fraseDesencriptada.includes(matrizCodigo[i][1])){
            fraseDesencriptada = fraseDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return fraseDesencriptada;
}

function copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = ""
    alert("Texto copiado")
}