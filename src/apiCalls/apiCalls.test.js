import {
  starWarsData,
  personHomeworld,
  personHomeworldPopulation,
  personHomeworldSpecies,
  planetResident
} from './apiCalls';
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
        count: 39,
        next: "https://swapi.co/api/vehicles/?page=2",
        previous: null,
        results: [{
          name: "Sand Crawler",
          model: "Digger Crawler",
          manufacturer: "Corellia Mining Corporation",
          cost_in_credits: "150000",
          length: "36.8",
          max_atmosphering_speed: "30",
          crew: "46",
          passengers: "30",
          cargo_capacity: "50000",
          consumables: "2 months",
          vehicle_class: "wheeled",
          pilots: [],
          films: [
            "https://swapi.co/api/films/5/",
            "https://swapi.co/api/films/1/"
          ],
          created: "2014-12-10T15:36:25.724000Z",
          edited: "2014-12-22T18:21:15.523587Z",
          url: "https://swapi.co/api/vehicles/4/"
        }]
      };
      
      mockData = {
        name: "Sand Crawler",
        data: {
          Class: "wheeled",
          Model: "Digger Crawler",
          NumberOfPassengers: "30"
        }
      },
      
      mockCategory = 'vehicles';
      
      mockUrl = `https://swapi.co/api/${mockCategory}`;
    });

      
    it('should call fetch with the correct parameters', async () => {

      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockDirtyData)
      }));
      
      await starWarsData(mockCategory);

      expect(window.fetch).toHaveBeenCalledWith(mockUrl);
    });

    // it('should return starWars data on fetch', async () => {
    //   window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    //     status: 200,
    //     json: () => Promise.resolve(mockDirtyData)
    //   }));
    //   const result = await starWarsData('films');
    //   // console.log(starWarsData);
    //   await expect(result).toEqual(mockDirtyData);
    // });

    it('should throw error message if response is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500
      }));

      const result = starWarsData(mockCategory);
      // console.log(result);

      const expected = Error('500');

      await expect(result).rejects.toEqual(expected);
    });

    it('should throw an error is the response fails', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.reject({
        status: 404
      }));

      const result = starWarsData(mockCategory);
      const expected = {
        status: 404};

      await expect(result).rejects.toEqual( expected );
    });
  });


  describe('personHomeworld', () => {

    const mockUrl = 'https://swapi.co/api/planets/1/';
    const mockData = {
      name: "Tatooine",
      rotation_period: "23",
      orbital_period: "304",
      diameter: "10465",
      climate: "arid",
      gravity: "1 standard",
      terrain: "desert",
      surface_water: "1",
      population: "200000",
      residents: [
        "https://swapi.co/api/people/1/",
        "https://swapi.co/api/people/2/",
        "https://swapi.co/api/people/4/",
      ],
      films: [
        "https://swapi.co/api/films/5/",
        "https://swapi.co/api/films/4/",
      ],
      created: "2014-12-09T13:50:49.641000Z",
      edited: "2014-12-21T20:48:04.175778Z",
      url: "https://swapi.co/api/planets/1/"
    };

    it('should call fetch with the correct params', async() => {
      
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json : () => Promise.resolve(mockData)}));
        
      await personHomeworld(mockUrl);
        
      expect(window.fetch).toHaveBeenCalledWith(mockUrl);
    });

    it('should throw and error if the status is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500
      }));

      const result = personHomeworld('https://swapi.co/api/planets/1/');
      const expected = Error('500');

      expect(result).rejects.toEqual(expected);
    });
  });


  describe('personHomeworldPopulation', () => {

    const mockUrl = 'https://swapi.co/api/planets/1/';
    const mockData = {
      name: "Tatooine",
      rotation_period: "23",
      orbital_period: "304",
      diameter: "10465",
      climate: "arid",
      gravity: "1 standard",
      terrain: "desert",
      surface_water: "1",
      population: "200000",
      residents: [
        "https://swapi.co/api/people/1/",
        "https://swapi.co/api/people/2/",
        "https://swapi.co/api/people/4/"
      ],
      films: [
        "https://swapi.co/api/films/5/",
        "https://swapi.co/api/films/4/"
      ],
      created: "2014-12-09T13:50:49.641000Z",
      edited: "2014-12-21T20:48:04.175778Z",
      url: "https://swapi.co/api/planets/1/"
    };

    it('should call fetch with the correct params', () => {

      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockData)
      }));
      
      personHomeworldPopulation(mockUrl);
      
      expect(window.fetch).toHaveBeenCalledWith(mockUrl);
    });
    
    it('should throw and error if the status is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500
      }));
        
      const result = personHomeworld('https://swapi.co/api/planets/1/');
      const expected = Error('500');
        
      expect(result).rejects.toEqual(expected);
    });
  });
      

  describe('personHomeWorldSpecies', () => {
        
    const mockUrl = 'https://swapi.co/api/species/1/';
    const mockData = {
          
      name: "Human",
      classification: "mammal",
      designation: "sentient",
      average_height: "180",
      skin_colors: "caucasian, black, asian, hispanic",
      hair_colors: "blonde, brown, black, red",
      eye_colors: "brown, blue, green, hazel, grey, amber",
      average_lifespan: "120",
      homeworld: "https://swapi.co/api/planets/9/",
      language: "Galactic Basic",
      people: [
        "https://swapi.co/api/people/1/",
        "https://swapi.co/api/people/4/",
      ],
      films: [
        "https://swapi.co/api/films/2/",
        "https://swapi.co/api/films/7/"
      ],
      created: "2014-12-10T13:52:11.567000Z",
      edited: "2015-04-17T06:59:55.850671Z",
      url: "https://swapi.co/api/species/1/"
    };
              
    it('should call fetch with the correct the params', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockData)
      }));
                  
      personHomeworldSpecies('https://swapi.co/api/species/1/');
                  
      expect(window.fetch).toHaveBeenCalledWith(mockUrl);
    });
                  
    it('should throw an error if the status does not come back ok', () => {
                    
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500
      }));
                      
      const result = personHomeworldSpecies(mockUrl);
      const expected = Error('500');
                      
      expect(result).rejects.toEqual(expected);              
    });
                      
    it('should throw an error if the fetch response fails', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.reject({
        'status': 404
      }));
      const expected = {
        'status': 404
      };
                            
      expect(personHomeworldSpecies(' ')).rejects.toEqual(expected);
    });
  });                           
});