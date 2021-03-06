import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

export const Card = ({ card, toggleFavorite, favorites }) => {
  const createCards = Object.keys(card.data).map(( cardItem, index ) => {
    return (
      <p 
        className='cardItem' 
        key ={index}>
        {cardItem + ' :  ' + card.data[cardItem]}
      </p>
    );
  });

  const selected = favorites.filter(favorite => favorite.name === card.name).length === 1;
      
  return (
    <div className={`card ${selected ? 'clicked' : ''}`}>
      <button className='star' onClick={ () => toggleFavorite( card) }> Add Favorite </button>
      <h1>{card.name}</h1>
      {createCards}
    </div>
  );
};
 
Card.propTypes = {
  card: PropTypes.object,
  toggleFavorite: PropTypes.func,
  favorites: PropTypes.array
};

