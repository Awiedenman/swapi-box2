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

  it('should return the correct data when passed the argument people', () => {

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

    const mockPerso

    const result = cleaner( mockDirtyData, 'people');

  });

  it('should return the correct data when passed the argument of planets', () => {

  });

  it('should return the correct data when passed the argument of vehicles', () => {

  });
});