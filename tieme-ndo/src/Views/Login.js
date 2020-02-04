import React, { useState } from "react";
// import { axiosWithAuth } from '../Utilities/axiosWithAuth';

import SignIn from "../Components/LoginForm";

const Login = (props) => {
  return (
    <>
      <SignIn history={props.history}/>
    </>
  );
};
export default Login;
