import { CadaCarro } from "./Carrostayled";
import { CarroConteiner } from "./Carrostayled";


export function Carro(props) {
    return (
      <CarroConteiner>
        <h2>Meu carro</h2>
       
        <CadaCarro>
        <ul>
          <li>{props.imagem}</li>
          <li>Cor: {props.cor}</li>
          <li>Ano: {props.ano}</li>
          <li>Flex: {props.flex}</li>
          <li>Adicionado: {props.adicionadoPor}</li>
        </ul>
        </CadaCarro>
      </CarroConteiner>
    );
  }
  
