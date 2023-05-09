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
  

  // Para fazer seus próximos pokemons, crie novos estados ultilizando como referência o objeto abaixo:
  /*{
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: 'yellow',
    image: 'https://archives.bulbagarden.net/media/upload/archive/f/f3/20130810070434%210172Pichu.png',
    id: 0
  }
  */
  

  return ( <>
  <GlobalStyles/>
    <FlexContainer>
      {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
      <PokemonCard/>
      {/* Crie aqui seus próximos pokemons! */}
    </FlexContainer>
  </>
    
  );
}

export default App;
