const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");
const copy = document.querySelector(".copy");


function btnEncriptar() {
  const textoEncriptado = encriptar(inputTexto.value)
  mensagem.value = textoEncriptado
  mensagem.style.backgroundImage="none"
  copy.style.display="flex"
}


function encriptar(stringEncriptada) {
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringEncriptada = stringEncriptada.toLowerCase();

  for(let i=0; i < matrizCodigo.length; i++) {
    if(stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }
  }

  return stringEncriptada
}

function btnDesencriptar() {
  const textoEncriptado = desencriptar(inputTexto.value)
  mensagem.value = textoEncriptado
  mensagem.style.backgroundImage="none"
  copy.style.display="flex"
}


function desencriptar(stringEncriptada) {
  let matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
  stringEncriptada = stringEncriptada.toLowerCase();

  for(let i=0; i < matrizCodigo.length; i++) {
    if(stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }
  }

  return stringEncriptada
}


function botaoCopiar() {

  if(mensagem.value == "") {
    mensagem.placeholder = "Nenhuma mensagem foi encontrada";
    mensagem.style.backgroundImage = "none";
  } else {
    navigator.clipboard.writeText(mensagem.value);
    mensagem.value = "";
    inputTexto.value = "";
    mensagem.placeholder = "Texto copiado com sucesso";
    inputTexto.placeholder = "Cole seu texto aqui"
  }
}