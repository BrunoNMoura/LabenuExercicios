//a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

const digaOla = (nome) => {
    return `Olá ${nome}`
}

console.log(digaOla("Bruno"))

//b) Declare uma função que receba um número como parâmetro imprima no console a tabuada do dele. Chame esta função várias vezes com números diferentes.

const tabuada = (num) =>{
    const numer1 = num*1
    const numer2 = num*2
    const numer3 = num*3
    const numer4 = num*4
    const numer5 = num*5
    const numer6 = num*6
    const numer7 = num*7
    const numer8 = num*8
    const numer9 = num*9
    const numer10 = num*10
        
    return `A tabuada do número ${num}: 
    ${num} X 1 = ${numer1}
    ${num} X 2 = ${numer2}
    ${num} X 3 = ${numer3}
    ${num} X 4 = ${numer4}
    ${num} X 5 = ${numer5}
    ${num} X 6 = ${numer6}
    ${num} X 7 = ${numer7}
    ${num} X 8 = ${numer8} 
    ${num} X 9 = ${numer9}
    ${num} X 10 = ${numer10}`
}

console.log(tabuada(2))

//c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 