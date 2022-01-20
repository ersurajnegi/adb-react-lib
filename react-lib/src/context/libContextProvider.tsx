import React from "react";

import { ButtonContextProvider } from "./buttonContext";

/**
 * List of essential context providers that are required to run Peregrine
 *
 * @property {React.Component[]} contextProviders
 */
const contextProviders = [ButtonContextProvider];

const LibContextProvider = ({ children }) => {
  // console.log('inside LIBCONTEXT PROVIDER')
  return contextProviders.reduceRight((memo, ContextProvider) => {
    return <ContextProvider>{memo}</ContextProvider>;
  }, children);
};

export { LibContextProvider };
