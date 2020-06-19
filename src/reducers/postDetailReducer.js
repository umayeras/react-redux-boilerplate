import { ActionType } from "redux-promise-middleware";
import { FETCH_POST, DELETE_POST, UPDATE_POST } from "../actions/actionTypes";
import initialState from "../core/initialState";

export default (state, action) => {
  state = state || initialState;

  switch (action.type) {
    case `${FETCH_POST}_${ActionType.Pending}`:
      return {
        ...state,
        loading: true,
        error: false,
        data: {},
      };
    case `${FETCH_POST}_${ActionType.Rejected}`:
      return {
        ...state,
        error: true,
        loading: false,
        data: {},
      };
    case `${FETCH_POST}_${ActionType.Fulfilled}`:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
      };
    case DELETE_POST:
      return action.payload;
    case UPDATE_POST:
      return action.payload;
    default:
      return state;
  }
};
