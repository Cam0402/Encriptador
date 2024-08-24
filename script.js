const texArea = document.querySelector(".text-area");
const areaMensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    let imagen= document.querySelector(".img");
    let subtitulo= document.querySelector("#tituloMensaje");
    let textoEncriptado = encriptador(texArea.value);
    areaMensaje.value = textoEncriptado;
    texArea.value ="";

    if (areaMensaje.value.trim() !== "") {
            imagen.style.display = 'none';
            subtitulo.style.display = 'none';
         } else {
            imagen.style.display = 'block';
            subtitulo.style.display = 'block';
        }
}

function encriptador(stringEncriptada){
    let codigo = [{"e":"enter"},{"i":"imes"},{"a":"ai"},{"o":"ober"},{"u":"ufat"}];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < codigo.length; i++){
        let clave = Object.keys(codigo[i])[0];
        let valor = codigo[i][clave];
        if(stringEncriptada.includes(clave)){
            stringEncriptada = stringEncriptada.replaceAll(clave,valor)

        }
    }
    return stringEncriptada;
}

function btnDesencriptar(){
    let textoEncriptado = Desencriptador(texArea.value);
    areaMensaje.value = textoEncriptado;
    texArea.value ="";
}

function Desencriptador(stringDesencriptada){
    let codigo = [{"enter":"e"},{"imes":"i"},{"ai":"a"},{"ober":"o"},{"ufat":"u"}];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < codigo.length; i++){
        let clave = Object.keys(codigo[i])[0];
        let valor = codigo[i][clave];
        if(stringDesencriptada.includes(clave)){
            stringDesencriptada = stringDesencriptada.replaceAll(clave,valor)

        }
    }
    return stringDesencriptada;

}

function copiarTexto() {
    let copiar = document.querySelector('#mensaje').value;
    navigator.clipboard.writeText(copiar).then(() => {
        console.log("Texto copiado con éxito.");
    }).catch(err => {
        console.error("Error al copiar el texto: ", err);
    });
}


