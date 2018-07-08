
import { personHomeworld, personHomeworldPopulation, personHomeworldSpecies, planetResidents } from '../apiCalls/apiCalls';

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
      const residents = planet.residents.map( async( residentUrl ) => {
        return await planetResidents(residentUrl);
      });
      let planetResidentData = await Promise.all(residents);
    
      return { 
        'name': planet.name, 
        'data' : {
          'Terrain': planet.terrain,
          'Population': planet.population,
          'Climate': planet.climate,
          'Residents': planetResidentData 
        }
      };
    });

    return Promise.all(cleanPlanetData);
     
  case 'vehicles':

    var cleanVehicleData = data.results.map( vehicle => {
 console.log(data)
      return {
        'name': vehicle.name,
        'data': {
          'Model': vehicle.model,
          'Class': vehicle.vehicle_class,
          'NumberOfPassengers': vehicle.passengers
        }
      }; 
    });
    return cleanVehicleData;
    // console.log(cleanVehicleData);

  default: return 'Sorry, we could not return you your requested data at this time ';
  }
};
      
      
export default cleaner;


