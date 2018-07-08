import React from 'react';
import { ButtonContainer } from './ButtonContainer';
import { shallow } from 'enzyme';

describe('ButtonContainer', () => {
  
  it('should match the snapshot rendered on page load', () => {

    const wrapper = shallow( 
      <ButtonContainer
        setCategory ={ jest.fn()  }
      />);

    expect(wrapper).toMatchSnapShot;
  });

});