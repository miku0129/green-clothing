import { createSelector } from "reselect";

export const selectToggleCartDropdown = (state) => { 
  console.log("state?", state)
  return state.cart.toggleCartDropdown};
