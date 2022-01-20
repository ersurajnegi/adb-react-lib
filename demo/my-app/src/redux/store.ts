import { createStore } from "redux";
import { reducer } from "adb-react-lib";
const initialState = {};
const store = createStore(reducer, initialState as never);
// console.log("reducer", reducer);
export default store;
