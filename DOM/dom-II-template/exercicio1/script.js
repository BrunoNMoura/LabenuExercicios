/* const lista = document.getElementById("lista")

const primeiroItem = document.createElement("li")

const texto0 = document.createTextNode("Item 0")

console.log(primeiroItem)
primeiroItem.appendChild(texto0)

lista.insertAdjacentElement('afterbegin', primeiroItem) */

//outra forma de fazer

const lista = document.getElementById("lista")
const primeiroItem = document.createElement("li")
primeiroItem.innerHTML = "Item 0"
lista.insertAdjacentElement('afterbegin', primeiroItem)

//item 5 

const ultimoItem = document.createElement('li')

const text5 = document.createTextNode ('Item 5')

ultimoItem.appendChild(text5)
lista.insertAdjacentElement('beforeend', ultimoItem)
