import { createSelector } from 'reselect';

export const selectCountryInfo = createSelector(
  (state) => state.country.countryInfo,
  (countryInfo) => countryInfo
);
