const typeColorMap: { [key: string]: string } = {
  normal: 'text-green-800',
  fire: 'text-red-800',
  water: 'text-blue-800',
  flying: 'text-blue-400',
  poison: 'text-purple-600',
  electric: 'text-yellow-600',
  ground: 'text-yellow-600',
  psychic: 'text-purple-800',
  ice: 'text-blue-300',
  bug: 'text-green-600',
  ghost: 'text-purple-900',
  steel: 'text-gray-400',
  dragon: 'text-indigo-800',
  fairy: 'text-pink-600',
};

export const getColorForType = (type?: string | undefined) => {
  return type ? typeColorMap[type] : 'text-gray-800';
};
