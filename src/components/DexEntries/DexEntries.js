import React from 'react';
import PropTypes from 'prop-types';
import {
  container, weightHeight, weightContainer, heightContainer,
  dataDisplay, dataNames, entryDescription,
} from './DexEntries.css';

const DexEntries = ({ description, weight, height }) => (
  <div className={container}>
    <p>{description}</p>
    <h4 className={entryDescription}>PokeDex entry</h4>
    <div className={weightHeight}>
      <div className={weightContainer}>
        <h3 className={dataDisplay}>{weight}</h3>
        <h4 className={dataNames}>weight</h4>
      </div>
      <div className={heightContainer}>
        <h3 className={dataDisplay}>{height}</h3>
        <h4 className={dataNames}>height</h4>
      </div>
    </div>
  </div>
);

DexEntries.propTypes = {
  description: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default DexEntries;
