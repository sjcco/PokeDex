import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { nav, navItem, title } from './Navbar.css';

const NavBar = ({ btn, openFilter }) => {
  const navBtn = btn => {
    if (btn === 'filter') {
      return (
        <button type="button" onClick={() => openFilter()} className={navItem}>
          <i className="fas fa-filter" />
        </button>
      );
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
      <img src="https://i.ibb.co/Th6HjDF/title.png" alt="..." className={title} />
      {navBtn(btn)}
    </div>
  );
};

NavBar.propTypes = {
  btn: PropTypes.string,
  openFilter: PropTypes.func,
};

NavBar.defaultProps = {
  btn: 'filter',
  openFilter: () => null,
};

export default NavBar;
