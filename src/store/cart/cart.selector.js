import { createSelector } from "reselect";

const selectToggleCartDropdownReducer = (state) => state.toggleCartDropdown;

export const selectToggleCartDropdowns = createSelector(
  [selectToggleCartDropdownReducer],
  (state) => !state
);
