/* EXERCÍCIO DE FIXAÇÃO
1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
  a. nome, que é uma string;
  b. idade, que é um número;
  c. corFavorita, que é uma string.

2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir
que todos os objetos tenham as mesmas propriedades.

3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. Utilize um enum para isso.
*/

import { CORES_ARCO_IRIS, TCorPessoal } from "../../types";

const corPessoal1:TCorPessoal = {
  nome:"Bruno",
  idade:36,
  corFavorita:CORES_ARCO_IRIS.AZUL,
}
const corPessoal2:TCorPessoal = {
  nome:"Danielle",
  idade:35,
  corFavorita:CORES_ARCO_IRIS.ANIL,
}
const corPessoal3:TCorPessoal = {
  nome:"Heitor",
  idade:11,
  corFavorita:CORES_ARCO_IRIS.VERMELHA,
}

console.table([corPessoal1, corPessoal2, corPessoal3]);
