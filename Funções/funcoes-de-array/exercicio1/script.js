/* const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
} */

/* const recebeObjeto = (funcao)=>{
    const novaFuncao = {
        ...funcao,
        nome:'ASTRODEV',
        profissao: 'DEV DAS ESTRELAS',
        username: 'ASTRODEV_LABENU',
        senha:'MELHORDETODOS'
    }
    return novaFuncao
} */

//console.log(recebeObjeto(objeto)) */

 
/* const caixaAlta = (obj)=>{
  return obj = {
      nome:obj.nome.toUpperCase(),
      profissao: obj.profissao.toUpperCase(),
      username: obj.username.toUpperCase(),
      senha: obj.senha.toUpperCase()
  }
 
}

//console.log(caixaAlta(objeto))

const textoCorrido = (obj)=>{
    return `Olá meu nome é ${obj.nome}, minha profissão é ${obj.profissao}, meu username é ${obj.username}, minha senha é ${obj.senha}`
}
//console.log(textoCorrido(objeto))

const imprimir = (obj, callback) =>{
    console.log(callback(obj))
}
imprimir (objeto,textoCorrido)
imprimir (objeto,caixaAlta) */


const mostrarIdade = (idade)=> {
    console.log("Sua idade é ",idade)
}
const caucularIdade = (anoAtual,anoNasc,callback)=>{
    const resultado = anoAtual - anoNasc
    callback(resultado)
}

caucularIdade (2022, 1986,mostrarIdade)

const mostrarJogador = (jogador)=>{
    console.log("O melhor jogador da seleção é", jogador)
}

const mostrarCallBackJogador = (nome,callback)=>{
   return callback (nome)
   }

mostrarCallBackJogador ("Gabriel Jesus",mostrarJogador)

const cantor = (nome)=>{
    console.log("Seu cantor favorito é ", nome)
}

const mostrarCantor = (callBack)=>{
    nome = prompt("Digite seu cantor favorito")
    callBack (nome)
}

mostrarCantor (cantor)

const vereficaAtividade = (hora) =>{
    if(hora===7){
        return "Trabalhar"
    }else if(hora ===12){
        return "Almoçar"
    }else if(hora===23){
        return "Dormir"
    }else{
        return "Estudar"
    }
}
const imprimirAtividade = (hora,callBack)=>{
    const atividade = callBack(hora)
    return `Agora é hora de ${atividade} `
}

console.log(imprimirAtividade (22,vereficaAtividade))