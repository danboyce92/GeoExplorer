import { getAllCountries } from '../../api/GetAllCountries';
import { getCountry } from '../../api/GetCountry';

export const randomNumber = () => {
  const number = Math.floor(Math.random() * 251);
  return number;
};

//Creates an array of all country names in API
export const randomCountry = async () => {
  const all = await getAllCountries();
  const nameArray = [];
  for (let country of all) {
    nameArray.push(country.name['common']);
  }
  return nameArray;
};

//Takes a random name from countries array and makes request to API
export const randomRequest = async (all, retrieveData, errTogg) => {
  const chosenRandomCountry = await all[randomNumber()];

  try {
    const response = await getCountry(chosenRandomCountry);
    await retrieveData(response);
  } catch (err) {
    console.error(err);
    errTogg();
  }
};
