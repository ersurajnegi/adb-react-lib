import React, { createContext, useContext, useEffect, useMemo } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import State from "../redux/state";

export const updateCount = () => {
  return {
    type: "INCREMENT_COUNTER",
  };
};

const ButtonContext = createContext<any | undefined>(undefined);
const Provider = (props: any) => {
  // console.log("inside buttoncontext PROVIDER");
  const { counter, children, updateCount } = props;
  // console.log('counter :', props.counter);
  const contextValue = { counter, updateCount };

  return (
    <ButtonContext.Provider value={contextValue}>
      {children}
    </ButtonContext.Provider>
  );
};

const mapStateToProps = (state: State) => ({
  counter: state.counter,
});

const mapDispatchToProps = {
  updateCount,
};

const ButtonContextProvider = connect(
  mapStateToProps,
  mapDispatchToProps
)(Provider as any);

const useButtonContext = () => useContext(ButtonContext);

export { ButtonContextProvider, useButtonContext };
// export { ButtonContextProvider };
