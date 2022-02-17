import React from "react";
import "./app.css";
import NavBar from "./components/ui/navBar/navBar";
import { Route, Switch, Redirect } from "react-router-dom";
import Main from "./layouts/main/main";
import Cart from "./layouts/cart/cart";
import Login from "./layouts/login/login";
import Footer from "./components/ui/footer/footer";
import LogOut from "./layouts/logout";
import Control from "./layouts/control/control";
import ProtectedRoute from "./components/common/protectedRoute";
import Loader from "./components/ui/hoc/loader";

const App = () => {
    return (
        <Loader>
            <div className="app_container">
                <NavBar />
                <div className="app_main">
                    <Switch>
                        <Route path="/" exact component={Main} />
                        <Route
                            path="/goods"
                            exact
                            render={() => <Redirect to="/" />}
                        />
                        <Route path="/goods/:goodId?" component={Main} />
                        <Route path="/cart" component={Cart} />
                        <ProtectedRoute
                            path="/control/goods/:add?/:goodId?/:edit?"
                            component={Control}
                        />
                        <Route path="/log/:type?" component={Login} />
                        <Route path="/logout" component={LogOut} />
                        <Redirect to="/" />
                    </Switch>
                </div>
                <Footer />
            </div>
        </Loader>
    );
};

export default App;
