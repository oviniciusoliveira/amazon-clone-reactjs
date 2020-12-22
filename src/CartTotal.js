import React from "react";
import "./CartTotal.css";

function CartTotal(props) {
  const getCount = () => {
    let count = 0;
    props.cartItems.forEach((item) => {
      count += item.cartItem.quantity;
    });
    return count;
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    props.cartItems.forEach((item) => {
      totalPrice += item.cartItem.quantity * item.cartItem.price;
    });
    return totalPrice;
  };

  return (
    <div className="CartTotal">
      <h2>
        Subtotal ({getCount()} items): ${getTotalPrice()}
      </h2>
      <button>Proceed to checkout</button>
    </div>
  );
}

export default CartTotal;
