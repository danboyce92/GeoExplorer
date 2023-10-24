import { createSlice } from '@reduxjs/toolkit';
import { getCountryRequest } from '../thunks/GetCountryRequestThunk';

const CountrySlice = createSlice({
  name: 'country',
  initialState: {
    countryInput: '',
    data: [],
    countryInfo: [],
    isLoading: false,
  },
  reducers: {
    setCountryInput(state, action) {
      state.countryInput = action.payload;
    },
    setCountryInfo(state, action) {
      state.countryInfo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCountryRequest.pending, (state) => {
        //console.log('request is pending');
        state.isLoading = true;
      })
      .addCase(getCountryRequest.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(getCountryRequest.rejected, (state) => {
        state.isLoading = false;
        console.error('Request Error: Request has encountered a problem');
      });
  },
});

export const { setCountryInput, setCountryInfo } = CountrySlice.actions;
export const countryReducer = CountrySlice.reducer;
