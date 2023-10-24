//Sorts the data I want to take and places it into an array for state
export const processCountryData = (data) => {
  const countryData = data[0];
  const newCountryInfo = [
    countryData.name['official'],
    countryData.capital && countryData.capital[0]
      ? countryData.capital[0]
      : 'none',
    countryData.population.toLocaleString(),
    countryData.currencies ? countryData.currencies : 'none',
    countryData.languages ? countryData.languages : 'none',
    countryData.continents[0],
    countryData.maps['googleMaps'],
    countryData.flags.svg,
    countryData.coatOfArms.svg,
  ];

  return newCountryInfo;
};
