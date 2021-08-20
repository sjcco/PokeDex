import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/Navbar';
import { container } from './Home.css';
import PokemonCard from '../../components/PokemonCard/PokemonCard';

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');

  const loadPokemons = () => {
    axios.get(loadMore)
      .then(resp => {
        setLoadMore(resp.data.next);
        resp.data.results.forEach(pokemon => {
          axios.get(pokemon.url)
            .then(resp => {
              setPokemons(prevArray => [...prevArray, resp.data]);
            });
        });
      });
  };

  useEffect(() => loadPokemons(), []);
  return (
    <>
      <NavBar btn="filter" />
      <div className={container}>
        {pokemons.sort((poke1, poke2) => poke1.id - poke2.id).map(pokemon => (
          <Link key={pokemon.id} to={`/pokemon/${pokemon.name}`}>
            <PokemonCard
              pokemon={pokemon.name}
              type1={pokemon.types[0].type.name}
              type2={pokemon.types[1] === undefined ? 'null' : pokemon.types[1].type.name}
              pokeIcon={pokemon.sprites.other['official-artwork'].front_default}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
