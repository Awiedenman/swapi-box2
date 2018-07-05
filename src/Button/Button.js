import React from 'react';

export const Button = ( name, buttonFetch ) => {
  return (
    <button onClick={() => { buttonFetch( name ); }}></button>
  );
};