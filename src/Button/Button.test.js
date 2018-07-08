import React from 'react';
import { Button } from './Button';
import { shallow } from 'enzyme';

describe('Button', () => {

  let wrapper;
  let mockSetCategory;
  let mockCategory;

  beforeEach(() => {
    
    mockSetCategory = jest.fn();
    mockCategory = 'vehicles';


    wrapper = shallow (
      <Button 
        name='vehicles'
        setCategory={ mockSetCategory }
      />);
  });
  
  it('should match the snapshot of the Button rendered on page load', () => {

    expect(wrapper).toMatchSnapshot;
  });

  it('should call setCategory with the params of the button name when button is clicked', () => {

    wrapper.simulate('click')

    expect(mockSetCategory).toHaveBeenCalledWith(mockCategory);
  });
});