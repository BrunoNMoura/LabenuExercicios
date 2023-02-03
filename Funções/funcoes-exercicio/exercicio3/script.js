//a)Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).


const somar = (num1,num2) => {
    const resultadoSoma = num1+num2

    return `A soma do número ${num1} com o número ${num2} é igual a ${resultadoSoma}`
}

const divisao = (num1,num2) => {
    const resultadoDivisao = num1/num2

    return `A divisão de ${num1} por ${num2} é ${resultadoDivisao}`
}

const subtracao = (num1,num2) => {
    const resultadosubtracao = num1-num2

    return `A subitração de ${num1} com ${num2} é ${resultadosubtracao}` 
}

const multiplcacao = (num1,num2) => {
    const resultadoMultiplcacao = num1*num2

    return `A multiplicação de ${num1} com ${num2} é igual a ${resultadoMultiplcacao}`
}

//b) Em seguida, fora das funções, receba do usuário dois números e armazene em variáveis.
let numeroAleatorio = Number (prompt("digite um número aleatório"))
let numeroAleatorio2 = Number (prompt("digite um número aleatório"))


//d) Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console.

const retornoSoma = somar (numeroAleatorio,numeroAleatorio2)
const retornoDivisao = divisao (numeroAleatorio,numeroAleatorio2)
const retornoSubtracao = subtracao (numeroAleatorio,numeroAleatorio2)
const retornoMultiplicacao = multiplcacao (numeroAleatorio,numeroAleatorio2)

console.log (retornoSoma)
console.log (retornoDivisao)
console.log (retornoSubtracao)
console.log (retornoMultiplicacao)