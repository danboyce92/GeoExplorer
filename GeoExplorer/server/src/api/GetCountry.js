const url = 'https://restcountries.com/v3.1';

async function getCountry(country) {
  const response = await fetch(`${url}/name/${country}`);
  return response.json();
}
