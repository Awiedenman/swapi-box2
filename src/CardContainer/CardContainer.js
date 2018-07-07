import React from 'react';
import { Card } from '../Card/Card';
import PropTypes from 'prop-types';
import './CardContainer.css';


export const CardContainer = ({ cardInfo }) => {
  console.log('cardInfo', cardInfo);
  
  let displayCards = [];
  if ( cardInfo ){
    displayCards = cardInfo.map(( card, index )=> {
      return ( <Card
        card={card}
        key={index}
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
  cardInfo: PropTypes.array
};