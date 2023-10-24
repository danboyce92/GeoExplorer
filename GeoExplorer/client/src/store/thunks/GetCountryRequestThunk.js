import { createAsyncThunk } from '@reduxjs/toolkit';
import { url } from '../../api/config';
import { setError, setLoading } from '../slices/ToggleSlice';

export const getCountryRequest = createAsyncThunk(
  'countries/getCountryRequest',
  async (_, { getState, dispatch }) => {
    const state = getState();
    const country = state.country.countryInput;

    try {
      const response = await fetch(`${url}name?country=${country}`);
      //For non-success status codes 404, 500
      if (!response.ok) {
        dispatch(setError(true));
        dispatch(setLoading(false));
        console.error(`Request failed with status code ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      //For network errors
      dispatch(setError(true));
      dispatch(setLoading(false));
      console.error(error);
    }
  }
);
