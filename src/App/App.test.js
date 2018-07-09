import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// 
describe('App', () => {

  let wrapper;
  let mockData;

  beforeEach(() => {

    wrapper = shallow( <App/>, { disableLifecycleMethods : true } );

    mockData = {
      count: 7,
      next: null,
      previous: null,
      results: [{
        title: "The Phantom Menace"
      }]
    };
    
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve( mockData )
    }));
  });

  it('should have and intial state', () => {
    const mockState = {
      category: '',
      films: [],
      people: [],
      planets: [],
      vehicles: [],
      favorites: [],
      errorStatus: ''
    };

    expect(wrapper.state()).toEqual(mockState);
  });
  
  describe('componentDidMount', () => {

    it.skip('should setState of allDistricts after pageload', () => {

      const mockCleanData = [{
        opening_crawl: "Turmoil has engulfed the\r\nGalactic Republic. The taxation\r\nof trade routes to outlying star\r\nsystems is in dispute.\r\n\r\nHoping to resolve the matter\r\nwith a blockade of deadly\r\nbattleships, the greedy …",
        release_date: "1999-05-19",
        title: "The Phantom Menace"
      }];

      wrapper.instance();

      expect(wrapper.instance().state.films).toEqual(mockCleanData);
    });
  });

  describe('setCategory', () => {
    it('should set the state based on the input of name', () => { 
    
      const mockName = 'vehicles';

      // const mockDirtyVehicleData = {
      //   count: 39,
      //   next: "https://swapi.co/api/vehicles/?page=2",
      //   previous: null,
      //   results: [{
      //     name: "Sand Crawler",
      //     model: "Digger Crawler",
      //     manufacturer: "Corellia Mining Corporation",
      //     cost_in_credits: "150000",
      //     length: "36.8",
      //     max_atmosphering_speed: "30",
      //     crew: "46",
      //     passengers: "30",
      //     cargo_capacity: "50000",
      //     consumables: "2 months",
      //     vehicle_class: "wheeled",
      //     pilots: [],
      //     films: [
      //       "https://swapi.co/api/films/5/",
      //       "https://swapi.co/api/films/1/"
      //     ],
      //     created: "2014-12-10T15:36:25.724000Z",
      //     edited: "2014-12-22T18:21:15.523587Z",
      //     url: "https://swapi.co/api/vehicles/4/"
      //   }]
      // };
      // const mockCleanVehicleData = [{
      //   name: "Sand Crawler",
      //   data: {
      //     Class: "wheeled",
      //     Model: "Digger Crawler",
      //     NumberOfPassengers: "30"
      //   }
      // }];

      // window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      //   status: 200,
      //   json: () => Promise.resolve(mockDirtyVehicleData)
      // }));

      wrapper.instance().setCategory( mockName );
      
    expect(wrapper.instance().state.category).toEqual(mockName);      
    // expect( wrapper.instance().state.vehicles).toEqual(mockCleanVehicleData);
    });
    
    it('should call starWarsData', () => {
      
      const mockStarWarsData= jest.fn();

      expect( mockStarWarsData ).toHaveBeenCalled;
    });
  });

  describe('toggleFavorite', () => {

    let mockCard;
    let mockFavorites;
    
    beforeEach(()=> {

      mockFavorites = [{
        name: "Sand Crawler",
        data: {
          Class: "wheeled",
          Model: "Digger Crawler",
          NumberOfPassengers: "30"
        }
      },
      {
        name: "T-16 skyhopper",
        data: {
          Class: "T-16 skyhopper",
          Model: "repulsorcraft",
          NumberOfPassengers: "1"
        }
      }];
    });
    
    it('should add a card to favorites if the clicked card is doesnt match an existing name in the array', () => {
      
      const mockFavorites= [{
        name: "X-34 landspeeder",
        data: {
          Class: "repulsorcraft",
          Model: "X-34 landspeeder",
          NumberOfPassengers: "1"
        }
      }];

      mockCard = {
        name: "X-34 landspeeder",
        data: {
          Class: "repulsorcraft",
          Model: "X-34 landspeeder",
          NumberOfPassengers: "1"
        }
      };
      
      wrapper.instance().toggleFavorite(mockCard);

      expect(wrapper.state().favorites).toEqual( mockFavorites ) 
    });

    it('should not add a card to favorites if the clicked card matches an existing name in the array', () => {

      mockCard = {
        name: "X-34 landspeeder",
        data: {
          Class: "repulsorcraft",
          Model: "X-34 landspeeder",
          NumberOfPassengers: "1"
        }
      };

      wrapper.instance().toggleFavorite(mockCard);
      wrapper.instance().toggleFavorite(mockCard);
      
      expect(wrapper.state('favorites')).toEqual([]);
      
    });
  });

});