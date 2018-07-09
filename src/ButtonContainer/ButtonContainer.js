import React from 'react';
import { Button } from '../Button/Button';
import PropTypes from 'prop-types';

export const ButtonContainer = ( { setCategory, favorites  } ) => {
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
      <Button 
        name='favorites'
        setCategory ={ setCategory  }
      />
      <div className='counter'>{'FAVORITES' + ':  ' + favorites.length}</div>
    </div>
  );
};

ButtonContainer.propTypes = {
  setCategory: PropTypes.func,
  favorites: PropTypes.array
};