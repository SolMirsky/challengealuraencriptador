const textArea = document.querySelector(".text-area"); //almacena lo que el usuario escribe
const mensaje = document.querySelector(".mensaje");

//e enter
//i imer
//a ai
// o ober
//u ufat

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none" 
}
function encriptar(stringEncriptada){
let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
stringEncriptada = stringEncriptada.toLowerCase()
for(let i = 0; i<matrizCodigo.length; i++){
    if(stringEncriptada.includes(matrizCodigo[i][0])){
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }
}
return stringEncriptada
}
function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value = textoDesencriptado
    textArea.value = "";
}
function desencriptar(stringDesencriptada){
let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
stringDesencriptada = stringDesencriptada.toLowerCase()
for(let i = 0; i<matrizCodigo.length; i++){
    if(stringDesencriptada.includes(matrizCodigo[i][1])){
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
    }
}
return stringDesencriptada
}
/*function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    matrizCodigo.forEach(codigo => {
        let regex = new RegExp(codigo[1], 'g');
        stringDesencriptada = stringDesencriptada.replace(regex, codigo[0]);
    });

    return stringDesencriptada;
}*/
