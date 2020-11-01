import * as Actions from "./actions";
import initialState from "../store/initialState";

export const UsersReducer = (state = initialState.users, action) => {
  switch (action.types) {
    case Actions.SIGH_IN:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};