import { createSelector } from 'reselect';

export const selectData = createSelector(
  (state) => state.country.data,
  (data) => ({
    data: data,
  })
);
