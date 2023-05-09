

/* const resultado1=[2,4,6,8]
const resultado2=[1,3,5,7]
const resultado3=[0,8,10,12]
const resultado4=[9,11,13,15]

const megaSena=[resultado1, resultado2, resultado3, resultado4] */
//console.log(megaSena)
/* if(megaSena.length===4){

  for(let i=0;i<megaSena.length; i++){
    for(let j=0;j<megaSena[i].length; j++){
      console.log(`sorteio ${i+1}: ${megaSena[i][j]} `)
    }
    
  }

}else{
  console.log("É necessáio alterar o número de itens de array")  
}
 */
//console.log(megaSena)

/* const obj = {
  nome:'Bruno',
  idade:35,
  altura:'180'
} */

/* for(let prop in megaSena){
  console.log(prop)
} */

/*  if(megaSena.length===4){

  for(let i in megaSena){
    for(let j of megaSena[i]){
      console.log(`sorteio ${Number(i)+1}: ${megaSena[i]} `)
    }
    
  }

}else{
  console.log("É necessáio alterar o número de itens de array")  
}   */

/* const novoArray=['Bruno','Danielle','Heitor','Arthur']
console.log(novoArray)

for(let i of novoArray){
  console.log(i)
} */




const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

/* for(let i=0;i<filmes.length;i++){
  //console.log(filmes[i].titulo,filmes[i].ano, filmes[i].diretor)
  for(let j=0; j<filmes[i].elenco.length; j++){
    console.log(`Tem no elenco ${filmes[i].elenco}`)
  }
} 
 */
for(let prop in filmes){
  console.log(`${filmes[prop].titulo}, ${filmes[prop].ano},${filmes[prop].diretor}`)
  for (let valor of filmes[prop].elenco){
    //console.log(`Tem no elenco: ${filmes[prop].elenco}`)
    console.log(`Tem no elenco ${valor}`)
  }
}