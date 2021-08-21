import axios from 'axios';

const fetchPokemons = () => async dispatch => {
  dispatch({ type: 'FETCH_POKEMONS_REQUEST' });

  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
    const pokes = [];

    response.data.results.forEach(async pokemon => {
      const resp = await axios.get(pokemon.url);
      pokes.push(resp.data);
    });

    dispatch({
      type: 'FETCH_POKEMONS_SUCCESS',
      payload: {
        next: response.data.next,
        pokemons: pokes,
      },
    });
  } catch (error) {
    dispatch({ type: 'FETCH_POKEMONS_FAILURE', error });
  }
};

// const fetchPokemons = () => {
//   const pokemons = [];
//   let next;

//   axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')
//     .then(resp => {
//       next = resp.data.next;
//       resp.data.results.forEach(pokemon => {
//         axios.get(pokemon.url)
//           .then(resp => pokemons.push(resp.data));
//       });
//     });

//   return {
//     type: 'FETCH_POKEMONS',
//     payload: {
//       next,
//       pokemons,
//     },
//   };
// };

export default fetchPokemons;
