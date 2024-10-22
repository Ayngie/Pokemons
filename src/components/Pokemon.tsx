import { IPokemon } from '../api/pokemons';

interface IPokemonProps {
  pokemon: IPokemon;
}

export const Pokemon = ({ pokemon }: IPokemonProps) => {
  const typeColorMap: { [key: string]: string } = {
    normal: 'text-green-800',
    fire: 'text-red-800',
    water: 'text-blue-800',
    flying: 'text-blue-400',
    fighting: 'text-gray-800',
    poison: 'text-purple-600',
    electric: 'text-yellow-600',
    ground: 'text-yellow-600',
    rock: 'text-gray-800',
    psychic: 'text-purple-800',
    ice: 'text-blue-300',
    bug: 'text-green-600',
    ghost: 'text-purple-900',
    steel: 'text-gray-400',
    dragon: 'text-indigo-800',
    fairy: 'text-pink-600',
  };

  const getColorForType = (type: string) => {
    return typeColorMap[type] || 'text-gray-800';
  };
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
