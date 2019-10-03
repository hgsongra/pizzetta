import React from "react";
import classes from "./Ingredient.css";
import PropTypes from "prop-types";

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

ingredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default ingredient;
