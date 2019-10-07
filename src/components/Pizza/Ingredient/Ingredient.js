import React from "react";
import "./Ingredient.css";
import PropTypes from "prop-types";

const ingredient = props => {
  let ingredients = null;
  switch (props.type) {
    case "meat":
      ingredients = (
        <>
          <div className='Meat Meat_1'></div>
          <div className='Meat Meat_2'></div>
        </>
      );
      break;
    case "red_paper":
      ingredients = <div className='RedPaper'></div>;
      break;
    case "cheese":
      ingredients = <div className='Cheese'></div>;
      break;
    case "paneer":
      ingredients = (
        <>
          <div className='Paneer Paneer_1'></div>
          <div className='Paneer Paneer_2'></div>
          <div className='Paneer Paneer_3'></div>
        </>
      );
      break;
    case "corn":
      ingredients = (
        <>
          <div className='Corn Corn_1'></div>
          <div className='Corn Corn_2'></div>
          <div className='Corn Corn_3'></div>
          <div className='Corn Corn_4'></div>
          <div className='Corn Corn_5'></div>
        </>
      );
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
