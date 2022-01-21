import React, { createContext, useContext, useEffect, useMemo } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import State from "../redux/state";

export const updateCount = () => {
  return {
    type: "INCREMENT_COUNTER",
  };
};

export const loadList = (payload) => {
  return {
    type: "LOAD_LIST",
    payload,
  };
};

const ButtonContext = createContext<any | undefined>(undefined);
const Provider = (props: any) => {
  const { counter, list, children, updateCount, loadList } = props;
  const contextValue = { counter, updateCount, list, loadList };

  return (
    <ButtonContext.Provider value={contextValue}>
      {children}
    </ButtonContext.Provider>
  );
};

const mapStateToProps = (state: State) => ({
  counter: state.counter,
  list: state.list,
});

const mapDispatchToProps = {
  updateCount,
  loadList,
};

const ButtonContextProvider = connect(
  mapStateToProps,
  mapDispatchToProps
)(Provider as any);

const useButtonContext = () => useContext(ButtonContext);

export { ButtonContextProvider, useButtonContext };
// export { ButtonContextProvider };
