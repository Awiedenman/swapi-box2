import React from 'react';
import { Button } from '../Button/Button';

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