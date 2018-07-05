import React from 'react';
import PropTypes from 'prop-types';

export const Button = ( name, buttonFetch ) => {
  return (
    <button onClick={() => { buttonFetch( name ); }}> {name.name} </button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  buttonFetch: PropTypes.func
};