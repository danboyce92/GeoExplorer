import { createSelector } from 'reselect';

export const selectDispTrigger = createSelector(
  (state) => state.toggle.dispTrigger,
  (dispTrigger) => dispTrigger
);
