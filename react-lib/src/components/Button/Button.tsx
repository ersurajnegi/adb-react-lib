import React, { useState, useContext } from "react";
import { useButtonContext } from "../../context/buttonContext";
// import "./Button.css";
// import { useSelector, useDispatch, connect } from "react-redux";
// import State from "../../redux/state";
export interface ButtonProps {
  label: string;
  counter?: number;
}

const Button = (props: ButtonProps) => {
  const { counter, updateCount } = useButtonContext();
  return (
    <>
      <button className="button">
        {props.label} {counter}
      </button>

      <button className="button" onClick={() => updateCount()}>
        Update Counter
      </button>
    </>
  );
};

// const mapStateToProps = function (state: State) {
//   return {
//     counter: state.iceCream.numberOfIceCreams,
//   };
// };

export default Button;

//export default connect(mapStateToProps)(Button);
