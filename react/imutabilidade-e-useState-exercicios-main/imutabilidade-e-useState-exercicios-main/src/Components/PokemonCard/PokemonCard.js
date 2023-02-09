import React, { useState } from 'react'
import {Card, PokemonName, PokemonType, EvolveButton} from './styles'

const PokemonCard = ({pokemon, setpokemon}) => {
  const {color, image, name, type} = pokemon;

  const evoluirPokemon = () => {
    if(name === "pichu"){
      const evolucao = {
        ...pokemon,
        nome:"Pikachu",
        evolved: true,
        image:     "https://archives.bulbagarden.net/media/upload/4/4a/0025Pikachu.png"
      };
      setpokemon(evolucao);
    }

    if (name === "Bulbasauro"){
      const evolucao = {
        ...pokemon,
        nome: "Ivysaur",
        evolved: true,
        imge:"https://uploaddeimagens.com.br/images/004/330/007/original/Venusaur.png?1675549816"
      };
      setpokemon(evolucao);
    }
  };

  return (
    <Card color={color}>
        <img src={image} alt={`Pokemon`}/>
        <PokemonName>{name}</PokemonName>
        <PokemonType>{type}</PokemonType>
        <p>{}kg</p>
        <EvolveButton onClick={() => evoluirPokemon()}>Evoluir!</EvolveButton>
    </Card>
  );
};

export default PokemonCard;