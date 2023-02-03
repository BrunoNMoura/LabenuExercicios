const frutas = ["laranja", "limão", "uva"];

const lista = document.getElementById("lista-de-frutas")
console.log(lista.innerHTML)

const fruta1 = document.getElementById("fruta-1")
console.log(fruta1.innerHTML)
fruta1.innerHTML = frutas[0]

const fruta2 = document.getElementById("fruta-2")
console.log(fruta2.innerHTML)
fruta2.innerHTML = frutas[1]

const fruta3 = document.getElementById("fruta-3")
console.log(fruta3.innerHTML)
fruta3.innerHTML = frutas[2]

const fruta4 = document.getElementById("fruta-4")
console.log(fruta4.innerHTML)
fruta4.innerHTML

const inputFruta = document.getElementById("fruta")
console.log(inputFruta.value)


const adicionarFruta = function (){
    fruta4.innerHTML = inputFruta.value
    inputFruta.value = ""
}
console.log(lista.innerHTML)


//comando para funcionar quando o usuário apertar enter.

/* const input = document.querySelector("#my-input");
input.addEventListener("keyup", ({key}) => {
    if (key === "Enter") {
        console.log("Ativou o Enter!")
    }
}) */
