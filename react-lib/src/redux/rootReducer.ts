import { Action, AnyAction, combineReducers, Reducer } from "redux";
// import iceCreamReducer from "./icecreams/iceReducer";

const counter: Reducer<number, AnyAction> = (
  state: number | undefined,
  action: Action
) => {
  switch (action.type) {
    case "INCREMENT_COUNTER": {
      return state! + 1;
    }
    default:
      return state || 1000;
  }
};

const rootReducer = combineReducers({
  counter,
});
export default rootReducer;
