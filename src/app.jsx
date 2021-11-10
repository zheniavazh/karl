import React from "react";
import "./app.css";
import NavBar from "./components/ui/navBar/navBar";
import { Route, Switch, Redirect } from "react-router-dom";
import Main from "./layouts/main/main";
import Cart from "./layouts/cart/cart";
import Login from "./layouts/login/login";

const App = () => {
  return (
    <div className="app_container">
      <NavBar />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/cart" component={Cart} />
        <Route path="/login" component={Login} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
