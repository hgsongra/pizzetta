import React from 'react'

const OrderSummary = (props) => {
  const ingredientSummary = props.ingredients.map(igk => <li key={igk} style={{ textTransform: 'capitalize' }}>{igk}: {props.toppingList[igk]}</li>);
  return (
    <>
      <h3>Your Order Summary</h3>
      <p>A delicious Pizaa with Your favourite topping(s) below:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>
        Total Amount: {props.totalPrice}
      </p>
      <p>Continue to checkout?
        <button
          className="CheckOut"
          style={{ backgroundColor: 'green', color: 'white' }}
          onClick={props.placeOrder}>
          Place Order
        </button>
        <button
          className="CheckOut"
          style={{ backgroundColor: 'red', color: 'white' }}
          onClick={props.cancel}>
          Cancel
        </button>
      </p>
    </>
  )
}

export default OrderSummary
