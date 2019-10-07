import React from "react";
import "./Control.css";

const Control = props => (
  <div className='Control'>
    <div>
      {props.label.toUpperCase()} &#8377;{props.price}
    </div>
    <button onClick={props.topping}>{props.isAdded ? "Remove" : "Add"}</button>
  </div>
);

export default Control;
