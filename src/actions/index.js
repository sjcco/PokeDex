import axios from 'axios';

const fetchPokemons = () => {
  const pokemons = [];
  let next;

  axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')
    .then(resp => {
      next = resp.data.next;
      resp.data.results.forEach(pokemon => {
        axios.get(pokemon.url)
          .then(resp => pokemons.push(resp.data));
      });
    });

  return {
    type: 'FETCH_POKEMONS',
    payload: {
      next,
      pokemons,
    },
  };
};

export default fetchPokemons;
