import { createSelector } from 'reselect';

export const selectError = createSelector(
  (state) => state.toggle.error,
  (error) => error
);
