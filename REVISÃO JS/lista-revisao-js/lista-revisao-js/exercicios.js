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
    const par = array.filter((numPar)=>{
        return (numPar%2)===0
    }).map((numPar)=>{
        return numPar**2
    })
    return par
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    for (let i = 0; i < array.length; i++) {
        let a, b;

        a = array[i];
        b = array[i+1];
             
        /*Compara a variavel "a" com "b" e atribui o maior valor
        a variavel "maior"*/

        if (a > b) {
            maior = a;
        } 

        else if (b > a) {
            maior = b;
        }

        else if(a === b) {
            maior = a;
        }
    }

    return maior;
}

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
    let numerosPares = [];
    for (let i = 0; numerosPares.length < n; i++) {
        if (i % 2 == 0) {
            numerosPares.push(i)
        }
    }
    return numerosPares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA===ladoB&&ladoB===ladoC){
        return "Equilátero"
    }else if(ladoA === ladoB||ladoA === ladoC||ladoC===ladoB){
        return'Isósceles' 
    }else {
       return"Escaleno"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    for (let i = 0; i < array.length; i++) {
        let a, b;

        a = array[i];
        b = array[i+1];
             
        /*Compara a variavel "a" com "b" e atribui o maior valor
        a variavel "maior"*/

        if (a > b) {
            maior = a;
        } 

        else if (b > a) {
            maior = b;
        }

        else if(a === b) {
            maior = a;
        }
    }

    return maior;
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