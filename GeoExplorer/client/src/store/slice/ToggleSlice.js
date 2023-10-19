import { createSlice } from '@reduxjs/toolkit';

const ToggleSlice = createSlice({
  name: 'toggle',
  initialState: {
    error: false,
    loading: false,
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
    setLoading(state, action) {
      if (action.payload !== undefined) {
        state.loading = action.payload;
      } else {
        state.loading = !state.error;
      }
    },
    setDisplay(state, action) {
      state.dispTrigger = action.payload;
    },
  },
});

export const ToggleReducer = ToggleSlice.reducer;
export const { setError, setLoading, setDisplay } = ToggleSlice.actions;
