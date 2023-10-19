import { createAsyncThunk } from '@reduxjs/toolkit';
import { url } from '../../api/config';

export const getCountryRequest = createAsyncThunk(
  'countries/getCountryRequest',
  async (_, { getState }) => {
    const state = getState();
    const country = state.country.countryInput;

    try {
      const response = await fetch(`${url}name?country=${country}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);
