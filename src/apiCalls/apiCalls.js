import { cleanFilmData } from '../Cleaner/Cleaner';

export const filmFetch = async () => {
  const randomNum = Math.floor(Math.random() * 6) +1;
  const url = `https://swapi.co/api/films/${randomNum}`;
  try {
    const response = await fetch(url);
    console.log(response);
    const filmData = await response.json();
    console.log(filmData);
    return cleanFilmData(filmData);
  } catch ( error ) {
    throw new Error(`${error.message}`);
  }
};

// export const filmFetch = async () => {
//   const randomNum = Math.floor(Math.random() * 6) + 1;
//     const url = `https://swapi.co/api/films/${randomNum}`;
//     const response = await fetch(url);
//     console.log(response)

