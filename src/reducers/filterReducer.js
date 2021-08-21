const initialState = {
  pokemons: [],
  loading: false,
  error: null,
};
const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POKEMONS_byTYPE_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'FETCH_POKEMONS_byTYPE_SUCCESS':
      return {
        ...state,
        pokemons: action.payload.pokemons,
        loading: false,
      };
    case 'FETCH_POKEMONS_byTYPE_FAILURE':
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

export default filterReducer;
