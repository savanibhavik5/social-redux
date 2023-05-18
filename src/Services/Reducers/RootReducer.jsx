import { combineReducers } from "redux";
import { PostReducer, CommentReducer } from "./Reducer";

import PostWithCommentReducer from "./PostWithCommentReducer";

const RootReducer = combineReducers({
  PostReducer,
  CommentReducer,
  PostWithCommentReducer,
});

export default RootReducer;
