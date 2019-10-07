import React from "react";
import Control from "./Control/Control";

import "./BuildControl.css";

const BuildControl = props => {
  const controls = ["cheese", "meat", "corn", "paneer"];
  const isToppingAdded = topping => {
    const oldIngredients = props.ingredients;
    const toppingIndex = oldIngredients.findIndex(
      ingredient => ingredient === topping
    );
    if (toppingIndex > -1) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div className='BuildControl'>
      {controls.map((control, ind) => (
        <Control
          key={control + ind}
          label={control}
          topping={() => props.manageTopping(control)}
          isAdded={isToppingAdded(control)}
        />
      ))}
    </div>
  );
};

export default BuildControl;
