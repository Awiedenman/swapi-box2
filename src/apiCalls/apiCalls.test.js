import { starWarsData, personHomeworld, personHomeworldPopulation, personHomeworldSpecies, planetResident } from './apiCalls/apiCalls';

describe('apiCalls', () => {

  
  beforeEach(() => {
    
    const mockData = {
      Class: "wheeled",
      Model: "Digger Crawler",
      Name: "Sand Crawler",
      NumberOfPassengers: "30"
    };
    const mockCategory = 'vehicles';
    const mockUrl = `https://swapi.co/api/${mockCategory}`;
    
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json : () => Promise.resolve(mockData)
    }));
  });

  describe('starWarsData', () => {
     
    it('should call fetch with the correct parameters', () => {


    });

    it('should return starWars data on fetch', () => {

    });

    it('should update state with error status if fetch fails', () => {

    });

  });
});
