import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../../components/NavBar/Navbar';
import { container } from './Home.css';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import TypeSelector from '../../components/TypeSelector/TypeSelector';
import fetchPokemons from '../../actions';

const Home = () => {
  const [visible, setVisible] = useState(false);
  const state = useSelector(state => state.pokemonReducer);
  const { pokemons } = state;

  const toggleFilter = () => (visible ? setVisible(false) : setVisible(true));

  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchPokemons()), []);

  const renderPokemons = () => {
    if (state.loading) {
      return (<h1>...loading</h1>);
    }
    return (
      pokemons.sort((poke1, poke2) => poke1.id - poke2.id).map(pokemon => (
        <Link key={pokemon.id} to={`/pokemon/${pokemon.name}`}>
          <PokemonCard
            pokemon={pokemon.name}
            type1={pokemon.types[0].type.name}
            type2={pokemon.types[1] === undefined ? 'null' : pokemon.types[1].type.name}
            pokeIcon={pokemon.sprites.other['official-artwork'].front_default}
          />
        </Link>
      )));
  };

  return (
    <>
      <NavBar btn="filter" openFilter={toggleFilter} />
      <div className={container}>
        {renderPokemons()}
        {visible && <TypeSelector />}
      </div>
    </>
  );
};

export default Home;
