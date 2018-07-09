import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'

export const Button = ( { name, setCategory } ) => {
  return (
    <button className='category-button' onClick={()=> setCategory( name ) }> {name} </button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  setCategory: PropTypes.func
};