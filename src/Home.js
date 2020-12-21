import React from "react";
import './Home.css'
import Product from './Product'

function Home() {
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
                <Product />
                <Product />
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
