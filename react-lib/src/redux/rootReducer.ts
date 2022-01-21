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

const list: Reducer<Array<any>, AnyAction> = (
  state: Array<any> | undefined,
  action: any
) => {
  switch (action.type) {
    case "LOAD_LIST": {
      return action?.payload;
    }
    default:
      return [];
  }
};

const rootReducer = combineReducers({
  counter,
  list
});
export default rootReducer;
