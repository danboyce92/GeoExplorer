import { createSlice } from '@reduxjs/toolkit';
import { getAllCountries } from '../thunks/GetAllCountriesThunk';

const AllCountries = createSlice({
  name: 'allCountries',
  initialState: {
    countries: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCountries.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCountries.fulfilled, (state, action) => {
        state.isLoading = false;
        const names = [];
        for (let country of action.payload) {
          names.push(country.name['common']);
        }
        state.countries = names;
      })
      .addCase(getAllCountries.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const AllCountriesReducer = AllCountries.reducer;
