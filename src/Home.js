import React, { useEffect, useState } from "react";
import "./Home.css";
import Product from "./Product";
import { db } from "./firebase";
import Trending from "./Trending";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    db.collection("products").onSnapshot((snapshot) => {
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

  const productProps = (product) => (
    <Product
      key={product.id}
      title={product.product.title}
      price={product.product.price}
      rating={product.product.rating}
      image={product.product.image}
    />
  );

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
          <div className="Home-trending">
            <Trending
              title={"Gaming Accessories"}
              image={
                "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Gaming_1x._SY304_CB432517394_.jpg"
              }
            />
            <Trending
              title={"AmazonBasics"}
              image={
                "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
              }
            />
            <Trending
              title={"Holiday deals"}
              image={
                "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_Dash_HolidayDeals_1x._SY304_CB414581989_.jpg"
              }
            />
            <Trending
              title={"Computers & Accessories"}
              image={
                "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
              }
            />
          </div>
          <div className="Home-row">
            {products.slice(0, 2).map(productProps)}
          </div>
          <div className="Home-row">{products.slice(2).map(productProps)}</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
