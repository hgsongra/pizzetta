import React, { Component } from "react";
import Pizza from "../../components/Pizza/Pizza";

export class PizzaBuilder extends Component {
  render() {
    return (
      <>
        <Pizza />
        <div>Pizza Controls</div>
      </>
    );
  }
}

export default PizzaBuilder;
