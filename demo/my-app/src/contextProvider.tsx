import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { LibContextProvider } from "adb-react-lib";

import store from "./redux/store";




/**
 * List of context providers that are required to run Venia
 *
 * @property {React.Component[]} contextProviders
 */
const contextProviders = [LibContextProvider];

const ContextProvider = ({ children }) => {
  // console.log("Inside context provider", store.getState());
  return (
    <ReduxProvider store={store}>
      {contextProviders.reduceRight((memo, Provider) => {
        return <Provider >{memo}</Provider>;
      }, children)}
    </ReduxProvider>
  );
};

export default ContextProvider;




// A --> B -->C