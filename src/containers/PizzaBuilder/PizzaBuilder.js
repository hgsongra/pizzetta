import React, { Component } from "react";
import Pizza from "../../components/Pizza/Pizza";
import BuildControl from "../../components/Pizza/BuildControl/BuildControl";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Pizza/OrderSummary/OrderSummary";
import "./PizzaBuilder.css";

const TOPPING_PRICES = {
  meat: 60,
  cheese: 40,
  paneer: 35,
  corn: 30
};

export class PizzaBuilder extends Component {
  state = {
    ingredients: [],
    totalPrice: 120,
    displaySummary: false
  };

  displaySummaryHandler = () => {
    this.setState({ displaySummary: !this.state.displaySummary });
  }

  placeOrderHandler = () => {
    alert('Thanks you for Ordering at Pizzetta!');
  }
  topingHandler = topping => {
    const updatedIngredients = [...this.state.ingredients];
    let newPrice = this.state.totalPrice;
    const toppingIndex = updatedIngredients.findIndex(
      ingredient => ingredient === topping
    );
    if (toppingIndex > -1) {
      updatedIngredients.splice(toppingIndex, 1);
      newPrice -= TOPPING_PRICES[topping];
    } else {
      updatedIngredients.push(topping);
      newPrice += TOPPING_PRICES[topping];
    }
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
  };

  render() {
    return (
      <>
        <Pizza ingredients={this.state.ingredients} />
        <BuildControl
          manageTopping={this.topingHandler}
          ingredients={this.state.ingredients}
          prices={TOPPING_PRICES}
        />
        <div className='displayTotal'>
          Total Price: &#8377;{this.state.totalPrice}
          <button
            onClick={this.displaySummaryHandler}
            className="CheckOut"
            disabled={this.state.ingredients.length > 0 ? null : 'disabled'}>
            Check Out
          </button>
        </div>
        <Modal
          show={this.state.displaySummary}
          modalClose={this.displaySummaryHandler}>
          <OrderSummary
            ingredients={this.state.ingredients}
            toppingList={TOPPING_PRICES}
            totalPrice={this.state.totalPrice}
            cancel={this.displaySummaryHandler}
            placeOrder={this.placeOrderHandler} />
        </Modal>
      </>
    );
  }
}

export default PizzaBuilder;
