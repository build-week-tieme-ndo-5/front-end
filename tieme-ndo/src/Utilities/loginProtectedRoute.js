import React from "react";
import { Route, Redirect } from "react-router-dom";
const PrivateRoute = (props) => {
  const {component: Component, path, ...rest} = props;
  console.log(props)
  if (localStorage.getItem("token")) {
    return (
      <Route path={path}>
        <Component {...rest} />
      </Route>
    );
  } else {
    return <Redirect to="/" />;
  }
};
export default PrivateRoute;



//     path={path}
//     render={props =>
//       localStorage.getItem("token") ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to="/login" />
//       )
//     }
//   />