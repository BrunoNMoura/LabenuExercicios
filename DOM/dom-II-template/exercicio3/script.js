

const paragrafo = document.getElementById("mensagem")

const checaCaps = (event) => {

   /*  if(event.key === "Shift"){
        paragrafo.innerHTML = 'Segurou o Shift'
    }else {
        paragrafo.innerHTML = ""
    } */

    event.key === "Shift"
    ? paragrafo.innerHTML = 'Segurou o shift'
    : paragrafo.innerHTML = ""
}