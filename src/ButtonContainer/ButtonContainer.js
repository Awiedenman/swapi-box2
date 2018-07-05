import React from 'react';
import { Button } from '../Button/Button';
import PropTypes from 'prop-types';

export const ButtonContainer = ( { setCategory  } ) => {
  return (
    <div>
      <Button 
        name='People'
        setCategory ={ setCategory  }
      />
      <Button 
        name='Planets'
        setCategory ={ setCategory  }
      />
      <Button 
        name='Vehicles'
        setCategory ={ setCategory  }
      />
    </div>
  );
};

ButtonContainer.propTypes = {
  setCategory: PropTypes.func
};