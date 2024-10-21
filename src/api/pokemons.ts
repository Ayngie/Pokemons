export const pokemons_types = [
  'normal',
  'fire',
  'water',
  'grass',
  'flying',
  'fighting',
  'poison',
  'electric',
  'ground',
  'rock',
  'psychic',
  'ice',
  'bug',
  'ghost',
  'steel',
  'dark',
  'dragon',
  'fairy',
] as const;

export type PokemonType = (typeof pokemons_types)[number];

export interface IPokemon {
  id: number;
  name: string;
  type: PokemonType[];
  sprite: string;
}

const pokemons: IPokemon[] = [
  {
    id: 1,
    name: 'bulbasaur',
    sprite: 'https://img.pokemondb.net/sprites/x-y/normal/bulbasaur.png',
    type: ['grass', 'poison'],
  },
  {
    id: 2,
    name: 'ivysaur',
    sprite: 'https://img.pokemondb.net/sprites/x-y/normal/ivysaur.png',
    type: ['grass', 'poison'],
  },
  {
    id: 3,
    name: 'venusaur',
    sprite: 'https://img.pokemondb.net/sprites/x-y/normal/venusaur.png',
    type: ['grass', 'poison'],
  },
  {
    id: 4,
    name: 'charmander',
    sprite: 'https://img.pokemondb.net/sprites/x-y/normal/charmander.png',
    type: ['fire'],
  },
  {
    id: 5,
    name: 'charmeleon',
    sprite: 'https://img.pokemondb.net/sprites/x-y/normal/charmeleon.png',
    type: ['fire'],
  },
  {
    id: 6,
    name: 'charizard',
    sprite: 'https://img.pokemondb.net/sprites/x-y/normal/charizard.png',
    type: ['fire', 'flying'],
  },
  {
    id: 7,
    name: 'squirtle',
    sprite: 'https://img.pokemondb.net/sprites/x-y/normal/squirtle.png',
    type: ['water'],
  },
  {
    id: 8,
    name: 'wartortle',
    sprite: 'https://img.pokemondb.net/sprites/x-y/normal/wartortle.png',
    type: ['water'],
  },
  {
    id: 9,
    name: 'blastoise',
    sprite: 'https://img.pokemondb.net/sprites/x-y/normal/blastoise.png',
    type: ['water'],
  },
  {
    id: 10,
    name: 'caterpie',
    sprite: 'https://img.pokemondb.net/sprites/x-y/normal/caterpie.png',
    type: ['bug'],
  },
  {
    id: 11,
    name: 'metapod',
    sprite: 'https://img.pokemondb.net/sprites/x-y/normal/metapod.png',
    type: ['bug'],
  },
  {
    id: 12,
    name: 'butterfree',
    sprite: 'https://img.pokemondb.net/sprites/x-y/normal/butterfree.png',
    type: ['bug', 'flying'],
  },
  {
    id: 13,
    name: 'weedle',
    sprite: 'https://img.pokemondb.net/sprites/x-y/normal/weedle.png',
    type: ['bug', 'poison'],
  },
  {
    id: 14,
    name: 'kakuna',
    sprite: 'https://img.pokemondb.net/sprites/x-y/normal/kakuna.png',
    type: ['bug', 'poison'],
  },
  {
    id: 15,
    name: 'beedrill',
    sprite: 'https://img.pokemondb.net/sprites/x-y/normal/beedrill.png',
    type: ['bug', 'poison'],
  },
  {
    id: 16,
    name: 'pidgey',
    sprite: 'https://img.pokemondb.net/sprites/x-y/normal/pidgey.png',
    type: ['normal', 'flying'],
  },
  {
    id: 17,
    name: 'pidgeotto',
    sprite: 'https://img.pokemondb.net/sprites/x-y/normal/pidgeotto.png',
    type: ['normal', 'flying'],
  },
  {
    id: 18,
    name: 'pidgeot',
    sprite: 'https://img.pokemondb.net/sprites/x-y/normal/pidgeot.png',
    type: ['normal', 'flying'],
  },
  {
    id: 19,
    name: 'rattata',
    sprite: 'https://img.pokemondb.net/sprites/x-y/normal/rattata.png',
    type: ['normal'],
  },
  {
    id: 20,
    name: 'raticate',
    sprite: 'https://img.pokemondb.net/sprites/x-y/normal/raticate.png',
    type: ['normal'],
  },
];

export const list_pokemons = () => {
  return pokemons;
};

export const get_pokemon = (id: number) => {
  const pokemon = pokemons.find((pokemon) => pokemon.id == id);
  return pokemon;
};
