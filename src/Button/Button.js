import React from 'react';
import PropTypes from 'prop-types';

export const Button = ( {name, fetchStarWarsData } ) => {
  return (
    <button onClick={()=> fetchStarWarsData( name ) }> {name} </button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  fetchStarWarsData: PropTypes.func
};