
import { personHomeworld, personHomeworldPopulation, personHomeworldSpecies, planetResidents } from '../apiCalls/apiCalls';
import { promises } from 'fs';
const cleaner = ( data, category ) => {
  // console.log(data)
  switch (category) {
    
  case 'films':

    var cleanFilmsData = data.results.map( film  => { 
      // console.log(film)
      return {
        'title': film.title,
        'opening_crawl': film.opening_crawl,
        'release_date': film.release_date
      };
    });
    return cleanFilmsData;
  
  case 'people':

    var cleanPeopleData = data.results.map( async(person) => {
      return {
        'name': person.name,
        'data': {
          'name': person.name,
          'homeworld': await personHomeworld(person.homeworld),
          'species': await personHomeworldSpecies(person.species),
          'population_of_homeworld':await personHomeworldPopulation(person.homeworld)
        }
      };
    });
    // console.log(cleanPeopleData)
    return Promise.all(cleanPeopleData);

  case 'planets':

    var cleanPlanetData = data.results.map( async( planet ) => {
      const residents = planet.residents.map( async( resident ) => {
        // console.log(resident)
        return await planetResidents(resident);
      });
      let planetResidentData = await Promise.all(residents);
    
      return { 
        'Name': planet.name, 
        'Terrain': planet.terrain,
        'Population': planet.population,
        'Climate': planet.climate,
        'Residents': planetResidentData 
      };
    });
    // console.log(cleanPlanetData)

    return Promise.all(cleanPlanetData);
     
    // case vehicles:

    // var cleanVehicleData = data.results.map( vehicle => {
    //   return {
    //       'Name': vehicle.name,
    //       'Model': vehicle.model,
    //       'Class': vehicle.class,
    //       'Number of Passengers': vehicle.passengers
    //   };
    // });
  default: return 'error.message';
  }
};
      
      
export default cleaner;

// export const cleanPlanetData = mockPlanetsData.results.map(planet => {
//   return {
//     [planet.name]: {
//       'name': planet.name,
//       'terrain': planet.terrain,
//       'population': planet.population,
//       'climate': planet.climate,
//       'residents': planet.residents.map(resident => {
//         return resident
//         //make fetchCall here
//       })
//     }
//   }
// })