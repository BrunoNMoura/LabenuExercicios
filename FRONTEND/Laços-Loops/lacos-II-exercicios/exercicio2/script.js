const numero = Number(prompt("digite um número de 1 à 10:"))

const tabuada = [1,2,3,4,5,6,7,8,9,10]

for(let i in tabuada){
    
        console.log(`${numero} x ${i} = ${i * numero}`)
    }
