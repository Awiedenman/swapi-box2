import React from 'react';
import { Card } from '../Card/Card';
import PropTypes from 'prop-types';
import './CardContainer.css';


export const CardContainer = ({ cardInfo, toggleFavorite, category, favorites }) => {
  // console.log('cardInfo', cardInfo);
  
  let displayCards;
  
  if ( cardInfo ){
    displayCards = cardInfo.map(( card, index )=> {
      return ( <Card
        card={ card }
        key={ index }
        cardKey={ category + index }
        toggleFavorite={ toggleFavorite }
        favorites={ favorites }
      /> 
      );     
    });

  }

  return (
    <div className='card-container'>
      { displayCards } 
    </div>
  );

};


CardContainer.propTypes = {
  cardInfo: PropTypes.array,
  toggleFavorite: PropTypes.func,
  category: PropTypes.string,
  favorites: PropTypes.array
};