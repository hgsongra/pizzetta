import React, { Component } from "react";
import Pizza from "../../components/Pizza/Pizza";
import BuildControl from "../../components/Pizza/BuildControl/BuildControl";

export class PizzaBuilder extends Component {
  state = {
    ingredients: []
  };

  topingHandler = topping => {
    const oldIngredients = this.state.ingredients;
    const toppingIndex = oldIngredients.findIndex(
      ingredient => ingredient === topping
    );
    if (toppingIndex > -1) {
      oldIngredients.splice(toppingIndex, 1);
    } else {
      oldIngredients.push(topping);
    }
    this.setState({ ingredients: oldIngredients });
  };

  render() {
    return (
      <>
        <Pizza ingredients={this.state.ingredients} />
        <BuildControl
          manageTopping={this.topingHandler}
          ingredients={this.state.ingredients}
        />
      </>
    );
  }
}

export default PizzaBuilder;
