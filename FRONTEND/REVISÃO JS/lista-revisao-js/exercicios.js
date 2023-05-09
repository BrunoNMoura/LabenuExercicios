// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    array.sort(function(a,b){
        return a - b
    })
    return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const par = array.filter((numPar)=>{
        return (numPar%2)===0
    })
    return par      
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  /*   return array.filter(i => i % 2 === 0).map(i => i ** 2) */
     const par = array.filter((numPar)=>{
        return (numPar%2)===0
    }).map((numPar)=>{
        return numPar**2
    })
    return par 
}

// EXERCÍCIO 06
/* function retornaMaiorNumero(array) {

    const maiorNum = array.filter((num1,num2)=>{
        let num1 = 0
        let num2 = 0
        
    })
    return maiorNum */


    /*   let i=0
  let maior = - Infinity
  while(i<array.length){
    if(array[i]>maior){
        maior=array[i]
    }
    i++
    }
    return maior */


// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    if(num1>num2){
        maiorNumero = num1
        maiorDivisivelPorMenor = num1%num2===0
        diferenca=num1-num2
    }else{
        maiorNumero = num2
        maiorDivisivelPorMenor = num2%num1===0
        diferenca=num2-num1
    }
    return obj = {
        maiorNumero: maiorNumero,
        maiorDivisivelPorMenor: maiorDivisivelPorMenor,
        diferenca: diferenca
    }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
/*    const numPares = n.filter((num)=>{num%2===0})
   return numPares
}
 */
// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA===ladoB===ladoC){
        console.log("Equilátero")
    }else if(ladoA === ladoB||ladoA === ladoC||ladoC===ladoB){
        console.log('Isósceles')
    }else {
        console.log("Escaleno")
    }
}
classificaTriangulo()
// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}