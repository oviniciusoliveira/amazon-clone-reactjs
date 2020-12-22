import React from "react";
import "./CartItems.css";

function CartItems() {
  return (
    <div className="CartItems">
      <h1>Shopping Cart</h1>
      <hr />
      <div className="CartItems-items">
        <div className="CartItem">
          <div className="CartItem-image">
            <img
              src="https://m.media-amazon.com/images/I/81zKcC5wJ6L._AC_SL1500_.jpg"
              alt=""
            />
          </div>
          <div className="CartItem-info">
            <div className="CartItem-title">
              MacBook Pro da Apple com chip Apple M1
            </div>
            <div className="CartItem-actions">
                <div className="CartItem-quantity">
                    <select>
                        <option value="1">Qtd: 1</option>
                        <option value="2">Qtd: 2</option>
                        <option value="3">Qtd: 3</option>
                    </select>
                </div>
                <div className="CartItem-delete">
                    Delete
                </div>
            </div>
          </div>
          <div className="CartItem-price">Price</div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
