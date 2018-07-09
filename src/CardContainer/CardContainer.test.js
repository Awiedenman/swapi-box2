import React from 'react';
import { CardContainer } from './CardContainer';
import { shallow } from 'enzyme';

describe('CardContainer', () => {
  
  it('should match the snapshot when rendered', () => {
   
    const mockCategory = 'vehicles';

    const mockCard = {
      name: "Sand Crawler", 
      data: {
        Class : "wheeled", 
        Model : "Digger Crawler", 
        NumberOfPassengers : "30"
      }
    };

    const mockFavorites = [{
      name: "Sand Crawler",
      data: {
        Class: "wheeled",
        Model: "Digger Crawler",
        NumberOfPassengers: "30"
      }
    },
    { name: "Sand Crawler",
      data: {
        Class: "wheeled",
        Model: "Digger Crawler",
        NumberOfPassengers: "30"
      }
    }];

    const wrapper = shallow(
      <CardContainer
        toggleFavorite={ jest.fn() }
        category={ mockCategory }
        favorites={ mockFavorites }
      />
    );

    expect(wrapper).toMatchSnapshot;
  });

});