import React from 'react';
import PropTypes from 'prop-types';

export const Button = ( {name, setCategory } ) => {
  return (
    <button onClick={()=> setCategory( name ) }> {name} </button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  setCategory: PropTypes.func
};