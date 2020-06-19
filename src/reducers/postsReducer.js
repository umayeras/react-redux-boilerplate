import { ActionType } from "redux-promise-middleware";
import { FETCH_POSTS, CREATE_POST } from "../actions/actionTypes";
import initialState from "../core/initialState";

export default (state, action) => {
  state = state || initialState;

  switch (action.type) {
    case `${FETCH_POSTS}_${ActionType.Pending}`:
      return {
        ...state,
        loading: true,
        error: false,
        data: [],
      };
    case `${FETCH_POSTS}_${ActionType.Rejected}`:
      return {
        ...state,
        error: true,
        loading: false,
        data: [],
      };
    case `${FETCH_POSTS}_${ActionType.Fulfilled}`:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
      };
    case CREATE_POST:
      return action.payload;
    default:
      return state;
  }
};
