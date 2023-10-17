import { configureStore } from '@reduxjs/toolkit';
import { searchBarReducer, setCountryInput } from './slice/SearchBarSlice';

const store = configureStore({
  reducer: {
    searchBar: searchBarReducer,
  },
});

export { store, setCountryInput };
