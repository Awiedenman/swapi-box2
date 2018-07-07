import React from 'react';

export const Card = ({ card }) => {
  console.log('card', card)
  const createCards = Object.keys(card).map(( cardItem, index ) => {
    return (
      <p key ={index}>{cardItem + ':' + card[cardItem]}</p>
    );
  });
      
    
  return (
    <div>
      {createCards}
    </div>
  );
};
  

