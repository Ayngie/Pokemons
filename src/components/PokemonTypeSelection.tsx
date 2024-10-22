import { PokemonType, pokemons_types } from '../api/pokemons';
import { getColorForType } from '../utils/pokemonUtils';

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
      <h3 className="text-xl font-bold">
        Vald typ:{' '}
        <span className={`${getColorForType(selectedType)} capitalize`}>
          {selectedType}
        </span>
      </h3>
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
