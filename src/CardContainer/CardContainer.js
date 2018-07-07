import React from 'react';
import { Card } from '../Card/Card';
import PropTypes from 'prop-types';


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
    <div>
      { displayCards } 
    </div>
  );

};


CardContainer.propTypes = {
  cardInfo: PropTypes.array
};