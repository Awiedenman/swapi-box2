import cleaner from '../Cleaner/Cleaner';

export const starWarsData = async ( category ) => {
  // console.log(category)
  const url = `https://swapi.co/api/${category}`;
  try {
    const response = await fetch(url);
    
    if (response.status === 200) {
    // console.log(response);
      const data = await response.json();

      // console.log(data);
      return await cleaner( data, category);
    } else 
      throw new Error( response.status );
  } catch ( error ) {
    throw error;
  }
};

export const personHomeworld = async( url ) => {
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      const data = await response.json();
      // console.log(data)
      return data.name;
    } 
  } catch (error) {
    throw new Error(`${error.message}`);
  }
};

export const personHomeworldPopulation = async( url ) => {
  try {
    const response = await fetch( url );
    if (response.status === 200 ){
      const data = await response.json();
      return data.population;
    }
  } catch ( error ) {
    throw new Error(`${error.message}`);
  }
}; 

export const personHomeworldSpecies = async(url) =>{
  try{
    const response = await fetch( url );
    if( response.status === 200 ){
      // console.log(response)
      const data = await response.json();
      // console.log(data.name);
      return data.name;
    }
  } catch(error){
    throw new Error(`$(error.message)`);
  }
};

export const planetResidents = async(url) => {
  try {
    const response = await fetch(url);
    if (response.status === 200){
      const data = await response.json();
      // console.log(data)
      return data.name;
    }
  } catch (error){
    throw new Error(`$(error.message`);
  }
};


