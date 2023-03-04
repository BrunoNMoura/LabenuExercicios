import React from "react";
import { Container } from "./styles";

const Header = (props) => {
  const pokemontypesArray = [
    "Normal",
    "Fire",
    "Water",
    "Grass",
    "Flying",
    "Fighting",
    "Poison",
    "Electric",
    "Ground",
    "Rock",
    "Psychic",
    "Ice",
    "Bug",
    "Ghost",
    "Steel",
    "Dragon",
    "Dark",
    "Fairy",
  ];

  return (
    <Container>
      <input 
      type="number" 
      placeholder="Buscar por id" 
      value={props.buscaId}
      onChange={(e)=>{props.setBuscaId(e.target.value)}}
      />
      <input 
      type="text" 
      placeholder="Buscar por nome" 
      value={props.buscaNome}
      onChange={(e)=>{props.setBuscaNome(e.target.value)}}
      />
      <select 
      value={props.ordenacao}
      onChange={(e)=>props.setOrdenacao(e.target.value)}>
        <option value="">Ordenar</option>
        <option value="crescente">Crescente</option>
        <option value="decrescente">Decrescente</option>
      </select>
      <select 
      name="tipo" 
      id="tipo"
      value={props.tipos}
      onChange={(e)=>{props.setTipos(e.target.value)}}
      >
        <option value="">Selecione um tipo</option>
        {pokemontypesArray.map((type) => {
          return (
            <option key={type} value={type}>
              {type}
            </option>
          );
        })}
      </select>
    </Container>
  );
};

export default Header;
