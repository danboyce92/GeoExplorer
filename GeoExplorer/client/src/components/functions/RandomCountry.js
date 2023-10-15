import { getAllCountries } from '../../api/GetAllCountries';

const countries = [];

// export const getAllCountries = async () => {
//   const response = await fetch('https://restcountries.com/v3.1/all');

//   const countriesJson = await response.json();

//   for (let country of countriesJson) {
//     countries.push(country.name['common']);
//   }

//   return countries;
// };

export const randomNumber = () => {
  const number = Math.floor(Math.random() * 251);
  return number;
};

export const randomCountryRequest = async () => {
  const randomCountry = countries[randomNumber];
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${randomCountry}?fullText=true`
  );
  return response.json();
};

export const randomCountry = async (num) => {
  const all = await getAllCountries();
  const nameArray = [];
  for (let country of all) {
    nameArray.push(country.name['common']);
  }
  return nameArray[num];
};
