import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { nav, navItem, title } from './NavBar.css';
import pokedex from '../../assets/images/title.png';

const NavBar = ({ btn }) => {
  const navBtn = btn => {
    if (btn === 'filter') {
      return (<div className={navItem}><i className="fas fa-filter" /></div>);
    }
    return (
      <div className={navItem}>
        <Link to="/"><i className="fas fa-arrow-left" /></Link>
      </div>
    );
  };

  return (
    <div className={nav}>
      <div className={navItem}><i className="fas fa-bars" /></div>
      <img src={pokedex} alt="..." className={title} />
      {navBtn(btn)}
    </div>
  );
};

NavBar.propTypes = {
  btn: PropTypes.string,
};

NavBar.defaultProps = {
  btn: 'filter',
};

export default NavBar;
