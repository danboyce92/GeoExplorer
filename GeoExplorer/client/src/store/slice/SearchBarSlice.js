import { createSlice } from '@reduxjs/toolkit';
import { getAllCountries } from '../thunks/GetAllCountriesThunk';
import { getCountryRequest } from '../thunks/GetCountryRequestThunk';

const SearchBarSlice = createSlice({
  name: 'searchBar',
  initialState: {
    countries: [],
    countryInput: '',
    requestedCountry: [],
    isLoading: true,
  },
  reducers: {
    setCountryInput(state, action) {
      state.countryInput = action.payload;
    },
  },
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
      })
      .addCase(getCountryRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCountryRequest.fulfilled, (state, action) => {
        console.log(action.payload);
        state.requestedCountry = action.payload;
        state.isLoading = false;
      })
      .addCase(getCountryRequest.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { setCountryInput } = SearchBarSlice.actions;
export const searchBarReducer = SearchBarSlice.reducer;
