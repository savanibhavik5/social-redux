import { createStore } from "redux";

import MainReducer from "../Services/Reducers/MainReducer";

const MyStore = createStore(MainReducer);
export default MyStore;
