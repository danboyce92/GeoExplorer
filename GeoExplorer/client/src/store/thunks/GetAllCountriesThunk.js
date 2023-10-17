import { createAsyncThunk } from '@reduxjs/toolkit';
import { url } from '../../api/config';

export const getAllCountries = createAsyncThunk(
  'countries/getAllCountries',
  () => {
    return fetch(`${url}all`)
      .then((res) => res.json())
      .catch((err) => console.log(err));
  }
);
