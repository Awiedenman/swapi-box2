import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

export const Card = ({ card, toggleFavorite, cardKey, favorites }) => {
  console.log('card ', card)
  const createCards = Object.keys(card.data).map(( cardItem, index ) => {
    return (
      <p 
        className='cardItem' 
        key ={index}>
        {cardItem + ' :  ' + card.data[cardItem]}
      </p>
    );
  });

  const selected = favorites.filter(favorite => favorite.cardKey === cardKey).length === 1
      
  return (
    <div className={`card ${selected ? ' active' : ''}`}>
      <div onClick={ () => toggleFavorite( card, cardKey) }> ★ </div>
      <h1>{card.name}</h1>
      {createCards}
    </div>
  );
};
 
Card.propTypes = {
  card: PropTypes.object,
  toggleFavorite: PropTypes.func,
  cardKey: PropTypes.string
};

