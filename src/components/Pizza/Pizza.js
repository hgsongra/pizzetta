import React from "react";
import "./Pizza.css";
import Ingredient from "./Ingredient/Ingredient";

const pizza = props => {
  return (
    <div className='Pizza'>
      <Ingredient type='corn' />
      <Ingredient type='cheese' />
      <Ingredient type='paneer' />
      <Ingredient type='meat' />
    </div>
  );
};

export default pizza;
