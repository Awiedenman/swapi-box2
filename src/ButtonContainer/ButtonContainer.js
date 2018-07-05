import React from 'react';
import { Button } from '../Button/Button';
import PropTypes from 'prop-types';

export const ButtonContainer = ( {buttonFetch} ) => {
  return (
    <div>
      <Button 
        name='People'
        buttonFetch={ buttonFetch }
      />
      <Button 
        name='Planets'
        buttonFetch={ buttonFetch }
      />
      <Button 
        name='Vehicles'
        buttonFetch={ buttonFetch }
      />
    </div>
  );
};

ButtonContainer.propTypes = {
  buttonFetch: PropTypes.func
};