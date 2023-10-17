import { createSelector } from 'reselect';

const selectCountries = (state) => state.searchBar.countries;

export const getCountriesSelector = createSelector(
  [selectCountries],
  (countries) => countries
);
