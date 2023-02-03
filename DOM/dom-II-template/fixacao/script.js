

const input = document.getElementById("meu-input")

const lista = document.getElementById("lista")


const insereItem = (event) =>{
    const ultimoItem = document.createElement('li')
    ultimoItem.innerHTML = input.value
    lista.insertAdjacentElement("beforeend", ultimoItem)
    input.value = ""  
}
