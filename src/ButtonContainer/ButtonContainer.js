import React from 'react';
import { Button } from '../Button/Button';
import PropTypes from 'prop-types';

export const ButtonContainer = ( { fetchStarWarsData  } ) => {
  return (
    <div>
      <Button 
        name='People'
        fetchStarWarsData ={ fetchStarWarsData  }
      />
      <Button 
        name='Planets'
        fetchStarWarsData ={ fetchStarWarsData  }
      />
      <Button 
        name='Vehicles'
        fetchStarWarsData ={ fetchStarWarsData  }
      />
    </div>
  );
};

ButtonContainer.propTypes = {
  fetchStarWarsData: PropTypes.func
};