import { useEffect, useState } from "react";
import Router from "./routes/Router";
import axios from "axios";
import { GlobalContext } from "./contexts/GlobalContext";
import { BASE_URL } from "./constants/url";

export default function App() {
  const [pokelist, setPokelist] = useState([]);
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    fetchPokelist();
  }, []);

  const fetchPokelist = async () => {
    try {
      const response = await axios.get(BASE_URL);
      setPokelist(response.data.results);
    } catch (error) {
      console.log("Erro ao buscar lista de pokemons");
      console.log(error.response);
    }
  };

  const addToPokedex = (pokemonToAdd) => {
    const isAlreadyOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
    );

    if (!isAlreadyOnPokedex) {
      const newPokedex = [...pokedex, pokemonToAdd];
      setPokedex(newPokedex);
    }
  };

  const removeFromPokedex = (pokemonToRemove) => {
    const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
    );

    setPokedex(newPokedex);
  };

  //Objeto que será provido para todos os componentes da aplicação

  const dados = {
    pokedex,
    pokelist,
    removeFromPokedex,
    addToPokedex,
  }

  return (
    <GlobalContext.Provider value={dados}>
      <Router />
    </GlobalContext.Provider>
  );
}