import { CATEGORIES_ACTION_TYPES } from "./category.types";

const INITIAL_STATE = {
  categoriesMap: null,
};

export const categoriesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
      return {
        ...state,
        categoriesMap: payload,
      };
    default:
      return state;
  }
};
