import { createSlice } from '@reduxjs/toolkit';
import { getCountryRequest } from '../thunks/GetCountryRequestThunk';

const CountrySlice = createSlice({
  name: 'country',
  initialState: {
    countryInput: '',
    data: [],
    countryInfo: [],
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
      })
      .addCase(getCountryRequest.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.data = action.payload;
      })
      .addCase(getCountryRequest.rejected, (state) => {
        console.error('Request Error: Request has encountered a problem');
      });
  },
});

export const { setCountryInput, setCountryInfo } = CountrySlice.actions;
export const countryReducer = CountrySlice.reducer;
