import { createSlice } from '@reduxjs/toolkit';

const ToggleSlice = createSlice({
  name: 'toggle',
  initialState: {
    error: false,
    dispTrigger: 'data-none',
  },
  reducers: {
    setError(state, action) {
      if (action.payload !== undefined) {
        state.error = action.payload;
      } else {
        state.error = !state.error;
      }
    },
    setDisplay(state, action) {
      state.dispTrigger = action.payload;
    },
  },
});

export const ToggleReducer = ToggleSlice.reducer;
export const { setError, setLoading, setDisplay } = ToggleSlice.actions;
