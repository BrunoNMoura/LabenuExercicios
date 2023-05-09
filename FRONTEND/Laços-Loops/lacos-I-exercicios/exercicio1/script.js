let comerCoxinhas = prompt("Deseja comer coxinhas?\n\"S\"Para Sim\n\"N\"Para Não.").toUpperCase()

let conta = 0
const valor=2.5

while(comerCoxinhas!=="N"){
    conta=conta+valor
    comerCoxinhas = prompt("Deseja comer mais coxinhas?\n\"S\"Para Sim\n\"N\"Para Não.").toUpperCase()
}
console.log(`O valor total ficou em R$${conta}`)