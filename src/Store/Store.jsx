import { createStore } from "redux";

import MainReducer from "../Reducers/MainReducer";

const MyStore = createStore(MainReducer);
export default MyStore;
