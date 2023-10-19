import { createSelector } from 'reselect';

const selectCountries = (state) => state.allCountries.countries;

export const getCountriesSelector = createSelector(
  [selectCountries],
  (countries) => countries
);
