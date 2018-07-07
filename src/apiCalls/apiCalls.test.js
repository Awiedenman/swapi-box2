import { starWarsData, personHomeworld, personHomeworldPopulation, personHomeworldSpecies, planetResident } from './apiCalls';
// import cleaner from '../Cleaner/Cleaner';
jest.mock('../Cleaner/Cleaner');

describe('apiCalls', () => {
  
  
  describe('starWarsData', () => {
    let mockData;
    let mockCategory;
    let mockUrl;
    let mockDirtyData;

    beforeEach(() => {

      mockDirtyData = {
        name : "Sand Crawler",
        model : "Digger Crawler",
        manufacturer : "Corellia Mining Corporation",
        cost_in_credits : "150000",
        length : "36.8",
        max_atmosphering_speed : "30",
        crew : "46",
        passengers : "30",
        cargo_capacity : "50000",
        consumables : "2 months",
        vehicle_class : "wheeled",
        pilots : [],
        films : [
          "https://swapi.co/api/films/5/",
          "https://swapi.co/api/films/1/"
        ],
        created: "2014-12-10T15:36:25.724000Z",
        edited: "2014-12-22T18:21:15.523587Z",
        url: "https://swapi.co/api/vehicles/4/"
      };
      
      mockData = {
        name: "Sand Crawler",
        data: {
          Class: "wheeled",
          Model: "Digger Crawler",
          NumberOfPassengers: "30"
        }
      };
      
      mockCategory = 'vehicles';

      mockUrl = `https://swapi.co/api/${mockCategory}`;
      
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockDirtyData)
      }));
    });
    
    it('should call fetch with the correct parameters', async () => {
      await starWarsData(mockCategory);

      expect(window.fetch).toHaveBeenCalledWith(mockUrl);
    });

    it.skip('should return starWars data on fetch', async() => {
      // window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      //   status: 200,
      //   json: () => Promise.resolve(mockDirtyData)
      // }));
      const result = await starWarsData('vehicles');
      // console.log(starWarsData);
      await expect( result ).toEqual( mockData );
    });

    it('should throw error status if response is bad', async() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500
      }));
      
      const result = starWarsData(mockCategory);
      // console.log(result);
      
      const expected = Error('500');
        
      await expect( result ).rejects.toEqual( expected );
    });

    // it('should throw an error is the response fails', async () => {
    //   window.fetch = jest.fn().mockImplementation(() => Promise.reject({
    //     status: 404
    //   }));

    //   const result = starWarsData(mockCategory);
    //   const expected = new Error({status: '404'});

    //   await expect(result).rejects.toEqual( expected );
    // });


  });
});
