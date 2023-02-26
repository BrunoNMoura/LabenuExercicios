import React from "react";
import { Card, PokemonName, PokemonType, EvolveButton } from "./styles";

const PokemonCard = ({ pokemon, setPokemon }) => {
  const { color, image, name, type } = pokemon;

  const evoluirPokemon = () => {
    if (name === "Pichu") {
      const evolucao = {
        ...pokemon,
        name: "Pikachu",
        evolved: true,
        image:"https://archives.bulbagarden.net/media/upload/4/4a/0025Pikachu.png"
      };
      setPokemon(evolucao);
    }
    if (name === "Bulbasauro") {
      const evolucao = {
        ...pokemon,
        name: "Ivysaur",
        evolved: true,
        image:"https://uploaddeimagens.com.br/images/004/330/007/original/Venusaur.png?1675549816"
      };
      setPokemon(evolucao);
    }
  };

  return (
    <Card color={color}>
      <img src={image} alt={`Pokemon`} />
      <PokemonName>{name}</PokemonName>
      <PokemonType>{type}</PokemonType>
      <p>{}kg</p>
      <EvolveButton onClick={() => evoluirPokemon()}>Evoluir!</EvolveButton>
    </Card>
  );
};

export default PokemonCard;