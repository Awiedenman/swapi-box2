
// import { filmFetch } from '../apiCalls/apiCalls';
var cleaner = ( data, category ) => {
  // console.log(data)
  switch (category) {
    
    case 'films':

    var cleanFilms = data.results.map( film  => { 
      // console.log(film)
      return {

        'title': film.title,
        'opening_crawl': film.opening_crawl,
        'release_date': film.release_date
      };
    
    });
    return cleanFilms;
}
};

  export default cleaner;
  
  
// const cleanPeopleData = mockPeopleData.results.map((person) => {
//   return {
//     [person.name]: {
//       'name': person.name,
//       'homeworld': person.homeworld,
//       'species': person.species.map( specie => {
//         //make fetch here,
//       }),
//       'population_of_homeworld': person.homeworld,
//     }
//   }
// });

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


  

