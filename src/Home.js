import React, { useEffect, useState } from "react";
import "./Home.css";
import Product from "./Product";
import { db } from "./firebase";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    db.collection('products').onSnapshot((snapshot) => {
      let tempProducts = [];
      snapshot.docs.map((doc) => {
        tempProducts.push({
          id: doc.id,
          product: doc.data(),
        });
      });
      setProducts(tempProducts);
    });
  }, []);

  return (
    <div className="Home">
      <div className="Home-container">
        <div
          className="Home-banner"
          style={{
            backgroundImage:
              "url(https://images-na.ssl-images-amazon.com/images/G/32/Moda/2020/Campanhas/Junho/DiaDosBasicos/552_SL_Diadosbasicos_Tallhero_3000x1200._CB428872673_.jpg)",
          }}
        ></div>
        <div className="Home-content">
          <div className="Home-row">
            {products.map((product) => (
              <Product
                key={product.id}
                title={product.product.title}
                price={product.product.price}
                rating={product.product.rating}
                image={product.product.image}
              />
            ))}
          </div>
          <div className="Home-row">
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
