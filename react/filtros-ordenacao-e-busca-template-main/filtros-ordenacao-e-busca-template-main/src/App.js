import styled, { createGlobalStyle } from "styled-components";
import pokemons from "./pokemon/pokemon.json";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import { getColors } from "./utils/ReturnCardColor";
import Header from "./components/Header/Header.js";
import { useState } from "react";
const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  
  }
`;
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
  justify-items: center;
`;
function App() {

  const[buscaId, setBuscaId]=useState("")
  const [buscaNome, setBuscaNome]=useState("") 
  const [ordenacao, setOrdenacao] =useState("")
  const [tipos, setTipos] = useState("")

  return (
    <>
      <GlobalStyle />
      <Header 
      buscaId={buscaId}
      setBuscaId={setBuscaId}
      buscaNome={buscaNome}
      setBuscaNome={setBuscaNome}
      ordenacao={ordenacao}
      setOrdenacao={setOrdenacao}
      tipos={tipos}
      setTipos={setTipos}
      />
      <CardsContainer>
        {pokemons
        .filter((pokemon)=>{
          return pokemon.id.includes(buscaId) 
        })
        .filter((pokemon)=>{
          return pokemon.name.english.toLowerCase().includes(buscaNome.toLowerCase())
        })
        .filter((pokemon)=>{
          return tipos?pokemon.type.includes(tipos):pokemon
        })                   
        .sort((a, b)=>{
          if(ordenacao === "crescente"){
          return a.name.english < b.name.english ? -1 : 1}
        else if(ordenacao === "decrescente"){
          return a.name.english > b.name.english ? -1 : 1}
        })        
        .map((pokemon) => {
          return <PokemonCard
          cardColor={getColors(pokemon.type[0])}
          key={pokemon.id}
          pokemon={pokemon}
        />
        })}
      </CardsContainer>
    </>
  );
}

export default App;
