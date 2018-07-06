import cleaner from '../Cleaner/Cleaner';

export const starWarsData = async ( category ) => {
  // console.log(category)
  const url = `https://swapi.co/api/${category}`;
  try {
    const response = await fetch(url);
    // console.log(response);
    const data = await response.json();
    // console.log(data);
    return await cleaner( data, category);
  } catch ( error ) {
    throw new Error(`${error.message}`);
  }
};

export const personHomeworld = async( url ) => {
  const response = await fetch(url);
  const data = await response.json();
  // console.log(data)
  return data.name;
};

export const personHomeworldPopulation = async( url ) => {
  const response = await fetch( url );
  const data = await response.json();
  return data.population;
};

export const personHomeworldSpecies = async(url) =>{
  const response = await fetch( url );
  console.log(response)
  const data = await response.json();
  console.log(data.name);
  return data.name;
};


// export const filmFetch = async () => {
//   const randomNum = Math.floor(Math.random() * 6) + 1;
//     const url = `https://swapi.co/api/films/${randomNum}`;
//     const response = await fetch(url);
//     console.log(response)

