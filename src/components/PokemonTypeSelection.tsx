import { PokemonType, pokemons_types } from '../api/pokemons';

interface IPokemonTypeSelectionProps {
  selectType: (type: PokemonType | undefined) => void;
  selectedType: string | undefined;
}

export const PokemonTypeSelection = ({
  selectType,
  selectedType,
}: IPokemonTypeSelectionProps) => {
  return (
    <div>
      <h3 className="text-xl font-bold">Selected type: {selectedType}</h3>
      <select onChange={(e) => selectType(e.target.value as PokemonType)}>
        <option value="">Välj din typ</option>
        {pokemons_types.map((type) => (
          <option value={type} key={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};
