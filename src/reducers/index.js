import { combineReducers } from "redux";
import PostsReducer from "./postsReducer";
import PostDetailReducer from "./postDetailReducer";

const rootReducer = combineReducers({
  posts: PostsReducer,
  post: PostDetailReducer
});

export default rootReducer;