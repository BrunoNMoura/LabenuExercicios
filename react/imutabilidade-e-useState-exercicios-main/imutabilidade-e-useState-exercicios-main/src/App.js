import React, {useState} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import PokemonCard from './Components/PokemonCard/PokemonCard';


const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
function App() {
  
   const [pokemon, setPokemon]= useState({name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: 'yellow',
    image:  "https://www.pngkey.com/png/full/193-1938143_pokemon-shiny-pichu-spikyeared-is-a-fictional-character.png",  
id: 0});

    const [pokemon2, setPokemon2]= useState({name: "Bulbasauro",
    type: "Planta",
    evolved: false,
    weight: 4,
    color: 'green',
    image: "https://www.pngmart.com/files/11/Pokemon-Bulbasaur-PNG-Clipart.png",
    id: 0});

  return ( <>
  <GlobalStyles/>
    <FlexContainer>
      {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
      <PokemonCard pokemon={pokemon} setPokemon={setPokemon}/>
      <PokemonCard pokemon={pokemon2} setPokemon={setPokemon2}/>
    </FlexContainer>
  </>    
  );
}

export default App;
