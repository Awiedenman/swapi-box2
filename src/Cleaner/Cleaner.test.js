import cleaner from './Cleaner';

describe('cleaner', () => {

  it('should return the correct data when passed a argument of films', () => {
   
    const mockCleanData = [{
      opening_crawl: "Turmoil has engulfed the\r\nGalactic Republic. The taxation\r\nof trade routes to outlying star\r\nsystems is in dispute.\r\n\r\nHoping to resolve the matter\r\nwith a blockade of deadly\r\nbattleships, the greedy …",
      release_date: "1999-05-19",
      title: "The Phantom Menace"
    }];

    const mockDirtyData = {
      count: 7,
      next: null,
      previous: null,
      results: [
        { title: "The Phantom Menace",
          episode_id: 1,
          opening_crawl: "Turmoil has engulfed the\r\nGalactic Republic. The taxation\r\nof trade routes to outlying star\r\nsystems is in dispute.\r\n\r\nHoping to resolve the matter\r\nwith a blockade of deadly\r\nbattleships, the greedy …",
          director: "George Lucas",
          producer: "Rick McCallum",
          release_date: "1999-05-19",
          characters: [
            "https://swapi.co/api/people/2/"
          ],
          planets: [
            "https://swapi.co/api/planets/8/"   
          ],
          starships: [
            "https://swapi.co/api/starships/40/"
          ],
          vehicles: [
            "https://swapi.co/api/vehicles/33/"

          ],
          species: [
            "https://swapi.co/api/species/1/"
            
          ],
          created: "2014-12-19T16:52:55.740000Z",
          edited: "2015-04-11T09:45:18.689301Z",
          url: "https://swapi.co/api/films/4/"
        }
      ]
    };

    const result = cleaner( mockDirtyData, 'films');

    expect( result ).toEqual( mockCleanData );
  });

  it.skip('should return the correct data when passed the argument people', async() => {

    const mockCleanData = {
      homeworld: "Tatooine",
      population_of_homeworld: "200000",
      species: "Human",
      name: "Luke Skywalker"
    };

    const mockDirtyData = {
      count: 87,
      next: "https://swapi.co/api/people/?page=2",
      previous: null,
      results: [{
        name: "Luke Skywalker",
        height: "172",
        mass: "77",
        hair_color: "blond",
        skin_color: "fair",
        eye_color: "blue",
        birth_year: "19BBY",
        gender: "male",
        homeworld: "https://swapi.co/api/planets/1/",
        films: [
          "https://swapi.co/api/films/2/"
        ],
        species: [
          "https://swapi.co/api/species/1/"
        ],
        vehicles: [
          "https://swapi.co/api/vehicles/14/"
        ],
        starships: [
          "https://swapi.co/api/starships/12/"
        ],
        created: "2014-12-09T13:50:51.644000Z",
        edited: "2014-12-20T21:17:56.891000Z",
        url: "https://swapi.co/api/people/1/"
      }]
    };

    window.fetch = jest.fn();

    cleaner( mockDirtyData, 'people');

    await expect( window.fetch ).toHaveBeenCalled();

  });

  it.skip('should return the correct data when passed the argument of planets', () => {
    const mockData = {
      count: 61,
      next: "https://swapi.co/api/planets/?page=2",
      previous: null,
      results: [{
        name: "Alderaan",
        rotation_period: "24",
        orbital_period: "364",
        diameter: "12500",
        climate: "temperate",
        gravity: "1 standard",
        terrain: "grasslands, mountains",
        surface_water: "40",
        population: "2000000000",
        residents: [
          "https://swapi.co/api/people/5/"  
        ],
        films: [
          "https://swapi.co/api/films/6/",
          "https://swapi.co/api/films/1/"
        ],
        created: "2014-12-10T11:35:48.479000Z",
        edited: "2014-12-20T20:58:18.420000Z",
        url: "https://swapi.co/api/planets/2/"
      }]
    };

    const mockResidentData = {
      name: "Leia Organa",
      height: "150",
      mass: "49",
      hair_color: "brown",
      skin_color: "light",
      eye_color: "brown",
      birth_year: "19BBY",
      gender: "female",
      homeworld: "https://swapi.co/api/planets/2/",
      films: [
        "https://swapi.co/api/films/2/",
        "https://swapi.co/api/films/6/",
        "https://swapi.co/api/films/3/",
        "https://swapi.co/api/films/1/",
        "https://swapi.co/api/films/7/"
      ],
      species: [
        "https://swapi.co/api/species/1/"
      ],
      vehicles: [
        "https://swapi.co/api/vehicles/30/"
      ],
      starships: [],
      created: "2014-12-10T15:20:09.791000Z",
      edited: "2014-12-20T21:17:50.315000Z",
      url: "https://swapi.co/api/people/5/"
    };
          
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(mockResidentData)
    }));       
  });


  it.skip('should return the correct data when passed the argument of vehicles', () => {

    const mockDirtyData = {
      count: 39, 
      next: "https://swapi.co/api/vehicles/?page=2", 
      previous: null, 
      results: [
        {
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

    const mockCleanData = {
      name: "Sand Crawler",
      data:
        { Class: "wheeled",
          Model: "Digger Crawler",
          NumberOfPassengers: "30"
        } 
    };

    const result = cleaner(mockDirtyData, 'vehilces');

    expect(result).toEqual(mockCleanData);
  });
});