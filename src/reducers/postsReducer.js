import { ActionType } from "redux-promise-middleware";
import { FETCH_POSTS, CREATE_POST } from "../actions/actionTypes";
import initialState from "../core/initialState";
import { pendingResult, rejectedResult, successResult } from "./reducerHelpers";

export default (state, action) => {
  state = state || initialState;

  switch (action.type) {
    case `${FETCH_POSTS}_${ActionType.Pending}`:
      return pendingResult(initialState.posts);

    case `${FETCH_POSTS}_${ActionType.Rejected}`:
      return rejectedResult(initialState.posts);

    case `${FETCH_POSTS}_${ActionType.Fulfilled}`:
      return successResult(action.payload);

    case CREATE_POST:
      return action.payload;
    default:
      return state;
  }
};
