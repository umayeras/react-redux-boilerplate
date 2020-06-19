import axios from "axios";
import { ActionType } from "redux-promise-middleware";
import { POSTS_URL } from "../core/urls";
import {
  FETCH_POSTS,
  FETCH_POST,
  DELETE_POST,
  CREATE_POST,
  UPDATE_POST,
} from "./actionTypes";

export const fetchPosts = () => async (dispatch) => {
  dispatch({ type: `${FETCH_POSTS}_${ActionType.Pending}` });

  await axios
    .get(`${POSTS_URL}`)
    .then((response) => {
      dispatch({
        type: `${FETCH_POSTS}_${ActionType.Fulfilled}`,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch({ type: `${FETCH_POSTS}_${ActionType.Rejected}`, error: err });
    });
};

export const fetchPost = (id) => async (dispatch) => {
  dispatch({ type: `${FETCH_POST}_${ActionType.Pending}` });

  await axios
    .get(`${POSTS_URL}/${id}`)
    .then((response) => {
      dispatch({
        type: `${FETCH_POST}_${ActionType.Fulfilled}`,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch({ type: `${FETCH_POST}_${ActionType.Rejected}`, error: err });
    });
};

export const createPost = () => async (dispatch) => {
  console.log("create action");
  const response = await axios.post(`${POSTS_URL}`);
  dispatch({
    type: CREATE_POST,
    payload: response.data,
  });
};

export const updatePost = (id) => async (dispatch) => {
  console.log("update action");
  const response = await axios.put(`${POSTS_URL}/${id}`);
  dispatch({
    type: UPDATE_POST,
    payload: response.data,
  });
};

export const deletePost = (id) => async (dispatch) => {
  console.log("delete action");
  const response = await axios.delete(`${POSTS_URL}/${id}`);

  dispatch({
    type: DELETE_POST,
    payload: response.data,
  });
};
