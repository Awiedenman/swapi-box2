import React from 'react';
import './Card.css';

export const Card = ({ card }) => {
  console.log('card', card)
  const createCards = Object.keys(card).map(( cardItem, index ) => {
    return (
      <p className='cardItem' key ={index}>{cardItem + ' :  ' + card[cardItem]}</p>
    );
  });
      
    
  return (
    <div className='card'>
      {createCards}
    </div>
  );
};
  

