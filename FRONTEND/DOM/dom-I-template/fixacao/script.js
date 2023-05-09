

const novoValor = document.getElementById("paragrafo")
console.log(novoValor.innerHTML)

const textoInput = document.getElementById("texto")
console.log(textoInput.value)

const imprimirValor = function () {
    console.log(document.getElementById("texto").value)
}

const alterarNome = function () {
    novoValor.innerHTML = textoInput.value
    textoInput.value = ""
}

