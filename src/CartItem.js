import React from "react";
import "./CartItem.css";
import { db } from "./firebase";

function cartItem({ id, cartItem }) {
  const deleteItem = () => {
    db.collection("cart-items").doc(id).delete();
  };

  const changeQuantity = (newQuantity) => {
    db.collection("cart-items").doc(id).update({
      quantity: newQuantity,
    });
  };

  let options = [];

  for (let i = 1; i < Math.max(cartItem.quantity + 1, 20); i++) {
    options.push(<option value={i}>Qtd: {i}</option>);
  }

  return (
    <div className="CartItem">
      <div className="CartItem-image">
        <img src={cartItem.image} alt="" />
      </div>
      <div className="CartItem-info">
        <div className="CartItem-title">{cartItem.title}</div>
        <div className="CartItem-actions">
          <div className="CartItem-quantity">
            <select
              onChange={(e) => changeQuantity(parseInt(e.target.value))}
              value={cartItem.quantity}
            >
              {options}
            </select>
          </div>
          <div className="CartItem-delete" onClick={deleteItem}>
            Delete
          </div>
        </div>
      </div>
      <div className="CartItem-price">${cartItem.price}</div>
    </div>
  );
}

export default cartItem;
