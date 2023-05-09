const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó", categoria: "Limpeza", preco: 10.80 }
 ]
 
 const produtoLimpeza = produtos.filter((cadaElemento)=>cadaElemento.categoria==='Limpeza')

 console.log(produtoLimpeza)
 

// Exercícios Extra

 
 const precoProdutos = produtos.filter((cadaElemento)=>cadaElemento.preco > 7)

 console.log("produtos maior que 7 reais R$",precoProdutos)

 const precoProdutosBaixo = produtos.filter((cadaElemento)=>cadaElemento.preco < 7)

 console.log("produtos menor que 7 reais R$",precoProdutosBaixo)

 const nomeProduto = produtos.map((cadaElemento)=>cadaElemento.nome)

 console.log(nomeProduto)

 const nomeEPreco = produtos.map((cadaElemento)=>`O produto ${cadaElemento.nome} custa R$ ${cadaElemento.preco} `)
 console.log(nomeEPreco)

 //Vamos somar o valor total os produtos no array acima.
// Crie uma variavel precoTotal e atribua 0 a ela.
// Utilize o for of para percorrer todos os produtos
// dentro do escopo do for faça a soma para saber o valor total dos produtos

let precoTotal = 0

for (let produto of produtos){
    precoTotal = precoTotal + produto.preco
}
console.log("O preço total ficou R$", precoTotal)