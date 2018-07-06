import React from 'react';
import { Button } from '../Button/Button';
import PropTypes from 'prop-types';

export const ButtonContainer = ( { setCategory  } ) => {
  return (
    <div>
      <Button 
        name='people'
        setCategory ={ setCategory  }
      />
      <Button 
        name='planets'
        setCategory ={ setCategory  }
      />
      <Button 
        name='vehicles'
        setCategory ={ setCategory  }
      />
    </div>
  );
};

ButtonContainer.propTypes = {
  setCategory: PropTypes.func
};