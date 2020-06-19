import { ActionType } from "redux-promise-middleware";
import { FETCH_POST, DELETE_POST, UPDATE_POST } from "../actions/actionTypes";
import initialState from "../core/initialState";
import { pendingResult, rejectedResult, successResult } from "./reducerHelpers";

export default (state, action) => {
  state = state || initialState;

  switch (action.type) {
    case `${FETCH_POST}_${ActionType.Pending}`:
      return pendingResult(initialState.post);

    case `${FETCH_POST}_${ActionType.Rejected}`:
      return rejectedResult(initialState.post);

    case `${FETCH_POST}_${ActionType.Fulfilled}`:
      return successResult(action.payload);

    case DELETE_POST:
      return action.payload;
    case UPDATE_POST:
      return action.payload;
    default:
      return state;
  }
};
