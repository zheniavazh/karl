import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../store/users";

const ProtectedRoute = ({ component: Component, children, ...rest }) => {
    const isLoggedIn = useSelector(getIsLoggedIn());

    return (
        <Route
            {...rest}
            render={(props) => {
                if (!isLoggedIn) {
                    return <Redirect to={"/"} />;
                }
                return Component ? <Component {...props} /> : children;
            }}
        />
    );
};
ProtectedRoute.propTypes = {
    component: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    location: PropTypes.object,
};

export default ProtectedRoute;