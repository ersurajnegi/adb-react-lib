import { createStore } from "redux";
import { reducer } from "adb-react-lib";
import { composeWithDevTools } from "redux-devtools-extension";
const initialState = {};
const store = createStore(
  reducer,
  initialState as never,
  composeWithDevTools(),
);
// console.log("reducer", reducer);
export default store;
