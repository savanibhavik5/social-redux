import { combineReducers } from "redux";
import PostReducer from "./PostReducer";
import CommentReducer from "./CommentReducer";
import PostWithCommentReducer from "./PostWithCommentReducer";

const RootReducer = combineReducers({
  PostReducer,
  CommentReducer,
  PostWithCommentReducer,
});

export default RootReducer;
