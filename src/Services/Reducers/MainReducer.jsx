import { combineReducers } from "redux";
import PostReducer from "../Reducers/PostReducer";
import commentReducer from "../Reducers/CommentReducer";

const MainReducer = combineReducers({
  post: PostReducer,
  comment: commentReducer,
});
export default MainReducer;
