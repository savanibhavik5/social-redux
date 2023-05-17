import { combineReducers } from "redux";
import PostReducer from "../Reducers/PostReducer";
import postDatas from "../Reducers/PostReducer";

const MainReducer = combineReducers({
  post: PostReducer,
});
export default MainReducer;
