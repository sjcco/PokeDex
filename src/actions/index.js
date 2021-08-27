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

const fetchPokemonsByType = pkmnType => async dispatch => {
  dispatch({ type: 'FETCH_POKEMONS_byTYPE_REQUEST' });

  try {
    const pokes = [];
    if (pkmnType !== 'all') {
      const response = await axios.get(`https://pokeapi.co/api/v2/type/${pkmnType}`);
      response.data.pokemon.forEach(async poke => {
        const resp = await axios.get(poke.pokemon.url);
        pokes.push(resp.data);
      });

      dispatch({
        type: 'FETCH_POKEMONS_byTYPE_SUCCESS',
        payload: {
          next: null,
          pokemons: pokes,
        },
      });
    } else {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
      response.data.results.forEach(async pokemon => {
        const resp = await axios.get(pokemon.url);
        pokes.push(resp.data);
      });

      dispatch({
        type: 'FETCH_POKEMONS_byTYPE_SUCCESS',
        payload: {
          next: response.data.next,
          pokemons: pokes,
        },
      });
    }
  } catch (error) {
    dispatch({ type: 'FETCH_POKEMONS_byTYPE_FAILURE', error });
  }
};

export { fetchPokemons, fetchPokemonsByType };
