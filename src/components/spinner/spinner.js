import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

import { spinner, spinnerCont } from './Spinner.css';

const Spinner = () => (
  <div className={spinnerCont}>
    <CircularProgress className={spinner} />
  </div>
);

export default Spinner;
