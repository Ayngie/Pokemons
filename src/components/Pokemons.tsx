import { IPokemon } from "../api/pokemons";
import { Pokemon } from "./Pokemon";

interface IPokemonsProps {
    pokemonsArray: IPokemon[];
}

export const Pokemons = ({pokemonsArray}:IPokemonsProps) => {
    console.log("pokemons array", pokemonsArray);
  return (
    <>
        {pokemonsArray.map((pokemon) =>
            <Pokemon pokemon={pokemon} key={pokemon.name}/>
        )}
    </>
  );
};