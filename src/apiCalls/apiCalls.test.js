import { starWarsData, personHomeworld, personHomeworldPopulation, personHomeworldSpecies, planetResident } from './apiCalls';
import cleaner from '../Cleaner/Cleaner';
jest.mock('../Cleaner/Cleaner');
describe('apiCalls', () => {
  
  
  describe('starWarsData', () => {
    let mockData;
    let mockCategory;
    let mockUrl;

    beforeEach(() => {

      mockData = {
        Class: "wheeled",
        Model: "Digger Crawler",
        Name: "Sand Crawler",
        NumberOfPassengers: "30"
      };
      mockCategory = 'vehicles';
      mockUrl = `https://swapi.co/api/${mockCategory}`;
      
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockData)
      }));
    });
    
    it('should call fetch with the correct parameters', async () => {
      await starWarsData(mockCategory);

      expect(window.fetch).toHaveBeenCalledWith(mockUrl);

    });

    it('should return starWars data on fetch', async() => {
      // await starWarsData(mockCategory);
      await expect( starWarsData(mockCategory) ).resolves.toEqual(mockData);
    });

    it('should update state with error status if fetch fails', async() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.rejects(
      ));
      
      await starWarsData(mockCategory);

      expect.

    });

  });
});
