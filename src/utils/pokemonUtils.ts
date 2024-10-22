const typeColorMap: { [key: string]: string } = {
  normal: 'text-green-800',
  grass: 'text-green-800',
  bug: 'text-green-600',
  fire: 'text-red-800',
  water: 'text-blue-800',
  flying: 'text-blue-400',
  ice: 'text-blue-300',
  dragon: 'text-indigo-800',
  ghost: 'text-purple-900',
  psychic: 'text-purple-800',
  poison: 'text-purple-600',
  fairy: 'text-pink-600',
  electric: 'text-yellow-600',
  ground: 'text-yellow-600',
  steel: 'text-gray-400',
};

export const getColorForType = (type?: string | undefined) => {
  return type ? typeColorMap[type] : 'text-gray-800';
};
