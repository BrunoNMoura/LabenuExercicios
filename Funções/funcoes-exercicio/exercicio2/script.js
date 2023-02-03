
//a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.
const somasNumeros = (num1,num2) => {
    const resultadoSoma = num1+num2
    
    return `A soma dos número é ${resultadoSoma}`
}

console.log(somasNumeros(1,3))

//b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

const comparacao = (nume1,nume2) => {
    const resultadoCompa = nume1 >= nume2

    return `O número ${nume1} é maior ou igual ao ${nume2}? ${resultadoCompa}`
}

console.log(comparacao(8,9))

//c) Uma função que receba um número e imprima no console um boleano informando se o número é par ou não.

const numeroEPar = (numer) => {
    const restoDaDivisao = numer% 2
    const verificacaoPar = restoDaDivisao === 0

    return `O numero ${numer} é par?${verificacaoPar}`
}

console.log(numeroEPar(2))

//d) Uma função que receba um valor de salário e retorne o valor com o desconto 10% referente ao INSS.  

const salario = (valor) => {
    const descontoInss = valor*0.9

    return `O salário de R$ ${valor} com o desconto de 10% do INSS fica R$ ${descontoInss} reais`
}

console.log(salario(3000))

const array = [5,"cinco",true]
console.log(array.length)