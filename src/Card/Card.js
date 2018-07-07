import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

export const Card = ({ card, toggleFavorite, cardKey, starred }) => {
  // console.log('card ', card)
  const createCards = Object.keys(card).map(( cardItem, index ) => {
    return (
      <p 
        className='cardItem' 
        key ={index}>{cardItem + ' :  ' + card[cardItem]}</p>
    );
  });
      
  return (
    <div className='card' starred={starred}>
      <div onClick={ () => toggleFavorite( card, cardKey, starred ) }> ★ </div>
      {createCards}
    </div>
  );
};
 
Card.propTypes = {
  card: PropTypes.object,
  toggleFavorite: PropTypes.func,
  cardKey: PropTypes.string
};

