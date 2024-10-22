import { IPokemon } from '../api/pokemons';

interface IPokemonProps {
  pokemon: IPokemon;
}

export const Pokemon = ({ pokemon }: IPokemonProps) => {
  const getColorForType = (type: string) => {
    switch (type) {
      case 'fire':
        return 'text-red-800';
      case 'water':
        return 'text-blue-800';
      case 'flying':
        return 'text-blue-400';
      case 'fighting':
        return 'text-grey-800';
      case 'poison':
        return 'text-purple-600';
      case 'electric':
        return 'text-yellow-600';
      case 'ground':
        return 'text-yellow-600';
      case 'rock':
        return 'text-gray-800';
      case 'psychic':
        return 'text-purple-800';
      case 'ice':
        return 'text-blue-300';
      case 'bug':
        return 'text-green-600';
      case 'ghost':
        return 'text-purple-900';
      case 'steel':
        return 'text-gray-400';
      case 'dragon':
        return 'text-indigo-800';
      case 'fairy':
        return 'text-pink-600';
      default:
        return 'text-green-800';
    }
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
          <span
            key={type}
            className={`${getColorForType(type)} capitalize mx-1`}>
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
