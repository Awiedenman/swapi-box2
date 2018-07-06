import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';


export const CardContainer = ({ cardInfo }) => {
  const displayCards = cardInfo.map( card => (
     
    <Card 
    <h1>card.name</h1>
    />;
      
  
  });

  return (
    <div>
      {/* {displayCards} */}
    </div>
  );

};

CardContainer.propTypes = {
  peopleInfo: PropTypes.array,
  planetInfo: PropTypes.array,
  vehicleInfo: PropTypes.array
};