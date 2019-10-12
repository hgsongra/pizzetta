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
    </>
  )
}

export default OrderSummary
