import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import NavBar from '../../components/NavBar/Navbar';
import PokeInfo from '../../components/PokeInfo/PokeInfo';
import { container, cardTitles } from './Pokemon.css';
import DexEntries from '../../components/DexEntries/DexEntries';
import { decimToMeters, hectoToKilos, pkmnColor } from '../../helpers';
import Abilities from '../../components/Abilities/Abilities';
import Spinner from '../../components/spinner/spinner';

const Pokemon = ({ location }) => {
  const [pokemon, setPokemon] = useState({});
  const [pokeData, setPokeData] = useState({});
  const [loading, setLoading] = useState(true);

  const getPokemon = () => {
    setLoading(true);
    axios.get(`https://pokeapi.co/api/v2/pokemon/${location.pathname.replace(/\/pokemon\//, '')}`)
      .then(resp => {
        setPokemon(resp.data);
        axios.get(resp.data.species.url)
          .then(resp => {
            setPokeData(resp.data);
            setLoading(false);
          });
      });
  };

  useEffect(() => getPokemon(), []);

  if (loading) {
    return (
      <Spinner />
    );
  }

  const bgColor = pkmnColor(pokeData.color.name);

  return (
    <>
      <NavBar btn="home" />
      <div style={{ backgroundColor: bgColor }} className={container}>
        <h2 className={cardTitles}>Pokemon</h2>
        <PokeInfo
          icon={pokemon.sprites.other['official-artwork'].front_default}
          pokeName={pokemon.name}
          id={`${pokemon.id}`}
          genus={pokeData.genera.filter(gen => gen.language.name === 'en')[0].genus}
          type1={pokemon.types[0].type.name}
          type2={pokemon.types[1] === undefined ? 'null' : pokemon.types[1].type.name}
        />
        <h2 className={cardTitles}>species</h2>
        <DexEntries
          description={pokeData.flavor_text_entries[9].flavor_text.replace(/\n/g, '')}
          height={decimToMeters(pokemon.height)}
          weight={hectoToKilos(pokemon.weight)}
        />
        <h2 className={cardTitles}>Abilities</h2>
        <Abilities
          ability={pokemon.abilities.filter(ability => (
            ability.is_hidden === false))[0].ability.name}
          hiddenAbility={
            pokemon.abilities.length === 1
              ? null
              : pokemon.abilities.filter(ability => (
                ability.is_hidden === true))[0].ability.name
          }
        />
      </div>
    </>
  );
};

Pokemon.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default Pokemon;
