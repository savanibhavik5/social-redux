import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import RootReducer from "../Services/Reducers/RootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [ReduxThunk];

const Store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default Store;
