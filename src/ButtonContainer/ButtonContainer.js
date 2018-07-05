import React from 'react';
import { Button } from '../Button/Button';

export const ButtonContainer = ( {buttonFetch} ) => {
  return (
    <div>
      <Button name='People'/>
      <Button name='Planets'/>
      <Button name='Vehicles'/>


    </div>
  );
};