import { configureStore } from '@reduxjs/toolkit';
import {
  countryReducer,
  setCountryInput,
  setCountryInfo,
} from './slice/CountrySlice';
import {
  ToggleReducer,
  setLoading,
  setError,
  setDisplay,
} from './slice/ToggleSlice';
import { AllCountriesReducer } from './slice/AllCountriesSlice';

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
