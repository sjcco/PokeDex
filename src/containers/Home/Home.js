import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../../components/NavBar/Navbar';
import { container } from './Home.css';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import TypeSelector from '../../components/TypeSelector/TypeSelector';
import { fetchPokemonsByType } from '../../actions';
import Spinner from '../../components/spinner/spinner';

const Home = () => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState();
  const state = useSelector(state => state);
  const sortedPokemons = useSelector(
    state => state.filterReducer.pokemons.sort((poke1, poke2) => poke1.id - poke2.id),
  );

  const toggleFilter = () => (visible ? setVisible(false) : setVisible(true));

  const dispatch = useDispatch();

  const filterHandler = type => {
    setLoading(true);
    dispatch(fetchPokemonsByType(type));
  };

  useEffect(() => {
    dispatch(fetchPokemonsByType('all'));
  }, []);

  useEffect(() => {
    setPokemons(sortedPokemons);
    setTimeout(() => {
      setVisible(false);
      setLoading(false);
    }, 500);
  }, [state]);

  if (loading) {
    return (<Spinner />);
  }

  return (
    <>
      <NavBar btn="filter" openFilter={toggleFilter} />
      <div className={container}>
        {pokemons.map(pokemon => (
          <Link key={pokemon.id} to={`/pokemon/${pokemon.name}`}>
            {(pokemon.sprites.other['official-artwork'].front_default
              && (
              <PokemonCard
                pokemon={pokemon.name}
                type1={pokemon.types[0].type.name}
                type2={pokemon.types[1] === undefined ? 'null' : pokemon.types[1].type.name}
                pokeIcon={pokemon.sprites.other['official-artwork'].front_default}
              />
              ))}
          </Link>
        ))}

        {visible && <TypeSelector filter={filterHandler} />}
      </div>
    </>
  );
};

export default Home;
