import React from "react";
import { Route, Redirect } from "react-router-dom";

const loginPrivateRoute = ({ component: Component, ...rest }) => {
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />;
};
export default loginPrivateRoute;
