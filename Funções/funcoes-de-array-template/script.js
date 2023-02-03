

//const arrayNumeros = [3, 8, 4, 5, 7, 10, 20, 2]

 const multiplicarPorTres = (array) => {
  const novoArray = []
  for (element of array) {
    novoArray.push(element * 3)
  }
  return novoArray
}
//console.log(multiplicarPorTres(arrayNumeros))  

 const retornarPar = (arr) => {

    const novoArray = []
    for (element of arr){

        if(element%2===0){
            novoArray.push(element)
        }
    }

    return novoArray
}

//console.log(retornarPar(arrayNumeros))
 
const imprimir = (callBack, array) =>{
  const resultado = callBack(array)
  console.log(resultado)
}

//imprimir(multiplicarPorTres, arrayNumeros)

//callback:

/* const somar = (num)=>{
  return 10+2
}

const imprimirNoConsole = (funcao)=>{
  console.log(funcao)
}

imprimirNoConsole(somar()) */



//MAP()

const arrayNumeros = [3, 8, 4, 5, 7, 10, 20, 2]

const resultadoMultTres = arrayNumeros.map((cadaElemento)=>cadaElemento * 3)

//console.log(resultadoMultTres) 


//FILTER()

/* const arrayFiltradoPar = arrayNumeros.filter((element)=>{
  if(element%2===0){
    return element
  }
}) */

const arrayFiltradoPar = arrayNumeros.filter((element)=>element%2===0)


//console.log(arrayFiltradoPar)

//Exercício

/* const aumentarVidaPokemon = (arrayPokemons)=>{
  const novoArray = []
  
  for (element of arrayPokemons){
    const novoObjeto = {
      ... element,
      vida: 100
    }
    novoArray.push(novoObjeto)
  }
  return novoArray
  
} 
console.log(aumentarVidaPokemon (pokemons))
*/
 const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 },
]

const aumentarVidaPokemon = (objeto)=> {
    const novoObj = {
      ... objeto,
      vida: 100
    }
    return novoObj
}

const pokemonsVidaCheia = pokemons.map(aumentarVidaPokemon)

console.log(pokemonsVidaCheia)

const pokemonsDeFogo = pokemons.filter((cadaElemento)=>
  cadaElemento.tipo==='fogo'
)
console.log(pokemonsDeFogo)


