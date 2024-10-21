import { useEffect, useState } from 'react';
import { IPokemon, list_pokemons, PokemonType } from './api/pokemons';
import { Pokemons } from './components/Pokemons';
import { PokemonTypeSelection } from './components/PokemonTypeSelection';

function App() {
  const [selectedType, setSelectedType] = useState<PokemonType | ''>('');
  const [filteredPokemons, setFilteredPokemons] = useState<IPokemon[]>([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemons = list_pokemons();
      if (selectedType === '') {
        setFilteredPokemons([]);
      } else {
        const filtered = pokemons.filter((pokemon) =>
          pokemon.type.includes(selectedType)
        );
        setFilteredPokemons(filtered);
      }
    };
    fetchPokemons();
  }, [selectedType]);

  const selectType = (typeSelection?: PokemonType) => {
    typeSelection ? setSelectedType(typeSelection) : null;
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center">
        Välkommen till Pokemons!
      </h1>
      <PokemonTypeSelection
        selectType={selectType}
        selectedType={selectedType}
      />
      {filteredPokemons.length > 0 && (
        <Pokemons pokemonsArray={filteredPokemons} />
      )}
    </>
  );
}

export default App;
