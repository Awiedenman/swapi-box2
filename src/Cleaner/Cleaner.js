
import { personHomeworld } from '../apiCalls/apiCalls';
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
          // 'species': person.species.map( specie => {
          // //make fetch here,
          // }),
          'population_of_homeworld':0
        }
      };
      
    });
    return Promise.all(cleanPeopleData);

    case 'planets':

    

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