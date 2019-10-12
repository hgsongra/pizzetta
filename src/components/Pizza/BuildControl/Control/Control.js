import React from "react";
import "./Control.css";

const Control = props => (
  <div className='Control'>
    <div style={{ textTransform: 'capitalize' }}>
      {props.label} &#8377;{props.price}
    </div>
    <button onClick={props.topping}>{props.isAdded ? "Remove" : "Add"}</button>
  </div>
);

export default Control;
