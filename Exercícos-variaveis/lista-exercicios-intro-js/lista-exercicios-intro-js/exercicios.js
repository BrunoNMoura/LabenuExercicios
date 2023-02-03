// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const alturaRe = Number (prompt("Digite a altura"))
  const compriRe = Number (prompt("Digite o comprimento"))
  const area = alturaRe*compriRe
  console.log(area)

}


// EXERCÍCIO 02
function imprimeIdade() {
  const anoNasc = Number (prompt("Digite seu ano de nascimento"))
  const anoAtual = Number (prompt("Digite o ano atual"))
  const idade = anoNasc - anoAtual
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso/(altura*altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
    // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
    const nome = prompt("digite seu nome")
    const idade = prompt("digite sua idade")
    const email = prompt("digite seu E-mail")
    console.log ("Meu nome é "+ nome + ", tenho " + idade + " anos, e o meu email é " + email+".")

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1=prompt("digite sua 1ª cor favorita")
  const cor2=prompt("digite sua 2ª cor favorita")
  const cor3=prompt("digite sua 3ª cor favorita")
  const coresFavoritas = [cor1, cor2, cor3]
  console.log(coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  
  const stringMaiuscula = string.toUpperCase()
    return stringMaiuscula

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  
  return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  
  return (string1.length)===(string2.length)

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
    return array[array.length-1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const arryIvertida = array.slice()
  arryIvertida.pop();
  arryIvertida.shift();
  arryIvertida.push(array[0]);
  arryIvertida.unshift(array[array.length-1])
  
  return arryIvertida
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return (string1.toUpperCase()) === (string2.toUpperCase())
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
   const anoAtual = prompt("Digite o ano atual")
   const anoDeNasci =prompt("Digite o ano de nascimento")
   const dataExpedição =prompt("Digite o ano de expedição do RG:")
  let idade = anoAtual-anoDeNasci
  let tempoRg = anoAtual-dataExpedição

  const condicaoMenorIgual20 = idade<=20 &&tempoRg >= 5;
  const condicaoMenorIgual50 = idade>20 && idade<=50 && tempoRg >= 10;
  const condicaoMaior50 = idade > 50 && tempoRg >= 15;

  const renovarRg = condicaoMenorIgual20 || condicaoMenorIgual50 || condicaoMaior50;

  console.log(renovarRg)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {

  return ano%400===0||(ano%4===0&&ano%100!==0)
  
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const idade = prompt("tem mais de 18 anos?")
  const ensinoMedio = prompt("tem ensino médio completo?")
  const disponibilidade = prompt("tem disponibilidade?")
  console.log(idade==="sim"&&ensinoMedio==="sim"&&disponibilidade==="sim")


}