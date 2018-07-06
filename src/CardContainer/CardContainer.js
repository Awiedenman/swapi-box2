import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';


export const CardContainer = ({ peopleInfo, planetInfo, vehicleInfo }) => {
  return (
    <div>
    </div>
  );

};

CardContainer.propTypes = {
  peopleInfo: PropTypes.array,
  planetInfo: PropTypes.array,
  vehicleInfo: PropTypes.array
};