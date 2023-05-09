const estudante = {
    nome: "Bruno",
    sobrenome: "Moura",
    numerMatricula: 1234,
    notasSemestre:[10,8,10]
}

estudante.modulo = "javaScript"

//console.log(estudante.nome)
//console.log(estudante.notasSemestre[1])
//console.log(estudante.modulo)

const copiaEstudante = {
    ...estudante,
    nome:"Astrodev",
    notasSemestre:[...estudante.notasSemestre, 9],
    modulo: "HTML"
}
//console.log(copiaEstudante)
const estudantesLabenu = [estudante,copiaEstudante]

//console.log(estudantesLabenu)
//console.log(estudantesLabenu[1].nome)


const carrinho = {
    nome:"Bruno",
    pagamento:"dinheiro",
    endereço:"Rua Nazaré da Mota,50",
    
}

carrinho.compras =[
    {
        nome:"Melancia",
        preco:40.00,
        quantidade:1
    },
    {
        nome:"morango",
        preco:5.00,
        quantidade:1
    }   

]
console.log(carrinho)
console.log(carrinho.compras.length)

const carrinhPresent = {
    ...carrinho,
    nome:"Daniele",
    pagamento:"cartão presente"
}

console.log(carrinhPresent)