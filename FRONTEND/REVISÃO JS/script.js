
//revisão variaveis

/* const nomeProduto = prompt('Insira seu produto:')

let valorProduto = Number (prompt('Insira o valor do produto:'))

valorProduto = valorProduto-1

console.log(`O produto inserido foi: ${nomeProduto} no valor de R$${valorProduto},00`) */

//******************************************************************************************************************************
//revisão operações

/* let num1 = Number (prompt ('Insira um numero'))

let num2 = Number (prompt ('Insira mais número'))

console.log(`A soma de ${num1} com ${num2} é igual a ${num1+num2}`)
console.log(`A subtração de ${num1} com ${num2} é igual a ${num1-num2}`)
console.log(`A multiplicação de ${num1} com ${num2} é igual a ${num1*num2}`)
console.log(`A divisão de ${num1} com ${num2} é igual a ${num1/num2}`)
console.log(`o resto da divisção de ${num1} pelo ${num2} é igual a ${num1%num2}`) */

//******************************************************************************************************************************
// Revisão comparações

/* let numerAleatorio = Math.floor(Math.random()*10)+1

let numerUsuario = Number(prompt('Insira um número de 1 a 10'))

console.log(`O numero sorteado foi ${numerAleatorio}`)

if(numerUsuario<numerAleatorio){
    console.log('O número inserido é menor')
}else if(numerUsuario>numerAleatorio){
    console.log('O numero inserido é maior')
}else if(numerUsuario===numerAleatorio){
    console.log('O número inserido é igual')
}
 */

//******************************************************************************************************************************
// revisão Operadores lógicos

/* const idade = Number (prompt('Insira sua idade'))

const altura = Number (prompt('Insira sua altura'))

const cardiaco = prompt('Você é cardiaco? Sim ou não').toUpperCase()

if (idade>18 && altura>160 && cardiaco==='NAO'){
    console.log("Você pode entrar no brinquedo")
}else{
    console.log("Infelizmente você não pode entrar")
} */
//******************************************************************************************************************************

// revisão Strings

/* const frase = " Hoje vou comer cenoura, ebaa "

console.log(frase)

console.log(frase.length)

console.log(frase.trim())

console.log(frase.toLowerCase())

//console.log(frase.includes('comer'&&'batata'))
console.log("Tem a palavra batata "+ frase.includes('batata'))
console.log("Tem a palavra comer "+ frase.includes('comer'))

const noveFrase = frase.replaceAll('cenoura','batata')

console.log(noveFrase)
console.log("Tem a palavra batata "+ noveFrase.includes('batata'))
console.log("Tem a palavra comer "+ noveFrase.includes('comer')) */

//******************************************************************************************************************************
//revisão Arrays

/* const lista = ['batata','cenoura','beterraba']

console.log(lista[1])
console.log("Minha lista tem",lista.length,"itens" )
lista.push('mandioca')
console.log(lista)
console.log("tem cenoura",lista.includes('cenoura'))
lista.splice(1,1)
console.log(lista) */

//******************************************************************************************************************************
//revisão Funções

/* const array = [5,10,15,20]

const numeros = (novaArray)=>{
    const primeiro = novaArray[0]/2
    const ultimo = novaArray[novaArray.length-1]/2
   
    novaArray[0]=primeiro
    novaArray[novaArray.length-1]=ultimo
    return novaArray
}

console.log(numeros(array)) */


//******************************************************************************************************************************
//revisão Objetos

/* const pessoa = {
    nome:"Bruno",
    idade:35,
    generoMusical:"MPB"
}

console.log(`O nome da pessoa é ${pessoa.nome}, ela tem ${pessoa.idade} anos e gosta muito de ${pessoa.generoMusical}`)

const novaPessoa = {
    ...pessoa,
    nome:"Danielle"
}

console.log(`O nome da pessoa é ${novaPessoa.nome}, ela tem ${novaPessoa.idade} anos e gosta muito de ${novaPessoa.generoMusical}`) */

//******************************************************************************************************************************
//revisão condicionais

/* const numer = Number (prompt("Insira um número"))

if(numer%2===0){
    console.log('O',numer,'é par')
}else {
    console.log('O', numer,'é impar')
} */

/* const bicho = prompt('Insira o nome de animal').toUpperCase()

switch(bicho){
        case'CACHORRO':
            console.log('Au au')
            break
        case'GATO':
            console.log('Miau')
            break
        case 'VACA':
            console.log("Muuu")
            break
        default:
            console.log('sem barulho reconhecido :(')
            break
        }
 */
//******************************************************************************************************************************
//revisão laços

/* const numeros = [11,15,18,14,120,13,100]

let i = 0
let maior=-Infinity */
/* while (i<numeros.length){
    if(numeros[i]>maior){
        maior=numeros[i]
    }
    i++
} */
/* for(let i =0;i<numeros.length;i++){
    if(numeros[i]>maior){
        maior=numeros[i]
    }
} */

/* for(let numero of numeros){
    if(numero>maior){
        maior=numero
    }
} */

//console.log(`O maior número é ${maior}`)

//laços 2

/* const prof = {
    nome:"Bruno Moura",
    idade:35,
    aulasCiências: true,
    aulasFullStek: false,
    jogosFavoritos: ["mario bros", "need for speed","pac man"],
    contaPiada: () => console.log("É pave ou come?"),
    pet:{
        nome:"Carpa",
        especie: "Peixe",
        raca:"Carpa Japonesa",
        racaoFavorita: ["larva","ração","mosquito"]
    }
}

const verificaAula = (aula) => {
    if (aula){
        return "Dou"
    }else {
        return "Não dou"
    }
}

const aulasCiências = verificaAula (prof.aulasCiências)
const aulasFullSteck = verificaAula (prof.aulasFullStek)

const jogos = []

for (let i =1;i<= prof.jogosFavoritos.length;i++){
    jogos.push(`${i}) ${prof.jogosFavoritos[i-1]}`)
}

console.log(jogos)

const frase = `Oi! Eu me chamo ${prof.nome} e tenho ${prof.idade} anos. ${aulasCiências} aulas de ciências e ${aulasFullSteck} aulas fullSteck.
Meus jogos favoritos são: ${jogos}
Tenho um ${prof.pet.especie} chamado ${prof.pet.nome} que gosta de comer ${prof.pet.racaoFavorita[1]}
`
console.log(frase)

prof.contaPiada()
 */

//******************************************************************************************************************************
//revisão map filter

/* const produtos = [
    {nome:"Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    {nome:"Guaraná 21", categoria: "Bebida", preco: 7.8 },
    {nome:"Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    {nome:"Duzia de banana", categoria: "Hortifruti", preco: 5.7 },
    {nome:"Leite", categoria: "Bebida", preco: 2.99 },
    {nome:"Cândida", categoria: "Limpeza", preco: 3.3 },
    {nome:"Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    {nome:"Vinho Tinto", categoria: "Bebida", preco: 55 },
    {nome:"Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    {nome:"Sabão em Pó", categoria: "Limpeza", preco: 10.8 }
]

const novoProduto = produtos.map((produto) => {
    return {...produto,preco: (produto.preco*0.9).toFixed(2)}
})
console.log(novoProduto)
const apenasHortifruti = produtos.filter((produto)=>{
    return produto.categoria==="Hortifruti"
})
console.log(apenasHortifruti)

const hortifruitiComDez = produtos.filter((produto)=>{
    return produto.categoria === "Hortifruti" 
}).map((produto) => {
    return {...produto,preco: (produto.preco*0.9).toFixed(2)}
})

console.log(hortifruitiComDez) */

