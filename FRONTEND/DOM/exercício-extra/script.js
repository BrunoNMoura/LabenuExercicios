const input = document.getElementById("input")
console.log(input.value)

const lista = document.getElementById("lista")
console.log(lista)

const addTarefas = () => {
    if (!input.value){
        swal({
            title: "O campo não pode estar vazio!",
            icon: "error",
          });
        return
    } else if(!isNaN(input.value)){
        swal({
            title: "Não adicione números!",
            icon: "error",
          });
        return
    }
    lista.innerHTML += "<li>"+input.value + "</li>"
    input.value = ""    
}