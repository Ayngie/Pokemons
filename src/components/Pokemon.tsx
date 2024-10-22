import { IPokemon } from '../api/pokemons';
import { getColorForType } from '../utils/pokemonUtils';

interface IPokemonProps {
  pokemon: IPokemon;
}

export const Pokemon = ({ pokemon }: IPokemonProps) => {
  return (
    <div className="my-10 shadow-lg ">
      <h2 className="text-xl">
        Hej! Jag heter: {''}
        <span className="font-bold capitalize">{pokemon.name}</span>
      </h2>
      <p>Mitt id är: {pokemon.id}</p>
      <p>
        Min typ är: {''}
        {pokemon.type.map((type, index) => (
          <span key={type} className={`${getColorForType(type)} capitalize`}>
            {type}
            {index < pokemon.type.length - 1 && ' & '}
          </span>
        ))}
      </p>
      <div>
        <span>Min sprite / bild är:</span>
        <img src={pokemon.sprite} alt={pokemon.name}></img>
      </div>
    </div>
  );
};
