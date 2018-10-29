//import postsReducer from "./postsReducer";
import * as reducers from "./postsReducer";
import { combineReducers } from "redux";

export default combineReducers({
  posts: reducers.postsReducer,
  comments: reducers.commentsReducer
});
