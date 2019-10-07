import React from "react";
import "./Pizza.css";
import Ingredient from "./Ingredient/Ingredient";

const pizza = props => {
  const allIngredients = props.ingredients.map((ingredient, ind) => (
    <Ingredient key={ingredient + ind} type={ingredient} />
  ));
  const finalIngredients =
    allIngredients.length > 0 ? (
      allIngredients
    ) : (
      <div className='noToppings'>Select Toppings</div>
    );
  return <div className='Pizza'>{finalIngredients}</div>;
};

export default pizza;
