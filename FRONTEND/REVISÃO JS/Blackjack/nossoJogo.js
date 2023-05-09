/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
    const cartas = comprarCarta()
    const usuario = (rodada)=>{
      confirm(`Deseja iniciar a rodada`)
      if(true){
         rodada = cartas
         for(i=0;i<rodada;i++){
         console.log(rodada)
         confirm(`Deseja iniciar uma nova rodada`)
         }
      }else if(rodada<21){
         
      }

      }
   }
    
    
    
    const computador = cartas
    
    console.log(usuario)
    console.log(computador)