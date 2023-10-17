import { createSelector } from 'reselect';

const selectCountry = (state) => state.searchBar.countryInput;

export const getCountrySelector = createSelector(
  [selectCountry],
  (country) => country
);
