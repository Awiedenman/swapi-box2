import React from 'react';
import { Button } from './Button';
import { shallow } from 'enzyme';

describe('Button', () => {

  let wrapper;
  let mockCategory;

  beforeEach(() => {
    
    mockCategory = 'vehicles';

    wrapper = shallow (
      <Button 
        name='vehicles'
        setCategory={ jest.fn() }
      />);
  });
  
  it('should match the snapshot of the Button rendered on page load', () => {

    expect(wrapper).toMatchSnapshot;
  });

  it('should call setCategory with the params of the button name when button is clicked', () => {

    wrapper.instance().simulate('click')

    expect(wrapper.setCategory).toHaveBeenCalledWith();
  });
});