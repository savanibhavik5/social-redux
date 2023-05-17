import { combineReducers } from "redux";
import PostReducer from "./PostReducer";
import CommentReducer from "./CommentReducer";

const RootReducer = combineReducers({ PostReducer, CommentReducer });

export default RootReducer;
