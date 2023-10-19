import { createSelector } from 'reselect';

const selectCountry = (state) => state.country.countryInput;

export const getCountrySelector = createSelector(
  [selectCountry],
  (country) => country
);
