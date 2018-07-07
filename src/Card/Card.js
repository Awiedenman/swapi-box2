import React from 'react';
import './Card.css';

export const Card = ({ card, addFavorite, cardKey }) => {
  console.log('card key', cardKey)
  const createCards = Object.keys(card).map(( cardItem, index ) => {
    return (
      <p className='cardItem' key ={index}>{cardItem + ' :  ' + card[cardItem]}</p>
    );
  });
      
    
  return (
    <div className='card'>
      <div className='star' onClick={ () => addFavorite( cardKey ) }> ★ </div>
      {createCards}
    </div>
  );
};
  

