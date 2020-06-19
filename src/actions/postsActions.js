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

export const createPost = (values, callback) => async (dispatch) => {
  const request = axios.post(`${POSTS_URL}`, values).then(() => callback());

  dispatch({
    type: CREATE_POST,
    payload: request,
  });
};

export const updatePost = (id, values, callback) => async (dispatch) => {
  let axiosInstance = axios.create({
    headers: {
      put: {
        "content-type": "application/json; charset=UTF-8",
        body: JSON.stringify(values),
      },
    },
  });

  const request = axiosInstance
    .put(`${POSTS_URL}/${id}`)
    .then(() => callback());

  dispatch({
    type: UPDATE_POST,
    payload: request,
  });
};

export const deletePost = (id, callback) => async (dispatch) => {
  const request = axios
    .delete(`${POSTS_URL}/${id}`)
    .then(() => callback());

  dispatch({
    type: DELETE_POST,
    payload: request,
  });
};
