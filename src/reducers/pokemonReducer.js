const initialState = {
  next: null,
  pokemons: [],
  loading: false,
  error: null,
};
const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POKEMONS_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'FETCH_POKEMONS_SUCCESS':
      return {
        ...state,
        next: action.payload.next,
        pokemons: action.payload.pokemons,
        loading: false,
      };
    case 'FETCH_POKEMONS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error,
        pokemons: [],
      };
    default:
      return state;
  }
};

export default pokemonReducer;
