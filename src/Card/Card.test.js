import React from 'react';
import { Card } from '../Card/Card';
import { shallow } from 'enzyme';

describe('Card', () => {

  it('should match the snapshot of the card when rendered', () => {
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
      <Card
        card={ mockCard }
        key={ 1 }
        cardKey={ 'vehicle1' }
        toggleFavorite={ jest.fn() }
        favorites={ mockFavorites }
      /> 
    );
    
    expect(wrapper).toMatchSnapShot;
  });

  it.skip('should have a classname of "clicked" if selected is truthy', () => {
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
      <Card
        card={ mockCard }
        key={ 1 }
        cardKey={ 'vehicle1' }
        toggleFavorite={ jest.fn() }
        favorites={ mockFavorites }
      /> 
    );

    expect(wrapper).toHave.style('className', 'clicked');
  });
});
