

/* Observe o objeto abaixo e, utilizando o **espalhamento** resolva os exercícios a seguir:
 */
const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}


/* a) Crie uma cópia do objeto, acima, mantendo a estrutura, mas trocando **`nome`** por “Squirtle” e **`tipo`** por “Água” */
const copiaPokemon1 = {
    ...pokemon1,
    nome:"Squirtle",
    tipo: "Água"
}




/* b) No objeto original, adicione mais uma propriedade, chamada `ataques`. Esta propriedade deve guardar um **array** que deve começar vazio. */


/* c-) crie um objeto de `ataque` com a estrutura abaixo e o adicione no array `ataques` utilizando `**push()**` */


const ataques = {
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100,
}

pokemon1.ataques = [    
    pokemon1.ataques.push(ataques)
]

/* d) para o objeto original, adicione o ataque **“Folha Navalha”,** com **45 de dano**, **100 de precisão**, e de tipo **“Grama”**; no array de `ataques` */

const ataques2 = {
    nome:"Folha Navalha",
    dano: 45,
    tipo:"grama",
    precisao: 100
}
pokemon1.push(ataques2)
console.log(pokemon1)
console.log(copiaPokemon1)


/* e) para a cópia, crie o `ataque` **“Jato de Água”**, com **40 de dano**, **100 de precisão**, e do tipo **“Água”**; e adicione no array. */
const ataques3 = {
    nome:"Jato da Água",
    dano:40,
    tipo:"Água",
    precisao:100
}
copiaPokemon1.push(ataques3)


/* {
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100,
},
{
    nome:"Folha Navalha",
    dano: 45,
    tipo:"grama",
    precisao: 100
} */