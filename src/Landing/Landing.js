import React from 'react';
import PropTypes from 'prop-types';

export const Landing = ({films}) => {
  return (
    <div>
      <h1>{films.title}</h1>
      <p>{films.opening_crawl}</p>
      <h2>{films.release_date}</h2>
    </div>
  );
};

Landing.propTypes = {
  films: PropTypes.object
};