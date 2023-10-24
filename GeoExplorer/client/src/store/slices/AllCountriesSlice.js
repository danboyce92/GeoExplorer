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
        //console.log('loading now true');
      })
      .addCase(getAllCountries.fulfilled, (state, action) => {
        const names = [];
        for (let country of action.payload) {
          names.push(country.name['common']);
        }
        state.countries = names;
      })
      .addCase(getAllCountries.rejected, (state) => {
        //console.log('loading now false');
        console.error('Error: Error retrieving all countries from API');
      });
  },
});

export const AllCountriesReducer = AllCountries.reducer;
