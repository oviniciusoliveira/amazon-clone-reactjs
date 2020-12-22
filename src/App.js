import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Cart from "./Cart";
import { BrowserRouter, Switch, Route }  from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/cart">
            <Cart />
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
