
const input = document.getElementById("password")
const btn = document.getElementById("btnSenha")
let troca = true


function escondeSenha(event) {
    event.preventDefault()
    if (troca) {
        input.setAttribute('type', 'password')
        btn.innerHTML = "mostrar senha"
        troca = false
    } else {        input.setAttribute('type', 'text')
    btn.innerHTML = 'esconder senha'
    troca = true
    }
}


/* function escondeSenha(event){

    if()
    event.preventDefault() 
    input.setAttribute('type', 'password')
} */

const form = document.getElementsByTagName('form')

/* form[0].setAttribute('class', 'dark') */