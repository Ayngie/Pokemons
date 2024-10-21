import { IPokemon } from '../api/pokemons';

interface IPokemonProps {
  pokemon: IPokemon;
}

export const Pokemon = ({ pokemon }: IPokemonProps) => {
  return (
    <div className="my-10 shadow-lg ">
      <h2 className="text-xl">
        Hej jag heter:{' '}
        <span className="font-bold capitalize">{pokemon.name}</span>
      </h2>
      <p className="text-orange-800">Mitt id är: {pokemon.id}</p>
      <p>Min typ är: {pokemon.type}</p>
      <div>
        <span>Min sprite / bild är:</span>{' '}
        <img src={pokemon.sprite} alt={pokemon.name}></img>
      </div>
    </div>
  );
};
