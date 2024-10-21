# Pokemons
Check out a few of your favourite Pokemons, or get to know some!

## Project description:
### Data: 
This project has an array of Pokemon javascript objects that it can show. 
These objects are structured as in following example:

```
const pokemons: IPokemon[] = [
    {
        id: 1,
        name: 'bulbasaur',
        sprite: 'https://img.pokemondb.net/sprites/x-y/normal/bulbasaur.png',
        type: ['grass', 'poison'],
    },
    {...},
]

```

### Process:
1. In this project, I began by creating a reusable <Pokemon/> component, that takes in the javascript object and renders the Pokemon object's various properties.

2. I then created a <Pokemons/> component that can render an array of these Pokemon objects.

3. After that, I created a selector <PokemonTypeSelection/>, in which you can choose which category of Pokemons you would like to see - filtered by their type.


## Run this project locally:

```
npm install
npm run dev
```