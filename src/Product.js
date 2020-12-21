import React from "react";
import './Product.css'

function Product() {
  return (
    <div className="Product">
      <div className="Product-description">
        <span className="Product-title">Apple iPad Air</span>
        <span className="Product-price">$1449</span>
        <span className="Product-rating">
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
        </span>
      </div>
      <img src="https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SL1500_.jpg" />
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
