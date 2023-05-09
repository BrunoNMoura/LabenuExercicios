import { Carro } from "../Carro/Carro";
import {Button, Estacionamento, GaragemConteiner} from "./styled"
import Ferrari from "../Carro/img/carro..png"

export function Garagem(props) {
  return (
    <GaragemConteiner>
      <h1>Garagem da {props.nome}</h1>
      <Button onClick={props.mensagemAprentacao}>Mensagem</Button>
    <Estacionamento>
      <Carro adicionadoPor={props.nome} imagem={Ferrari} cor={"Vermelho"} ano={2022} flex={"true"} />
      <Carro adicionadoPor={props.nome} cor={"Verde"} ano={2020} flex={"false"}  />
      <Carro adicionadoPor={props.nome} cor={"Amarelo"} ano={2009} flex={"false"} />
      <Carro adicionadoPor={props.nome} cor={"Rosa"} ano={2022} flex={"true"} />
      </Estacionamento>

    </GaragemConteiner>
  );
}
