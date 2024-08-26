const textArea = document.querySelector(".textarea");
const mensaje = document.querySelector(".mensaje");

console.log(textArea);
/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function botonEncriptar() {
  const textoEncriptado= encriptar(textArea.value);
  mensaje.value= textoEncriptado;
  textArea.value="";
  mensaje.style.backgroundImage="none";
}

function encriptar(stringEncriptado) {

  let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    
  for (let i =0 ; i < matrizCodigo.length; i++){
    
    if (stringEncriptado.includes(matrizCodigo[i][0])) {
      
      stringEncriptado= stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
  
    }
    
  }

  return stringEncriptado;
}

function botonDesencriptar() {
  const textoEncriptado= desEncriptar(textArea.value);
  mensaje.value= textoEncriptado;
  textArea.value="";
  mensaje.style.backgroundImage="none";
 
}

function desEncriptar(stringDesencriptado) {

  let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    
  for (let i =0 ; i < matrizCodigo.length; i++){
    
    if (stringDesencriptado.includes(matrizCodigo[i][1])) {
      
      stringDesencriptado= stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
  
    }
    
  }

  return stringDesencriptado;
}


function copiarTexto() {
  navigator.clipboard.writeText(mensaje.value);
}












