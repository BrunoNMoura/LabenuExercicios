// arrow function

const imprimirNome = (nome) => {
    console.log ("ola",nome)
}

imprimirNome ("Ozemela")
imprimirNome ("Bruno")
imprimirNome ("Moura")

const imprimirNome2 = (nome2) => {
    return `Olá ${nome2}`
}

console.log (imprimirNome2 ("Danielle"))


const numeroPar = (num) => {
    const par = num%2
    const verificaPar = par === 0
    const soma = num + 10
    const mult = num * num
    return `O número ${num} é par?${verificaPar}. Somando com 10 o resultado é ${soma} e multiplicado por ele mesmo é ${mult}`
}

const resultado = numeroPar(2)

console.log(resultado)

const numeroPar2 = function (num){
    const par = num%2
    const verificaPar = par === 0
    const soma = num + 10
    const mult = num * num
    return `O número ${num} é par?${verificaPar}. Somando com 10 o resultado é ${soma} e multiplicado por ele mesmo é ${mult}`

}
const resultado2 = numeroPar2(3)

console.log(resultado2)

/* const loginUsuario = prompt("")
const senhaUsuario = prompt("")
 */


const autenticador = (login, senha) => {
    const loguinArmaenado = "Brunomoura"
    const senhaArmazenada = "1234"

    const loginVerificado = loguinArmaenado === login
    const senhaVerificada = senhaArmazenada === senha

    const logar = loginVerificado && senhaVerificada

    return logar

}

console.log(autenticador("Brunomoura","1234"))
//console.log("login", autenticador(loginUsuario, senhaUsuario)


const idade = (nome3, anoNascimento, anoAtual) => {
    const idadeAtual = anoAtual - anoNascimento;
    const verificacao = idadeAtual >= 18;
    return `${nome3} é maior de idade? ${verificacao}`;
}

console.log(idade("Bruno", 1986, 2022));
console.log(idade("Heitor", 2011, 2022));