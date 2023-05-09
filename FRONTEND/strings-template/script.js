/* const nome = prompt("Qual seu nome?")
const cor = prompt ("Qual sua cor favorita?")

const frase = "A cor favorita do " + nome + " é " + cor  

console.log(frase)

console.log(`A cor favorita do ${nome} é ${cor}`)


const citacao = prompt ("Escreva uma citação")

const fraseCitacao = "\""+citacao + "\" "
console.log(fraseCitacao)

console.log (`Nome: ${nome} \nCor Favorita: ${cor}`)

console.log(`Nome: ${nome.toUpperCase()}\nCor favorita: ${cor.toLowerCase()}`)

console.log(nome.length)
console.log(nome.includes('a'))


/* toUpperCase() const priMaiuscula=(minhaString)=>{
    const primeiraLetra=minhaString[0].toUpperCase()
    const resto=minhaString.substring(1).toLowerCase()
    return primeiraLetra+resto
}\* */


const nome = prompt ("Qual seu nome?")
const email = prompt ("Qual seu e-mail?")

const fraseCriada = "O e-mail " +email+ " foi cadastrado com sucesso. Boas Vindas " + nome
console.log(fraseCriada)

console.log(nome.length)

const novaFrase =fraseCriada.replaceAll("r","l")

console.log(novaFrase)

console.log(email.includes("@"))



