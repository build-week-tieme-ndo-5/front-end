import React from "react";

import SignIn from "../Components/LoginForm";

const Login = (props) => {
  return (
    <>
      <SignIn history={props.history}/>
    </>
  );
};
export default Login;
