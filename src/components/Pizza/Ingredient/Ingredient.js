import React from "react";
import classes from "./Ingredient.css";

const ingredient = props => {
  let ingredients = null;

  switch (props.type) {
    case "base":
      ingredients = <div className={classes.Base}></div>;
      break;
    case "meat":
      ingredients = <div className={classes.Meat}></div>;
      break;
    case "cheese":
      ingredients = <div className={classes.Cheese}></div>;
      break;
    case "salad":
      ingredients = <div className={classes.Salad}></div>;
      break;
    case "bacon":
      ingredients = <div className={classes.Bacon}></div>;
      break;

    default:
      ingredients = null;
      break;
  }
  return ingredients;
};

export default ingredient;
