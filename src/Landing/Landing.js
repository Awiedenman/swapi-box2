import React from 'react';
import PropTypes from 'prop-types';
import './Landing.css';

export const Landing = ({films}) => {
  return (
    <div className ="fade">
      <section className="star-wars">
        <div className="crawl">
          <h1>{films[0].title}</h1>
          <p>{films[0].opening_crawl}</p>
          <h2>{films[0].release_date}</h2>
        </div>
      </section>
    </div>
  );
};

Landing.propTypes = {
  films: PropTypes.array
};