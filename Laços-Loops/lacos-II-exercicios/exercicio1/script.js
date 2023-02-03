const array = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
]

/* for (let i = 0; i<array.length;i++){
    console.log(`Jogador ${i+1}: ${array[i]}`)
}
 */
for(let i in array){
    let jogador =`Jogador ${(Number(i)+1)}`
    for (let valor of array){
        valor=
    }
}

// Vamos criar um jogo de adivinhar
// ao iniciar a rodada o jogo deve perguntar se o usuário deseja iniciar uma rodada
// o jogo deve conter um numero e o usuário deve adivinhar esse número, se o número do usuário for menor
// o jogo deve perguntar se desejar somar 5
// se for maior o jogo deve perguntar se desejar subtrair 2
// se o usuário não acertar o número, o sistema deve perguntar se ele deseja continuar
// quando o usuário acertar informar que acertou e sair do jogo

//NÚMEROS ALEATÓRIOS CÓDIGO ABAIXO
//let randomico = Math.floor(Math.random()*100)


/* let novaRodada = confirm('Deseja iniciar uma nova rodada?')

if(novaRodada){
    
    let sair = 'c'
    const numeroSorteado=50
    let numeroDaSorte =Number( prompt('Informe um número'))
    while(sair !=='s'){
        if(numeroDaSorte< numeroSorteado){
            const maisCinco=confirm('Seu numero é menor, deseja somar 5 ?')
            if(maisCinco){
                numeroDaSorte += 5
                console.log('Seu número é:', numeroDaSorte)
            }
        }else if(numeroDaSorte>numeroSorteado){
            const menosDois = confirm('Seu número é maior, deseja subtrair 2 ?')
            if(menosDois){
                numeroDaSorte -= 2
                console.log('Seu número é:', numeroDaSorte)
            }
        }
        if(numeroDaSorte !== numeroSorteado){
            console.log('Infelizmente voçê não acertou. Tente novamente')
            sair=prompt(`Seu numero é ${numeroDaSorte} Digite S para sair e C para continuar`).toLowerCase()
        }else{
            console.log('PARABÉNS VOÇÊ ACERTOU!')
            console.log('Fim do Jogo!')
            sair = 's'
        }
        
    }
}else{
    console.log('Jogo encerrado!')
} */