import { combineReducers } from "redux";
import PostReducer from "./PostReducer";

const MainReducer = combineReducers({
  post: PostReducer,
});
export default MainReducer;
