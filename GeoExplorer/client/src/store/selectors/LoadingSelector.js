import { createSelector } from 'reselect';

export const selectLoading = createSelector(
  (state) => state.toggle.loading,
  (loading) => loading
);
