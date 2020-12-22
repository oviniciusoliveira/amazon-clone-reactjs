import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Cart from "./Cart";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { db } from "./firebase";

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    db.collection("cart-items").onSnapshot((snapshot) => {
      let tempCartItems = [];
      snapshot.docs.forEach((doc) => {
        tempCartItems.push({
          id: doc.id,
          cartItem: doc.data(),
        }); 
      });
      setCartItems(tempCartItems);
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header cartItems={cartItems} />
        <Switch>
          <Route path="/cart">
            <Cart cartItems={cartItems} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
