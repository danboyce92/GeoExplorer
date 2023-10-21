//Sorts the data I want to take and places into an array for state
export const processCountryData = (data) => {
  const countryData = data['data'][0];
  const newCountryInfo = [
    countryData.name['official'],
    countryData.capital[0],
    countryData.population.toLocaleString(),
    countryData.currencies,
    countryData.languages,
    countryData.continents[0],
    countryData.maps['googleMaps'],
    countryData.flags.svg,
    countryData.coatOfArms.svg,
  ];

  return newCountryInfo;
};
