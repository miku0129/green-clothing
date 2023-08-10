import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    //keep this code for a moment
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
      };
    case USER_ACTION_TYPES.SIGN_IN_FAILED:
      return {
        ...state,
        error: payload,
      };
    case USER_ACTION_TYPES.GOOGLE_SIGN_IN_START:
      return {
        ...state,
        currentUser: payload,
      };

    default:
      return state;
  }
};
