import { configureStore } from '@reduxjs/toolkit';
import {
  countryReducer,
  setCountryInput,
  setCountryInfo,
} from './slices/CountrySlice';
import {
  ToggleReducer,
  setLoading,
  setError,
  setDisplay,
} from './slices/ToggleSlice';
import { AllCountriesReducer } from './slices/AllCountriesSlice';

const store = configureStore({
  reducer: {
    country: countryReducer,
    toggle: ToggleReducer,
    allCountries: AllCountriesReducer,
  },
});

export {
  store,
  setCountryInput,
  setCountryInfo,
  setLoading,
  setError,
  setDisplay,
};
